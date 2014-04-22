#pragma strict

var init = false;
var goLeft = false;
var goRight = false;
var item1 : GameObject;
var itemClone : Rigidbody;

function Start () {
	
}

function Update () {
	
	var makeItem = Random.Range(0, 1000);
	if(makeItem == 1 && Time.timeScale == 1 && Time.timeSinceLevelLoad > 10)
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
	Debug.Log("Drop Item");
	itemClone = Instantiate(item1, transform.position, Quaternion.identity).rigidbody;
	itemClone.velocity = -transform.up * Time.deltaTime * 2;

}