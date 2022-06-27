
var canvas= new fabric.canvas('myCanvas')

ball_y=1;
ball_x=1;
hole_y=400;
hole_x=800;


block_image_width = 5;	
block_image_height = 5;

function load_img(){
	fabric.Image.fromURL("golf-h.png", function(Img){
		hole_obj= Img;
		hole_obj.scaleToWidth(50);
		hole_obj.scaleToHeight(50);
		hole_obj.set({
			top:hole_y,
			left:hole_x
		});
		canvas.add(hole_obj);
	});
	new_image();
}

function new_image()
{
	fabric.Image.fromURL("ball.png", function(Img){
		ball_obj=Img;
		ball_obj.scaleToWidth(50);;
		ball_obj.scaleToHeight(50)
ball_obj.set({
			top:ball_y,
			left:ball_x
		});
		canvas.add(ball_obj);
	});
	new_image();
}	


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	if((ball_x==hole_x)&&(ball_y==ball_y)){
		canvas.remove(ball_obj)
		document.getElementById("hd3").innerHTML="You Have Hit The goal!!";
		document.getElementById("myCanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		if (player_y>=0)
		{
	   ball_y= ball_y-block_image_height;
	   console.log("block image height =" + block_image_height);
	   console.log("When Up arrow key is pressed, X = " + ball_x+" , Y =" +ball_y);
	   canvas.remove(ball_obj);
	   player_update();
		}
	}

	function down()
	{
		if (player_y<=1050)
		{
	   ball_y= ball_y+block_image_height;
	   console.log("block image height =" + block_image_height);
	   console.log("When Up arrow key is pressed, X = " + ball_x+" , Y =" +ball_y);
	   canvas.remove(ball_obj);
	   player_update();
		}	
	}

	function left()
	{
		if(ball_x >5)
		{
			ball_x= ball_x-block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Up arrow key is pressed, X = " + ball_x+" , Y =" +ball_y);
			canvas.remove(ball_obj);
			player_update();	// Write a code to move ball left side.
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			ball_x= ball_y+block_image_height;
			console.log("block image height =" + block_image_height);
			console.log("When Up arrow key is pressed, X = " + ball_x+" , Y =" +ball_y);
			canvas.remove(ball_obj);
			player_update();// Write a code to move ball right side.
		}
	}
	
}

