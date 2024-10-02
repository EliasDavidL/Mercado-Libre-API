
import firebase from "../Config/firebase"

export async function newsUs(data){
    const newUser = await firebase
    .auth()
    .createUserWithEmailAndPassword(data.email, data.pass);
    console.log(newUser)
    if(newUser.user.uid){
        const document = await firebase.firestore().collection("Usuarios").add({
            username : data.usuario,
            name : data.nombre,
            userId: newUser.user.uid,
        })
        return document
    }
}

export async function loginUser(data){
    const userlogin = await firebase
    .auth()
    .signInWithEmailAndPassword(data.email, data.pass);
    return userlogin
}