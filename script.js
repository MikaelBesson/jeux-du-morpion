
let cases = document.querySelectorAll(".case");

let i =0;
function tour(){
    i++;
    return i % 2 === 0 ? "o" : "x";
}

function jouer(){
    if(!this.innerHTML) this.innerHTML = tour();
    gagner();
}
function bravo(gagnant){
    alert("bravo vous avez gagné !!");
    cases.forEach(el => el.innerHTML = "");
}

function gagner(){
    //ligne
    if(cases[0].innerHTML !== ""
        && cases[0].innerHTML === cases[1].innerHTML
        && cases[1].innerHTML === cases[2].innerHTML){
        bravo(cases[0].innerHTML);
    }
    else if(cases[3].innerHTML !== ""
        && cases[3].innerHTML === cases[4].innerHTML
        && cases[4].innerHTML === cases[5].innerHTML){
        bravo(cases[3].innerHTML);
    }
    else if(cases[6].innerHTML !== ""
        && cases[6].innerHTML === cases[7].innerHTML
        && cases[7].innerHTML === cases[8].innerHTML){
        bravo(cases[6].innerHTML);
    }
    //colone
    else if(cases[0].innerHTML !== ""
        && cases[0].innerHTML === cases[3].innerHTML
        && cases[3].innerHTML === cases[6].innerHTML){
        bravo(cases[0].innerHTML);
    }
    else if(cases[1].innerHTML !== ""
        && cases[1].innerHTML === cases[4].innerHTML
        && cases[4].innerHTML === cases[7].innerHTML){
        bravo(cases[1].innerHTML);
    }
    else if(cases[2].innerHTML !== ""
        && cases[2].innerHTML === cases[5].innerHTML
        && cases[5].innerHTML === cases[8].innerHTML){
        bravo(cases[2].innerHTML);
    }
    //diagonale
    else if(cases[0].innerHTML !== ""
        && cases[0].innerHTML === cases[4].innerHTML
        && cases[4].innerHTML === cases[8].innerHTML){
        bravo(cases[0].innerHTML);
    }
    else if(cases[2].innerHTML !== ""
        && cases[2].innerHTML === cases[4].innerHTML
        && cases[4].innerHTML === cases[6].innerHTML){
        bravo(cases[2].innerHTML);
    }
}

cases.forEach(el => el.addEventListener("click", jouer));





