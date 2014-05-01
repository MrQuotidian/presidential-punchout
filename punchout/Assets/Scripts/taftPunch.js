#pragma strict

var attack1 : KeyCode;
var attack2 : KeyCode;
var attack3 : KeyCode;
var attack4 : KeyCode;
var block : KeyCode;
var t : int;
public var blocking = false;
var stunned = false;
var left : KeyCode;
var right : KeyCode;
var particle : ParticleSystem;
//var attacking = false;
var cube : GameObject;
var cube2 : GameObject;
var cube3 : GameObject;
var cube4 : GameObject;
var hand : Transform;
var cubeClone : Rigidbody;
var cubeClone2 : Rigidbody;
var cubeClone3 : Rigidbody;
var cubeClone4 : Rigidbody;
var attack1buf = false;
var ControllerMove : String;
var stand : String;
var knockback : int;
var jab : AudioClip;
var upper : AudioClip;
var lefthook : AudioClip;
var righthook : AudioClip;
var reach : AudioClip;
var footsteps : AudioClip;
var idle : String;
//public var playername;
//var script : AccessScript;
var sound = new AudioClip[7];
var plsStopTaft = false;
var isItem = false;
var emitSpeed = 20;
var numberHits = 0;
var numberDefs = 0;
var isFast = false;
var hasShield = false;
var shield : GameObject;
var shiel : GameObject;

function Start () {


	//cubeClone = 
	//script = floor.GetComponent("popVoteMeter");
}

function Update () {

	//Debug.Log(numberDefs);
	//if(Input.GetKey(left) || Input.GetKey(right))
	//{
	//	particle.Clear();
	//}
	if(hasShield)
	{	
		if(this.gameObject.transform.parent.rotation.y >= 0)
		{
			shiel.gameObject.transform.position.x = this.gameObject.transform.position.x + 2;
			shiel.gameObject.transform.position.y = this.gameObject.transform.position.y + 3;
			//shiel.gameObject.transform.rotation.x = 80;
			//shiel.gameObject.transform.rotation.y = 0;
			//if(shiel.transform.rotation.x > 0)
				//shiel.transform.rotation.x = -shiel.transform.rotation.x;
			//shiel.gameObject.transform.rotation.z = 40;

						

		}
		else{
			shiel.gameObject.transform.position.x = this.gameObject.transform.position.x - 2;
			shiel.gameObject.transform.position.y = this.gameObject.transform.position.y + 3;
			//if(shiel.transform.rotation.x > 0)
				//shiel.transform.rotation.x = -shiel.transform.rotation.x;
			//shiel.gameObject.transform.rotation.x = -80;
			//shiel.gameObject.transform.rotation.y = 0;
			//shiel.gameObject.transform.rotation.z = 40;



		}
	}
	
	if(isFast == false)
	{
		var sp = this.gameObject.transform.parent.GetComponent(AnimationScript);
		//Debug.Log(sp);
		sp.moveSpeed = 20;
	}
	
	if(!audio.isPlaying)
	{
		audio.clip = footsteps;
	}
	//otherScript = GetComponent("popVoteMeter"); 
    //Debug(otherScript.hit);
    if(stunned)
    {
  		var script = transform.parent.gameObject.GetComponent(AnimationScript);
    	script.frozen = true;
    	var scriptch = transform.gameObject.GetComponent(AnimationScript);
    	scriptch.frozen = true;
    	//playername = "lincoln";
    	//DisableKey(left);
    	//DisableKey(right);
    	//Debug.Log(transform.parent.name);
		//AnimationScript.frozen = true;
    }
    
	if(stunned == false)
	{
	
		var scriptch2 = transform.gameObject.GetComponent(AnimationScript);
    	scriptch2.frozen = false;
		var script2 = transform.parent.gameObject.GetComponent(AnimationScript);
		script2.frozen = false;
		
		if(Input.GetKeyDown(attack1) && attack1buf == false  && !Input.GetAxis(ControllerMove))// && !Input.GetKey(right))
		{
			particle.Emit(100);

			//attacking = true;
			//Debug.Log("punching");
			animation.Stop(idle);
			//transform.Translate(0, 0, 0);
			animation.CrossFade("punchstring1");
			stunned = true;

			audio.clip = jab;
			audio.Play();
			cubeClone = Instantiate(cube, hand.position, transform.rotation).rigidbody;
			//cubeClone.position = Vector3(0,4,0);
			//cubeClone.transform.Rotate(Vector3(0, 90, 0));
			cubeClone.velocity = transform.forward * emitSpeed;
			cubeClone.gameObject.renderer.material.color.a = 0.5;
			//yield WaitForSeconds(3);
			//audio.Stop();
			attack1buf = true;
			//this.knockback = 10;
			WaitAndDestroy(0.4f, .02f, cubeClone);//You can use this move many times a second.
			//animation.Play(stand);
			numberHits++;
			if(numberHits == 5)
				emitSpeed = 20;
				
			isFast = false;

	    	//Destroy(cubeClone.gameObject);
			
			//particle.Emit(2);
			
			//particleEmitter.Emit();
			//particleEmitter.Emit(Vector3.zero, Vector3.forward, 20, 5000, Color.cyan);
			//Debug.Log("punching");
			
			

		}
		if(Input.GetKeyDown(attack2) && attack1buf == false && !Input.GetAxis(ControllerMove))// && !Input.GetKey(right))
		{
		
			particle.Emit(500);
			//attacking = true;
			//particle.Emit(2);
			animation.Stop(idle);
			//transform.Translate(0, 0, 0);
			animation.CrossFade("punchstring2");
			stunned = true;

			audio.clip = reach;
			audio.Play();
			cubeClone2 = Instantiate(cube2, hand.position, transform.rotation).rigidbody;
						cubeClone2.gameObject.renderer.material.color.a = 0.5;

			//cubeClone.position = Vector3(0,4,0);
			//this.knockback = 20;
			cubeClone2.velocity = transform.forward * emitSpeed;
			//yield WaitForSeconds(3);
			//audio.Stop();
			attack1buf = true;
			WaitAndDestroy(0.3f, .4f, cubeClone2);
			numberHits++;
			if(numberHits == 5)
				emitSpeed = 20;

			isFast = false;

			
			
		}
		
		if(Input.GetKeyDown(attack3) && attack1buf == false && !Input.GetAxis(ControllerMove))// && !Input.GetKey(right))
		{
			
			particle.Emit(500);
					
			//attacking = true;
			animation.Stop(idle);
			//particle.Emit(2);
			stunned = true;
			//transform.Translate(0, 0, 0);
			animation.CrossFade("punchstring3");
			audio.clip = lefthook;
			audio.loop = false;
			audio.Play();
			cubeClone3 = Instantiate(cube3, hand.position, transform.rotation).rigidbody;
						cubeClone3.gameObject.renderer.material.color.a = 0.5;

			//cubeClone.position = Vector3(0,4,0);

			cubeClone3.velocity = transform.forward * emitSpeed;
			//yield WaitForSeconds(3);
			//audio.Stop();
			//this.knockback = 20;
			attack1buf = true;
			WaitAndDestroy(0.2f, .6f, cubeClone3);
			numberHits++;
			if(numberHits == 5)
				emitSpeed = 20;
			
			isFast = false;

			
			
			

		}
		
		if(Input.GetKeyDown(attack4) && attack1buf == false && !Input.GetAxis(ControllerMove))// && !Input.GetKey(right))
		{
			particle.Emit(500);
			//attacking = true;
			animation.Stop(idle);
			//particle.Emit(2);

			//transform.Translate(0, 0, 0);
			animation.CrossFade("punchstring4");
			stunned = true;
			audio.clip = righthook;
			audio.loop = false;
			audio.Play();
			cubeClone4 = Instantiate(cube4, hand.position, transform.rotation).rigidbody;
			//cubeClone.position = Vector3(0,4,0);
			cubeClone4.gameObject.renderer.material.color.a = 0.5;


			//cubeClone4.velocity = transform.forward * 20;
			cubeClone4.transform.Rotate(Vector3(-180, 0, 0), 20);

			if(transform.forward.x < 0)
				cubeClone4.velocity = Vector3(-10, emitSpeed, 0);//transform.forward * 20;
			else
				cubeClone4.velocity = Vector3(10, emitSpeed, 0);//transform.forward * 20;
			//this.knockback = 1000;
			//cubeClone.velocity.y = transform.up * 10;
			//yield WaitForSeconds(3);
			//audio.Stop();
			attack1buf = true;
			WaitAndDestroy(0.4f, .8f, cubeClone4);
			numberHits++;
			if(numberHits == 5)
				emitSpeed = 20;
		
			isFast = false;

			//audio.clip = footsteps;
		}
		
		if(Input.GetKey(block) && attack1buf == false && !Input.GetAxis(ControllerMove) && !hasShield)// && !Input.GetKey(right))
		{
			//attacking = true;
			animation.Stop(idle);
			//particle.Emit(2);
			blocking = true;
			//transform.Translate(0, 0, 0);
			animation.CrossFade("block");
			
			t += 1;
			if(t >= 70)
			{
				blocking = false;
				attack1buf = true;
				animation.CrossFade(idle);
			}
			//Time.time = 0;
			//Debug.Log(t);

		}
		if(Input.GetKeyUp(block))
		{
			blocking = false;
			attack1buf = false;
			t = 0;
			animation.CrossFade(idle);
		}
	}
}

function OnTriggerEnter(player : Collider)
{

	//Debug.Log(player.gameObject.name);
	if(player.gameObject.name == "item1(Clone)")
	{
		//Debug.Log("Picked up item 1");
		emitSpeed = 60;
		numberHits = 0;
		Destroy(player.gameObject);
		isItem = true;
		
	}
	if(player.gameObject.name == "item2(Clone)")
	{
		//Debug.Log("Picked up item 1");
		//this.gameObject.GetComponent
		//numberHits = 0;
		var sp = this.gameObject.transform.parent.GetComponent(AnimationScript);
		//Debug.Log(sp);
		sp.moveSpeed = 35;
		isFast = true;
		Destroy(player.gameObject);
		isItem = true;
		
	}
	if(player.gameObject.name == "item3(Clone)")
	{	
		if(hasShield)
		{
			Destroy(player.gameObject);
			isItem = true;
		}
		else
		{
			blocking = true;
			numberDefs = 0;
			//Debug.Log(this.gameObject.transform.parent.rotation.y);
			if(this.gameObject.transform.parent.rotation.y >= 0)
			{
				shiel = Instantiate(shield, Vector3(this.gameObject.transform.position.x + 2, this.gameObject.transform.position.y + 3, this.gameObject.transform.position.z), Quaternion.identity);
			//this.gameObject.renderer.material.color = Color.black;
				shiel.transform.Rotate(Vector3(-80,0,0));
				//Debug.Log("Facing right");
			}
			else{
				shiel = Instantiate(shield, Vector3(this.gameObject.transform.position.x - 2, this.gameObject.transform.position.y + 3, this.gameObject.transform.position.z), Quaternion.identity);
			//this.gameObject.renderer.material.color = Color.black;
				shiel.transform.Rotate(Vector3(-80,0,0));
							//Debug.Log("Facing left");

			}
			//shield.velocity = -transform.up * Time.deltaTime * 2;
			hasShield = true;
			Destroy(player.gameObject);
			isItem = true;
		}
	}
	

}

function OnCollisionEnter(player : Collision)
{

	if(hasShield && !isItem)
	{
		numberDefs++;
		if(numberDefs >= 2)
		{
			hasShield = false;
			blocking = false;
			Destroy(shiel.gameObject);
			isItem = true;
		}
	}
	//Debug.Log(blocking);
	//Debug.Log(player.gameObject.name);
	
	
	
	if(blocking == false && player.gameObject.name != this && !isItem && !hasShield)
	{
		//particle.Clear();
		//animation.Stop("walking");
		//animation.Stop(stand);
		//Debug.Log(animation.IsPlaying();
		//if(this.gameObject.name == "LincolnFBX5")
		animation.Play("stun", PlayMode.StopAll);
		plsStopTaft = true;
		stunned = true;
		//Debug.Log(this);
		var soundNum = Random.Range(0, 6);
		audio.clip = sound[soundNum];
		audio.loop = false;
		audio.Play();
		
		//var scrip = player.gameObject.GetComponent(taftPunch);
		//Debug.Log(player.gameObject.name);
		
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
				transform.parent.transform.Translate(Vector3(0, 0, knockback) * Time.deltaTime);
		}	 

		yield WaitForSeconds(.7f);
		{
			audio.Stop();
			stunned = false;
			plsStopTaft = false;
		}
    }
    isItem = false;
}

function WaitAndDestroy(delayd : float, delay2 : float, obj : Rigidbody){
		
		yield WaitForSeconds(delayd);
		Destroy (obj.gameObject);
		yield(WaitForSeconds(delay2));
		particle.Clear();
		stunned = false;
		animation.Play(stand);

		audio.Stop();
		audio.clip = footsteps;
		attack1buf = false;
		//attack2buf = false;
		//attack3buf = false;
	
}