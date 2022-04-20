import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
import { } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js"
import { getStorage, ref } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-storage.js"

// Configuración del aplicativo web
const firebaseConfig = {
  apiKey: "AIzaSyBIHcch1JI63VnEidN2Tdh78R-rpidU-Oc",
  authDomain: "comentarios-usuarios-danse1434.firebaseapp.com",
  databaseURL: "https://comentarios-usuarios-danse1434.firebaseio.com",
  projectId: "comentarios-usuarios-danse1434",
  storageBucket: "comentarios-usuarios-danse1434.appspot.com",
  messagingSenderId: "702148749903",
  appId: "1:702148749903:web:5e66ee5f4227c85cf3d83a",
  measurementId: "G-1SDD3JKL1G"
};
// Initialize Firebase

const app = initializeApp(firebaseConfig);

const storage = getStorage(app);
const pathReference = ref(storage, 'gs://comentarios-usuarios-danse1434.appspot.com/Lixoft Spring School 2022 PKanalix Cert 63 - Daniel Sebastián Parra González.pdf');

// Create a reference from a Google Cloud Storage URI
// const gsReference = ref(storage, 'gs://bucket/images/stars.jpg');

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
// const httpsReference = ref(storage, 'https://firebasestorage.googleapis.com/b/bucket/o/images%20stars.jpg');  