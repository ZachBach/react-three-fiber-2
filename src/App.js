import React from 'react';
import './App.scss';

// import canvas from fiber
import { Canvas, useFrame } from 'react-three-fiber';

function App() {
  return (
    <>
      <Canvas>
        <mesh>
          <boxBufferGeometry attach='geometry' args={[1, 1, 1]} />
          <meshStandardMaterial attach='material' />
        </mesh>
      </Canvas>
    </>
  );
}

export default App;

// No HTML Elements can be rendered inside of the Canvas component

// first define a mesh(inside the mesh define a material and geometry)
// Material: looks/color and Geometry: Shape

// next we define our boxBufferGeometry this can be self closing if desired.
// this also has a required attribute attach='geomtery' followed by the args.
// the arguments are three things the general size of the object,
// represent the height, width, &  depth inside of an array.
//                 x       y         z

// <circleBufferGeometry attach='geometry' args={[2, 100]} />
// these two args are for the [size, ammount of angles]

// Next we provide just a standard mesh material

// Mesh: Class representing triangular polygen mesh based objects

// BufferGeometry: An efficient representation of mesh,line,or point geometry.
// Includes vertex positions, face indices, normals, colors, UVs, and custom attributes
// reducing the cost of passing all this data to the GPU.

// Material: Materials describe the appearance of objects
// they are defined in a (mostly) renderer independent way so you don't have to
// rewrite materials if you decide to use a different renderer.

// useFrame(): This hook calls you back every frame, which is good for running effects
// updating controls, etc. You receive the state( same as useThree) and a clock delta.
// If you supply a render priority greater than zero it will switch off automatic rendering
// entirely, you can then control rendering yourself. If you have multiple frames with a
// render priority then they are ordered highest priority last, similar to z-index.
// Frames are managed, three fiber will remove them automatically when the component that
// holds them is unmounted.
