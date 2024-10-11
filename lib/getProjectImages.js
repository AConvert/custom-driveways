import { db } from "./firebase";
import { collection, getDocs } from "firebase/firestore";

export const getProjectImages = async () => {
  try {
    const gallerySnapshot = await getDocs(collection(db, "gallery"));
    const galleryImages = gallerySnapshot.docs.map((doc) => doc.data());

    return galleryImages;
  } catch (error) {
    console.log("This is an error:", error);
  }
};
