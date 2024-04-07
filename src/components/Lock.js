import React, { useState, useRef } from 'react';
import { useFrame, useThree } from '@react-three/fiber';
import { useSpring, a } from '@react-spring/three';
import { useGLTF } from '@react-three/drei';


function Lock({id, position, ...lockProps}) {
  const lockRef = useRef();
  const { scene } = useGLTF('/assets/Padlock.gltf');
  //const { camera } = useThree();
  const [hovered, setHovered] = useState(false);
  console.log('Lock id: ' + id)

  const scale = useSpring({
    scale: hovered ? [1.5, 1.5, 1.5] : [1, 1, 1],
    config: { tension: 280, friction: 60 },
  });

  const handleClick = (e) => {
    e.stopPropagation();
    console.log(id + ' Lock clicked');
  }

  return (
    <a.primitive
    name={`Lock_${id}`}
    ref={lockRef}
    position={position}
    object={scene}
    onClick={handleClick}
    onPointerOver={() => setHovered(true)}
    onPointerOut={() => setHovered(false)}
    scale={scale.scale}
    {...lockProps}
    >
    </a.primitive>
  );
}

useGLTF.preload('/assets/Padlock.gltf'); // Preload the model
export default Lock;