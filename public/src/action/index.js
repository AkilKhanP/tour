export const getInputValue =(data)=>{
    return{
        type : "getInputValue",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}

export const updateInputValue =(updata)=>{
    return{
        type : "updateInputValue",
        payload:{
            
            updata:updata
        }
    }
}

export const deletInputValue =(delet,i)=>{
    return{
        type : "deletInputValue",
        payload:{
            
            delet:delet,
            i:i
        }
    }
}
