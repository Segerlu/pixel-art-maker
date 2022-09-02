let canvas = document.getElementById('canvas');
let clickedColor = 'white';
let colorBoard = document.getElementById('colorBoard')
let arrayOfColors = colorBoard.getElementsByClassName('color')
function makeDivs(){
    let pix = document.createElement('div');
    pix.className = 'pixel';
    pix.style.width = '1em';
    pix.style.height = '1em';
    pix.style.border = '.5px dotted #4713a3';
    pix.style.backgroundColor = 'black';
    pix.style.display = 'flex' 
    pix.style.flexWrap = 'wrap'
    return pix;
}
console.log(canvas)
for (var i = 0; i < 1537; i++){
    var makePix = makeDivs();
    canvas.append(makePix);
}
canvas.addEventListener('click', (e) => {
    if (e.target.className === 'color'){
        clickedColor = e.target.style.backgroundColor
        arrayOfColors.forEach((i)=>{
            console.log(i)
            if (clickedColor === i.style.backgroundColor){
                i.style.border = '3px solid black'
            }
        })
    }
}) 