import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDKkfA_mpSlEBgaWpgv4Bz-mvcDwTaQi_g",
  authDomain: "catch-of-the-day-greybutton.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-greybutton.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
