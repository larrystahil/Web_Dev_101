var para = document.querySelector('p');
console.log(para);
function password(){
    var password = document.getElementById('psswd');
    var conf_password = document.getElementById('confpsswd');
    //console.log(password, conf_password);

    if ( password  == conf_password) {
        alert('You\'re Welcome :) :) :)') ;   
    } else {
        alert(password +'Your password isn\'t the same :( :( :(');
    };
}