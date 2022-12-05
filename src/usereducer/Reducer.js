const reducer1=(state,action)=>{
    switch(action.type){
       case "Change_Handler":
           return{
               ...state,
               [action.field]:action.payload,
           };
           default :return state;
    }
}
export default reducer1