#pragma strict

var character : Transform;
var platform1 : GameObject;
var platform2 : GameObject;
var platform3 : GameObject;

function Start () {


}

function Update () {
	
	//Lower platforms 
	if(character.transform.position.y < 11)
	{
		//if character is under the platform y value disable platform collider.
		platform1.collider.enabled = false;
		platform2.collider.enabled = false;
		platform3.collider.enabled = false;

	}
	else
	{
		platform1.collider.enabled = true;
		platform2.collider.enabled = true;
		platform3.collider.enabled = true;
	}
	
	//upper platform
	if(character.transform.position.y > 11 && character.transform.position.y < 20)
	{
		platform3.collider.enabled = false;

	}
	else
	{
		platform3.collider.enabled = true;

	}

}