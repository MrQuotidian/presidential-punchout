#pragma strict
var isMoving = false;
var inAir = false;

var footsteps : AudioClip;
var moveSpeed = 5.0;

var left : KeyCode;
var right : KeyCode;
var jump : KeyCode;

var leftright : String;
//public var target : Transform;

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
		isMoving = true;
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
	
	if(Input.GetKey(KeyCode.Space))
		{
			
		}


	if(Input.GetKeyUp(left) || Input.GetKeyUp(right))
	{
		animation.Stop(leftright);
		//animation.CrossFade("standing");
		//animation.wrapMode = WrapMode.Once;
		//animation.Play("standing");
		audio.Stop();
		isMoving = false;
		//runSound();
		//audio.Stop();
	}
	
	
}


