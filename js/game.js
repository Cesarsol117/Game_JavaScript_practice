const canvas = document.querySelector('#game');
const game = canvas.getContext('2d');


window.addEventListener('load', startGame);

function startGame(){
    let tamanoPantalla;

    if (window.innerHeight > window.innerWidth) {
        tamanoPantalla = window.innerWidth * 0.7;
    } else {
        tamanoPantalla = window.innerHeight * 0.7;
    }

    canvas.setAttribute('width', tamanoPantalla);
    canvas.setAttribute('height', tamanoPantalla);
    const tamanoElemento = (tamanoPantalla / 10)-1.5;
    
    console.log({ tamanoElemento, tamanoPantalla});

    game.font =  tamanoElemento + 'px verdana';
    
    
    for (let index = 0; index < 10; index++) {

        // game.fillText(emojis['X'], (tamanoElemento ), (tamanoElemento));
        for (let ind = 1; ind <= 10; ind++) {
            game.fillText(emojis['X'], (tamanoElemento * index), (tamanoElemento * ind)); 
            
        }
    }

   
    // game.fillRect(50,0,1,100);
    // game.fillRect(0,25,100,1);
    // // game.fillRect();
    // game.font = '25px verdana';
    // game.fillStyle = 'blue';
    // // game.textAlign = 'end';
    // // game.textAlign = 'center';
    // game.fillText('Hola, Canvas', 50, 25);
    // // game.clearRect(1,1,50,50);
    // // game.lineTo(20,50);
    // // game.lineTo(80,50);
    // // game.stroke();
}