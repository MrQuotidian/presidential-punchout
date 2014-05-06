#pragma strict

/*Draws and manages the popular vote meters*/

var barDisplay : float = 0;
var bar2Display : float = 0;
var pos : Vector2 = new Vector2(0,0);
var pos2 : Vector2 = new Vector2(0,0);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
public static var hit : float;
public static var hit2 : float;
var wincond : GUIText;
var style : GUIStyle;
var end : boolean = false;
var style2 : GUIStyle;
var popVoteStyle : GUIStyle;
var popVoteTitle : GUIStyle;
var popVoteStyleBot : GUIStyle;
var variables : GameObject;

function Start()
{
	//reset the pop vote meters to 0 on game start
	hit = 0;
	hit2 = 0;
	variables = GameObject.Find("variables");
}
function OnGUI()
{

    // draw the background:
    GUI.BeginGroup (new Rect (pos.x, pos.y, Screen.width, 60));
        GUI.Box (Rect (0,0, Screen.width, 30),progressBarEmpty, popVoteStyle);
 		GUI.Box (Rect (0,30, Screen.width, 30),progressBarEmpty, popVoteStyleBot);
 		GUI.Label(Rect(0, 0, Screen.width, 30), "Lincoln", style);
 		GUI.Label(Rect(0, 30, Screen.width, 30), "Taft", style);
 		
        // draw the filled-in part:
        GUI.BeginGroup (new Rect (0, 0, Screen.width * barDisplay, 30));
            GUI.Box (Rect (0,0, Screen.width, 30),progressBarFull);
        GUI.EndGroup ();
        
        GUI.BeginGroup (new Rect (0, 0, Screen.width * bar2Display, 60));
            GUI.Box (Rect (0,30, Screen.width, 30),progressBarFull);
        GUI.EndGroup ();
 
    GUI.EndGroup ();
    GUI.Label(Rect(0, 60, Screen.width, 30), "Popular Vote Meter", popVoteTitle);
 
}
 
function Update()
{

	if(hit2 < 1 && hit < 1)
	{
		//no winner yet
		wincond.enabled = false;
	}

	//These will occur if there is a winner
	if(hit2 >= 1)
	{
		var sp = variables.gameObject.transform.GetComponent(vars);
		sp.isLincolnWinner = false;

		wincond.enabled = true;
		wincond.alignment = TextAlignment.Center;
		wincond.text = "Taft WINS!";

		//Slows down time to make a cool effect
		end = true;
		if(Time.timeScale - .015f >= 0 && Time.timeScale > .5f)
			Time.timeScale -= .015f;
		else if(Time.timeScale - .009f >= 0)
			Time.timeScale -= .009f;
		else Application.LoadLevel(7);//The winner screen
			
	}
	if(hit >= 1)
	{
		var vic = variables.gameObject.transform.GetComponent(vars);
		vic.isLincolnWinner = true;

		wincond.enabled = true;
		wincond.alignment = TextAlignment.Center;

		wincond.text = "Lincoln WINS!";

		end = true;

		if(Time.timeScale - .015f >= 0 && Time.timeScale > .5f)
			Time.timeScale -= .015f;
		else if(Time.timeScale - .009f >= 0)
			Time.timeScale -= .009f;
		else
		{
			Application.LoadLevel(7);
		}
	}

    barDisplay = hit;
    bar2Display = hit2;
}