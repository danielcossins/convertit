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
    $('#go').on("click", function(){
      var upload = document.getElementById('upload').files[0];
      var name = document.getElementById('upload').value.replace("C:\\fakepath\\", "");
      console.log(upload);
      console.log(name);

      $.ajax({
        url: "https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&download=true&inputformat=png&outputformat=jpg&filename=" + name,
        method: "GET"

        }).done(function(data) {
          console.log(data);
      });
    });
});