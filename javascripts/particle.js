var token;
var particle = new Particle();

function login(){
    
    particle.login({ username: document.getElementById("username").value, password: document.getElementById("password").value })
        .then(function(result) {
            token = result.body.access_token;
            console.log('Your access token', result.body.access_token);
            localStorage.setItem("token",token);
            window.location = "device_list.html";
    }, function(err) {
            console.error(err);
    });
}

function showDevice(){
    token = localStorage.getItem("token");
    //document.getElementById("token").innerHTML = localStorage.getItem("token");
    var devicesPr = particle.listDevices({ auth: token });
    devicesPr.then(
      function(devices){
        console.log('Devices: ', devices);
        document.getElementById("name").innerHTML=devices.body[0].name;
        document.getElementById("connected").innerHTML=devices.body[0].connected;
        document.getElementById("device_id").innerHTML=devices.body[0].id;
        document.getElementById("status").innerHTML=devices.body[0].status;
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );
}

function goTinker(){
    window.location = "tinker.html"
}