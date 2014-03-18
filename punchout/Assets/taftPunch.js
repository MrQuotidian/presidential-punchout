#pragma strict

var attack1 : KeyCode;
var attack2 : KeyCode;
var attack3 : KeyCode;
var particle : ParticleSystem;
var attacking = false;
var cube : GameObject;
var hand : Transform;
var cubeClone : Rigidbody;

function Start () {

	//cubeClone = 
	//script = floor.GetComponent("popVoteMeter");
}

function Update () {

	//otherScript = GetComponent("popVoteMeter"); 
    //Debug(otherScript.hit);
	
	if(Input.GetKeyDown(attack1))
	{

		attacking = true;
		
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring1");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		WaitAndDestroy(0.3f, cubeClone);
    	//Destroy(cubeClone.gameObject);
		
		//particle.Emit(2);
		
		//particleEmitter.Emit();
		//particleEmitter.Emit(Vector3.zero, Vector3.forward, 20, 5000, Color.cyan);
		//Debug.Log("punching");
		
		

	}
	if(Input.GetKeyDown(attack2))
	{
		attacking = true;
		//particle.Emit(2);
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring2");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		WaitAndDestroy(0.3f, cubeClone);
		
	}
	
	if(Input.GetKeyDown(attack3))
	{
		attacking = true;
		animation.Stop("walking");
		//particle.Emit(2);

		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring3");
		cubeClone = Instantiate(cube, hand.position, Quaternion.identity).rigidbody;
		//cubeClone.position = Vector3(0,4,0);

		cubeClone.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		WaitAndDestroy(0.3f, cubeClone);
		

	}
}

function OnCollisionEnter(player : Collision)
{

//Debug.Log("The object hit was: " + player.gameObject.name);
	
		
	//Destroy(player.gameObject);

    //Debug.Log("Collision Detected");
 
    
}

function WaitAndDestroy(delayd : float, obj : Rigidbody){

		yield WaitForSeconds(delayd);
		Destroy (obj.gameObject);
	
}
