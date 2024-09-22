import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCAYoQVVg7WKzH1hKlkN28jGxnjkCOQh1Q",
  authDomain: "github-clone-98775.firebaseapp.com",
  projectId: "github-clone-98775",
  storageBucket: "github-clone-98775.appspot.com",
  messagingSenderId: "675853525386",
  appId: "1:675853525386:web:a03d5742ffb028921ca873",
};

const app = initializeApp(firebaseConfig);

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// Initialize Firebase Auth provider
const provider = new GoogleAuthProvider();

// whenever a user interacts with the provider, we force them to select an account
provider.setCustomParameters({
  prompt: "select_account ",
});
export const auth = getAuth(firebaseApp);
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
