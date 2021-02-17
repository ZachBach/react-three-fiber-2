import React, { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';

import { softShadows, MeshWobbleMaterial, OrbitControls } from 'drei';

import { useSpring, a } from 'react-spring/three';

function SpinningMesh({ position, args, color }) {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  // Define state
  const [expand, setExpand] = useState(false);

  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <a.mesh
      onClick={() => setExpand(!expand)}
      scale={props.scale}
      softShadows
      castShadow
      position={position}
      ref={mesh}>
      <boxBufferGeometry attach='geometry' args={args} />
      <MeshWobbleMaterial
        geometry='geometry'
        attach='material'
        color={color}
        speed={1}
        factor={0.6}
      />
      <OrbitControls />
    </a.mesh>
  );
}

export default SpinningMesh;

// Adding meshwobble material as well as softshadows. Speed as well as the factor
// speed of wobble and factor the intensitiy of the factor
