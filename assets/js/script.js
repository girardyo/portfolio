/*function setColor(){
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.445)';
    var button = document.getElementById('btn');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn2');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'black';
}
function setColor2(){
    document.body.style.backgroundColor = 'rgb(231, 231, 231)';
    var button = document.getElementById('btn2');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'white';
}
*/
var i =0;
var t = null;

function changecolornuit(){
    
    var button = document.getElementById('btn');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn2');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'white';
    var h2 = document.getElementById('h2');
    h2.innerHTML = "Bonsoir je suis Yohan Girard";

    var couleurs = ['#f9f9f9', '#d6d4d4', '#969696'];
    console.log (i);
    if (i< couleurs.length){
        document.body.style.backgroundColor = couleurs[i];
        i++;
        console.log(couleurs[i]);
    } 
    else {
        i = 0;
        clearInterval(t);

    }       
}

function nuitprogressif (){
    t =setInterval(changecolornuit, 1000); 
}

function changecolorjour(){
    var button = document.getElementById('btn2');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'black';
    var h2 = document.getElementById('h2');
    h2.innerHTML = "Bonjour je suis Yohan Girard";

    var couleurs = ['#969696', '#d6d4d4', '#f9f9f9'];
    console.log (couleurs.length);
    if (i< couleurs.length){
        document.body.style.backgroundColor = couleurs[i];
        i++;
        console.log(couleurs[i]);
    } 
    else {
        i = 0;
        clearInterval(t);
    }
}
function jourprogressif (){
    t =setInterval(changecolorjour, 1000); 
}



/*
$(document).ready(function() {
    $('#button').click(function(){
        $(this).myFunction2();
     });

     $.fn.myFunction = function() { 
        var couleurs = ['blue', 'red', 'yellow'];
        console.log (couleurs.length);
        if (i< couleurs.length){
            document.body.style.backgroundColor = couleurs[i];
            i++;
            console.log(couleurs[i]);
        } 
        else {
            stopInterval();
        }
     }
     $.fn.myFunction2 = function() {
        t =setInterval(changecolor, 1000); 
     }

     $.fn.myFunction3 = function() {
        clearInterval(t);
    }

});*/

function Get(yourUrl){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET",yourUrl,false);
    Httpreq.send(null);
    return Httpreq.responseText;          
}
var json_obj = JSON.parse(Get('https://api.apixu.com/v1/current.json?key=b7ebce311d55424fbf890438181211&q=Grenoble'));

var h3 = document.getElementById('h3');
h3.innerHTML = "Température à Grenoble : "+json_obj.current.temp_c+"°";


var d = new Date();
var h = d.getHours();
console.log(d);
console.log(h);
if (h>17){
    document.body.style.backgroundColor = "#fcfcfc";
    nuitprogressif ()
}
else{
    document.body.style.backgroundColor = "#4c4c4c";
    jourprogressif ()
}