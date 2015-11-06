define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  
  return function(URL){
    var deferred = Q.defer();
    // console.log(deferred);
    $.ajax({
      url: URL,
      method: "GET"

      }).done(function(data) {
        console.log(data);
        deferred.resolve(data);
    });
    return deferred.promise;
  };
  // return function(){
  //   var link;
  //   var selectedFile = document.getElementById(id).files[0];
  //   var fd = new FormData(); 
  //   fd.append("image", selectedFile);
  //   var xhr = new XMLHttpRequest();
  //   console.log(xhr);
  //   xhr.open("POST", "https://api.imgur.com/3/image.json");
  //   xhr.setRequestHeader('Authorization', 'Client-ID 4ff4d561a18ac75');
  //   xhr.send(fd);
  //   return xhr;
  // };
});