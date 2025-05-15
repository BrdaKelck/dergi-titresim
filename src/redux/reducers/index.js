import { combineReducers } from "redux";

const initalUidState = {
  uid: ''
};

const addUidReducer = (state =initalUidState, action) => {
  switch (action.type){
    case 'ADD_UID':
      return {...state, uid: action.payload};
    default:
      return state;
  }
}

const rootReducer = combineReducers({
    addUid:addUidReducer
  });
  
  export default rootReducer;

