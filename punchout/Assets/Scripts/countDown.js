#pragma strict
/*Counts down before the start of the match*/

var show3 = false;
var show2 = false;
var show1 = false;
var text : GUI;
var t = 0;
var st : GUIStyle;
var dontcheck = false;
var done = false;
var timeKeeper;
var Lincoln : Transform;
var Taft : Transform;

 
function Start () {

	var scrippause = Lincoln.gameObject.GetComponent(taftPunch);
	var scrippause2 = Taft.gameObject.GetComponent(taftPunch);

	scrippause.stunned = true;
	scrippause2.stunned = true;


}

function Update () {


	if(!done)
	{
		if(Time.timeSinceLevelLoad >= 3)
		{	show3 = true;

		}
		if(Time.timeSinceLevelLoad  >= 4)
		{
			show2 = true;
			show3 = false;

		}
		if(Time.timeSinceLevelLoad  >= 5 && dontcheck == false)
		{
			show1 = true;
			show2 = false;
		}
		if(Time.timeSinceLevelLoad >= 6)
		{
			show1 = false;
			show2 = false;
			dontcheck = true;
			done = true;
			var scrippause = Lincoln.GetComponent(taftPunch);
			var scrippause2 = Taft.GetComponent(taftPunch);
			//Un-freeze the players
			scrippause.stunned = false;
			scrippause2.stunned = false;
		}
	
	}
}

function OnGUI ()
{

   if (show3 == true)
   {
      GUI.Label (Rect(0,100,Screen.width,80),"3...", st);
      
   }
   if(show2 == true)
   {
   		GUI.Label (Rect(0,100,Screen.width,80),"2...", st);
   }
   if(show1 == true)
   {
   	GUI.Label (Rect(0,100,Screen.width,80),"1...",st);
   }
}