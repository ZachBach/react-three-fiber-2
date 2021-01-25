import React from 'react';
import { Canvas } from 'react-three-fiber';
import './App.scss';
import SpinningMesh from './components/SpinningMesh';

// import canvas from fiber

function App() {
  return (
    <>
      <Canvas colorManagement camera={{ position: [-5, 2, 10], fov: 60 }}>
        <ambientLight intensity={0.3} />
        <SpinningMesh position={[0, 1, 0]} args={[3, 2, 1]} />
        <SpinningMesh position={[-2, 1, -5]} />
        <SpinningMesh position={[5, 1, -2]} />
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

// next we want to use the useRef(null) hook with an argument value of null.
// as well as the useFrame() hook talked about above.
// grabbing that mesh and we want to adjust the rotation of x which is set to the rotation
// of y and then for each frame were adding a frame of 0.01.
// There is an issue with useFrame is we cannot use it withing the app component
//  or the component being displayed. We will need to extract this mesh out of app into
// it's own component using useFrame and then importing it into app/component that is being
// rendered out to the page.

// next lets add some ambient light and we can do this in the app component as well
// as the intensity of the light and it globaly illumiating all of the objects in the scence equally
// it does not cast shadows no matter how intense the light is.

// next we can add some color to our box and we do this by adding a colorManagement attr to the canvas

// next we can change the camera position by adding a camera attr to the canvas as well.
// followed by the fov(field of view) how zoomed in or out we are. position is the same as boxBufferGeomety
// using [x,y,z] for args
