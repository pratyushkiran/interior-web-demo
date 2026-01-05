
import * as THREE from 'three';

let sun, ambient;

export function setupLights(scene) {
  ambient = new THREE.AmbientLight(0xffffff, 0.6);
  sun = new THREE.DirectionalLight(0xffffff, 0.8);
  sun.position.set(5, 10, 5);
  sun.castShadow = true;
  scene.add(ambient, sun);
}

export function setDay() {
  ambient.intensity = 0.7;
  sun.intensity = 0.9;
  sun.color.set(0xffffff);
}

export function setNight() {
  ambient.intensity = 0.25;
  sun.intensity = 0.3;
  sun.color.set(0x88aaff);
}
