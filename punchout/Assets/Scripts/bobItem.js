#pragma strict

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