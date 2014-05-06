#pragma strict

/*If the character falls off the stage, they will lose*/

function Start () {

}

function Update () {

}

function OnTriggerEnter(other : Collider) {

	if(other.gameObject.name == "taftp" || other.gameObject.name == "TaftDone2")
		popVoteMeter.hit = 100;
	if(other.gameObject.name == "lincoln" || other.gameObject.name == "LincolnFBX5")
		popVoteMeter.hit2 = 100;
}