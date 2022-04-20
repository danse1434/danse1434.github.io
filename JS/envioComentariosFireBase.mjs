import {initializeApp} from "https://www.gstatic.com/firebasejs/9.6.10/firebase-app.js"
import { } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-analytics.js"
import { getDatabase, ref, set, push, child, update } from "https://www.gstatic.com/firebasejs/9.6.10/firebase-database.js"

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

$('#testForm').submit(function (e) {
  e.preventDefault();

  // Base de datos
  const database1 = getDatabase(app);

  const mensajeDato = {
    name: $('.name').val(),
    email: $('.email').val(),
    comments: $('.comments').val()
  }

  const nuevaClave = push(child(ref(database1), 'REGISTRO')).key;
  const actualizaciones = {}

  actualizaciones['/REGISTRO/' + nuevaClave] = mensajeDato;

  update(ref(database1), actualizaciones)

  $('.success-message').show();
  $('#testForm')[0].reset();
});
