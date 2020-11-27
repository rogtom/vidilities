import app from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore'



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

    this.auth = app.auth();
    this.db = app.firestore();

  }

  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        //Once the user creation has happened successfully, we can add the currentUser into firestore
        //with the appropriate details.
        this.db.collection('users').doc(this.auth.currentUser.uid)
          .set({
          })
          //ensure we catch any errors at this stage to advise us if something does go wrong
          .catch(error => {
            console.log('Something went wrong with added user to firestore: ', error);
          })
      });


  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password =>
    this.auth.currentUser.updatePassword(password);

  // *** Firestore API ***


  addToUserFavorite = (collection, film ) =>
    this.db.collection(collection).doc(this.auth.currentUser.uid).set(film)


  getUserFavorites =  () => {
    this.db.collection("users").doc(this.auth.currentUser.uid).get().then(function(doc) {
      if (doc.exists) {
        console.log("Document data:", doc.data());
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    }).catch(function(error) {
      console.log("Error getting document:", error);
    });

  }


}

export default Firebase;
