﻿#pragma strict
var show3 = false;
var show2 = false;
var show1 = false;
var text : GUI;
var t = 0;
var st : GUIStyle;
var dontcheck = false;
var done = false;
var timeKeeper;
 
function Start () {
	//StopWatch(1);
	//timeKeeper = 0;
	Time.timeScale = 0;
	//t = 1;
}

function Update () {

	//Debug.Log(Time.realtimeSinceStartup);
	//timeKeeper = Time.realtimeSinceStartup;
	//if(Time.realtimeSinceStartup 
if(!done)
{
	if(Time.realtimeSinceStartup % 10 >= 4)
	{	show3 = true;
		
		//Time.timeScale = 0;
		
		//t+=1;
	}
	if(Time.realtimeSinceStartup % 10 >= 5)
	{
		show2 = true;
		show3 = false;
		//StopWatch(1);
		//t+=1;
	}
	if(Time.realtimeSinceStartup % 10 >= 6 && dontcheck == false)
	{
		show1 = true;
		show2 = false;
		Time.timeScale = 1;
	}
	if(Time.realtimeSinceStartup % 10 >= 7)
	{
		show1 = false;
		show2 = false;
		dontcheck = true;
		done = true;
	}
}
}

function StopWatch (time:int)
{
	
   
   //Time.timeScale = 1;
   //showText=true;
}

function OnGUI ()
{

   if (show3 == true)
   {
      GUI.Label (Rect(0,100,Screen.width,80),"3...", st);
      //yield WaitForSeconds(1);
      
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