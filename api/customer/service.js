'use strict';
const model = require('../../models');
const authClass = require('./index');
const User = model.users;
class AuthService {
    /**
	*@CheckUserExist
    * its a function fetch user's data by its username or email or phone number
    * @param | username | String | it should be username
    * @param | email | String | it should be email
    * @param | phoneNumber | Number | it should be phone number
	**/

    

    async getUser(condition) { 
        
       return User.findOne((condition)); 
       
              
    //    return query;
    }

    // async CheckLoginUserExist(condition) { 
        
    //     return User.findOne({ $or: [{ condition: condition }]}); 
        
               
    //  //    return query;
    //  }

  

    /**
	*@registerUser
    * its a function fetch user's data by its username or email or phone number
    * @param | user | Object | User object 
	**/
    async registerUser(user) {
     return   User.create(user);
    }

    /**
	*@CheckUserVerified
    * its a function to verify if user's details by checking the isVerified flag value is true or false 
    * @param | user | Object | User object 
	**/


    /**
	*@updateUser
    * its a function to update the value
    * @param  | conditions | Object | conditions json object on which data need to be updated
    * @param  | update | Object | update value of the object
	**/
    updateUser(conditions, update) {
        console.log("Condtion",conditions);
        console.log("Udatesecond",update);
        return User.findOneAndUpdate(conditions,update );
    }
   

}
module.exports = new AuthService();
