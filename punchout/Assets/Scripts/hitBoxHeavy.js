#pragma strict

var knock : int;
function Start () {
	

}

function Update () {

}

function OnCollisionEnter(player : Collision)
{

//Debug.Log("The object hit was: " + player.gameObject.name);
	
	var scriptlinc = player.gameObject.transform.GetComponent(taftPunch);

    //scriptlinc.blocking;
    
	if(player.gameObject.name == "LincolnFBX5" && scriptlinc.blocking == false)
	{
			scriptlinc.knockback = knock;

		Debug.Log("hit p1");
		Destroy(this);
    	popVoteMeter.hit2 += .15f;
    	if(popVoteMeter.hit > 0)
    		popVoteMeter.hit -= .15f;
		else
    	{
    		popVoteMeter.hit = 0;
    	}
	}
	else if(player.gameObject.name == "TaftDone2" && scriptlinc.blocking == false)
	{
			scriptlinc.knockback = knock;

		Debug.Log("hit p2");
		Destroy(this);
		popVoteMeter.hit += .15f;
		if(popVoteMeter.hit2 > 0)
    		popVoteMeter.hit2 -= .15f;
    	else
    	{
    		popVoteMeter.hit2 = 0;
    	}
	}
    //Debug.Log("Collision Detected");
 
    
}