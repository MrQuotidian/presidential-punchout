// Use this for initialization
function Start () {
}

// Update is called once per frame
function Update () {
}

function OnTriggerEnter (jumper: Collider) {
//make the parent platform ignore the jumper
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