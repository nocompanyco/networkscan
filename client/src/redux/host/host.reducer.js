import {hostActionType} from './host.types'



const INITIAL_STATE={
  hostDevices:[]
}

const hostReducer =(state =INITIAL_STATE, action)=>{
switch(action.type){
  case hostActionType.SET_HOSTS_DEVICES:
  return{
    ...state,
    hostDevices:action.payload
  }
  default:
    return state
}

}

export default hostReducer