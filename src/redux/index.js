import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from "redux-thunk";
import categoryReducer from "../redux/reducers/categoryReducer";
//new imports
import {getFirebase,reactReduxFirebase} from "react-redux-firebase";
import {getFirestore, reduxFirestore, firestoreReducer} from "redux-firestore";
import configObj from "../config";

//Allows as to combine multiple reducers and pass it to the store
const combinedReducers = combineReducers({
    category: categoryReducer,
    firestore: firestoreReducer,
});

//sets initial states of our application
const InitialStates = {
    category: []
};


//create a redux store
const reduxStore = createStore(
    combinedReducers,
    InitialStates, 
    //NB: changes here
    compose ( 
        applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
        reduxFirestore(configObj),
        reactReduxFirebase(configObj)
    )
);

export default reduxStore;