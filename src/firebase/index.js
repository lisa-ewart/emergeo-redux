import * as firebase from 'firebase';

// const config = {
//     apiKey: "AIzaSyC0eVfyQE_wiC-mZ_bfpJdjlax_xJ8Tv_E",
//     authDomain: "emergeo-4496e.firebaseapp.com",
//     databaseURL: "https://emergeo-4496e.firebaseio.com",
//     projectId: "emergeo-4496e",
//     storageBucket: "emergeo-4496e.appspot.com",
//     messagingSenderId: "613936575014"
// };


const config = {
    apiKey: "AIzaSyDhElISB_avWU8yuCgA1-Qf_c3xQdlRUBM",
    databaseURL: "https://geotest-30cea.firebaseio.com",
};



export const app = firebase.initializeApp(config);

export const auth = firebase.auth();

export const database = firebase.database();

export const storage = firebase.storage();