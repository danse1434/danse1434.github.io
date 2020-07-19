  // Your web app's Firebase configuration
  var firebaseConfig = {
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
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

//Reference for form collection(3)
let formMessage = firebase.database().ref('REGISTER');

$('#testForm').submit(function(e) {
  e.preventDefault();

  var newMessageRef = formMessage.push();
  newMessageRef.set({
      name: $('.name').val(),
      email: $('.email').val(),
      comments: $('.comments').val()
  });

  $('.success-message').show();
  $('#testForm')[0].reset();
});

/*

document.getElementById("test-form").addEventListener('submit-form', formSubmit);

/*Subir formulario
function formSubmit(e) {
  e.preventDefault();
  let name     = document.querySelector('#name').value;
  let email    = document.querySelector('#email').value;
  let comments = document.querySelector('#comments').value;
}

sendMessage(name, email, comments);
//Show Alert Message
// document.querySelector('.alert').style.display = 'block';
 //Hide Alert Message After Seven Seconds
 setTimeout(function() {
   document.querySelector('.alert').style.display = 'none';
 }, 7000);
 
 document.getElementById("test-form").reset();

//Send Message to Firebase(4)
function sendMessage(name, email, comments) {
  let newFormMessage = formMessage.push();
  newFormMessage.set({
    name: name,
    email: email,
    comments: comments
  });

}
*/