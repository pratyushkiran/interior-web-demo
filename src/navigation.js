import * as THREE from 'three';
import gsap from 'gsap';
import { camera } from './camera';

const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

// Lock camera height (eye level)
const CAMERA_HEIGHT = 1.6;

export function enableClickToMove(floorMesh) {
  // Ensure camera always stays at fixed height
  camera.position.y = CAMERA_HEIGHT;

  window.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObject(floorMesh);

    if (intersects.length > 0) {
      const target = intersects[0].point;

      // Move ONLY in X and Z
      gsap.to(camera.position, {
        x: target.x,
        z: target.z + 1.5,
        y: CAMERA_HEIGHT,        // 🔒 lock Y
        duration: 1.2,
        ease: 'power2.out'
      });
    }
  });
}
