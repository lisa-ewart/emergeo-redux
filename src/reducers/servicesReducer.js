import {FETCH_SERVICES} from '../actions/getServicesAction';

export default function (state = {}, action){
	switch(action.type){
		case FETCH_SERVICES:
			return action.payload;
		default:
			return state;
	}
}