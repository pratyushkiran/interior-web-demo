
import * as THREE from 'three';
import gsap from 'gsap';
import { camera } from './camera';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

export function enableClickToMove(floor) {
  window.addEventListener('click', (e) => {
    mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    raycaster.setFromCamera(mouse, camera);
    const hits = raycaster.intersectObject(floor);
    if (hits.length) {
      const p = hits[0].point;
      gsap.to(camera.position, {
        x: p.x,
        z: p.z + 2,
        duration: 1.2,
        ease: 'power2.out'
      });
    }
  });
}
