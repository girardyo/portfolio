function setColor(){
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

var i =0;
var t = null;

function changecolor(){
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
function timeout (){
    t =setInterval(changecolor, 1000); 
}

function stopInterval(){
    clearInterval(t);
}



