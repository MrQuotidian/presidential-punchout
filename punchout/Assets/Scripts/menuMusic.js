var gameObjects : GameObject[]; 
 
function Start() {
 	audio.Play();
    DontDestroyOnLoad(this.gameObject);
   // Debug.Log("Awake.");
}

function OnLevelWasLoaded(level : int) {
	if(level == 0){
		gameObjects =  GameObject.FindGameObjectsWithTag ("music");
 
    	for(var i = 1 ; i < gameObjects.length ; i ++)
        	Destroy(gameObjects[i]);
        
		Instantiate(this.gameObject);
		//Destroy(this.gameObject);
		
		//UnityEditor.PrefabUtility.ResetToPrefabState(this.gameObject);
		//Debug.Log("Destroyed.");
		
	}
}