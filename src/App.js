import './App.css';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import Lock from './components/Lock';
import Key from './components/Key';
import Camera from './components/Camera';
import { AxesHelper } from 'three';

function App() {
  return (
    <Canvas>
      <Camera />
      <ambientLight intensity={3} />
      <pointLight position={[10, -10, 10]} />
      <Lock id={1} position={[-2.5, 1, 0]} />
      <Lock id={2} position={[0, 1, 0]} />
      <Lock id={3} position={[2.5, 1, 0]} />
      <primitive object={new AxesHelper(5)} />
      <Key />
    </Canvas>
  );
}

export default App;