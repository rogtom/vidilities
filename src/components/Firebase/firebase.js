import app from 'firebase/app';



const config = {
    apiKey: "AIzaSyBDyf16k9CwO-qEbYPHYXFdBeIlF6wyaPA",
    authDomain: "vidilities.firebaseapp.com",
    databaseURL: "https://vidilities.firebaseio.com",
    projectId: "vidilities",
    storageBucket: "vidilities.appspot.com",
    messagingSenderId: "583205154666",
    appId: "1:583205154666:web:f814c98631eacac8c93f13",
    measurementId: "G-W60WHJBXP0"
};

class Firebase {
  constructor() {
    app.initializeApp(config);
  }
}

export default Firebase;
