import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function SpinningMesh({ position, args, color }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color={color} />
    </mesh>
  );
}

export default SpinningMesh;
