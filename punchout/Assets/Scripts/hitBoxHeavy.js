#pragma strict
/*Hitbox stats for the Y button*/
var knock : int;
var damage : float;
function Start () {
	
}

function Update () {

}

function OnCollisionEnter(player : Collision)
{


	var scriptlinc = player.gameObject.transform.GetComponent(taftPunch);


	if(player.gameObject.name == "LincolnFBX5" && scriptlinc.blocking == false)
	{
			scriptlinc.knockback = knock;

		//Debug.Log("hit p1");
		Destroy(this);
    	popVoteMeter.hit2 += damage;
    	if(popVoteMeter.hit > 0)
    		popVoteMeter.hit -= damage;
		else
    	{
    		popVoteMeter.hit = 0;
    	}
	}
	else if(player.gameObject.name == "TaftDone2" && scriptlinc.blocking == false)
	{
			scriptlinc.knockback = knock;

		//Debug.Log("hit p2");
		Destroy(this);
		popVoteMeter.hit += damage;
		if(popVoteMeter.hit2 > 0)
    		popVoteMeter.hit2 -= damage;
    	else
    	{
    		popVoteMeter.hit2 = 0;
    	}
	}

    
}