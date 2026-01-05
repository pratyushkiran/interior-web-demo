
import * as THREE from 'three';
import { scene, renderer } from './scene';
import { camera, controls } from './camera';
import { loadRoom } from './loader';
import { setupLights, setDay, setNight } from './lighting';
import { enableClickToMove } from './navigation';
import { addHotspot, updateHotspots } from './hotspots';

document.body.appendChild(renderer.domElement);
setupLights(scene);

const hotspots = [];

loadRoom(scene, (room) => {
  document.getElementById('loader').style.display = 'none';

  let floor;
  room.traverse(o => {
    if (o.name.toLowerCase().includes('floor')) floor = o;
  });

  if (floor) enableClickToMove(floor);

  hotspots.push(addHotspot(scene, new THREE.Vector3(0, 0.6, 0), 'Bed'));
  hotspots.push(addHotspot(scene, new THREE.Vector3(1, 0.6, -1), 'Chair'));
});

document.getElementById('dayBtn').addEventListener('click', setDay);
document.getElementById('nightBtn').addEventListener('click', setNight);

function animate() {
  requestAnimationFrame(animate);
  controls.update();
  updateHotspots(camera, hotspots);
  renderer.render(scene, camera);
}
animate();
