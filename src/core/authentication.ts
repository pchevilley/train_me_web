import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


export class Authentication {
    public login(email: string, password: string) {
        const auth = getAuth();

        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => userCredential.user)
            .catch((error) => {
                return error;
            });
    }

    public logout() {}

    public register(email: string, password: string) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => userCredential.user)
            .catch((error) => {
                console.error(error);
                return error;
            });
    }
}