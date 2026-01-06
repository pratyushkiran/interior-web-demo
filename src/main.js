import { scene, renderer } from './scene';
import { camera, controls } from './camera';
import { loadRoom } from './loader';
import { setupLights, setDay, setNight } from './lighting';
import { enableClickToMove } from './navigation';
import { createHotspot } from './hotspots';

document.body.appendChild(renderer.domElement);
setupLights(scene);

loadRoom(scene, (room) => {
  // Hide loader
  document.getElementById('loader').style.display = 'none';

  // Enable click-to-move (floor must be named "Floor")
  const floor = room.getObjectByName('Floor');
  if (floor) {
    enableClickToMove(floor);
  } else {
    console.warn('Floor mesh not found. Name it "Floor" in Blender.');
  }

  // Hotspots
  createHotspot(scene, { x: 0, y: 0.6, z: 0 }, 'Bed');
  createHotspot(scene, { x: -1.5, y: 1.2, z: 1.5 }, 'Chair');
  createHotspot(scene, { x: -2, y: 0.9, z: 0.8 }, 'Table');
  createHotspot(scene, { x: 0.5, y: 1.2, z: 1.7 }, 'Window');
  createHotspot(scene, { x: -1.5, y: 0.9, z: -1.1 }, 'Closet');

});

// UI buttons
document.getElementById('dayBtn').onclick = setDay;
document.getElementById('nightBtn').onclick = setNight;

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  renderer.render(scene, camera);
}

animate();
