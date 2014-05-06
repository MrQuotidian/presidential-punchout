#pragma strict

/*Detects collisions with platforms and allows players to jump through them*/

// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}

function OnTriggerEnter (jumper: Collider) {
//make the parent platform ignore the jumper
	//Debug.Log(jumper.gameObject.name);
	var platform = transform.parent;
	if(jumper.GetComponent(CharacterController))
    	Physics.IgnoreCollision(jumper.GetComponent(CharacterController), platform.GetComponent(BoxCollider));

}

function OnTriggerExit (jumper: Collider) {
//re-enable collision between jumper and parent platform
    var platform = transform.parent;

	if(jumper.GetComponent(CharacterController))
    	Physics.IgnoreCollision(jumper.GetComponent(CharacterController), platform.GetComponent(BoxCollider), false);

}