//console.log("aoba")

const arrayOfPawn = [];
console.log(filesNameArray);

for (const i of filesNameArray) {
    arrayOfPawn.push(document.getElementById(i + 2));
}
for (const i of filesNameArray) {
    arrayOfPawn.push(document.getElementById(i + 7));
}

for(const i of arrayOfPawn){
    i.addEventListener("click",()=>{
        const currentId = i.getAttribute("id");
        let change = parseInt(currentId[1]);
        const stepsSquare = [];
        for(let i=0;i<2;i++) {
            change ++;
            stepsSquare.push(document.getElementById(currentId[0] + change));
        }
        console.log(stepsSquare);
    });
}
