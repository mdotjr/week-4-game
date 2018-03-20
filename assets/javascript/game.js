$(document).ready(function(){
 //Generate a random number to start the game off with
//number between 19-120
    var random=Math.floor(Math.random()*101+19)
//display a text of the random number
    $('#randomNumber').text(random);
//generate a random number for each crystal of 1-12
var num1= Math.floor(Math.random()*11+1)
var num2= Math.floor(Math.random()*11+1)
var num3= Math.floor(Math.random()*11+1)
var num4= Math.floor(Math.random()*11+1)    
//track points
var userScore= 0;
var wins= 0;
var losses= 0;

$('#numberWins').text(wins);
$('#numberLosses').text(losses);

function reset(){
    random=Math.floor(Math.random()*101+19);
    $('#randomNumber').text(random);
    num1= Math.floor(Math.random()*11+1);
    num2= Math.floor(Math.random()*11+1);
    num3= Math.floor(Math.random()*11+1);
    num4= Math.floor(Math.random()*11+1);
    userScore=0;
    
    $('#finalScore').text(userScore);

    //adds wins to userScore
    function winner(){
        alert("Congrats! You've won!");
        wins++;
    
    $('#numberWins').text(wins);
        reset();
    //adds losses to userScore
    function loser(){
        alert("What a loser. Try again");
        losses++;
    $('#numberLosses').text(losses);
         reset();    
    }  
    
    //clicks for crystals
    $('#crystalImage').on('click' ,
    function(){
        userScore = userScore + num1;
        console.log("New userScore= " + userScore);
    $('#finalTotal').text(userScore);
    
    //if statements
       if (userScore === random){
           winner(); 
       }else if (userScore > random){
           loser();
          }  
       
    })
    $('#crystalImage').on ('click' ,
    function(){
        userScore = userScore + num2;
     
    $('#finalTotal').text(userScore);
         if (userScore == random){
             winner();
         }else if (userScore > random){
             loser();
         }    
    })
    $('#crystalImage').on('click' ,
    function(){
        userScore = userScore + num3;
        

    $('#finalTotal').text(userScore);
         if (userScore == random){
             winner();
         }else if (userScore > random){
             loser();
         }
    })
    $('#crystalImage').on('click' ,
     function(){
         userScore = userScore + num4;
         
      $('#finalTotal').text(userScore);
          if (userScore == random){
              winner();
          }else if (userScore > random){
              loser();
          }   
     })      
    
    }
}
});
