const response = require("../../components/response.js");
const service = require("./service");
const { hashIterations, hashLength } = require("../../components/constants");
const { Validator } = require("node-input-validator");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// const sms = require('../../components/sms.js') ;

class AuthClass {
  constructor() {
    this.registerValidations = {
      name: "required|minLength:2",
      email: "required|email",
      password: "required",
      phone: "required|digits:10",
    };

    this.loginValidations = {
      name: "minLength:2",
      password: "required",
      email: "required|email",
    };
  }

  /**
   *@register
   * its a function for new registeration of the user
   * @param | req | object | it is express request object
   * @param | res | object | it is express response object
   **/
  async register(req, res) {
    // return sms.generateOTP(otp).then(() => {
    //     let responseUser = {
    //         "user": {
    //             "_id": "user",
    //             "username": "user",
    //             "email": "user",
    //             "token": "token"
    //         }
    //     }
    //     return response(res, responseUser, "Success", 200);
    // }).catch((err) => {
    //     return response(res, { message: 'User registered however OTP sending failed' }, "Error", 422);
    // })

    const validate = new Validator(req.body, this.registerValidations);
    let entity = req.body;
    // let matched = await validate.check();
    // if (!matched) {
    //     return response(res, validate.errors, "Error", 500);
    // }
    let exist = await service.getUser({
      $or: [{ email: entity.email }, { phone: entity.phone }],
      deleted: false,
    });
    console.log("exist", exist);
    if (exist) {
      console.log("hashIterations, hashLength", hashIterations, hashLength);
      return response(res, { message: "User Exist" }, "Error", 500);
    } else {
      console.log("hashIterations, hashLength1", hashIterations, hashLength);
      entity.salt = crypto.randomBytes(16).toString("hex");
      console.log("hashIterations, hashLength", hashIterations, hashLength);
      entity.password = crypto
        .pbkdf2Sync(
          entity.password,
          entity.salt,
          hashIterations,
          hashLength,
          `sha512`
        )
        .toString(`hex`);
      entity.createdAt = new Date();
      entity.otp = Math.floor(1000 + Math.random() * 9000);
      let token = this.generateJWT(entity);
      console.log("token", token);
      entity.isLoggedIn=true;
      let user = await service.registerUser(entity);
      console.log(user);
      if (!user) {
        return response(res, null, "Failed", 500);
      }
      return response(res, user, "Success", 200);
    }
  }

  /**
   *@login
   * its a function to check the login credentials of the user
   * @param | req | object | it is express request object
   * @param | res | object | it is express response object
   **/
  

  async login(req, res) {
    const validate = new Validator(req.body, this.loginValidations);
    const entity = req.body;
    //    console.log(entity);
    const matched = await validate.check();
    if (!matched) {
      return response(res, validate.errors, "Error", 422);
    }
    const exist = await service.getUser({
      email: entity.email,
      deleted: false,
    });
    console.log("this is exist", exist);
    if (!exist)
      return response(
        res,
        { message: "Email or password is invalid!" },
        "Error",
        422
      );
    const verified = await service.getUser({
      $or: [
        { email: entity.email },
        { name: entity.name },
        { password: entity.password },
      ],
      isVerified: true,
    });
    console.log("This is vrified", verified);
    if (!verified) {
      return response(res, { message: "User is not verified" }, "Error", 422);
    } else {
      let token = this.generateJWT(verified);
      let password = entity.password;
      const passHash = crypto
        .pbkdf2Sync(
          password,
          verified.salt,
          hashIterations,
          hashLength,
          `sha512`
        )
        .toString(`hex`);
      console.log("This is pashash", passHash);
      if (verified.password === passHash) {
        const responseUser = {
          user: {
            _id: verified._id,
            username: verified.username,
            email: verified.email,
            token: token,
          },
        };
        let conditions = { _id: verified._id };
        let update = {
          access_token: token,
          isLoggedIn: true,
          loggedInTime: new Date(),
        };
        let updateUser = await service.updateUser(conditions, update);
        console.log("This is Update",updateUser);
        if (!updateUser) {
          return response(
            res,
            { message: "Error in login. Please try after cleaning cache" },
            "Error",
            422
          );
        } else {
          return response(res, responseUser, "Success", 200);
        }
      } else {
        return response(
          res,
          { message: "Password is incorrect. Please try again" },
          "Error",
          422
        );
      }
    }
  }
  
  /**
   *@logout
   * its a function to check the login credentials of the user
   * @param | req | object | it is express request object
   * @param | res | object | it is express response object
   **/
   async logout(req, res) {
    const validate = new Validator(req.body, this.logoutValidations);
    let matched = await validate.check();

    if (!matched) {
      return response(res, validate.errors, "Error", 422);
    }


   



    
    let conditions =  req.body._id
    let update = {
      access_token: "",
      isLoggedIn: false,
      lastActivityTime: new Date(),
    };
    let updateUser = await service.updateUser(conditions, update);

    if (!updateUser) {
        return response(
            res,
            { message: "Error in logout. Please try again." },
            "Error",
            422
            );
        } else {
            return response(
                res,
                { message: "Logged out successfully." },
                "Success",
                200
                );
            }
        }

  /**
   *@generateJWT
   * its a function to generate the JWT token for newly registered user
   * @param | user | object | it is new created user object
   **/
  generateJWT(user) {
    const today = new Date();
    const exp = new Date(today);
    exp.setDate(today.getDate() + 60);
    let token = jwt.sign(
      {
        id: user.email,
        username: user.username,
        exp: Math.floor(exp.getTime() / 1000),
      },
      process.env.JWT_SECRET
    );
    return token;
  }
}



module.exports = new AuthClass();
