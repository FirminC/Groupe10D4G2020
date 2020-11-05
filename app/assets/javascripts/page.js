function toggle_departement(param){
    document.getElementById("Auvergne-Rhône-Alpes").style.display ="none";
    document.getElementById("Bourgogne-Franche-Comté").style.display ="none";
    document.getElementById("Bretagne").style.display ="none";
    document.getElementById("Centre-Val-de-Loire").style.display ="none";
    document.getElementById("Grand-Est").style.display ="none";
    document.getElementById("Guadeloupe").style.display ="none";
    document.getElementById("Guyane").style.display ="none";
    document.getElementById("Hauts-de-France").style.display ="none";
    document.getElementById("Île-de-France").style.display ="none";
    document.getElementById("La-Corse").style.display ="none";
    document.getElementById("Martinique").style.display ="none";
    document.getElementById("Mayotte").style.display ="none";
    document.getElementById("Normandie").style.display ="none";
    document.getElementById("Nouvelle-Aquitaine").style.display ="none";
    document.getElementById("Occitanie").style.display ="none";
    document.getElementById("Pays-de-la-Loire").style.display ="none";
    document.getElementById("Provence-Alpes-Côte-d'Azur").style.display ="none";
    document.getElementById("Réunion").style.display ="none";

    switch (param){
        case "Auvergne-Rhône-Alpes" :           show1();
                                                break;
        case "Bourgogne-Franche-Comté" :        show2();
                                                break;
        case "Bretagne" :                       show3();
                                                break;
        case "Centre-Val-de-Loire" :            show4();
                                                break;
        case "Grand-Est" :                      show5();
                                                break;
        case "Guadeloupe" :                     show6();
                                                break;
        case "Guyane" :                         show7();
                                                break;
        case "Hauts-de-France" :                show8();
                                                break;
        case "Île-de-France" :                  show9();
                                                break;
        case "La-Corse" :                       show10();
                                                break;
        case "Martinique" :                     show11();
                                                break;
        case "Mayotte" :                        show12();
                                                break;
        case "Normandie" :                      show13();
                                                break;
        case "Nouvelle-Aquitaine" :             show14();
                                                break;
        case "Occitanie" :                      show15();
                                                break;
        case "Pays-de-la-Loire" :               show16();
                                                break;
        case "Provence-Alpes-Côte-d'Azur" :     show17();
                                                break;
        case "Réunion" :                        show18();
                                                break;
        default:                                showall();
                                                break;
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

function show1(){
    document.getElementById("Auvergne-Rhône-Alpes").style.display ="inline";
    
    hide();
    document.getElementById("Ain").style.display ="inline";
    document.getElementById("Allier").style.display ="inline";
    document.getElementById("Ardêche").style.display ="inline";
    document.getElementById("Cantal").style.display ="inline";
    document.getElementById("Drôme").style.display ="inline";
    document.getElementById("Haute-Loire").style.display ="inline";
    document.getElementById("Haute-Savoie").style.display ="inline";
    document.getElementById("Isère").style.display ="inline";
    document.getElementById("Loire").style.display ="inline";
    document.getElementById("Puy-de-Dôme").style.display ="inline";
    document.getElementById("Rhône").style.display ="inline";
    document.getElementById("Savoie").style.display ="inline";


}

function show2(){
    document.getElementById("Bourgogne-Franche-Comté").style.display ="inline";
   
    hide();
    document.getElementById("Côte-d'Or").style.display ="inline";
    document.getElementById("Doubs").style.display ="inline";
    document.getElementById("Haute-Saône").style.display ="inline";
    document.getElementById("Jura").style.display ="inline";
    document.getElementById("Nièvre").style.display ="inline";
    document.getElementById("Saône-et-Loire").style.display ="inline";
    document.getElementById("Territoire-de-Belfort").style.display ="inline";
    document.getElementById("Yonne").style.display ="inline";


}

function show3(){
    document.getElementById("Bretagne").style.display ="inline";

    hide();
    document.getElementById("Côtes d'Armor").style.display ="inline";
    document.getElementById("Finistère").style.display ="inline";
    document.getElementById("Île-et-Vilaine").style.display ="inline";
    document.getElementById("Morbihan").style.display ="inline";   

}

function show4(){
    document.getElementById("Centre-Val-de-Loire").style.display ="inline";

    hide();
    document.getElementById("Cher").style.display ="inline";
    document.getElementById("Eure-et-Loir").style.display ="inline";
    document.getElementById("Indre").style.display ="inline";
    document.getElementById("Indre-et-Loire").style.display ="inline";
    document.getElementById("Loiret").style.display ="inline";
    document.getElementById("Loir-et-Cher").style.display ="inline";


}

function show5(){
    document.getElementById("Grand-Est").style.display ="inline";

    hide();
    document.getElementById("Ardennes").style.display ="inline";
    document.getElementById("Aube").style.display ="inline";
    document.getElementById("Bas-Rhin").style.display ="inline";
    document.getElementById("Haute-Marne").style.display ="inline";
    document.getElementById("Haut-Rhin").style.display ="inline";
    document.getElementById("Marne").style.display ="inline";
    document.getElementById("Meurthe-et-Moselle").style.display ="inline";
    document.getElementById("Meuse").style.display ="inline";
    document.getElementById("Moselle").style.display ="inline";
    document.getElementById("Vosges").style.display ="inline";


}

function show6(){
    document.getElementById("Guadeloupe").style.display ="inline";

    hide();
    document.getElementById("Guadeloupe").style.display ="inline";

}

function show7(){
    document.getElementById("Guyane").style.display ="inline";

    hide();
    document.getElementById("Guyane").style.display ="inline";

}

function show8(){
    document.getElementById("Hauts-de-France").style.display ="inline";

    hide();
    document.getElementById("Aisne").style.display ="inline";
    document.getElementById("Nord").style.display ="inline";
    document.getElementById("Oise").style.display ="inline";
    document.getElementById("Pas-de-Calais").style.display ="inline";
    document.getElementById("Somme").style.display ="inline";

}

function show9(){
    document.getElementById("Île-de-France").style.display ="inline";

    hide();
    document.getElementById("Essonne").style.display ="inline";
    document.getElementById("Hauts-de-Seine").style.display ="inline";
    document.getElementById("Paris").style.display ="inline";
    document.getElementById("Seine-et-Marne").style.display ="inline";
    document.getElementById("Seine-Saint-Denis").style.display ="inline";
    document.getElementById("Val-de-Marne").style.display ="inline";
    document.getElementById("Val-d'Oise").style.display ="inline";
    document.getElementById("Yvelines").style.display ="inline";

}

function show10(){
    document.getElementById("La-Corse").style.display ="inline";

    hide();
    document.getElementById("Corse-du-Sud").style.display ="inline";
    document.getElementById("Haute-Corse").style.display ="inline";

}

function show11(){
    document.getElementById("Martinique").style.display ="inline";

    hide();
    document.getElementById("Martinique").style.display ="inline";

}

function show12(){
    document.getElementById("Mayotte").style.display ="inline";

    hide();
    document.getElementById("Mayotte").style.display ="inline";

}

function show13(){
    document.getElementById("Normandie").style.display ="inline";

    hide();
    document.getElementById("Calvados").style.display ="inline";
    document.getElementById("Eure").style.display ="inline";
    document.getElementById("Manche").style.display ="inline";
    document.getElementById("Orne").style.display ="inline";
    document.getElementById("Seine-Maritime").style.display ="inline";

}

function show14(){
    document.getElementById("Nouvelle-Aquitaine").style.display ="inline";

    hide();
    document.getElementById("Charente").style.display ="inline";
    document.getElementById("Charente-Maritime").style.display ="inline";
    document.getElementById("Corrèze").style.display ="inline";
    document.getElementById("Creuse").style.display ="inline";
    document.getElementById("Deux-Sèvres").style.display ="inline";
    document.getElementById("Dordogne").style.display ="inline";
    document.getElementById("Gironde").style.display ="inline";
    document.getElementById("Haute-Vienne").style.display ="inline";
    document.getElementById("Landes").style.display ="inline";
    document.getElementById("Lot-et-Garonne").style.display ="inline";
    document.getElementById("Pyrénées-Atlantiques").style.display ="inline";
    document.getElementById("Vienne").style.display ="inline";

}

function show15(){
    document.getElementById("Occitanie").style.display ="inline";

    hide();
    document.getElementById("Ariège").style.display ="inline";
    document.getElementById("Aude").style.display ="inline";
    document.getElementById("Aveyron").style.display ="inline";
    document.getElementById("Gard").style.display ="inline";
    document.getElementById("Gers").style.display ="inline";
    document.getElementById("Haute-Garonne").style.display ="inline";
    document.getElementById("Hautes-Pyrénées").style.display ="inline";
    document.getElementById("Hérault").style.display ="inline";
    document.getElementById("Lot").style.display ="inline";
    document.getElementById("Lozère").style.display ="inline";
    document.getElementById("Pyrénées-Orientales").style.display ="inline";
    document.getElementById("Tarn").style.display ="inline";
    document.getElementById("Tarn-et-Garonne").style.display ="inline";

}

function show16(){
    document.getElementById("Pays-de-la-Loire").style.display ="inline";

    hide();
    document.getElementById("Loire-Atlantique").style.display ="inline";
    document.getElementById("Maine-et-Loire").style.display ="inline";
    document.getElementById("Mayenne").style.display ="inline";
    document.getElementById("Sarthe").style.display ="inline";
    document.getElementById("Vendée").style.display ="inline";

}

function show17(){
    document.getElementById("Provence-Alpes-Côte-d'Azur").style.display ="inline";

    hide();
    document.getElementById("Alpes de Haute-Provence").style.display ="inline";
    document.getElementById("Alpes-Maritimes").style.display ="inline";
    document.getElementById("Bouches-du-Rhône").style.display ="inline";
    document.getElementById("Hautes-Alpes").style.display ="inline";
    document.getElementById("Var").style.display ="inline";
    document.getElementById("Vaucluse").style.display ="inline";

}

function show18(){
    document.getElementById("Réunion").style.display ="inline";

    hide();
    document.getElementById("Réunion").style.display ="inline";

}
