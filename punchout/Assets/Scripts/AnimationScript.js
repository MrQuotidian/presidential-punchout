#pragma strict
/*Controls moving animations*/
var footsteps : AudioClip;
var moveSpeed = 5.0;

var left : KeyCode;
var right : KeyCode;
var jump : KeyCode;
var fallPlay : KeyCode;
var moved = false;
var leftright : String;
var stand : String;
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


function Start ()
{
	controller  = GetComponent(CharacterController);
	animation.Play(stand);

}

function Update () {


	var script = this.gameObject.GetComponent(taftPunch);
	if(this.gameObject.name == "TaftDone2")
	{
		if(script.plsStopTaft == true) //HACK to get taft to stop animating when he gets hit
		{
			animation.Play("stun", PlayMode.StopAll);
		}
	}
	
	if(!frozen)//Frozen players are unable to move (stunned, etc)
	{
		
		if (Input.GetAxis(LincolnControllerMove) < 0)//Move left
		{
			moved = true;
			transform.eulerAngles.y = -90;
			                                                         
			animation.Play(leftright);

			transform.Translate(Vector3(0, 0, moveSpeed) * Time.deltaTime);
			
				
			if(Input.GetKey(jump))
			{
				audio.Stop();
				
			}
				
			else if(!audio.isPlaying)
				audio.Play();

			
		}
		else if (Input.GetAxis(LincolnControllerMove) > 0)//move right
		{
			moved = true;
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
		else if(Input.GetAxis(ControllerFall) < -0.8f)//Hit down to fall through
		{
			Physics.IgnoreCollision(player.GetComponent(CharacterController), platform.GetComponent(BoxCollider));
			if(ifp2exists)
				Physics.IgnoreCollision(player.GetComponent(CharacterController), platform2.GetComponent(BoxCollider));
			if(ifp3exists)
				Physics.IgnoreCollision(player.GetComponent(CharacterController), platform3.GetComponent(BoxCollider));
		}

		if(moved == true)//Reset the animation when the controller is at origin
		if(Input.GetAxis(LincolnControllerMove) == 0 || Input.GetAxis(LincolnControllerMove) == 0)
		{
			animation.Stop(leftright);
			animation.Play(stand);

			audio.Stop();
			moved = false;
		}
	}

}

//FIXME: not being used? We don't stop the walking sound anymore
function OnTriggerEnter (other : Collider) {

	inTrig = true;
	if(other.gameObject.name == floor.name)
		onFloor = true;

}


//FIXME: not being used? We don't stop the walking sound anymore
function OnTriggerExit (other : Collider) {
	inTrig = false;
	if(other.gameObject.name == floor.name)
		onFloor = false;
}




