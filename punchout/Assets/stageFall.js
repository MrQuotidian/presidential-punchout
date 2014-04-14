#pragma strict

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