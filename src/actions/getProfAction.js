import {database, auth} from '../firebase'
import App from '../../App';

export const FETCH_PROFILE = 'fetch_profile'

export function getProfile() {
    const userId = auth.currentUser.uid
    return dispatch => {
    database.ref().child('Users/' + userId).on('value', data =>{
        dispatch({
            type: FETCH_PROFILE,
            payload: data.val()
            })
        })
    }
}