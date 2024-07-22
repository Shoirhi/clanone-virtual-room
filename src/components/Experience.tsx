"use client";
import { Canvas } from "@react-three/fiber";
import {
  PointerLockControls,
  Sky,
  Environment
} from "@react-three/drei";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
} from "@react-three/postprocessing";

import Model from "./Room";
import PlayerControll from "./PlayerControll";
import { Physics } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
];

export default function Experience() {

  return (
    <KeyboardControls map={keyboardMap}>
      <Canvas>
        <PointerLockControls />
        <ambientLight intensity={0.3} />
        <Environment preset="warehouse" />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Physics debug>
          <Model />
          <PlayerControll />
        </Physics>
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0} height={0} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.02} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </KeyboardControls>
  );
}
