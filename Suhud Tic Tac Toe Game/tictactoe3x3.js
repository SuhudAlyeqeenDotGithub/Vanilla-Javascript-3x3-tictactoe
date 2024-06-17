function newgame(){
    var game_inputs = document.querySelectorAll('.inputs input');
    game_inputs.forEach(function(input) {
        input.value = "";
        
        
    });
    alert("You have started a New Game")
    var reservedplayernamex = document.getElementById('playerxinput').value;
    var reservedplayernameo = document.getElementById('playeroinput').value;
    document.getElementById('result').innerHTML = "See Game Result";
    const keepnames = confirm('Do you want to keep the player names. Click "Ok" if yes, "Cancel" if no');
    if (keepnames){
        document.getElementById('playerxinput').value =reservedplayernamex;
        document.getElementById('playeroinput').value =reservedplayernameo;
        
    } else{
        document.getElementById('playerxinput').value = "";
        document.getElementById('playeroinput').value = "";

    }

}

function judgeresult(){
    allinputs = document.querySelectorAll('.inputs input');
    empty_input = false;
    invalidinputs = false;

    allinputs.forEach(function(input) {
        if (input.value===""){
            empty_input = true;
            return;
        }

        if (input.value !== "x" && input.value !== "o") {
            invalidinputs = true;
            return;
        }

    });
    
    //input rows
    var inputa = document.getElementById('inputa').value;
    var inputb = document.getElementById('inputb').value;
    var inputc = document.getElementById('inputc').value;
    var inputd = document.getElementById('inputd').value;
    var inpute = document.getElementById('inpute').value;
    var inputf = document.getElementById('inputf').value;
    var inputg = document.getElementById('inputg').value;
    var inputh = document.getElementById('inputh').value;
    var inputi = document.getElementById('inputi').value;
    const input_row_1 = inputa + inputb + inputc
    const row_1_comb = input_row_1.toLowerCase()
    const input_row_2 = inputd + inpute + inputf
    const row_2_comb = input_row_2.toLowerCase()
    const input_row_3 = inputg + inputh + inputi
    const row_3_comb = input_row_3.toLowerCase()
    //input columns
    const input_column_1 = inputa + inputd + inputg
    const column_1_comb = input_column_1.toLowerCase()
    const input_column_2 = inputb + inpute + inputh
    const column_2_comb = input_column_2.toLowerCase()
    const input_column_3 = inputc + inputf + inputi
    const column_3_comb = input_column_3.toLowerCase()
    //input diagonals
    const input_diagonal_1 = inputa + inpute + inputi
    const diagonal_1_comb = input_diagonal_1.toLowerCase()
    const input_diagonal_2 = inputg + inpute + inputc
    const diagonal_2_comb = input_diagonal_2.toLowerCase()

    var playerxname = document.getElementById('playerxinput').value;
    var playeroname = document.getElementById('playeroinput').value;


    if (empty_input){
        document.getElementById('result').innerHTML = "Please Fill in All boxes.";
    } else if (playerxname==="" || playeroname==="") {
        document.getElementById('result').innerHTML = 'Make sure you have entered the player names above';
    } else if (invalidinputs) {
        document.getElementById('result').innerHTML = 'You have entered an incorrect initial. Please use either "x" or "o".';
    //winner and loser conditons 
    //row conditions
    } else if(row_1_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(row_1_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    } else if(row_2_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(row_2_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    } else if(row_3_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(row_3_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    //columns conditions
    } else if(column_1_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(column_1_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    } else if(column_2_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(column_2_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    } else if(column_3_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(column_3_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    //diagonal condition    
    } else if(diagonal_1_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(diagonal_1_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    } else if(diagonal_2_comb ==="xxx") {
        document.getElementById('result').innerHTML = playerxname + " wins";
    } else if(diagonal_2_comb ==="ooo") {
        document.getElementById('result').innerHTML = playeroname + " wins";
    //draw condition
    } else {
        document.getElementById('result').innerHTML = "It is a Draw";
    }


}



/*
a	b	c
d	e	f
g	h	i

*/