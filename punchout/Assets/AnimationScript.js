#pragma strict
var isMoving = false;
var inAir = false;
var lincoln : Transform;
var gStyle : GUIStyle;
var character : GameObject;
var footsteps : AudioClip;
var distToGround : float;
var score;
var gStyle2 : GUIStyle;

//animation.wrapMode = WrapMode.Loop;

function Start ()
{
	audio.clip = footsteps;
	audio.loop = true;
	distToGround = collider.bounds.extents.y;
	//animation("Run").wrapMode = WrapMode.Loop;
}

function Update () {
	//if(Input.GetKeyDown("space"))
		//animation.Play("jump");
		
	//if(Input.GetKey("mouse 0"))
		//animation.Play("chop");

	
	if (Input.GetKey(KeyCode.A) || Input.GetKey(KeyCode.D))
	{
		animation.Play("Run");
		//animation.wrapMode = WrapMode.Loop;
		isMoving = true;

			
		if(Input.GetKey(KeyCode.Space))
			audio.Stop();
			
		else if(!audio.isPlaying)
			audio.Play();
		///if(lincoln.position.y != 11.50729)
		//	audio.Stop();
		//isMoving = true;
		//runSound();
		
	}
	


	if(Input.GetKeyUp(KeyCode.A) || Input.GetKeyUp(KeyCode.D))
	{
		animation.Stop("Run");
		//animation.CrossFade("standing");
		//animation.wrapMode = WrapMode.Once;
		animation.Play("standing");
		audio.Stop();
		isMoving = false;
		//runSound();
		//audio.Stop();
	}

}





function OnGUI () 
{
		GUI.Box(Rect(0,Screen.height/1.07,Screen.width,Screen.height/15),"POPULAR VOTE METER", gStyle);
		GUI.Box(Rect(0,Screen.height/1.02,Screen.width,Screen.height/15),"score1", gStyle2);

}

