export const createCategory =(category ={})=>{

    return (dispatch,getState,{getFirestore, getFirebase})=>{
        //make async call to firebase to create project and return the result
        const firestore = new getFirestore(); //instantiate firestore object
        //add data to a collection using the firestore object
        firestore.collection('category').add({
            ...category,
            createdAt: Date.now(),
            updatedAt: Date.now()
        }).then((result)=>{
            //When async call is successful dispatch redux action
            dispatch({type: "CREATE_CATEGORY", payload: category});
        }).catch((err) => {
            //If async call fails, log error to error log or some mechanism
            console.log('logging to error handling mechanism');
        });

    }
    
}