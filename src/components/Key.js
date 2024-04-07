import React, { useRef, useState } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { Vector3 } from 'three';
import { useGLTF } from '@react-three/drei';

function Key(props) {
  const keyRef = useRef();
  // const [color, setColor] = useState('gold');
  // const { viewport } = useThree();
  const { scene } = useGLTF('/assets/Key.gltf');

  useFrame((state) => {
    const { pointer, camera } = state;
    const vec = new Vector3(pointer.x, pointer.y, 0.5); // 0.5 is depth (between 0 and 1)
    vec.unproject(camera); // Map the 2D screen position to 3D space
    const dir = vec.sub(camera.position).normalize();
    const distance = -camera.position.z / dir.z;
    const pos = camera.position.clone().add(dir.multiplyScalar(distance));
    // Use pos.x and pos.y for your key position, adjust Z if necessary
    keyRef.current.position.lerp(new Vector3(pos.x, pos.y, 1), 0.1);
  });
  

  const handleClick = () => {
  console.log('Key clicked');
  }

  return (
    <primitive
      ref={keyRef}
      object={scene}
      position={props.position}
      onClick={handleClick}
    >
    </primitive>
  );
}

useGLTF.preload('/assets/Key.gltf'); // Preload the model
export default Key;
