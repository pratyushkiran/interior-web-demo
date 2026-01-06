
import * as THREE from 'three';

export const scene = new THREE.Scene();
scene.background = new THREE.Color(0xeaeaea);

export const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMappingExposure = 1.1;


window.addEventListener('resize', () => {
  renderer.setSize(window.innerWidth, window.innerHeight);
});
