#pragma strict

var attack1 : KeyCode;
var attack2 : KeyCode;
var attack3 : KeyCode;
var left : KeyCode;
var right : KeyCode;
var particle : ParticleSystem;
//var attacking = false;
var cube : GameObject;
var cube2 : GameObject;
var cube3 : GameObject;
var hand : Transform;
var cubeClone : Rigidbody;
var cubeClone2 : Rigidbody;
var cubeClone3 : Rigidbody;
var attack1buf = false;
var attack2buf = false;
var attack3buf = false;
var knockback = 100;


function Start () {

	//cubeClone = 
	//script = floor.GetComponent("popVoteMeter");
}

function Update () {

	//otherScript = GetComponent("popVoteMeter"); 
    //Debug(otherScript.hit);
	
	if(Input.GetKeyDown(attack1) && attack1buf == false  && !Input.GetKey(left) && !Input.GetKey(right))
	{

		//attacking = true;
		
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring1");
		cubeClone = Instantiate(cube, hand.position, transform.rotation).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		//cubeClone.transform.Rotate(Vector3(0, 90, 0));
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
	if(Input.GetKeyDown(attack2) && attack1buf == false && !Input.GetKey(left) && !Input.GetKey(right))
	{
		//attacking = true;
		//particle.Emit(2);
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring2");
		cubeClone2 = Instantiate(cube2, hand.position, transform.rotation).rigidbody;
		//cubeClone.position = Vector3(0,4,0);
		
		cubeClone2.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		attack1buf = true;
		WaitAndDestroy(0.2f, .5f, cubeClone2);
		
	}
	
	if(Input.GetKeyDown(attack3) && attack1buf == false && !Input.GetKey(left) && !Input.GetKey(right))
	{
		//attacking = true;
		animation.Stop("walking");
		//particle.Emit(2);

		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring3");
		cubeClone3 = Instantiate(cube3, hand.position, transform.rotation).rigidbody;
		//cubeClone.position = Vector3(0,4,0);

		cubeClone3.velocity = transform.forward * 20;
		//yield WaitForSeconds(3);
		attack1buf = true;
		WaitAndDestroy(0.1f, .5f, cubeClone3);
		

	}
}

function OnCollisionEnter(player : Collision)
{
//Debug.Log("boom y " + player.transform.rotation.y);
//Debug.Log("parent y" + transform.parent.rotation.y);
//Destroy(player.gameObject);
//Debug.Log("NEED TO MOVE BACK NOW " + player.gameObject.name);
if(player.transform.rotation.y < 0 && transform.parent.rotation.y < 0)
{
//	Debug.Log("first one");
	//transform.Translate(Vector3(0, 0, knockback) * Time.deltaTime);
		transform.parent.transform.Translate(Vector3(0, 0, knockback) * Time.deltaTime);

}
else if(player.transform.rotation.y > 0 && transform.parent.rotation.y < 0)
{
//	Debug.Log("first three");
	//transform.Translate(Vector3(0, 0, knockback) * Time.deltaTime);
		transform.parent.transform.Translate(Vector3(0, 0, -knockback) * Time.deltaTime);

}
else if(player.transform.rotation.y < 0 && transform.parent.rotation.y > 0)
{
//			Debug.Log("first two");

		transform.parent.transform.Translate(Vector3(0, 0, -knockback) * Time.deltaTime);

}
else if(player.transform.rotation.y > 0 && transform.parent.rotation.y > 0)
{
//			Debug.Log("first two");

		transform.parent.transform.Translate(Vector3(0, 0, -knockback) * Time.deltaTime);

}

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
