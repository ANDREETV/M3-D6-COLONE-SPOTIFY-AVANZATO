
function clickBottone() {
    for (let section of document.querySelectorAll('section')) {
        section.children[0].classList.add('collapse');
        section.children[0].classList.add('show');
        section.innerHTML = `
        <button class="bottone btn btn-outline-light toggle-btn" data-bs-target="#${section.id} > div" data-bs-toggle="collapse">Mostara e nascondiv</button>` + section.innerHTML
        
    }
}

function footer() {
    // 
    let numeriAlbum = document.querySelectorAll('img').length -2
    let span = document.createElement('span')
    span.classList.add('text-center')
    span.innerHTML = "Quetsa pagina contiene " + numeriAlbum + " Album";
    document.getElementById('frase').appendChild(span)
}



// function eliminaRiga() {
    
//     let elimina = document.querySelector('.elimina-riga');
//         let riga = elimina.parentNode.parentNode
//         riga.remove()
// }

function eliminaRiga() {
    let deleteButtons = document.querySelectorAll(".elimina-riga");
    
    for (let i = 0; i < deleteButtons.length; i++) {
        deleteButtons[i].addEventListener("click", function(event) {
        let row = event.target.parentNode.parentNode;
        console.log(event.target.parentNode );
        row.remove();
    });
    }
}
let numeroTraccia = document.querySelector('#recipient-numero').value
function aggiungiRiga() {

    
    let tabella = document.querySelector('#tabella')

    let nuovaRiga = tabella.insertRow(-1);
    let cella1 = nuovaRiga.insertCell(0);
    let cella2 = nuovaRiga.insertCell(1);

  cella1.numeroTraccia.add
  cella2.innerHTML = "ciao universo"

}



window.onload = function() {
    footer()
    clickBottone() 
    eliminaRiga()
}
