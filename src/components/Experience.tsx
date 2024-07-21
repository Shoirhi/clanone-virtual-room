"use client";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
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

export default function Experience() {

  return (
    <>
      <Canvas>
        <OrbitControls makeDefault />
        <ambientLight intensity={0.3} />
        <Environment preset="warehouse" />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Model />

        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0} height={0} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.02} darkness={0.5} />
        </EffectComposer>
      </Canvas>
    </>
  );
}
