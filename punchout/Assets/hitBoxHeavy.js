#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(player : Collision)
{

Debug.Log("The object hit was: " + player.gameObject.name);
	
	if(player.gameObject.name == "LincolnFBX2")
	{
		Debug.Log("hit p1");
		Destroy(this);
    	popVoteMeter.hit2 += .1f;
		
	}
	else if(player.gameObject.name == "TaftFBX1")
	{
		Debug.Log("hit p2");
		Destroy(this);
		popVoteMeter.hit += .1f;
	}
    //Debug.Log("Collision Detected");
 
    
}