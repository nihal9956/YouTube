import { searchChannel, signInUser } from "../ActionType/ActionType"

const initialState={

    user:null,
    channelDetailes:[],
    channelName:null
}

const reducer=(state=initialState,action)=>{

    if(action.type===signInUser){
        return{
            ...state,
            user:action.user
        }
    }else if(searchChannel){

        return{
            ...state,
            channelDetailes:action.channelDetailes,
          
        }

    }
    return{
        ...state
    }
}

export default reducer

