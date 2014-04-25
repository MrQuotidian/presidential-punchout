#pragma strict

function Start () {
	this.gameObject.renderer.material.color.a = 0.5;

}

function Update () {

	if(Input.GetKey(KeyCode.JoystickButton1))
		Application.LoadLevel(0);
}