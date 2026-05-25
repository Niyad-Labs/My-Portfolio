// import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import floor from './objects/floor.js'
import { loadBee, updateBee } from './objects/bee';
import { ambientLight, pointLight } from './objects/lights';
import { AboutMe, NameTxt, TheEnd } from './objects/Texts';
import { techStack } from './objects/techStack';
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Project } from './objects/project';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

gsap.registerPlugin(ScrollTrigger)

// loading screen
const loadingScreen = document.getElementById('loading-screen')

const loadingManager = new THREE.LoadingManager()

loadingManager.onStart = () => {
  console.log('Loading started')
}

loadingManager.onProgress = (url, loaded, total) => {
  console.log(`${loaded}/${total}`)
}

loadingManager.onLoad = () => {
  console.log('Loading finished')

  loadingScreen.style.opacity = 0

  setTimeout(() => {
    loadingScreen.style.display = 'none'
  }, 1000)
}
const loader = new GLTFLoader(loadingManager)

// scene
const scene = new THREE.Scene()
scene.background = new THREE.Color("#2e0161")
// size
const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
}


// floor
scene.add(floor())

// Ambientlight
const Ambientlight = ambientLight()
scene.add(Ambientlight);

// pointlight
const PointLight = pointLight()
scene.add(PointLight)

// lighthelper
// const pointLightHelper = new THREE.PointLightHelper(PointLight);
// scene.add(pointLightHelper);

// camera
const camera = sizes.width < 768 ?
  new THREE.PerspectiveCamera(90, sizes.width / sizes.height, 0.1, 100) :
  new THREE.PerspectiveCamera(45, sizes.width / sizes.height, 0.1, 100)

camera.position.z = 10
scene.add(camera)

// fog
scene.fog = new THREE.Fog(0x000000, 10, 40)

// nameText
NameTxt(scene)
// loadbee
loadBee(scene, loader)


// about me section
const [headMesh, contentMesh] = AboutMe()
scene.add(headMesh, contentMesh)

// tech stack
techStack(scene)

// project section
const [prj1Head, prj2Head] = Project(scene)

// End text
const endtxt = TheEnd()
scene.add(endtxt)


// renderer
const canvas = document.querySelector(".webgl")
const renderer = new THREE.WebGLRenderer({ canvas })
renderer.setPixelRatio(2)
renderer.shadowMap.enabled = true
renderer.outputColorSpace = THREE.SRGBColorSpace
renderer.toneMapping = THREE.NoToneMapping
renderer.shadowMap.type = THREE.PCFShadowMap;
renderer.setSize(sizes.width, sizes.height)
renderer.render(scene, camera)



// button in 3d
let vp1 = false
let vp2 = false
const repoLink = document.querySelector('#repoLink')
const headtitle = document.querySelector('#head')
function updateUI() {
  const { x, y, z } = camera.position
  if (z < -40 && z > -50) {
    if (!vp1) {
      vp1 = true
      repoLink.href = 'https://github.com/Niyad-Labs/BCA-project'
      headtitle.textContent = "PIXEL PACT"
      gsap.to(repoLink, {
        zIndex: 5,
        display: 'flex'
      })
    }
  } else {
    if (vp1) {
      vp1 = false
      repoLink.href = ''
      headtitle.textContent = ""
      gsap.to(repoLink, {
        zIndex: -2,
        display: 'none'
      })
    }
  }
  if (z < -55 && z > -65) {
    if (!vp2) {
      vp2 = true
      repoLink.href = 'https://github.com/Niyad-Labs/Share-With-Node'
      headtitle.textContent = "Share with Node"
      gsap.to(repoLink, {
        zIndex: 5,
        display: 'flex'
      })
    }
  } else {
    if (vp2) {
      vp2 = false
      repoLink.href = ''
      headtitle.textContent = ""
      gsap.to(repoLink, {
        zIndex: -2,
        display: 'none'
      })
    }
  }
}


// controls
// const controls = new OrbitControls(camera, renderer.domElement);
const controls = new OrbitControls(camera, canvas);
// controls.enableDamping = true
// controls.enablePan = false
// controls.enableZoom = false
// controls.autoRotate = true
// controls.autoRotateSpeed = 5

window.addEventListener("resize", () => {
  // update sizes
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // update camera
  camera.updateProjectionMatrix()
  camera.aspect = sizes.width / sizes.height
  renderer.setSize(sizes.width, sizes.height)
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5))

  controls.update();
})
// clock
const timer = new THREE.Timer();

const loop = () => {
  renderer.render(scene, camera)
  window.requestAnimationFrame(loop)
  controls.update();
  timer.update()
  camera.lookAt(0, 0, -100)
  updateBee(timer.getDelta())
  updateUI()
}
loop()

// time magic
// const t1 = gsap.timeline({ defaults: { duration: 1 } })

ScrollTrigger.create({
  target: document.body,
  start: "top top",
  end: "bottom bottom",
  scrub: true,
  onUpdate: (self) => {

    PointLight.position.z = 0 - self.progress * 100
    camera.position.z = 0 - self.progress * 100 + 10
    camera.lookAt(0, 0 + self.progress * 2, -100)
  }
})
