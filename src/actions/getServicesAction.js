import {database} from '../firebase';
export const FETCH_SERVICES = 'fetch_services';

export function getServices() {
	return dispatch => {
		database.ref('Services/').on('value', data =>{
			dispatch({
				type:FETCH_SERVICES,
				payload: data.val()
			})
		})
	}
}