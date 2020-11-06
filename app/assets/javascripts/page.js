// s'active dès lors que l'option du select de region est modifié 
function select_departement(param){

    if (param === "_blank") {

        // si la selection de la région est sur _blank alors on affiche la liste de tout les departements
        showAll_departement();
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
        hide_departement();
        // affiche les selection avec la classe param 
        var departements = document.getElementsByClassName(param);
        for (let i = 0; i < departements.length; i++) {
            departements[i].style.display = "inline";
        }
    }    
}
// cache toutes les options du select
function hide_departement(){
    var departements = document.getElementsByClassName("departement");
    for (let i = 0; i < departements.length; i++) {
        departements[i].style.display = "none";
    }
}
// affiche toutes les options du select
function showAll_departement(){
    var departements = document.getElementsByClassName("departement");
    for (let i = 0; i < departements.length; i++) {
        departements[i].style.display = "inline";
    }
}

// ---------------------------------------------------------------------------------------
function select_comcoms(param) {
    if (param === "_blank") {
        showAll_comcoms();
    }else{
        
        var id_comcoms_select = document.getElementById("comcoms").selectedIndex;        

        var class_comcoms_select = document.getElementById('comcoms').getElementsByTagName('option')[id_comcoms_select].getAttribute("class");

        if (!(class_comcoms_select.includes(param))) {

            document.getElementById('comcoms').getElementsByTagName('option')[0].selected = 'selected'; 
        }
        
        hide_comcoms();

        var comcoms = document.getElementsByClassName(param);
        for (let i = 0; i < comcoms.length; i++) {
            comcoms[i].style.display = "inline";
        }
    }
}

function hide_comcoms() {
    var comcoms = document.getElementsByClassName("comcoms");
    for (let i = 0; i < comcoms.length; i++) {
        comcoms[i].style.display = "none";
    }
}

function showAll_comcoms() {
    var comcoms = document.getElementsByClassName("comcoms");
    for (let i = 0; i < comcoms.length; i++) {
        comcoms[i].style.display = "inline";
    }
}

// --------------------------------------------------------------------------------------- 
function select_communes(param) {

    if (param === "_blank") {
        showAll_communes();
    }else{
        
        var id_communes_select = document.getElementById("communes").selectedIndex;        

        var class_communes_select = document.getElementById('communes').getElementsByTagName('option')[id_communes_select].getAttribute("class");

        if (!(class_communes_select.includes(param))) {

            document.getElementById('communes').getElementsByTagName('option')[0].selected = 'selected'; 
        }
        
        hide_communes();

        var communes = document.getElementsByClassName(param);
        for (let i = 0; i < communes.length; i++) {
            communes[i].style.display = "inline";
        }
    }
}

function hide_communes() {
    var communes = document.getElementsByClassName("communes");
    for (let i = 0; i < communes.length; i++) {
        communes[i].style.display = "none";
    }
}

function showAll_communes(params) {
    var communes = document.getElementsByClassName("communes");
    for (let i = 0; i < communes.length; i++) {
        communes[i].style.display = "inline";
    }
}

//Conversion PDF

    function generate() {
	var doc = new jsPDF('p', 'pt', 'letter');
	var htmlstring = '';
	var tempVarToCheckPageHeight = 0;
	var pageHeight = 0;
	pageHeight = doc.internal.pageSize.height;
	specialElementHandlers = {
        // element with id of "bypass" - jQuery style selector
        '#bypassme': function(element, renderer) {
			// true = "handled elsewhere, bypass text extraction"
			return true
		}
	};
	margins = {
        top: 150,
		bottom: 60,
		left: 40,
		right: 40,
		width: 600
	};
	var y = 20;
	doc.setLineWidth(2);
	doc.text(220, y = y + 30, "INDICE DE FRAGILITE");
	doc.autoTable({
        html: '#table',
		startY: 60,
		styles: {
        fontSize: 8.2,
			cellWidth: 'wrap'
		},
	})
	doc.save('Indice_de_fragilite.pdf');
}

function pin(){
    var class_char = document.getElementById("fav").getAttribute("class");
    var newItem = document.createElement("LI");      
    var textnode = document.createTextNode(class_char); 
    newItem.appendChild(textnode);                 

    var list = document.getElementById("tab_fav");    
    list.insertBefore(newItem, list.childNodes[0]); 
}