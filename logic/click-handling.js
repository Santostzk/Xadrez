
const allSquares = document.getElementsByClassName("square");//console.log(allSquares);

const clickedElements = [];

for(const x of allSquares) {
    x.addEventListener("click", function () {


        //push element in empty Array
        console.log(clickedElements)

        const idOfElement = x.getAttribute("id");
        const innerHtmlOfElement = document.getElementById(idOfElement).innerHTML;
        if(clickedElements.length > 0){
         clickedElements[0].removeAttribute("style");
         clickedElements.length = 0;
        }
        
       if (
        // Caminnho das peças, ou seja, vai alterar a cor de fundo se estiver em cima das peças jogaveis
        innerHtmlOfElement.includes("Pretas") || 
        innerHtmlOfElement.includes("Brancas")
       ) {
        //definindo a cor do casa do tabuleiro em que está a peça que foi selecionada
        document.getElementById(idOfElement).style.backgroundColor = "yellow";
        clickedElements.push(x);
       }
    });
}