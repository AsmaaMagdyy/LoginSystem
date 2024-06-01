
if (localStorage.getItem('users')==null) {
    location='index.html';
}else{
    var naame =  usersList = JSON.parse(localStorage.getItem('naam'));
    var welcome = document.getElementById('welcome');
    welcome.innerHTML=`Welcome ${naame} `;
}

