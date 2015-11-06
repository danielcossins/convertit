define(function(require){
  var $ = require("jquery");
  var Q = require("q");
  
  return function(URL){
    var deferred = Q.defer();
    console.log(deferred);
    // $.ajax({
    //   url: URL,
    //   method: "GET"

    //   }).done(function(data) {
    //     console.log(data);
    //     deferred.resolve(data);
    // });
    // return deferred.promise;
    return "fart";
  };
});