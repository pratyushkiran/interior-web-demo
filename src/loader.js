
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';

export function loadRoom(scene, onLoad) {
  const loader = new GLTFLoader();
  const draco = new DRACOLoader();
  draco.setDecoderPath('/models/draco/');
  loader.setDRACOLoader(draco);

  loader.load('/models/Sample Room1.glb', (gltf) => {
    gltf.scene.traverse(o => {
      if (o.isMesh) {
        o.castShadow = true;
        o.receiveShadow = true;
      }
    });
    scene.add(gltf.scene);
    onLoad(gltf.scene);
  });
}
