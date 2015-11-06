define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  
  // return function(URL){
  //   var deferred = Q.defer();
  //   // console.log(deferred);
  //   $.ajax({
  //     url: URL,
  //     method: "GET"

  //     }).done(function(data) {
  //       console.log(data);
  //       deferred.resolve(data);
  //   });
  //   return deferred.promise;
  // };
  return function(){
    var selectedFile = document.getElementById("upload").files[0];
    var fd = new FormData(); 
    fd.append("image", selectedFile);
    var xhr = new XMLHttpRequest();
    console.log(xhr);
    xhr.open("GET", "https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&download=inline&inputformat=png&outputformat=jpg&file=");
    // xhr.setRequestHeader('Authorization', 'Client-ID 4ff4d561a18ac75');
    xhr.send(fd);
    return xhr;
  };


  // var xhr = new XMLHttpRequest();
  // xhr.open('GET', '/my/image/file.png', true);
  // xhr.responseType = 'arraybuffer'; // this will accept the response as an ArrayBuffer
  // xhr.onload = function(buffer) {
  //     var words = new Uint32Array(buffer),
  //         hex = '';
  //     for (var i = 0; i < words.length; i++) {
  //       hex += words.get(i).toString(16);  // this will convert it to a 4byte hex string
  //     }
  //     console.log(hex);
  // };
  // xhr.send();
});