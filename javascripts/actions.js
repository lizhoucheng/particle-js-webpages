var particle = new Particle();
var id = localStorage.getItem('device_id');
var token = localStorage.getItem('token');
var connected = localStorage.getItem('device_connected');

/*function Rename(){
    var newName = prompt('Enter a new name: ','your name here');
    
    particle.renameDevice({deviceId:id, name:newName, auth:token}).then(function(data){
        console.log('Device renamed successfully:', data);
        alert('Done');
        location.reload();
    },function(err){
        console.log('An error occurred while renameing device: ',err);
        alert('errors');
    });
}*/


$(window).load(function(){<!--   w  w  w . j  a v a2  s. co m-->
//save the selector so you don't have to do the lookup everytime
$dropdown = $('#contextMenu');
                          
    token = localStorage.getItem('token');
    //document.getElementById('token').innerHTML = localStorage.getItem('token');
    var devicesPr = particle.listDevices({ auth: token });
    devicesPr.then(
      function(devices){
        console.log('Devices: ', devices);
        document.getElementById('name1').innerHTML=devices.body[0].name;
        document.getElementById('connected1').innerHTML=devices.body[0].connected;
        document.getElementById('id1').innerHTML=devices.body[0].id;
        document.getElementById('status1').innerHTML=devices.body[0].status;
      },
      function(err) {
        console.log('List devices call failed: ', err);
      }
    );
    
                          
$('.actionButton').click(function() {
    //get row ID
    var id = $(this)
    .closest('tr')
    .find('.id')
    .html();
    localStorage.setItem('device_id',id);
    //get status of being connected
    var connected = $(this)
    .closest('tr')
    .find('.connected')
    .html();
    localStorage.setItem('device_connected',connected);
    //move dropdown menu
    $(this).after($dropdown);
    //update links
    //$dropdown.find('.Tinker').attr('href', '/transaction/pay?id='+id);
    //$dropdown.find('.delLink').attr('href', '/transaction/delete?id='+id);
    //show dropdown
    $(this).dropdown();
});

$('.actionButton').on('tap',function() {
    //get row ID
    var id = $(this)
    .closest('tr')
    .find('.id')
    .html();
    localStorage.setItem('device_id',id);
    //get status of being connected
    var connected = $(this)
    .closest('tr')
    .find('.connected')
    .html();
    localStorage.setItem('device_connected',connected);
    //move dropdown menu
    $(this).after($dropdown);
    //update links
    //$dropdown.find('.Tinker').attr('href', '/transaction/pay?id='+id);
    //$dropdown.find('.delLink').attr('href', '/transaction/delete?id='+id);
    //show dropdown
    $(this).dropdown();
});

/*$('.renameButton').click(function(){
    var newName = prompt('Enter a new name: ','your name here');
    
    if(newName !==""){
        particle.renameDevice({deviceId:id, name:newName, auth:token}).then(function(data){
            console.log('Device renamed successfully:', data);
            alert(newName);
            location.reload();
        },function(err){
            console.log('An error occurred while renameing device: ',err);
            alert('errors');
        });
    }
})*/
                          
$('.renameButton').on('tap',function(){
    var newName = prompt('Enter a new name: ','your name here');
    
    if(newName){
        particle.renameDevice({deviceId:id, name:newName, auth:token}).then(function(data){
            console.log('Device renamed successfully:', data);
            alert('Done');
            location.reload();
        },function(err){
            console.log('An error occurred while renameing device: ',err);
            alert('errors');
        });
    }
});

$('.tinkerButton').on('tap',function(){
    alert(connected);
    window.location.href = "http://stackoverflow.com";
});
                          
$('.signalButton').on('tap',function(){
    particle.signalDevice({ deviceId: id, signal: false, auth: token }).then(function(data) {
      console.log('Device is shouting rainbows:', data);
    }, function(err) {
      console.log('Error sending a signal to the device:', err);
    });
});
});//]]>