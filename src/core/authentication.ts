import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export class Authentication {
    public login() {}
    public logout() {}
    public register(email: string, password: string) {
        const auth = getAuth();
        return createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
                return user;
            })
            .catch((error) => {
                console.error(error);
                return error;
            });
    }
}