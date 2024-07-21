// import { useSphere } from '@react-three/cannon';
// import { useEffect, useRef } from 'react';
// import { useFrame, useThree } from '@react-three/fiber';
// import * as THREE from 'three';
// import { usePlayerControls } from './PlayerControl';

// const Player = (props: any) => {
//   const direction = new THREE.Vector3();
//   const frontVector = new THREE.Vector3();
//   const sideVector = new THREE.Vector3();
//   const speed = new THREE.Vector3();
//   const SPEED = 5;

//   const { camera } = useThree();

//   const [ref, api] = useSphere((index) => ({
//     mass: 0,
//     type: 'Dynamic',
//     position: [0, 0, 0],
//     ...props,
//   }));

//   const { forward, backward, left, right } = usePlayerControls();
//   const velocity = useRef([0, 0, 0]);
//   useEffect(() => api.velocity.subscribe((v) => (velocity.current = v)), []);
//   useFrame((state) => {
//     if (ref.current) {
//       ref.current.getWorldPosition(camera.position);
//     }
//     frontVector.set(0, 0, Number(backward) - Number(forward));
//     sideVector.set(Number(left) - Number(right), 0, 0);
//     direction.subVectors(frontVector, sideVector).normalize().multiplyScalar(SPEED).applyEuler(camera.rotation);
//     speed.fromArray(velocity.current);
//     api.velocity.set(direction.x, velocity.current[1], direction.z);
//   });
//   return (
//     <group>a
//       <mesh castShadow position={props.position} ref={ref}>
//         <sphereGeometry args={props.args} />
//         <meshStandardMaterial color="#FFFF00" />
//       </mesh>
//     </group>
//   );
// };

// export default Player;