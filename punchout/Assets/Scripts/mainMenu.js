#pragma strict

/*Controls the main menu interactions*/

var isQuit = false;
var axisInUse = false;
var onStart = false;
var onHow = false;
var onQuit = false;
var start : GameObject;
var quit : GameObject;
var controls : GameObject;

function OnMouseEnter()
{
	//change text color
	renderer.material.color=Color.black;
}

function OnMouseExit()
{
	//change text color
	renderer.material.color=Color.blue;
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
	//onStart = true;
	if(!isQuit && onStart)
		this.renderer.material.color = Color.black;
}

function Update(){

	if(Input.GetAxis("L_YAxis_1") == 0)
		axisInUse = false;
//quit game if escape key is pressed

	if(Input.GetAxis("L_YAxis_1") > 0 && onStart && !axisInUse)
	{
		start.renderer.material.color=Color.black;
		axisInUse = true;
		
		onStart = true;
		onHow = false;
		onQuit = false;
	}
	else if(Input.GetAxis("L_YAxis_1") < 0 && onStart && !axisInUse)
	{
		start.renderer.material.color=Color.blue;
		controls.renderer.material.color=Color.black;
		axisInUse = true;
		
		onStart = false;
		onHow = true;
		onQuit = false;

	}
	
	if(Input.GetAxis("L_YAxis_1") > 0 && onHow && !axisInUse)
	{
		controls.renderer.material.color=Color.blue;
		start.renderer.material.color=Color.black;
		axisInUse = true;
		
		onStart = true;
		onHow = false;
		onQuit = false;
	}
	else if(Input.GetAxis("L_YAxis_1") < 0 && onHow && !axisInUse)
	{
		quit.renderer.material.color=Color.black;
		controls.renderer.material.color=Color.blue;
		axisInUse = true;
		
		onStart = false;
		onHow = false;
		onQuit = true;

	}
	
	if(Input.GetAxis("L_YAxis_1") > 0 && onQuit && !axisInUse)
	{
		controls.renderer.material.color=Color.black;
		quit.renderer.material.color=Color.blue;
		axisInUse = true;
		
		onStart = false;
		onHow = true;
		onQuit = false;
	}
	else if(Input.GetAxis("L_YAxis_1") < 0 && onQuit && !axisInUse)
	{
		quit.renderer.material.color=Color.black;
		axisInUse = true;
		
		onStart = false;
		onHow = false;
		onQuit = true;

	}
	
	
	
	
	if(onStart && Input.GetKey(KeyCode.Joystick1Button0))
	{
		//Debug.Log("here");
		Application.LoadLevel(1);
	}
	
	if(onQuit && Input.GetKey(KeyCode.Joystick1Button0))
	{
		//Debug.Log("here");
		Application.Quit();
	}
	
	if(onHow && Input.GetKey(KeyCode.Joystick1Button0))
	{
		//Debug.Log("here");
		Application.LoadLevel(6);
	}
	
	if (Input.GetKey(KeyCode.Escape))
	{
		Application.Quit();
	}
}