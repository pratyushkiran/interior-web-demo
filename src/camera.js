
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

export const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  100
);

camera.position.set(1.3, 1.6, 1.3
);

export const controls = new OrbitControls(camera, document.body);
controls.enableDamping = true;
controls.target.set(0, 1, 0);
