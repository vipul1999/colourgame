var numberOfSquares=6;
var colours=generateRandom(numberOfSquares);
var squares= document.querySelectorAll(".square");
var pickedColour=colours[pickRandom()];
var colourDisplay=document.getElementById("colourDisplay");
colourDisplay.textContent=pickedColour;
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetbutton=document.getElementById("reset");
var easyBtn=document.getElementById("easyBtn");
var hardBtn=document.getElementById("hardBtn");



for (var i=0;i<squares.length;i++)
{
	//add initial colours to squares
	squares[i].style.background=colours[i];
	//add click listeners
	squares[i].addEventListener("click",function(){
		//grab colour of clicked square
	   var clickedColour=this.style.background;
	 
	   
		//compare it with colour of picked square
		if(clickedColour==pickedColour)
		{
			messageDisplay.textContent="Correct";
			changeColour(clickedColour);
			h1.style.background=clickedColour;
			resetbutton.textContent="Play Again!"
		}
		else{
			this.style.background="#232323";
			messageDisplay.textContent="Try Again!";
		}

	});
}


easyBtn.addEventListener("click",function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numberOfSquares=3;
	colours=generateRandom(numberOfSquares);
	pickedColour=colours[pickRandom()];
	colourDisplay.textContent=pickedColour;
	for(var i=0;i<squares.length;i++)
	{
		if(colours[i]){
			squares[i].style.background=colours[i];
		}
		else{
			squares[i].style.background="none";
		}
	}
});

hardBtn.addEventListener("click",function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numberOfSquares=6;
	colours=generateRandom(numberOfSquares);
	pickedColour=colours[pickRandom()];
	colourDisplay.textContent=pickedColour;
	
	for(var i=0;i<squares.length;i++)
	{
		
		squares[i].style.background=colours[i];
		squares[i].style.display="block";
	}

});

resetbutton.addEventListener("click",function(){
	//generate random colours
	colours=generateRandom(numberOfSquares);
	// set them to all squares
    for (var i =0;i<squares.length;i++) {
    	squares[i].style.background=colours[i];
    }
	//pick one out of these
    pickedColour=colours[pickRandom()];

	//update picked colour
	colourDisplay.textContent=pickedColour;

	//update h1 background to previous black
	h1.style.background="steelblue";
	messageDisplay.textContent="";
	resetbutton.textContent="New Colours";

});

function changeColour(colour) {   //set given colour to all squares

	// body...
	for (var i = 0;i<squares.length;i++) {
				squares[i].style.background=colour;
			}
}
function pickRandom()
{
	var random=Math.floor(Math.random()*colours.length);
	return random;
}
function generateRandom(num) //returns an array of colour of given num 
{
	var arr=[];
	for(var i=0;i<num;i++)
	{
		arr.push(generateRandomColour());

	}
	return arr;
}
function generateRandomColour()  //generate a random colour and return it;
{
	    var r=Math.floor(Math.random()*256);
		var g=Math.floor(Math.random()*256);
		var b=Math.floor(Math.random()*256);
		return "rgb("+r+", "+g+", "+b+")";
}