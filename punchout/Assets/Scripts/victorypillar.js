#pragma strict
public var speed : float; // m/s
public var isLincolnWinner = false;
var lincoln : GameObject;
var taft : GameObject;
private var variables : GameObject;


function Start(){
	Time.timeScale = 1;
	variables = GameObject.Find("variables");
	var sp = variables.gameObject.transform.GetComponent(vars);
	isLincolnWinner = sp.isLincolnWinner;
}

function Update () {
	if(isLincolnWinner)
	{
		lincoln.gameObject.SetActive(true);
		taft.gameObject.SetActive(false);
	}
	else 
	{
		lincoln.gameObject.SetActive(false);
		taft.gameObject.SetActive(true);
	}
	var step = speed * Time.deltaTime;
	transform.position = Vector3.MoveTowards(transform.position, Vector3(0,-12,0), step);
	if(Input.GetKey(KeyCode.JoystickButton0))
	{
 		Application.LoadLevel(1);
 		
 		//hit = 0;
 		//hit2 = 0;
	}
}
	