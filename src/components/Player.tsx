export default function Player() {
  return (
    <mesh position={[0, 0, 0]}>
      <capsuleGeometry args={[0.35, 1, 16, 16]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}