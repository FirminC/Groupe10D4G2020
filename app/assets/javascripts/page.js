// s'active dès lors que l'option du select de region est modifié 
function select_departement(param){

    if (param === "_blank") {

        // si la selection de la région est sur _blank alors on affiche la liste de tout les departements
        showall();
    }else{
    
        // sinon si on clique sur une région différentes (modification du select)

        
        // on récupère ici l'id de l'option sélectionnée dans le select de département
        var id_dept_select = document.getElementById("departement").selectedIndex;
        
        // on récupère les classes attribuée au département selectionné (identifié précédement)
        var class_dpt_select = document.getElementById('departement').getElementsByTagName('option')[id_dept_select].getAttribute("class");

        // vérifie si les classes du département contiennent la nouvelle région sélectionnée 
        if (!(class_dpt_select.includes(param))) {

            // si non alors le champs de sélection département prend la valeur _blank
            document.getElementById('departement').getElementsByTagName('option')[0].selected = 'selected'; 
        }
        
        // cache toutes les options du select
        hide();
        // affiche les selection avec la classe param 
        var departements = document.getElementsByClassName(param);
        for (let index = 0; index < departements.length; index++) {
            departements[index].style.display = "inline";
        }
    }    
}
// cache toutes les options du select
function hide(){
    var departements = document.getElementsByClassName("departement");
    for (let index = 0; index < departements.length; index++) {
        departements[index].style.display = "none";
    }
}
// affiche toutes les options du select
function showall(){
    var departements = document.getElementsByClassName("departement");
    for (let index = 0; index < departements.length; index++) {
        departements[index].style.display = "inline";
    }
}