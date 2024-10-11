import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiHj4CGAa9hnNZwJw_d0GtFdQ0CPb0k8I",
  authDomain: "custom-driveways-f4586.firebaseapp.com",
  projectId: "custom-driveways-f4586",
  storageBucket: "custom-driveways-f4586.appspot.com",
  messagingSenderId: "879215944137",
  appId: "1:879215944137:web:c98f8d8d3b74e774f88818",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
