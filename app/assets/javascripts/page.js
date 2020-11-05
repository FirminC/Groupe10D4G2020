function toggle_departement(param){
    if (param === "_blank") {
        showall();
    }else{
        hide();
        var departements = document.getElementsByClassName(param);
        for (let index = 0; index < departements.length; index++) {
            departements[index].style.display = "inline";
        }
    }    
}
function hide(){
    var departements = document.getElementsByClassName("departement");
    for (let index = 0; index < departements.length; index++) {
        departements[index].style.display = "none";
    }
}

function showall(){
    var departements = document.getElementsByClassName("departement");
    for (let index = 0; index < departements.length; index++) {
        departements[index].style.display = "inline";
    }
}