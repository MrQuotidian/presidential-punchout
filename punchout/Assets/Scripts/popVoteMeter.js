#pragma strict

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
 
 	if(end)
 	{
	 	if (GUI.Button(Rect(0,0,Screen.width,Screen.height),"PLAY AGAIN?", style2) || Input.GetKey(KeyCode.JoystickButton0))
	 	{
	 		//if(Input.GetKey(KeyCode.JoystickButton0))
	 		Application.LoadLevel(0);
	 		Time.timeScale = 1;
	 		hit = 0;
	 		hit2 = 0;
	 	}
				//Debug.Log("Clicked the button with text");
	}
} 
 
function Update()
{

	if(hit2 < 1 && hit < 1)
	{
		wincond.enabled = false;
	}

	if(hit2 >= 1)
	{
		//Debug.Log("Taft WINS!");
		wincond.enabled = true;
		wincond.alignment = TextAlignment.Center;
		wincond.text = "Taft WINS!";

		end = true;
		Time.timeScale = 0;
		//yield WaitForSeconds(4);
		//hit2 = 0;
		//hit = 0;
	}	
	if(hit >= 1)
	{
		//Debug.Log("Lincoln WINS!");
		wincond.enabled = true;
		wincond.alignment = TextAlignment.Center;

		wincond.text = "Lincoln WINS!";	

		end = true;
		Time.timeScale = 0;
		//yield WaitForSeconds(4);
		//hit2 = 0;
		//hit = 0;
	}
    // for thi`s example, the bar display is linked to the current time,
    // however you would set this value based on your desired display
    // eg, the loading progress, the player's health, or whatever.
    barDisplay = hit;
    bar2Display = hit2;
}