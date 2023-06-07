import * as THREE from 'three'
import {OrbitControls} from './jsm/controls/OrbitControls.js'

//IMPORT DE LOADERS
import {GLTFLoader} from './jsm/loaders/GLTFLoader.js'
import {FBXLoader} from './jsm/loaders/FBXLoader.js';
import {OBJLoader} from './jsm/loaders/OBJLoader.js'
import {MTLLoader} from './jsm/loaders/MTLloader.js'


//-----------------------------ESCENA-----------------------------
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

//-----------------------------CAMERA-----------------------------
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 )
camera.position.set( 0, 70, 60 )


//-----------------------------RENDERER-----------------------------
const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize( window.innerWidth, window.innerHeight )
document.body.appendChild( renderer.domElement )
// creando los controles 
const controls = new OrbitControls(camera, renderer.domElement)

//-----------------------------LUCES-----------------------------
//LUZ PUNTUAL 1
const light = new THREE.PointLight(0xFFFFFF, 2, 100);
light.position.set(-25, 70, 50);
scene.add(light);
//LUZ AMBIENTAL
const ambientLight = new THREE.AmbientLight(0x404040);
scene.add(ambientLight);

//-----------------------------OBJETOS-----------------------------
//OBJETO 1 ESCENARIO DE TEMPLO DE KAMISAMA
const loaderGLTF = new GLTFLoader();
loaderGLTF.load(
  'Models/kamisama_no_shinden.gltf',
  function (gltf) {
    const object = gltf.scene;
    object.scale.set(50, 50, 50)
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 2 XENO GOGETA
loaderGLTF.load(
  'Models/xeno_gogeta/scene.gltf',
  function (gltf) {
    const object = gltf.scene;
    object.scale.set(1.8, 1.8, 1.8);
    object.position.set(0, 54.5, 45);
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 3 KAIO SAMA
const degToRad = Math.PI / 180; // Factor de conversión de grados a radianes
loaderGLTF.load(
  'Models/king_kai_3d.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(-5, 54.5, 18);
    object.scale.set(1.6, 1.6, 1.6);
    object.rotation.y = 25 * degToRad;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 4 GOKU SSJ
loaderGLTF.load(
  'Models/goku_ssj.glb',
  function (gltf4) {
    const object4 = gltf4.scene;
    object4.position.set(-6, 52, 45);
    object4.scale.set(0.7, 0.7, 0.7);
    
    //object4.traverse(function (child) {
    //  if (child.isMesh) {
    //    child.material.emissiveIntensity = 0.2;
    //    child.material.emissive = new THREE.Color(0x888888);
    //  }
    //});
    //// Restaurar la iluminación de los objetos 2 y 3
    //scene.traverse(function (node) {
    //  if (node.isMesh) {
    //    node.receiveShadow = true;
    //    node.castShadow = true;
    //  }
    //});
    scene.add(object4);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 5 VAINA DEBAJO DE GOKU
loaderGLTF.load(
  'Models/appearance_effect_light_beam.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(-6, 51, 45);
    object.scale.set(2, 5, 2);
    //object.rotation.y = 25 * degToRad;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//OBJETO 6 ESFERAS DEL DRAGON
const loaderFBX = new FBXLoader();
loaderFBX.load(
  'Models/the-dragon-balls/source/Dragon Balls/Dragon Balls.FBX',
  function (fbx) {
    const model = fbx;
    model.position.set(0, 53, -40);
    model.scale.set(0.01, 0.01, 0.01);
    scene.add(model);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OPCIÓN2
loaderGLTF.load(
  'Models/the_dragon_balls.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(0, 53, -45);
    object.scale.set(0.01, 0.01, 0.01);
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 7 SHENGLONG
loaderGLTF.load(
  'Models/shenglong.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(0, 55, -45);
    object.scale.set(15, 15, 15);
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
    //camera.lookAt(new THREE.Vector3(0, 55, 0));
    render()
}
function render() {
    renderer.render(scene, camera)
}
animate();