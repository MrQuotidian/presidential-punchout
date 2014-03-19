#pragma strict

var footsteps : AudioClip;
var moveSpeed = 5.0;

var left : KeyCode;
var right : KeyCode;
var jump : KeyCode;
var fallPlay : KeyCode;

var leftright : String;
var stand : String;
//public var target : Transform;
var platform : Transform;
var platform2 : Transform;
var platform3 : Transform;

var player : Collider;
var onFloor = false;

//animation.wrapMode = WrapMode.Loop;

function Start ()
{
	audio.clip = footsteps;
	audio.loop = true;
	//animation("running").wrapMode = WrapMode.Loop;
}

function Update () {
	//if(Input.GetKeyDown("space"))
		//animation.Play("jump");
		
	//if(Input.GetKey("mouse 0"))
		//animation.Play("chop");

		
	
	if (Input.GetKey(left))
	{
		transform.eulerAngles.y = -90;
		                               
		                               
		animation.Play(leftright);
		//animation.wrapMode = WrapMode.Loop;
		//isMoving = true;
		transform.Translate(Vector3(0, 0, moveSpeed) * Time.deltaTime);
		
			
		if(Input.GetKey(jump))
		{
			audio.Stop();
			
		}
			
		else if(!audio.isPlaying)
			audio.Play();
		///if(lincoln.position.y != 11.50729)
		//	audio.Stop();
		//isMoving = true;
		//runSound();
		
	}
	else if (Input.GetKey(right))
	{
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
	else if(Input.GetKey(fallPlay))
	{
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform.GetComponent(BoxCollider));
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform2.GetComponent(BoxCollider));
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform3.GetComponent(BoxCollider));
	}
	
	if(Input.GetKeyUp(fallPlay) && !onFloor)
	{
		
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform.GetComponent(BoxCollider), false);
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform2.GetComponent(BoxCollider), false);
		Physics.IgnoreCollision(player.GetComponent(CharacterController), platform3.GetComponent(BoxCollider), false);
	
	}

	if(Input.GetKeyUp(left) || Input.GetKeyUp(right))
	{
		animation.Stop(leftright);
		//animation.CrossFade("standing");
		//animation.wrapMode = WrapMode.Once;
		animation.Play(stand);
		audio.Stop();
		//isMoving = false;
		//runSound();
		//audio.Stop();
	}
	
	
}

function OnTriggerEnter (other : Collider) {
	
	if(other.gameObject.name == "floorsoundTrig")
		onFloor = true;
}

function OnTriggerExit (other : Collider) {
	
	if(other.gameObject.name == "floorsoundTrig")
		onFloor = false;
}


