# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

#### Notes for learning react-three-fiber
Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

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

// Setting up lighting
// first we want to set up pointLight. By setting up the position as well as the intensity
// Again this follows the same as args for the bufferGeometry method when settuing up the posistions.
// as x,y,z.

// After setting up our pointlights we then want to create a directional light.
// Very similar to the [ 0 , -10 , 0 ] we have before. We want direction light on top.
// So we have to change the middle value that is for the y axis to posivite 10!

// Next we want to catch a shadow at the bottom we cannot cast a shadow however without a
// floor or a plane by creating a new group. Followed by the mesh first and inside of the mesh.
// use a planebufferGeometry and attach geometetry to it as well as two args.
// We also have to provide it a material or plane/floor as well to cast a shadow material.
// To cast a shadow we will need to add a rotation to the mesh material {x, y , z} again

// Now that we understand that we need a plane/floor to cast a shadow off of next we will create the shadowMaterial
// After using the component attach a material. However nothing will take effect yet until we pass in shadow map
// to our canvas. As well as a castShadow prop to the main mesh component. After we add the prop the main mesh
// we need to then set it on our directionLight since this is casting a shadow after all! Finally we need to go
// back to the plane that will recieve the shadow. By adding the receiveShadow to the plane.
// I like to think of the light bouncing off of the different materials/planes if that way also helps.

//  After applying the receive shadow we ca tell that the pixels as well as shadow is a little distorted or "Harsh"
//  we can change the alpha values to correct this.(opacity) no shadow is 100% black.
// We can also import softShadows from drei to soften our shadows.
