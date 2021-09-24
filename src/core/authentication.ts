import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Authentication {
    public login() {}
    public logout() {}
    public register(email: string, password: string) {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                // ...
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                console.error(error);
            });
    }
}