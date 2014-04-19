#pragma strict

var isQuit=false;

function OnMouseEnter()
{
	//change text color
	renderer.material.color=Color.black;
}

function OnMouseExit()
{
	//change text color
	renderer.material.color=Color.red;
}

function OnMouseUp()
{
	//is this quit
	if (isQuit==true) {
		//quit the game
		Application.Quit();
	}
	else 
	{
		//load level
		Application.LoadLevel(1);
	}
}

function Start()
{
	if(!isQuit)
		this.renderer.material.color = Color.black;
}

function Update(){
//quit game if escape key is pressed

	if(Input.GetAxis("L_YAxis_1") > 0 && this.name == "start")
	{
		renderer.material.color=Color.black;
	}
	else if(Input.GetAxis("L_YAxis_1") < 0 && this.name == "start")
	{
		renderer.material.color=Color.red;

	}
	
	if(Input.GetAxis("L_YAxis_1") < 0 && this.name == "quit")
	{
		renderer.material.color=Color.black;
	}
	else if(Input.GetAxis("L_YAxis_1") > 0 && this.name == "quit")
	{
		renderer.material.color=Color.red;

	}
	
	if(this.name == "start" && this.renderer.material.color == Color.black && Input.GetKey(KeyCode.Joystick1Button0))
	{
		//Debug.Log("here");
		Application.LoadLevel(1);
	}
	
	if (Input.GetKey(KeyCode.Escape)) 
	{ 
		Application.Quit();
	}
}