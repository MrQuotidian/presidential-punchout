#pragma strict

/*Controls the stage selection screen*/

var onHouse = false;
var onStat = false;
var onPie = false;
var onMoon = false;
var highlight : Transform;
var h : Transform;
var s : Transform;
var p : Transform;
var m : Transform;
var axisInUse = false;
var text : TextMesh;
//var moved = false;

function Start () {
onHouse = true;
h.particleSystem.Play();
s.particleSystem.Stop();
p.particleSystem.Stop();
m.particleSystem.Stop();
}

function Update () {


		
	if(axisInUse == false)
	{
		if(Input.GetAxis("L_XAxis_1") > 0 && onHouse == true && !axisInUse) //&&this.name == "stat")
		{
			//Debug.Log("on stat");
			onStat = true;
			onHouse = false;
			onPie = false;
			onMoon = false;
			highlight.transform.position.x = s.transform.position.x;
			//Input.ResetInputAxes();
			axisInUse = true;
			h.particleSystem.Stop();
			s.particleSystem.Play();
			text.text = "Lady Liberty";
			

		}
		if(Input.GetAxis("L_XAxis_1") < 0 && onStat == true && !axisInUse) //&& this.name == "stat")
		{
			//Debug.Log("on house");
			highlight.transform.position.x = h.transform.position.x - .2f;
			onHouse = true;
			onStat = false;
			onPie = false;
			onMoon = false;
			//Input.ResetInputAxes();
			axisInUse = true;
			h.particleSystem.Play();
			s.particleSystem.Stop();
			text.text = "White House";
			//moved = true;



		}
		if(Input.GetAxis("L_XAxis_1") > 0 && onStat == true && !axisInUse) //&& this.name == "pie")//this.name == "pie" )
		{
			//Debug.Log("on pie");
			onPie = true;
			onHouse = false;
			onStat = false;
			onMoon = false;
			highlight.transform.position.x = p.transform.position.x;
			axisInUse = true;
			p.particleSystem.Play();
			s.particleSystem.Stop();
			text.text = "American Pie";
			//moved = true;


		}
		if(Input.GetAxis("L_XAxis_1") < 0 && onPie == true && !axisInUse) //&& this.name == "pie")//this.name == "pie" )
		{
			//Debug.Log("on pie");
			onPie = false;
			onHouse = false;
			onStat = true;
			highlight.transform.position.x = s.transform.position.x;
						//Input.ResetInputAxes();
			axisInUse = true;
			p.particleSystem.Stop();
			s.particleSystem.Play();
			text.text = "Lady Liberty";
			//moved = true;


		}
		if(Input.GetAxis("L_XAxis_1") > 0 && onPie == true && !axisInUse) //&& this.name == "pie")//this.name == "pie" )
		{
			//Debug.Log("on pie");
			onPie = false;
			onHouse = false;
			onStat = false;
			onMoon = true;
			highlight.transform.position.x = m.transform.position.x;
						//Input.ResetInputAxes();
			axisInUse = true;
			p.particleSystem.Stop();
			m.particleSystem.Play();
			text.text = "The Moon";
			//moved = true;


		}
		if(Input.GetAxis("L_XAxis_1") < 0 && onMoon == true && !axisInUse) //&& this.name == "pie")//this.name == "pie" )
		{
			//Debug.Log("on pie");
			onPie = true;
			onHouse = false;
			onStat = false;
			onMoon = false;
			highlight.transform.position.x = p.transform.position.x;
						//Input.ResetInputAxes();
			axisInUse = true;
			m.particleSystem.Stop();
			p.particleSystem.Play();
			text.text = "American Pie";
			//moved = true;


		}
		//axisInUse = false;
		
	}
	//Wait();
	if(Input.GetAxis("L_XAxis_1") == 0)
		axisInUse = false;
		

	if(onMoon && Input.GetKey(KeyCode.Joystick1Button0))
	{
			//Debug.Log("here");
			Application.LoadLevel(5);
	}
	if(onHouse && Input.GetKey(KeyCode.Joystick1Button0))
	{
			//Debug.Log("here");
			Application.LoadLevel(2);
	}
	if(onStat && Input.GetKey(KeyCode.Joystick1Button0))
	{
			//Debug.Log("here");
			Application.LoadLevel(3);
	}
	if(onPie && Input.GetKey(KeyCode.Joystick1Button0))
	{
			//Debug.Log("here");
			Application.LoadLevel(4);
	}
	
	if(Input.GetKey(KeyCode.JoystickButton1))
		Application.LoadLevel(0);

}