#pragma strict

var footsteps : AudioClip;
var moveSpeed = 5.0;

var left : KeyCode;
var right : KeyCode;
var jump : KeyCode;
var fallPlay : KeyCode;
var moved = false;
var leftright : String;
var stand : String;
//public var target : Transform;
var platform : Transform;
var platform2 : Transform;
var platform3 : Transform;
var LincolnControllerMove : String;
var ControllerFall : String;
var player : Collider;
var onFloor = false;
var ifp2exists = true;
var ifp3exists = true;
var floor : GameObject;
var controller : CharacterController;
public var frozen = false;
var timeSinceButtonUp = 0;
var inTrig = false;

//animation.wrapMode = WrapMode.Loop;

function Start ()
{
	controller  = GetComponent(CharacterController);
	animation.Play(stand);
	//audio.clip = footsteps;
	//audio.loop = true;
	//animation("running").wrapMode = WrapMode.Loop;
}

function Update () {


	var script = this.gameObject.GetComponent(taftPunch);
	if(this.gameObject.name == "TaftDone2")
	{
		//Debug.Log(script.plsStopTaft);
		if(script.plsStopTaft == true) //&& this.gameObject.name == "taftp")
		{
			animation.Play("stun", PlayMode.StopAll);
			//animation.Stop("walking");
		}
	}
	
	if(!frozen) //&& taftPunch.playername == "lincoln")
	{
		
		if (Input.GetAxis(LincolnControllerMove) < 0)
		{
			moved = true;
			transform.eulerAngles.y = -90;
			                               
			                               
			animation.Play(leftright);
			//animation.wrapMode = WrapMode.Loop;
			//isMoving = true;
			transform.Translate(Vector3(0, 0, moveSpeed) * Time.deltaTime);
			//controller.SimpleMove(Vector3(-moveSpeed, 0, 0));
			
				
			if(Input.GetKey(jump))
			{
				audio.Stop();
				
			}
				
			else if(!audio.isPlaying)
				audio.Play();
				
			//animation.Play(stand);
			///if(lincoln.position.y != 11.50729)
			//	audio.Stop();
			//isMoving = true;
			//runSound();
			
		}
		else if (Input.GetAxis(LincolnControllerMove) > 0)
		{
			moved = true;
			//Debug.Log("going right");
			transform.eulerAngles.y = 90;
			animation.Play(leftright);
			transform.Translate(Vector3(0, 0, moveSpeed) * Time.deltaTime);
			
			if(Input.GetKey(jump))
			{
				audio.Stop();

			}
				
			else if(!audio.isPlaying)
				audio.Play();
		}
		else if(Input.GetAxis(ControllerFall) < -0.8f)
		{
			Physics.IgnoreCollision(player.GetComponent(CharacterController), platform.GetComponent(BoxCollider));
			if(ifp2exists)
				Physics.IgnoreCollision(player.GetComponent(CharacterController), platform2.GetComponent(BoxCollider));
			if(ifp3exists)
				Physics.IgnoreCollision(player.GetComponent(CharacterController), platform3.GetComponent(BoxCollider));
		}

		
		//if(Input.GetAxis(LincolnControllerMove)==0 && !onFloor)
		//{
			
		//	Physics.IgnoreCollision(player.GetComponent(CharacterController), platform.GetComponent(BoxCollider), false);
		//	Physics.IgnoreCollision(player.GetComponent(CharacterController), platform2.GetComponent(BoxCollider), false);
		//	Physics.IgnoreCollision(player.GetComponent(CharacterController), platform3.GetComponent(BoxCollider), false);
		
		//}

		if(moved == true)
		if(Input.GetAxis(LincolnControllerMove) == 0 || Input.GetAxis(LincolnControllerMove) == 0)
		{
			animation.Stop(leftright);
			//animation.CrossFade("standing");
			//animation.wrapMode = WrapMode.Once;
			animation.Play(stand);
			//audio.Stop();
			//isMoving = false;
			//runSound();
			audio.Stop();
			moved = false;
		}
	}
	else
	{
		//if(this.gameObject.name == "TaftDone2")
		//{
		//	animation.Stop("walking");
		///	animation.Play("stun");
		//
	}

}

function OnTriggerEnter (other : Collider) {
		//		Physics.IgnoreLayerCollision(8,9);

	inTrig = true;
	if(other.gameObject.name == floor.name)
		onFloor = true;
		
	//Debug.Log("entered the floor");
}



function OnTriggerExit (other : Collider) {
	//Physics.IgnoreLayerCollision(8,9, false);
	inTrig = false;
	if(other.gameObject.name == floor.name)
		onFloor = false;
	//Debug.Log("exited the floor");
}

function OnCollisionEnter(player : Collision)
{
	//Debug.Log(player.gameObject.name);
}


