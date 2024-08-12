"use client";
import { Canvas } from "@react-three/fiber";
import {
  PointerLockControls,
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
import { Suspense } from 'react'

import Model from "./Room";
import PlayerControll from "./PlayerControll";
import { Physics, RigidBody } from "@react-three/rapier";
import { KeyboardControls } from "@react-three/drei";
import Ecctrl, { EcctrlJoystick } from 'ecctrl'
import Player from "./Player";

const keyboardMap = [
  { name: 'forward', keys: ['ArrowUp', 'KeyW'] },
  { name: 'backward', keys: ['ArrowDown', 'KeyS'] },
  { name: 'leftward', keys: ['ArrowLeft', 'KeyA'] },
  { name: 'rightward', keys: ['ArrowRight', 'KeyD'] },
];

export default function Experience() {

  return (
    // <>
    //   <KeyboardControls map={keyboardMap}>
    //     <Canvas>
    //       <PointerLockControls />
    //       {/* <OrbitControls /> */}
    //       <ambientLight intensity={0.3} />
    //       <Environment preset="warehouse" />
    //       <Sky
    //         distance={450000}
    //         sunPosition={[0, 1, 0]}
    //         inclination={0}
    //         azimuth={0.25}
    //       />
    //       <Physics>
    //         <Model />
    //         <PlayerControll />
    //       </Physics>
    //       <EffectComposer>
    //         <Bloom luminanceThreshold={0} luminanceSmoothing={0} height={0} />
    //         <Noise opacity={0.02} />
    //         <Vignette eskil={false} offset={0.02} darkness={0.5} />
    //       </EffectComposer>
    //     </Canvas>
    //   </KeyboardControls>
    // </>
    <>
      <EcctrlJoystick />
      <Canvas>
        <Environment preset="warehouse" />
        {/* <ambientLight intensity={0.3} /> */}
        <Physics timeStep="vary">
          <Suspense fallback={null}>
            <KeyboardControls map={keyboardMap}>
              <Ecctrl
                capsuleHalfHeight={0.9}
                capsuleRadius={0.3}
                floatHeight={0}
                autoBalance={false}
                jumpVel={0}
                jumpForceToGroundMult={0}
                slopJumpMult={0}
                sprintJumpMult={0}
                wakeUpDelay={0}
                position={[0, 10, 0]}
                camInitDis={-0.01} // camera intial position
                camMinDis={-0.01} // camera zoom in closest position
                camFollowMult={100} // give any big number here, so the camera follows the character instantly
                turnVelMultiplier={1} // Turning speed same as moving speed
                turnSpeed={100} // give it big turning speed to prevent turning wait time
                mode="CameraBasedMovement" // character's rotation will follow camera's rotation in this mode
              >
                <Player />
              </Ecctrl>
            </KeyboardControls>
            <group>
              <RigidBody type="fixed" colliders="trimesh">
                <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
                  {/* 床の平面 */}
                  <planeGeometry args={[100, 100]} />
                  {/* シンプルな基本マテリアル */}
                  <meshStandardMaterial color="lightgray" />
                </mesh>
              </RigidBody>
            </group>
            <Suspense fallback={null}>
              <Model />
            </Suspense>
          </Suspense>
        </Physics>
      </Canvas>
    </>
  );
}
