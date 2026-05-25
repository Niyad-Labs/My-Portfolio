import * as THREE from 'three'
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';
import { Text } from 'troika-three-text'
export async function NameTxt(scene) {
    const textureLoader = new THREE.TextureLoader()
    const texture = await textureLoader.load('./model/headTexts.png')
    texture.colorSpace = THREE.SRGBColorSpace

    const geometry = new THREE.PlaneGeometry(5, 5)
    const material = new THREE.MeshStandardMaterial({ map: texture, side: THREE.DoubleSide, depthWrite: false, opacity: 1, transparent: true, alphaTest: 0.5 })
    material.emissive = new THREE.Color(0xffffff)
    material.emissiveIntensity = 1
    const textMesh = new THREE.Mesh(geometry, material)
    textMesh.position.set(-2, -1, -3)
    textMesh.scale.set(2, 2, 2)
    textMesh.castShadow = true
    textMesh.receiveShadow = true
    scene.add(textMesh);
}

export function AboutMe() {
    const headMesh = new Text()
    headMesh.font = './fonts/RobotoCondensed-Bold.ttf'
    headMesh.text = ` About Me`
    headMesh.textAlign = 'center'
    headMesh.fontSize = 1
    headMesh.color = 0xffffff
    headMesh.position.set(-2.4, 2.8, -20)

    headMesh.castShadow = true
    headMesh.receiveShadow = true

    const contentMesh = new Text()
    contentMesh.font = './fonts/RobotoCondensed-Regular.ttf'
    contentMesh.text = `Detail-oriented Full-Stack Developer specializing in the MERN stack (MongoDB, Express.js, React.js, Node.js). Experienced in architecting immersive web experiences and cross-platform solutions across web, desktop (Electron.js), and mobile (Flutter). Proven track record in developing interactive 3D environments using Three.js, secure local-network systems, and AI-integrated applications. Hands-on experience designing applications using MVC architecture, RESTful API design, and writing scalable, maintainable code. Currently seeking full-stack (MERN) developer opportunities where I can leverage my expertise in 3D graphics and full-stack architecture.`
    contentMesh.fontSize = 0.46
    contentMesh.maxWidth = 13
    contentMesh.textAlign = 'center'
    contentMesh.color = 0xffffff
    contentMesh.position.set(-6.4, 1.8, -20)

    contentMesh.castShadow = true
    contentMesh.receiveShadow = true



    return [headMesh, contentMesh]
}

export function TheEnd() {
    const EndText = new Text()
    EndText.font = './fonts/GreatVibes-Regular.ttf'
    EndText.text = `The End`
    EndText.fontSize = 2.5
    EndText.color = 0xffffff
    EndText.position.set(-4.5, 0, -102)

    EndText.sync()
    EndText.castShadow = true
    EndText.receiveShadow = true

    return EndText
}

