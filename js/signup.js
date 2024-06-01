var userName = document.getElementById('userName');
var userEmail = document.getElementById('userEmail');
var userPassword = document.getElementById('userPassword');
var signUp = document.getElementById('signUp');
var form = document.getElementById('form');
var alert = document.querySelector('.alert');


var usersList = [];

form.addEventListener('submit', function (e) {
    e.preventDefault();

});
signUp.addEventListener('click', function () {
    addUser();
});
function validationInputs() {
    if (userName.value == '' || userEmail.value == '' || userPassword.value == '') {
        console.log('All inputs is required');
        alert.style.color = '#DC3545';
        alert.innerHTML = "All inputs is required";
        return false;

    } else if (!validationRegex(userName) || !validationRegex(userEmail) || !validationRegex(userPassword)) {
        console.log('Name , Email Or Password Invalid');
        alert.style.color = '#DC3545';
        alert.innerHTML = "Name , Email Or Password Invalid";
        return false;

    } else if (validationRegex(userName) && validationRegex(userEmail) && validationRegex(userPassword)) {

        alert.style.color = 'green';
        alert.innerHTML = "Success";
        return true;

    }
}
function validationRegex(element) {
    var regex = {
        userName: /^[A-Za-z0-9_-]{3,15}$/,
        userEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
        userPassword: /^[A-Za-z0-9_-]{6,15}$/
    }
    if (regex[element.id].test(element.value) == true) {
        return true;
    } else {
        return false;
    }

}

function addUser() {
    var user = {
        uName: userName.value,
        uEmail: userEmail.value,
        uPassword: userPassword.value
    }
    if (localStorage.getItem('users') == null) {
        if (validationInputs()) {
            usersList.push(user);
            localStorage.setItem('users', JSON.stringify(usersList));
        } else {
            return false;
        }
    } else {
        if (validationInputs()) {
             usersList = JSON.parse(localStorage.getItem('users'));
            for (var i = 0; i < usersList.length; i++) {
                if (usersList[i].uEmail == userEmail.value) {
                    console.log('emailExist');
                    alert.style.color = '#DC3545';
                    alert.innerHTML = "Email already exist";
                    return false;
                }
            }
            usersList.push(user);
            localStorage.setItem('users', JSON.stringify(usersList));
        } else {
            return false;
        }
    }


}

