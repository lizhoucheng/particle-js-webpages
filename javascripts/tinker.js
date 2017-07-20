var Light = 'HIGH';
function D1(){
    var particle = new Particle();
    var id = localStorage.getItem('device_id');
    var token = localStorage.getItem('token');
    
    var fnPr = particle.callFunction({ deviceId: id, name: 'DigitalWrite', argument: 'D7:'+Light, auth: token });

    fnPr.then(
    function(data) {
        console.log('Function called succesfully:', data);
        if(Light=='HIGH')
            Light='LOW';
        else
            Light='HIGH';
    }, function(err) {
    console.log('An error occurred:', err);
    });
}