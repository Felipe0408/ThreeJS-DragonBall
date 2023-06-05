import * as THREE from 'three'
import {OrbitControls} from './jsm/controls/OrbitControls.js'
import {GLTFLoader} from './jsm/loaders/GLTFLoader.js'


//-----------------------------ESCENA-----------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

//-----------------------------CAMERA-----------------------------
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.set( 0, 50, 40 )

//-----------------------------RENDERER-----------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
// creando los controles 
const controls = new OrbitControls(camera, renderer.domElement)

//-----------------------------LUCES-----------------------------
//LUZ PUNTUAL 1
const light = new THREE.PointLight(0xFFFFFF, 2, 100);
light.position.set(-35, 50, 30);
scene.add(light);

//-----------------------------OBJETOS-----------------------------

const loader = new GLTFLoader();

loader.load(
  'Models/kamisama_no_shinden.glb',
  function (gltf) {
    const object = gltf.scene;
    object.scale.set(30, 30, 30)
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);


function animate() {
    requestAnimationFrame(animate);
    controls.update();
    render()
}
function render() {
    renderer.render(scene, camera)
}
animate();