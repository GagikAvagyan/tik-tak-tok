let UserResp =  'x', board = $('.Items'), win = [ ], step = 0; // variables
function remov(){ $('div').removeClass('Items'); } // remove 'Items' class

$('.Items').click(function () // Start Game function
{ if($(this).hasClass('Items')){ // check Items class
    if($(this).html() !== ""){ }
    else{
        $(this).append(UserResp); // Append 'x' or 'o'
        step = step + 1; step === 9 ? $('#Mes').html('The game is finished no one was won') + Clear(): ''; // no one was won
        win[0] = board[0].innerHTML + board[1].innerHTML + board[2].innerHTML;
        win[1] = board[3].innerHTML + board[4].innerHTML + board[5].innerHTML;
        win[2] = board[6].innerHTML + board[7].innerHTML + board[8].innerHTML;
        win[3] = board[0].innerHTML + board[3].innerHTML + board[6].innerHTML;
        win[4] = board[1].innerHTML + board[4].innerHTML + board[7].innerHTML;
        win[5] = board[2].innerHTML + board[5].innerHTML + board[8].innerHTML;
        win[6] = board[0].innerHTML + board[4].innerHTML + board[8].innerHTML;
        win[7]= board[2].innerHTML + board[4].innerHTML + board[6].innerHTML;
        for(i=0; i<win.length; i++) { // Win Cycle
            win[i] === 'xxx' || win[i] === 'ooo' ? $('#Mes').html('The game finished '+ UserResp +' was won') + Clear(): '';
        }
        UserResp === 'x' ? UserResp = 'o' :UserResp = 'x'; // if UserResp = 'x' change to 'o' and vice versa
        UserResp === 'o' ? $(this).addClass('x'): ''; // if UserResp = 'x' add class 'x'
    }
     function Clear(){ remov();  setTimeout(()=>{  window.location.reload(1);}, 4000); } // clear board
} });



