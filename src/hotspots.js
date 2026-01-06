import * as THREE from 'three';

export function createHotspot(scene, position, labelText) {
  const group = new THREE.Group();

  // Red dot
  const dot = new THREE.Mesh(
    new THREE.SphereGeometry(0.05, 16, 16),
    new THREE.MeshBasicMaterial({ color: 0xff4444 })
  );

  // Label canvas
  const canvas = document.createElement('canvas');
  canvas.width = 256;
  canvas.height = 64;

  const ctx = canvas.getContext('2d');
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(0, 0, 256, 64);
  ctx.fillStyle = '#ffffff';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.fillText(labelText, 128, 42);

  const texture = new THREE.CanvasTexture(canvas);

  const label = new THREE.Sprite(
    new THREE.SpriteMaterial({
      map: texture,
      transparent: true
    })
  );

  label.scale.set(0.8, 0.2, 1);
  label.position.y = 0.3;

  group.add(dot);
  group.add(label);
  group.position.set(position.x, position.y, position.z);

  scene.add(group);
}
