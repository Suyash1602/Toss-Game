console.log("Connected");




playGame = ()=>{
    // Generating random number for both player 
    const player1 = Math.floor(Math.random()*6)+1;
    const player2 = Math.floor(Math.random()*6)+1;
    // for player 1
    const player1Dice = `img/Dice${player1}.png`
    document.getElementById('player1').setAttribute('src',player1Dice);

    // for player 2
    const player2Dice = `img/Dice${player2}.png`
    document.getElementById('player2').setAttribute('src',player2Dice);

    // to show result on top 
    if(player1 > player2){
        document.querySelector('h1').innerHTML = "Player 1 Won !!";
    }else if(player1 < player2){
        document.querySelector('h1').innerHTML = "Player 2 Won !!";
    }else{
        document.querySelector('h1').innerHTML = "Draw!!";
    }
}
