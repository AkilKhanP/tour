import Mytrips from "../components/mytrips/Mytrips";


const initialState =[];
export const getFieledValues = (state=initialState,action)=>{
        switch(action.type){
        case "getInputValue" : 
        const {id,data}=action.payload
        return  ([...state,data])
        case "deletInputValue" :
            const {delet,i}=action.payload 
        const del = delet.filter((elem,j)=>{return j !== i})
        return [...state,data,del]
    default: return state
}
}


const upinitialState ='';
export const updateFieledValues = (state=upinitialState,action)=>{
        switch(action.type){
        case "updateInputValue" : 
        const {updata}=action.payload
        return  (updata)
        
    default: return state
}
}


// const delinitialState =[];
// export const deletFieledValues = (state=delinitialState,action)=>{
//     switch(action.type){
//         case "deletInputValue" : 
//         const {delet,i}=action.payload
//         const del = delet.filter((elem,j)=>{return j !== i})
//         return [...state,del]
        
//     default: return state
// }
// }
