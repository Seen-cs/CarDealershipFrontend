import { USER_LOGIN,USER_LOGOUT } from "../actions/AuthAction";
import { authItem } from "../initialValues/AuthItem";

const initialState = {
    authItem:authItem
}
export default function AuthReducer(state=initialState,{type,payload}) {
    switch (type) {
        case USER_LOGIN:
            return{
                ...state,
                authItem:[...[{loggedIn:true,user:payload}]]
            }
            // let user = state.authItem.find(u=>u.user.id===payload.id)
            // if(user){
            //     return{
            //         ...state
            //     };
            // }else {
            //     return{
            //         ...state,
            //         authItem:[{loggedIn:true,user:{payload}}]
            //     };
            // }
        case USER_LOGOUT:
            return{
                ...state,
                authItem:[{loggedIn:false, user:{userId:0, userType:0}}]
            };
    
        default:
            return state;
    }
}
