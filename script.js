var text = document.getElementById('capture');
var btnReplay = document.getElementById('replay');
var btnReset = document.getElementById('reset');
var output = document.getElementById('replay-content');
var replay = [];

/*
[0]
  ['t', 1442139585995]
*/


text.value = '';

if(btnReplay.addEventListener){
  btnReplay.addEventListener('click', function(){
    //replay
    for(var i = 0; i < replay.length; i++){
      (function(i) {
        setTimeout(function(){
          if(replay[i]){
            output.innerHTML = '';
            output.appendChild(document.createTextNode(replay[i][0]));
          }
        }, replay[i][1] - replay[0][1]);
      })(i)
    }
  });
}

if(btnReset.addEventListener){
  btnReset.addEventListener('click', function(){
    output.innerHTML = '';
    text.value = '';
    replay = [];
  });
}

text.addEventListener('input', function(el) {
  var date = new Date();
  var content = text.value;
  replay.push([content, date.getTime()]);
});
