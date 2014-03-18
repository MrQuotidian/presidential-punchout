#pragma strict

var barDisplay : float = 0;
var pos : Vector2 = new Vector2(0,0);
var progressBarEmpty : Texture2D;
var progressBarFull : Texture2D;
public static var hit : float;
 
function OnGUI()
{

    // draw the background:
    GUI.BeginGroup (new Rect (pos.x, pos.y, Screen.width, 60));
        GUI.Box (Rect (0,0, Screen.width, 60),progressBarEmpty);
 
        // draw the filled-in part:
        GUI.BeginGroup (new Rect (0, 0, Screen.width * barDisplay, 60));
            GUI.Box (Rect (0,0, Screen.width, 60),progressBarFull);
        GUI.EndGroup ();
 
    GUI.EndGroup ();
 
} 
 
function Update()
{
    // for this example, the bar display is linked to the current time,
    // however you would set this value based on your desired display
    // eg, the loading progress, the player's health, or whatever.
    barDisplay = hit;
}