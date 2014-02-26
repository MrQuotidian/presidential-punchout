using UnityEngine;
using System.Collections;

public class platform : MonoBehaviour {

void OnTriggerStay(Collider hit){
	if(hit.gameObject.tag == "PlatformTrigger"){
		rigidbody.collider.isTrigger = true;
		rigidbody.isKinematic = true;
	}
}

void OnTriggerExit(Collider hit){
	if(hit.gameObject.tag == "PlatformTrigger"){
		rigidbody.collider.isTrigger = false;
	}
}

void Start () {

}

void Update () {

}
}
