import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

let mixer
let beeModel
let actions = {}
let activeAction
let scrollTimeout
// animation names 1 _bee_idle, 2 _bee_hover, 3 _bee_take_off_and_land

export function loadBee(scene, loader) {
    // const loader = new GLTFLoader()
    loader.load('./model/bee/Bee.gltf', (gltf) => {
        beeModel = gltf.scene
        scene.add(beeModel)


        // scale / positon
        beeModel.scale.set(0.2, 0.2, 0.2)
        beeModel.position.set(2, -3, -2)
        beeModel.rotation.y += -1
        beeModel.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true
                child.receiveShadow = true
            }
        })
        // animation
        mixer = new THREE.AnimationMixer(beeModel)
        gltf.animations.forEach((Clip) => {
            actions[Clip.name] = mixer.clipAction(Clip)
        })
        // console.log(gltf.animations)
        activeAction = actions['_bee_idle']
        activeAction.play()

        gsap.to({}, {
            scrollTrigger: {
                trigger: document.body,
                start: 'top top',
                end: 'bottom bottom',
                scrub: true,
                onUpdate: (self) => {
                    if (self.direction == 1) {
                        gsap.to(beeModel.rotation, { y: THREE.MathUtils.degToRad(-170), duration: 0.8, ease: "power2.out" })
                        gsap.to(beeModel.position, { z: (0 - self.progress * 100 - 5), y: 1, x: 3, duration: 0.8, ease: "power2.out" })
                        gsap.to(beeModel.scale, { z: 0.1, y: 0.1, x: 0.1, duration: 0.8, ease: "power2.out" })
                        switchAction(actions['_bee_hover'])
                        clearTimeout(scrollTimeout)
                        scrollTimeout = setTimeout(() => {
                            gsap.to(beeModel.rotation, { y: -1, duration: 0.8 })
                            gsap.to(beeModel.position, { z: 0 - self.progress * 100, y: -3, x: 2, duration: 1 })
                            gsap.to(beeModel.scale, { z: 0.2, y: 0.2, x: 0.2, duration: 1, ease: "power2.out" })

                            switchAction(actions['_bee_idle'])
                        }, 500)
                    }
                    // else {
                    //     // switchAction(actions['_bee_take_off_and_land'])
                    // }
                }
            }

        })

    })
}
export function updateBee(delta) {
    if (mixer) mixer.update(delta)
}

// animation
let isTransitioning = false
function switchAction(newAction) {
    if (activeAction === newAction || isTransitioning) return
    isTransitioning = true
    newAction.reset()
    newAction.setEffectiveTimeScale(1)
    newAction.setEffectiveWeight(1)
    newAction.fadeIn(0.5).play()
    activeAction.fadeOut(0.5)
    activeAction = newAction
    setTimeout(() => {
        isTransitioning = false
    }, 500)
}

