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
      console.log(upload);
      // var upload = document.getElementById('upload').value;
      // var upload = document.getElementById('upload').value.replace("C:\\fakepath\\", "");
      // console.log(upload);
      // // var promise = call("https://api.cloudconvert.com/convert?input="+upload+"&download=inline&apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&inputformat=png&outputformat=jpg");
      // var promise = call("https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&download=true&inputformat=png&outputformat=jpg&input=" + upload);
      // // var promise = call("https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&download=inline&inputformat=png");
      // console.log(promise);
      // promise.then(function(data){
      //   console.log(data);
      // });



      $.ajax({
        // url: "https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&download=inline&inputformat=png&outputformat=jpg&filename=upload&file=" + upload,
        // url: "https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&filename=AGmail-Logo.png&download=false&inputformat=png&file=" + upload,
        url: "https://api.cloudconvert.com/convert?apikey=ggZ9GdN_8u9Yduz2uK7kI4H1OoBuE0XokQeMZSLiImG98d5FlmYtoPg2D4R34unbm4yF85TXncF1SPTz6W4iAA&input=upload&filename=AGmail-Logo.png&download=false&inputformat=png",
        method: "GET"

        }).done(function(data) {
          console.log(data);
      });
    });
});