import { GoogleAuthProvider, getAuth } from "firebase/auth";
import app from "./firebase.config";

export const googleAuth = new GoogleAuthProvider();

export const auth = getAuth(app)