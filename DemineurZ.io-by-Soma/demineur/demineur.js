// Tous droits réservés - Soma - 2020-2021

var nb_col = 11;
var nb_li = 11;
var difficulte = 10;
var grid = jQuery('#grid');

for(var i=0;i<nb_li;i++){

    var line = jQuery('<tr></tr>');
    for(var j=0;j<nb_col;j++){
        var cell = jQuery('<td></td>');
        cell.addClass('i'+i);
        cell.addClass('j'+j);
        cell.addClass('paint');
        var aleatoire = getRandomInt(100);
        line.append(cell);



        if(aleatoire<difficulte){
                cell.addClass('indesirable');
                }
    
    
    
    }


    grid.append(line);
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

 
  for(var i=0;i<nb_li;i++){

    for(var j=0;j<nb_col;j++){

        var cell = jQuery('.i'+i+'.j'+j);

        if( ! cell.hasClass('indesirable') ){
            var numV = getNumVoisinage(i,j);
            cell.text(numV);
            //console.log(numV)

        }


    }
}

function getNumVoisinage(i,j){
    var count = 0;


    //voisin 1
    var voisin1 = jQuery(    '.i'+(i-1)+'.j'+(j-1)    );
    if(voisin1.hasClass('indesirable')){
        count++;
    }

    //voisin 2
    var voisin2 = jQuery(    '.i'+(i-1)+'.j'+(j)    );
    if(voisin2.hasClass('indesirable')){
        count++;
    }

    //voisin 3
    var voisin3 = jQuery(    '.i'+(i-1)+'.j'+(j+1)    );
    if(voisin3.hasClass('indesirable')){
        count++;
    }

    //voisin 4
    var voisin4 = jQuery(    '.i'+(i)+'.j'+(j-1)    );
    if(voisin4.hasClass('indesirable')){
        count++;
    }

    //voisin 5
    var voisin5 = jQuery(    '.i'+(i)+'.j'+(j+1)    );
    if(voisin5.hasClass('indesirable')){
        count++;
    }

    //voisin 6
    var voisin6 = jQuery(    '.i'+(i+1)+'.j'+(j-1)    );
    if(voisin6.hasClass('indesirable')){
        count++;
    }
    //voisin 7
    var voisin7 = jQuery(    '.i'+(i+1)+'.j'+(j)    );
    if(voisin7.hasClass('indesirable')){
        count++;
    }

    //voisin 8
    var voisin8 = jQuery(    '.i'+(i+1)+'.j'+(j+1)    );
    if(voisin8.hasClass('indesirable')){
        count++;
    }
    return count;
}

/*
 * pour une case aux coordonnees i, j ayant 0 bombes
 * dans son voisinage, decouvre tous ses voisins
 */
function decouvre(i, j) {
    var cell = jQuery(    '.i'+(i)+'.j'+(j)    );

    // TODO: condition d'arret, sinon ca peut durer longtemps
    // 
    cell.removeClass('paint');

    var voisin =  jQuery(    '.i'+(i+1)+'.j'+(j)    );
    // TODO: un appel recursif a decouvre() dans certains cas

}

jQuery('td').click(
    function (){
        var cell = jQuery(this);
        if (cell.hasClass('flag')){
            return;
        }

        
        
        if (cell.text() == "0") {
            // decouvre les coordonnees de la case actuelle
            var i, j; 
            cell.attr("class").split(/\s+/).forEach(function(s) { 
                if (s.startsWith("i")) { i  = parseInt(s.substring(1));} 
                else if (s.startsWith("j")) { j  = parseInt(s.substring(1)); }
            });
            decouvre(i, j);
        } else {
            cell.removeClass('paint');
        }
       
        
        if(cell.hasClass('indesirable')){
            alert('Tu as explosé.. Retente ta chance !')
            
            location.reload();
        }
    }
)
jQuery('td').contextmenu(
    function(e){
        e.preventDefault();
        var cell = jQuery(this);
        cell.toggleClass('flag');
        }
)

