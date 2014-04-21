#pragma strict

var init = false;

function Start () {
	
}

function Update () {
	
	if(!init)
		transform.Translate(Vector3(5,0,0) * Time.deltaTime);

	
	if(transform.position.x <= -20)
		transform.Translate(Vector3(5, 0, 0) * Time.deltaTime);
	else if(transform.position.x > 0 && transform.position.x <= 20)
	{
		init = true;
		transform.Translate(Vector3(-5, 0, 0) * Time.deltaTime);
	}
	

}