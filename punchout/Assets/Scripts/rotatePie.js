#pragma strict

/*Rotate the pie*/

function Start () {

}

function Update () {

	this.transform.Rotate(Vector3(0,.1f,0));
	//this.collider.transform.Rotate(Vector3(0,.1f,0));
}