// functions to show and hide elements
function hide(elementId){
    document.getElementById(elementId).style.display = 'none';
}
function show(elementId){
    document.getElementById(elementId).style.display = 'block';
} 

document.getElementById("wendyPic").ondblclick = function(){
    show("wendyReport");
}

document.getElementById("wendyReport").onclick = function(){
    hide("wendyReport");
}
