// var bet_amount_Large = document.getElementById('bet_amount_Large')
// var bet_amount_Small = document.getElementById('bet_amount_Small')

var yourValue = 0

var win = 0

function play(){

var Large = document.getElementById('Large')
var Small = document.getElementById('Small')
var bet_amount = document.getElementById('bet_amount').value

var dice_1 = Math.floor(Math.random()*6 + 1)
var dice_2 = Math.floor(Math.random()*6 + 1)
var dice_3 = Math.floor(Math.random()*6 + 1)

var sum = dice_1 + dice_2 + dice_3

// if (sum < Large) {
// 	win = bet_amount_Small - bet_amount_Large
// 	yourValue = yourValue + win
// 	console.log("dice roll " + sum)
//     console.log("Now you have " + yourValue)
// } else if (sum > Samll) {
// 	win = bet_amount_Large - bet_amount_Small
// 	yourValue = yourValue + win

if (Large.checked && sum > 10) 
	{
     win = +bet_amount
       
	} 
	else if (Small.checked && sum < 11) 
	{
	  win = +bet_amount
	  
	} 
	else if (Large.checked && sum < 10) 
	{
	  win = -bet_amount	  
	  
	} 
	else if (Small.checked && sum > 10)
	{
	  win = -bet_amount
	  
	}
    
    yourValue = yourValue + win
	console.log("dice roll " + sum)
    console.log("Now you have " + yourValue)

}