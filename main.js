var player1,player2;
function login(){
    player1=document.getElementById("player1_name").value;
    localStorage.setItem("player1", player1);
    player2=document.getElementById("player2_name").value;
    localStorage.setItem("player2", player2);
    window.location="game.html";
}