var firstPlayerScore =Math.floor(Math.random()*6+1);
var secondPlayerScore =Math.floor(Math.random()*6+1);
var img1 = document.querySelector(".img1");
var img2 = document.querySelector(".img2");

//add dice image to every player
// match the number with the player and dice photo
img1.setAttribute("src","images\\dice"+firstPlayerScore+".png");
img2.setAttribute("src","images\\dice"+secondPlayerScore+".png");

/* compare between two scores
    and display the result*/

if(firstPlayerScore === secondPlayerScore){
  document.querySelector("h1").textContent = "Draw";
}else if (firstPlayerScore > secondPlayerScore) {
  document.querySelector("h1").textContent = "🚩Player 1 Wins!!";
}else{
    document.querySelector("h1").textContent = "Player 2 Wins!!🚩";
}
