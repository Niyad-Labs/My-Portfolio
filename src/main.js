import './style.css'
import * as THREE from 'three'
// import { setupCounter } from './counter.js''
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import moonPic from './assets/moon.jpg'
import gsap from 'gsap'

// scene
const scene = new THREE.Scene()
// size
const sizes = {
  width: window.innerWidth,
  height: innerHeight,
}

const textureLoder = new THREE.TextureLoader()
const geometry = new THREE.SphereGeometry(2.4, 64, 64)
const material = new THREE.MeshStandardMaterial({ map: textureLoder.load(moonPic), })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

// light
const light = new THREE.PointLight(0xffffff, 160, 100);
light.position.set(0, 10, 10);
scene.add(light);

// const pointLightHelper = new THREE.PointLightHelper(light);
// scene.add(pointLightHelper);

// camera
const camera = new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)
camera.position.z = 10
scene.add(camera)


// renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setPixelRatio(2)
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)

// controls
// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, canvas);
controls.enableDamping = true
controls.enablePan = false
// controls.enableZoom = false
controls.autoRotate = true
controls.autoRotateSpeed = 5

window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)

  controls.update();
})

const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
  controls.update();
  mesh.rotation.y += 0.005
}
loop()

// time magic
const t1 = gsap.timeline({ defaults: { duration: 1 } })
t1.fromTo(mesh.scale, { z: 0, x: 0, y: 0 }, { z: 1, x: 1, y: 1 })
t1.fromTo('.title', { opacity: 0 }, { opacity: 1 })
gsap.to(light.color, { r: 1, g: 0, b: 0, duration: 10, yoyo: true, repeat: -1, ease: "power1.inOut" })
