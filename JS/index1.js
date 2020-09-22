var objPeople = [
    {
        username: 'danse1434@hotmail.com',
        password: 'codify'
    }
]


bootstrap_alert = function(){};
bootstrap_alert.warning = function(message) {
    $('#alert_placeholder').html('<div class="alert alert-danger mt-3"><a class="close" data-dismiss="alert">×</a><span>'+message+'</span></div>')
}

function getInfo() {
    var username = document.getElementById('inputEmail').value;
    var password = document.getElementById('password').value;
    // console.log('Eres el usuario ' + username + ' y tu contraseña es ' + password);
    for (let i = 0; i < objPeople.length; i++) {
        if ((username == objPeople[i].username) && 
            (password == objPeople[i].password)) {
            console.log(username + ' está autorizado')            
            document.getElementById('inputEmail').value = ''; 
            document.getElementById('password').value = '';
            return
        } 
    
    // alert('Usuario ingresado incorrecto');
    bootstrap_alert.warning('Usuario o contraseña incorrectos');
    document.getElementById('inputEmail').value = ''; 
    document.getElementById('password').value = '';
    console.log('Usuario ingresado incorrecto');
    }


}