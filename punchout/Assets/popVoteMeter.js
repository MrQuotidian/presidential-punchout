#pragma strict

var barDisplay : float = 0;
var bar2Display : float = 0;
var pos : Vector2 = new Vector2(0,0);
var pos2 : Vector2 = new Vector2(0,0);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
public static var hit : float;
public static var hit2 : float;


function OnGUI()
{

    // draw the background:
    GUI.BeginGroup (new Rect (pos.x, pos.y, Screen.width, 60));
        GUI.Box (Rect (0,0, Screen.width, 30),progressBarEmpty);
 		GUI.Box (Rect (0,30, Screen.width, 30),progressBarEmpty);
 		GUI.Label(Rect(0, 0, Screen.width, 30), "Lincoln");
 		GUI.Label(Rect(0, 30, Screen.width, 30), "Taft");
        // draw the filled-in part:
        GUI.BeginGroup (new Rect (0, 0, Screen.width * barDisplay, 30));
            GUI.Box (Rect (0,0, Screen.width, 30),progressBarFull);
        GUI.EndGroup ();
        
        GUI.BeginGroup (new Rect (0, 0, Screen.width * bar2Display, 60));
            GUI.Box (Rect (0,30, Screen.width, 30),progressBarFull);
        GUI.EndGroup ();
 
    GUI.EndGroup ();
 
} 
 
function Update()
{
    // for this example, the bar display is linked to the current time,
    // however you would set this value based on your desired display
    // eg, the loading progress, the player's health, or whatever.
    barDisplay = hit;
    bar2Display = hit2;
}