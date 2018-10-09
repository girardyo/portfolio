function setColor(){
    document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.445)';
    var button = document.getElementById('btn');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn2');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'white';
}
function setColor2(){
    document.body.style.backgroundColor = 'rgb(231, 231, 231)';
    var button = document.getElementById('btn2');
    button.style.visibility = 'hidden';
    var button2 = document.getElementById('btn');
    button2.style.visibility = 'visible';
    var titre = document.getElementById('titre');
    titre.style.color = 'black';
}
