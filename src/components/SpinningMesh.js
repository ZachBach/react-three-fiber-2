import React, { useRef } from 'react';
import { useFrame } from 'react-three-fiber';

function SpinningMesh({ position, args }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));
  return (
    <mesh position={position} ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <meshStandardMaterial attach='material' color='lightgreen' />
    </mesh>
  );
}

export default SpinningMesh;
