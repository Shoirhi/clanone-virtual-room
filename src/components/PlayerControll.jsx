import Player from "./Player";
import { CapsuleCollider, RigidBody } from "@react-three/rapier";
import { useRef } from "react";
import { Vector3 } from "three";
import { useFrame } from "@react-three/fiber";
import { useKeyboardControls } from "@react-three/drei";

export default function PlayerControl() {
  const WALK_SPEED = 1.5;
  const rb = useRef();
  const player = useRef();
  const cameraPosition = useRef();
  const cameraWorldPosition = useRef(new Vector3());
  const [, get] = useKeyboardControls();

  useFrame(({ camera }) => {
    if (rb.current) {
      const vel = rb.current.linvel();
      const movement = new Vector3();
      const forward = new Vector3();
      const right = new Vector3();

      // カメラの方向を取得
      camera.getWorldDirection(forward);
      forward.y = 0;
      forward.normalize();

      // 右方向ベクトルを計算
      right.crossVectors(forward, camera.up).normalize();

      // キーボード入力による移動方向の決定
      if (get().forward) {
        movement.add(forward);
      }
      if (get().backward) {
        movement.add(forward.clone().negate());
      }
      if (get().left) {
        movement.add(right.clone().negate());
      }
      if (get().right) {
        movement.add(right);
      }

      movement.normalize().multiplyScalar(WALK_SPEED);

      // 新しい速度を設定
      rb.current.setLinvel(movement, true);
    }

    // プレイヤーの向きをカメラの向きに合わせる
    if (player.current) {
      player.current.rotation.y = camera.rotation.y;
    }

    // カメラ位置の更新
    cameraPosition.current.getWorldPosition(cameraWorldPosition.current);
    camera.position.lerp(cameraWorldPosition.current, 1);
  });

  return (
    <RigidBody colliders={false} ref={rb} lockRotations>
      <group>
        <group ref={cameraPosition} position-y={1.1} position-z={0} />
        <group ref={player}>
          <Player />
        </group>
      </group>
      <CapsuleCollider args={[1, 0.35]} />
    </RigidBody>
  );
}
