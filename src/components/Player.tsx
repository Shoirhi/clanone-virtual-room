export default function Player() {
  return (
    <mesh>
      <capsuleGeometry args={[0.35, 2.2, 32, 32]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}