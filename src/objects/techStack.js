import * as THREE from 'three'
import { Text } from 'troika-three-text'

const urls = [
    'https://img.shields.io/badge/Three.js-black?logo=Three.js&logoColor=white',
    'https://img.shields.io/badge/Mern_Stack-green?style=for-the-badge',
    'https://img.shields.io/badge/Android-red?style=for-the-badge',
    'https://img.shields.io/badge/MVC-6c63ff?style=for-the-badge&logo=mvc',
    'https://img.shields.io/badge/Redux-764abc?style=for-the-badge&logo=redux&logoColor=white',
    'https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=jsonwebtoken',
    'https://img.shields.io/badge/RestFul_Api-009688?style=for-the-badge&logo=fastapi&logoColor=white',
    'https://img.shields.io/badge/c++-%2300599C.svg?style=for-the-badge&logo=c%2B%2B&logoColor=white',
    'https://img.shields.io/badge/c-%2300599C.svg?style=for-the-badge&logo=c&logoColor=white',
    'https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&logo=csharp&logoColor=white',
    'https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&logo=dart&logoColor=white',
    'https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
    'https://img.shields.io/badge/java-%23ED8B00.svg?style=for-the-badge&logo=openjdk&logoColor=white',
    'https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
    'https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E',
    'https://img.shields.io/badge/php-%23777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
    'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
    'https://img.shields.io/badge/bash_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white',
    'https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white',
    'https://img.shields.io/badge/Render-%46E3B7.svg?style=for-the-badge&logo=render&logoColor=white',
    'https://img.shields.io/badge/GoogleCloud-%234285F4.svg?style=for-the-badge&logo=google-cloud&logoColor=white',
    'https://img.shields.io/badge/AWS-%23FF9900.svg?style=for-the-badge&logo=amazon-aws&logoColor=white',
    'https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white',
    'https://img.shields.io/badge/bootstrap-%238511FA.svg?style=for-the-badge&logo=bootstrap&logoColor=white',
    'https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white',
    'https://img.shields.io/badge/ejs-%23B4CA65.svg?style=for-the-badge&logo=ejs&logoColor=blackElectron.js',
    'https://img.shields.io/badge/Electron-191970?style=for-the-badge&logo=Electron&logoColor=white',
    'https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&logo=Flutter&logoColor=whiteExpress.js',
    'https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
    'https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi',
    'https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white',
    'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
    'https://img.shields.io/badge/NODEMON-%23323330.svg?style=for-the-badge&logo=nodemon&logoColor=%BBDEAD',
    'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB',
    'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=whiteSocket.io',
    'https://img.shields.io/badge/Socket.io-black?style=for-the-badge&logo=socket.io&badgeColor=010101',
    'https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
    'https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
    'https://img.shields.io/badge/apache-%23D42029.svg?style=for-the-badge&logo=apache&logoColor=white',
    'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
    'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white',
    'https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
    'https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white',
    'https://img.shields.io/badge/Canva-%2300C4CC.svg?style=for-the-badge&logo=Canva&logoColor=white',
    'https://img.shields.io/badge/figma-%23F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
    'https://img.shields.io/badge/PyTorch-%23EE4C2C.svg?style=for-the-badge&logo=PyTorch&logoColor=white',
    'https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white',
    'https://img.shields.io/badge/gitlab-%23181717.svg?style=for-the-badge&logo=gitlab&logoColor=white',
    'https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white',
    'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white'
]
const cols = 7

export function techStack(scene) {
    const headMesh = new Text()
    headMesh.font = './fonts/RobotoCondensed-Bold.ttf'
    headMesh.text = `Tech Stack`
    headMesh.fontSize = 1
    headMesh.color = 0xffffff
    headMesh.position.set(-2, 4.5, -40)

    headMesh.castShadow = true
    headMesh.receiveShadow = true

    const textureLoader = new THREE.TextureLoader()
    urls.forEach((url, index) => {
        textureLoader.load(url, (texture) => {
            texture.colorSpace = THREE.SRGBColorSpace
            const aspect = texture.image.width / texture.image.height

            const h = 0.5
            const w = h * aspect
            const mesh = new THREE.Mesh(
                new THREE.PlaneGeometry(w, h),
                new THREE.MeshStandardMaterial({
                    map: texture,
                    transparent: true,
                    side: THREE.DoubleSide,
                    depthWrite: false,
                    opacity: 1,
                    transparent: true,
                    alphaTest: 0.5,
                    emissiveMap: texture,
                    emissive: new THREE.Color(0xffffff),
                    emissiveIntensity: 1
                })
            )
            const row = Math.floor(index / cols)
            const col = index % cols
            mesh.position.z = -40
            mesh.position.y = -row * 0.8 + 3
            mesh.position.x = col * 2.3 - 7
            mesh.castShadow = true
            // mesh.receiveShadow = true
            scene.add(mesh, headMesh)
        })
    })
}