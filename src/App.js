import React from 'react';
import './App.scss';

// import canvas from fiber
import { Canvas } from 'react-three-fiber';

function App() {
  return (
    <>
      <Canvas>
        <mesh></mesh>
      </Canvas>
    </>
  );
}

export default App;

// No HTML Elements can be rendered inside of the Canvas component

// first define a mesh(inside the mesh define a material and geometry)
// Material: looks/color and Geometry: Shape

// Mesh: Class representing triangular polygen mesh based objects

// BufferGeometry: An efficient representation of mesh,line,or point geometry.
// Includes vertex positions, face indices, normals, colors, UVs, and custom attributes
// reducing the cost of passing all this data to the GPU.

// Material: Materials describe the appearance of objects
// they are defined in a (mostly) renderer independent way so you don't have to
// rewrite materials if you decide to use a different renderer.
