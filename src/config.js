import firebase from "firebase/app";
import 'firebase/firestore';


// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBvZUzNvllfCYKT-IgzBwOvkewvBcFam6M",
    authDomain: "codetrainproject.firebaseapp.com",
    databaseURL: "https://codetrainproject.firebaseio.com",
    projectId: "codetrainproject",
    storageBucket: "codetrainproject.appspot.com",
    messagingSenderId: "276761464440",
    appId: "1:276761464440:web:7e8742a5108b0c3cb5678d"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;