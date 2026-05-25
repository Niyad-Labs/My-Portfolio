import * as THREE from 'three'

export default function floor() {
    const floorGeometry = new THREE.PlaneGeometry(20, 150)
    const floorMaterial = new THREE.MeshStandardMaterial({
        color: "#7b1ee6",
        roughness: 0.8,
        metalness: 0.2,
        side: THREE.DoubleSide
    })
    const floor = new THREE.Mesh(floorGeometry, floorMaterial)
    floor.rotation.x = Math.PI / 2;
    floor.position.y = -3
    floor.position.z = -30
    floor.receiveShadow = true
    return floor
}