"use client";
import { Canvas } from "@react-three/fiber";
import { cn } from "@/lib/utils";
import {
  OrbitControls,
  PointerLockControls,
  FlyControls,
  Sky,
} from "@react-three/drei";
import { Button } from "./ui/button";
import {
  Bloom,
  EffectComposer,
  Noise,
  Vignette,
  SSAO, DepthOfField, ToneMapping
} from "@react-three/postprocessing";

import Model from "./Room";
import { useState, useEffect } from "react";
import { Player } from "./Player";

export default function Experience() {
  const [showInstructions, setShowInstructions] = useState(true);

  function pointerLockChange() {
    setShowInstructions(!showInstructions);
  }

  useEffect(() => {
    document.addEventListener("pointerlockchange", pointerLockChange, false);
    return () => {
      document.removeEventListener(
        "pointerlockchange",
        pointerLockChange,
        false
      );
    };
  });
  return (
    <>
      <Canvas camera={{ position: [0, 4, 0] }} shadows>
        <PointerLockControls makeDefault selector="#button" />
        <FlyControls />
        <ambientLight intensity={2} />
        <Sky
          distance={450000}
          sunPosition={[0, 1, 0]}
          inclination={0}
          azimuth={0.25}
        />
        <Model receiveShadow />
        <EffectComposer>
          <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} />
          <Noise opacity={0.02} />
          <Vignette eskil={false} offset={0.02} darkness={0.5} />
        </EffectComposer>
      </Canvas>
      <div
        className={cn(
          "absolute inset-0 flex justify-center items-center",
          showInstructions ? "absolute" : "hidden"
        )}
      >
        <Button id="button" size="lg" className="absolute">
          バーチャル内見に入る
        </Button>
      </div>
    </>
  );
}
