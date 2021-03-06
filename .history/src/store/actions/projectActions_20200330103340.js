
export const createProject = (project) =>
{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        const firestore = getFirestore();
        firestore.collection('Projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName:profile.lastName,
            authorId:authorId,
            createdAt: new Date()
        }).then(()=>{
            dispatch({type:"CREATE_PROJECT",project})
        }).catch(error => dispatch({type:'CREATE_PROJECT_ERROR',error}));
    }
}