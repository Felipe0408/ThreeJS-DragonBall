import * as THREE from 'three'
import {OrbitControls} from './jsm/controls/OrbitControls.js'

//IMPORT DE LOADERS
import {GLTFLoader} from './jsm/loaders/GLTFLoader.js'
//IMPORT DEL PROCESING
import { EffectComposer } from './jsm/postprocessing/EffectComposer.js';
import { RenderPass } from './jsm/postprocessing/RenderPass.js';
import { GlitchPass } from './jsm/postprocessing/GlitchPass.js';
import { UnrealBloomPass } from './jsm/postprocessing/UnrealBloomPass.js';

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
//------TECNCIA 1: Iluminación de 3 puntos, apuntando a Goku y BUU
//Luz 1: Luz principal
const spotLight1 = new THREE.SpotLight(0x9E9E9E, 1, 100, Math.PI / 2, 0.3);
spotLight1.position.set(-30, 60, 60);
spotLight1.target.position.set(0, 55, 45);
scene.add(spotLight1);
scene.add(spotLight1.target);
//Luz 2: Luz de relleno
const spotLight2 = new THREE.SpotLight(0x9E9E9E, 1, 100, Math.PI / 2, 0.5);
spotLight2.position.set(10, 60, 60);
spotLight2.target.position.set(0, 55, 45);
scene.add(spotLight2);
scene.add(spotLight2.target);
//Luz 3: Luz de contra
const spotLight3 = new THREE.SpotLight(0x9E9E9E, 1, 100, Math.PI / 2, 0.3);
spotLight3.position.set(10, 60, 0);
spotLight3.target.position.set(0, 55, 45); 
scene.add(spotLight3);
scene.add(spotLight3.target);

//------TECNICA 2: Luz de fondo o de ambiente
const ambientLight = new THREE.AmbientLight(0x535353);
scene.add(ambientLight);

//------TECNICA 3: Luz contrapica, apuntando a shenglong
//Spotilight 
const spotLight4 = new THREE.SpotLight(0xEEEFDB, 2, 350, Math.PI / 2, 0.3, 2);
spotLight4.position.set(0, 53, -41);
scene.add(spotLight4)
//Configuracion del target de la luz
const lightTargetT3 = new THREE.Object3D();
lightTargetT3.position.set(0, 70, -60);
scene.add(lightTargetT3);
spotLight4.target = lightTargetT3;
spotLight4.updateMatrixWorld(true);

//TECNICA 4: Luz puntual, saliendo de las esferas del dragon
//Primera point light con color de las esferas
const pointLight = new THREE.PointLight(0xFFCF3A, 1, 40);
pointLight.position.set(0, 53, -45);
scene.add(pointLight);
//Segunda point light para dar efecto de exploción
const pointLight2 = new THREE.PointLight(0xFFE9A5, 1, 40);
pointLight2.position.set(0, 54, -45);
scene.add(pointLight2);



//-----------------------------OBJETOS-----------------------------
//OBJETO 1 ESCENARIO DE TEMPLO DE KAMISAMA
let objeto1
const loaderGLTF = new GLTFLoader();
loaderGLTF.load(
  'Models/kamisama_no_shinden.gltf',
  function (gltf) {
    objeto1 = gltf.scene;
    objeto1.scale.set(50, 50, 50)
    scene.add(objeto1);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 2 ESFERAS DEL DRAGON
let objeto2
loaderGLTF.load(
  'Models/the_dragon_balls.glb',
  function (gltf) {
    objeto2 = gltf.scene;
    objeto2.position.set(0, 53, -45);
    objeto2.scale.set(0.01, 0.01, 0.01);
    scene.add(objeto2);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 3 SHENGLONG
let objeto3
loaderGLTF.load(
  'Models/shenglong.glb',
  function (gltf) {
    objeto3 = gltf.scene;
    objeto3.position.set(0, 56, -38);
    objeto3.scale.set(15, 15, 15);
    scene.add(objeto3);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 4 GOKU SSJ
let objeto4
loaderGLTF.load(
  'Models/goku_ssj.glb',
  function (gltf4) {
    objeto4 = gltf4.scene;
    objeto4.position.set(-6, 52, 45);
    objeto4.scale.set(0.7, 0.7, 0.7);
    scene.add(objeto4);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 5 VAINA DEBAJO DE GOKU
let objeto5
loaderGLTF.load(
  'Models/appearance_effect_light_beam.glb',
  function (gltf) {
    objeto5 = gltf.scene;
    objeto5.position.set(-6, 51, 45);
    objeto5.scale.set(2, 5, 2);
    //object.rotation.y = 25 * degToRad;
    scene.add(objeto5);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 6 KAIO SAMA
let objeto6
const degToRad = Math.PI / 180; // Factor de conversión de grados a radianes
loaderGLTF.load(
  'Models/king_kai_3d.glb',
  function (gltf) {
    const objeto6 = gltf.scene;
    objeto6.position.set(-5, 54.5, 18);
    objeto6.scale.set(1.6, 1.6, 1.6);
    objeto6.rotation.y = 25 * degToRad;
    scene.add(objeto6);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 7 BUU GORDO
let objeto7
loaderGLTF.load(
  'Models/fat_majin_buu.glb',
  function (gltf) {
    objeto7 = gltf.scene;
    objeto7.position.set(6, 52.2, 45);
    objeto7.scale.set(2.5, 2.5, 2.5);
    objeto7.rotation.y = 270 * degToRad;
    scene.add(objeto7);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 8 GOKU CHUIQUITO EN LA NUBE
let objeto8
loaderGLTF.load(
  'Models/son_goku_and_kintoun_nimbus.glb',
  function (gltf) {
    objeto8 = gltf.scene;
    objeto8.position.set(-60, 85, -60);
    objeto8.scale.set(3, 3, 3);
    objeto8.rotation.y = 20 * degToRad;
    scene.add(objeto8);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);

//-----------------------------SKYBOX-----------------------------
var skyboxGeometry = new THREE.BoxGeometry(700, 700, 700);
var textureLoader = new THREE.TextureLoader();
var skyboxMaterials = [
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/Izquierda.png'), side: THREE.BackSide }), //Derecha
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/derecha.png'), side: THREE.BackSide }), // Izquierda
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/Arriba.png'), side: THREE.BackSide }), // ARRIBA
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/Abajo.png'), side: THREE.BackSide }), // 
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/Atras.png'), side: THREE.BackSide }), // 
  new THREE.MeshPhongMaterial({ map: textureLoader.load('Models/Skybox/Frente.png'), side: THREE.BackSide }), // 
];
var skybox = new THREE.Mesh(skyboxGeometry, skyboxMaterials);
skybox.position.set(0, 200, 0);
scene.add(skybox);
scene.fog = new THREE.FogExp2(0x111729, 0.0039);


//-----------------------------POST-PROCESSING-----------------------------
const composer = new EffectComposer( renderer );

const renderPass = new RenderPass( scene, camera );
composer.addPass( renderPass );

//const glitchPass = new GlitchPass();
//composer.addPass( glitchPass );

const bloomPass = new UnrealBloomPass(
    1.6,
    1.0,
    0.9,
    0.5
);

composer.addPass(bloomPass);

//-----------------------------ANIMACIONES-----------------------------
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    //camera.lookAt(new THREE.Vector3(0, 55, 0));
    render()
}
function render() {
    //renderer.render(scene, camera)
    composer.render();
}
animate();