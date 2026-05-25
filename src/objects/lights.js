import * as THREE from 'three'


export function pointLight() {
    const PointLight = new THREE.PointLight(0xffffff, 150, 20)
    PointLight.position.set(0, 5, 0)
    PointLight.castShadow = true
    PointLight.shadow.mapSize.set(1024, 1024)
    PointLight.shadow.camera.near = 0.1
    PointLight.shadow.camera.far = 50

    return PointLight
}

export function ambientLight() {
    const ambientlight = new THREE.AmbientLight(0xffffff, 0.5, 100);
    ambientlight.position.set(0, 0, 0);

    return ambientlight
}