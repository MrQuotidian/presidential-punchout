#pragma strict
/*Bounces the item to fix the bug where you can't hit an item from the bottom*/
function Start () {

}

function Update () {
	//Debug.Log(this.rigidbody.velocity.magnitude);
	if(this.gameObject.rigidbody.velocity.magnitude == 0)
	{
		//Debug.Log("going back up");
		this.gameObject.rigidbody.AddForce(Vector3.up * 200);
	}

}