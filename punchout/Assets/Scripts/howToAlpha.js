#pragma strict
/*Sets the alpha level of the how to screen*/
function Start () {
	this.gameObject.renderer.material.color.a = 0.5;

}

function Update () {

	if(Input.GetKey(KeyCode.JoystickButton1))
		Application.LoadLevel(0);
}