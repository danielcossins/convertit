requirejs.config({
  baseUrl: "./scripts",
  paths: {
    "jquery": "../lib/bower_components/jquery/dist/jquery.min",
    "jquery-ui": "../lib/bower_components/jquery-ui/jquery-ui.min",
    "firebase": "../lib/bower_components/firebase/firebase",
    "lodash": "../lib/bower_components/lodash/lodash.min",
    "hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
    "bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
    "q": "../lib/bower_components/q/q"
  },
  shim: {
    "bootstrap": ["jquery"],
    "firebase": {
      exports: "Firebase"
    }
  }
});

requirejs(["call"], 
  function(call){
    var upload = $('#upload').val();
    console.log($('#go'));
    $('#go').on("click", function(){
      var promise = call("https://api.cloudconvert.com/convert?input="+upload+"&download=inline");
      // promise.then(function(data){
      //   console.log(data);
      // });
      console.log(promise);
    });
});