var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');

var login = document.getElementById('login');
var form = document.getElementById('form');
var alert = document.querySelector('.alert');


var usersList = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

});
login.addEventListener('click', function () {
    checkExist();
});

if (localStorage.getItem('users') != null) {
    usersList = JSON.parse(localStorage.getItem('users'));
}
console.log(usersList);

var naame;

function checkExist() {

    var pass = userPassword.value;
    var email = userEmail.value;
    if (email == '' || pass == '') {
        alert.style.color = '#DC3545';
        alert.innerHTML = 'All inputs is required';
        return false;
    }else {
        for (var i = 0; i < usersList.length; i++) {
            if (usersList[i].uEmail == email && usersList[i].uPassword == pass ){
                alert.innerHTML = "";
                naame = usersList[i].uName;
                console.log(naame);
                localStorage.setItem('naam',JSON.stringify(naame));
                login.setAttribute('href','home.html');
                break;
               
            }else{
                alert.innerHTML = "Incorrect email Or password ";
                login.removeAttribute('href')
            }
        }
    }

}
