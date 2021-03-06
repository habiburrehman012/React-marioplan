
export const createProject = (project) =>
{
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        // make async call to database
        const firestore = getFirestore();
        firestore.collection('projects').add({
            ...project,
            authorFirstName: 'Habib',
            authorLastName:'Ur Rehman',
            authorId:12345,
            createdAt: new Date()
        });
        dispatch({type:"CREATE_PROJECT",project})
    }
}