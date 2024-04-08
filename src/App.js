import "./App.css";
import React from "react";
import {Canvas} from "@react-three/fiber";
import Lock from "./components/Lock";
import Key from "./components/Key";
import Camera from "./components/Camera";
import {AxesHelper} from "three";
import {useGLTF} from "@react-three/drei";

function App() {
  const locks = ["a", "b", "c"];
  const {scene, nodes, materials} = useGLTF("/assets/Padlock.gltf");

  return (
    <Canvas>
      <Camera />
      <ambientLight intensity={3} />
      <pointLight position={[10, -10, 10]} />

      <Lock key={1} position={[-2.5, 1, 0]} model={scene.clone()} />
      <Lock key={2} position={[0, 1, 0]} model={scene.clone()} />
      <Lock key={3} position={[2.5, 1, 0]} model={scene.clone()} />
      <primitive object={new AxesHelper(5)} />
      <Key />
    </Canvas>
  );
}

export default App;
