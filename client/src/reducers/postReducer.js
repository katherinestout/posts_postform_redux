import {FETCH_POSTS, NEW_POST} from '../actions/types';
//items= posts that come in from action
//item= post that we add and we get the response back
const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        default:
            return state;
    }
}