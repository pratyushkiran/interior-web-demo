
import * as THREE from 'three';

export function addHotspot(scene, position, labelText) {
  const sphere = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff4444 })
  );
  sphere.position.copy(position);
  scene.add(sphere);

  const div = document.createElement('div');
  div.className = 'hotspot-label';
  div.innerText = labelText;
  document.body.appendChild(div);

  return { sphere, div };
}

export function updateHotspots(camera, hotspots) {
  hotspots.forEach(h => {
    const pos = h.sphere.position.clone();
    pos.project(camera);
    const x = (pos.x * 0.5 + 0.5) * window.innerWidth;
    const y = (-pos.y * 0.5 + 0.5) * window.innerHeight;
    h.div.style.transform =
      `translate(-50%, -50%) translate(${x}px, ${y}px)`;
  });
}
