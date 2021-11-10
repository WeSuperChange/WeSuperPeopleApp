import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, storage, db } from '../firebase/config'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react';
import { useAuthContext } from "./useAuthContext";
import { doc, setDoc } from "firebase/firestore";


export const useSignup = () => {
    const [error, setError] = useState(null);
    const { dispatch } = useAuthContext()
    const signup = (email, password, displayName, avatar) => {
        setError(null)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // avatars/h5R6UUhiYoZUMHYGTbnkCm54Zav1/s-l400.jpeg
                const uploadPath = `avatars/${user.uid}/${avatar.name}`
                const imagesRef = ref(storage, uploadPath);
                uploadBytes(imagesRef, avatar).then((snapshot) => {
                    //console.log(snapshot)
                    //console.log('Uploaded a blob or file!');
                    getDownloadURL(ref(storage, imagesRef))
                        .then((url) => {
                            console.log(url)
                            updateProfile(user, {
                                displayName: displayName, photoURL: url
                            }).then(() => {
                                //Create collection and document
                                setDoc(doc(db, "users", user.uid), {
                                    email: user.email,
                                    displayName: displayName,
                                    photoURL: url,
                                    online: true
                                }).then(() => {
                                    console.log('user add to the collection users');
                                })
                                // Profile updated!
                                dispatch({ type: 'LOGIN', payload: user })
                            }).catch((error) => {
                                console.log(error)
                            });
                        })
                        .catch((error) => {
                            // Handle any errors
                            console.log(error)
                        });
                }).catch((error) => {
                    console.log(error)
                });



            })
            .catch((error) => {
                setError(error.message)
            });
    }
    return { error, signup }
}