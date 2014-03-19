#pragma strict

var attack1 : KeyCode;
var attack2 : KeyCode;
var attack3 : KeyCode;
var particle : ParticleSystem;
//var attacking = false;
var cube : GameObject;
var hand : Transform;
var cubeClone : Rigidbody;
var attack1buf = false;
var attack2buf = false;
var attack3buf = false;


function Start () {

	//cubeClone = 
	//script = floor.GetComponent("popVoteMeter");
}

function Update () {

	//otherScript = GetComponent("popVoteMeter"); 
    //Debug(otherScript.hit);
	
	if(Input.GetKeyDown(attack1) && attack1buf == false)
	{

		//attacking = true;
		
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring1");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		attack1buf = true;
		WaitAndDestroy(0.3f, .05f, cubeClone);//You can use this move many times a second.
		
    	//Destroy(cubeClone.gameObject);
		
		//particle.Emit(2);
		
		//particleEmitter.Emit();
		//particleEmitter.Emit(Vector3.zero, Vector3.forward, 20, 5000, Color.cyan);
		//Debug.Log("punching");
		
		

	}
	if(Input.GetKeyDown(attack2) && attack1buf == false)
	{
		//attacking = true;
		//particle.Emit(2);
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring2");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		attack1buf = true;
		WaitAndDestroy(0.3f, .5f, cubeClone);
		
	}
	
	if(Input.GetKeyDown(attack3) && attack1buf == false)
	{
		//attacking = true;
		animation.Stop("walking");
		//particle.Emit(2);

		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring3");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);

		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		attack1buf = true;
		WaitAndDestroy(0.3f, .5f, cubeClone);
		

	}
}

function OnCollisionEnter(player : Collision)
{

//Debug.Log("The object hit was: " + player.gameObject.name);
	
		
	//Destroy(player.gameObject);

    //Debug.Log("Collision Detected");
 
    
}

function WaitAndDestroy(delayd : float, delay2 : float, obj : Rigidbody){

		yield WaitForSeconds(delayd);
		Destroy (obj.gameObject);
		yield(WaitForSeconds(delay2));
		attack1buf = false;
		//attack2buf = false;
		//attack3buf = false;
	
}
