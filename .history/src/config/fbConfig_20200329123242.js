import {firebase} from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
apiKey: "AIzaSyC3GzlUuzic0YphMx2sICSdgdQp4ipSRb8",
authDomain: "react-marioplan-f0a28.firebaseapp.com",
databaseURL: "https://react-marioplan-f0a28.firebaseio.com",
projectId: "react-marioplan-f0a28",
storageBucket: "react-marioplan-f0a28.appspot.com",
messagingSenderId: "523902875004",
appId: "1:523902875004:web:c82f54cafc4770340ca0f9"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore.settings({timestampsInSnapshots:true});

export default firebase;