#pragma strict

function Start () {

}

function Update () {

}

function OnCollisionEnter(player : Collision)
{

Debug.Log("The object hit was: " + player.gameObject.name);
	var scriptlinc = player.gameObject.transform.GetComponent(taftPunch);
	
	if(player.gameObject.name == "LincolnFBX5" && scriptlinc.blocking == false && scriptlinc.stunned == false)
	{
		Debug.Log("hit p1");
		Destroy(this);
    	popVoteMeter.hit2 += .09f;
    	if(popVoteMeter.hit > 0 )
    		popVoteMeter.hit -= .09f;
    	else
    	{
    		popVoteMeter.hit = 0;
    	}
		
	}
	else if(player.gameObject.name == "TaftFBX1" && scriptlinc.blocking == false && scriptlinc.stunned == false)
	{
		Debug.Log("hit p2");
		Destroy(this);
		popVoteMeter.hit += .09f;
		if(popVoteMeter.hit2 > 0)
			popVoteMeter.hit2 -= .09f;
		else
    	{
    		popVoteMeter.hit2 = 0;
    	}
	}
    //Debug.Log("Collision Detected");
 
    
}