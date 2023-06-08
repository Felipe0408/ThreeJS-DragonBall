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
//OBJETO 2 ESFERAS DEL DRAGON
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
//OBJETO 3 SHENGLONG
loaderGLTF.load(
  'Models/shenglong.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(0, 56, -38);
    object.scale.set(15, 15, 15);
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
//OBJETO 6 KAIO SAMA
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
//OBJETO 7 BUU GORDO
loaderGLTF.load(
  'Models/fat_majin_buu.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(6, 52.2, 45);
    object.scale.set(2.5, 2.5, 2.5);
    object.rotation.y = 270 * degToRad;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO 8 GOKU CHUIQUITO EN LA NUBE
loaderGLTF.load(
  'Models/son_goku_and_kintoun_nimbus.glb',
  function (gltf) {
    const object = gltf.scene;
    object.position.set(-60, 85, -60);
    object.scale.set(3, 3, 3);
    object.rotation.y = 20 * degToRad;
    scene.add(object);
  },
  undefined,
  function (error) {
    console.error(error);
  }
);
//OBJETO N XENO GOGETA
//loaderGLTF.load(
//  'Models/xeno_gogeta/scene.gltf',
//  function (gltf) {
//    const object = gltf.scene;
//    object.scale.set(1.8, 1.8, 1.8);
//    object.position.set(0, 54.5, 45);
//    scene.add(object);
//  },
//  undefined,
//  function (error) {
//    console.error(error);
//  }
//);

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

//const textureLoader = new THREE.TextureLoader();
//const skyTexture = textureLoader.load('Models/C_wWA4CWAAAh4Sw.jpg');
//const skyMaterial = new THREE.MeshBasicMaterial({
//  map: skyTexture, 
//  side: THREE.BackSide
//});
//const sphereGeometry = new THREE.SphereGeometry(400, 32, 32);
//const skySphere = new THREE.Mesh(sphereGeometry, skyMaterial);
//skySphere.rotation.y = Math.PI / 2;
//scene.add(skySphere);


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