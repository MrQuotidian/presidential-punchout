private var margin:float = 50; // space between screen border and nearest fighter
// 50 seems to be a good value 
private var z0:float = 0; // coord z of the fighters plane
private var zCam:float; // camera distance to the fighters plane
private var wScene:float; // scene width
private var hScene:float; // scene height
private var f1:Transform; // fighter1 transform
private var f2:Transform; // fighter2 transform
private var xL:float; // left screen X coordinate
private var yL:float; // left screen Y coordinate
private var xR:float; // right screen X coordinate
private var yR:float; // right screen Y coordinate
 
function calcScreen(p1:Transform, p2:Transform){
    // Calculates the xL and xR screen coordinates 
    if (p1.position.x<p2.position.x){
       xL = p1.position.x-margin;
       xR = p2.position.x+margin;
    } 
    else{
       xL = p2.position.x-margin;
       xR = p1.position.x+margin;
    }
    
    if(p1.position.y < p2.position.y){
    	yL = p1.position.y-margin;
    	yR = p2.position.y+margin;
    }
    else{
    	yL = p2.position.y-margin;
    	yR = p1.position.y+margin;
    }
}
 
function Start(){
    // find references to the fighters
    f1 = GameObject.Find("LincolnFBX5").transform;   
    f2 = GameObject.Find("TaftDone2").transform;
    // initializes scene size and camera distance
    calcScreen(f1,f2);
    wScene = xR-xL;
    hScene = yR-yL;
    zCam = transform.position.z-z0;
}
 
function Update(){
 
    calcScreen(f1,f2);
    var width:float = xR-xL;
    var height:float = yR-yL;
    if (width>wScene){ // if fighters too far adjust camera distance
       transform.position.z = zCam*width/wScene+z0;
    }
    if (height > hScene){
       transform.position.z = zCam*height/hScene+z0;
    }
    // centers the camera
    transform.position.x = (xR+xL)/2;
    transform.position.y = (yR+yL)/2;
}
