#pragma strict

/*Plays the intro sound to a fight and then loops the music*/

var opener : AudioClip;
var loop : AudioClip;

function Start () {
	playOpening();
}

function Update () {

}

function playOpening()
{
	audio.clip = opener;
	audio.loop = false;
	audio.Play();
	yield WaitForSeconds(audio.clip.length-.5f);
	audio.clip = loop;
	audio.loop = true;
	audio.Play();
}