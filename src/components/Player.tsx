export default function Player() {
  return (
    <mesh>
      <capsuleGeometry args={[0.3, 1.8, 10, 10]} />
      <meshStandardMaterial color="yellow" />
    </mesh>
  );
}