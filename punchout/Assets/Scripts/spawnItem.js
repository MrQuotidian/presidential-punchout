#pragma strict

var init = false;
var goLeft = false;
var goRight = false;
var item1 : GameObject;
var item2 : GameObject;
var item3 : GameObject;
var itemClone : Rigidbody;
var itemClone2 : Rigidbody;
var itemClone3 : Rigidbody;

function Start () {
	
}

function Update () {
	
	var makeItem = Random.Range(0, 100);
	if(makeItem == 1 && Time.timeScale == 1 && Time.timeSinceLevelLoad > 0)
	{
		dropItem();
	}
	
	if(!init)
		transform.Translate(Vector3(5,0,0) * Time.deltaTime);
	
	if(transform.position.x < 0 && transform.position.x <= -20)
	{
		//init = true;
		goLeft = false;
		goRight = true;
	}
	if(transform.position.x > 0 && transform.position.x >= 20)
	{
		init = true;
		goLeft = true;
		goRight = false;
	}
	
	if(goRight)
	{
		transform.Translate(Vector3(5, 0, 0) * Time.deltaTime);

	}
	
	if(goLeft)
	{
		transform.Translate(Vector3(-5, 0, 0) * Time.deltaTime);
	}
	

}

function dropItem()
{
	//yield WaitForSeconds(10);
	//Debug.Log("Drop Item");
	var item = Random.Range(1, 4);
	//Debug.Log(item);
	if(item == 1)
	{
		itemClone = Instantiate(item1, transform.position, Quaternion.identity).rigidbody;
		itemClone.transform.Rotate(Vector3(0, 180, 0));
		itemClone.velocity = -transform.up * Time.deltaTime * 2;
	}
	if(item == 2)
	{
		itemClone2 = Instantiate(item2, transform.position, Quaternion.identity).rigidbody;
		itemClone2.transform.Rotate(Vector3(30,270,0));
		itemClone2.transform.position.z = 5.85;
		itemClone2.velocity = -transform.up * Time.deltaTime * 2;
	}
	if(item == 3)
	{
		itemClone3 = Instantiate(item3, transform.position, Quaternion.identity).rigidbody;
		itemClone3.transform.Rotate(Vector3(-90,0,0));
		itemClone3.velocity = -transform.up * Time.deltaTime * 2;
	}

}