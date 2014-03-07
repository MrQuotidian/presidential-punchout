#pragma strict

var attack1 : KeyCode;
var attack2 : KeyCode;
var attack3 : KeyCode;
var particle : ParticleSystem;

var attacking = false;

function Start () {

}

function Update () {

	if(Input.GetKeyDown(attack1))
	{
		attacking = true;
		
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring1");
		
		
			particle.Emit(2);
		
		//particleEmitter.Emit();
		//particleEmitter.emit(Vector3(0, 0, 0), Vector3(5, 0, 0), 20, 5000, Color.cyan);
		Debug.Log("punching");
		

	}
	if(Input.GetKeyDown(attack2))
	{
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring2");
	}
	
	if(Input.GetKeyDown(attack3))
	{
		animation.Stop("walking");
		//transform.Translate(0, 0, 0);
		animation.CrossFade("punchstring3");
	}
}