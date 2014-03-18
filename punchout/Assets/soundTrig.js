#pragma strict
var target : Transform;
var IsGrounded = true;


function Start () {

}

function Update () {

}

function OnTriggerEnter(collision : Collider) 
{

//Debug.Log("enter");

	IsGrounded = false;
	//target.audio.enabled = true;

//If you want to have this only trigger once
//Other code to do stuff on trigger goes here. You could:
// 1. Increase a variable to keep track of score
// 2. Transform the colliding object (send the player flying, etc)
// 3. Play a sound (audio.Play() if you have an audio source)
// 4. And much, much more
}

function OnTriggerExit(collision : Collider) 
{
//Debug.Log("exit");

	IsGrounded = true;
	//target.audio.enabled = false;
//If you want to have this only trigger once
//Other code to do stuff on trigger goes here. You could:
// 1. Increase a variable to keep track of score
// 2. Transform the colliding object (send the player flying, etc)
// 3. Play a sound (audio.Play() if you have an audio source)
// 4. And much, much more
}