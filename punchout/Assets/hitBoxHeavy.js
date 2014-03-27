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
    	if(popVoteMeter.hit > 0)
    		popVoteMeter.hit -= .1f;
		else
    	{
    		popVoteMeter.hit = 0;
    	}
	}
	else if(player.gameObject.name == "TaftFBX1")
	{
		Debug.Log("hit p2");
		Destroy(this);
		popVoteMeter.hit += .1f;
		if(popVoteMeter.hit2 > 0)
    		popVoteMeter.hit2 -= .1f;
    	else
    	{
    		popVoteMeter.hit2 = 0;
    	}
	}
    //Debug.Log("Collision Detected");
 
    
}