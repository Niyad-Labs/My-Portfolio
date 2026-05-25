import * as THREE from 'three'
import { Text } from 'troika-three-text'


export function Project(scene) {
    const projectNo1 = new Text()
    projectNo1.font = './fonts/RobotoCondensed-Bold.ttf'
    projectNo1.text = "Project 1"
    projectNo1.fontSize = 0.5
    projectNo1.color = 0xffffff
    projectNo1.position.set(-6.7, 2.6, -55)

    projectNo1.castShadow = true
    projectNo1.receiveShadow = true

    const prj1Head = new Text()
    prj1Head.font = './fonts/RobotoCondensed-Bold.ttf'
    prj1Head.text = "PIXEL PACT"
    prj1Head.fontSize = 0.5
    prj1Head.color = 0xffffff
    prj1Head.position.set(-6.7, 2, -55)

    prj1Head.castShadow = true
    prj1Head.receiveShadow = true

    const prjsubhead1 = new Text()
    prjsubhead1.font = './fonts/RobotoCondensed-Bold.ttf'
    prjsubhead1.text = "AI-POWERED DIGITAL ART WITH BLOCKCHAIN OWNERSHIP"
    prjsubhead1.fontSize = 0.5
    prjsubhead1.color = 0xffffff
    prjsubhead1.position.set(-6.7, 1.4, -55)

    prjsubhead1.castShadow = true
    prjsubhead1.receiveShadow = true

    const prjContent1 = new Text()
    prjContent1.font = './fonts/RobotoCondensed-Regular.ttf'
    prjContent1.text = `Tech Stack: MERN Stack, Python, FastAPI, PyTorch, Flutter, MongoDB, WebSockets
\u2022 Developed an AI-powered platform for digital artwork generation, integrating PyTorch models via FastAPI for prompt-based processing.
\u2022 Engineered a multi-user collaborative workflow system for real time artist-client interaction.
\u2022 Designed complex database schemas in MongoDB to manage high-volume digital assets and user project history efficiently.
\u2022 Created a high-performance mobile interface using Flutter, ensuring a consistent user experience across iOS and Android platforms.`
    prjContent1.fontSize = 0.4
    prjContent1.maxWidth = 13.5
    prjContent1.color = 0xffffff
    prjContent1.position.set(-6.7, 0.8, -55)
    prjContent1.textAlign = 'justify'

    prjContent1.castShadow = true
    prjContent1.receiveShadow = true


    // project 2
    const projectNo2 = new Text()
    projectNo2.font = './fonts/RobotoCondensed-Bold.ttf'
    projectNo2.text = "Project 2"
    projectNo2.fontSize = 0.5
    projectNo2.color = 0xffffff
    projectNo2.position.set(-6.7, 2.6, -72)

    projectNo2.castShadow = true
    projectNo2.receiveShadow = true

    const prj2Head = new Text()
    prj2Head.font = './fonts/RobotoCondensed-Bold.ttf'
    prj2Head.text = "SHARE WITH NODE"
    prj2Head.fontSize = 0.5
    prj2Head.color = 0xffffff
    prj2Head.position.set(-6.7, 2, -72)

    prj2Head.castShadow = true
    prj2Head.receiveShadow = true

    const prjsubhead2 = new Text()
    prjsubhead2.font = './fonts/RobotoCondensed-Bold.ttf'
    prjsubhead2.text = "SECURE LOCAL FILE SHARING WITH REAL-TIME STREAMING"
    prjsubhead2.fontSize = 0.5
    prjsubhead2.color = 0xffffff
    prjsubhead2.position.set(-6.7, 1.4, -72)

    prjsubhead2.castShadow = true
    prjsubhead2.receiveShadow = true

    const prjContent2 = new Text()
    prjContent2.font = './fonts/RobotoCondensed-Regular.ttf'
    prjContent2.text = `Tech Stack: Electron.js, Node.js, Express.js, Vite
\u2022 Engineered a cross-platform desktop application for high-speed local network file sharing, eliminating reliance on external internet services.
\u2022 Developed a secure QR-code-based device pairing system, facilitating instant synchronization between desktop and mobile devices.
\u2022 Implemented a real-time media streaming engine, reducing video load time by ~40% and enabling instant playback without full download.
\u2022 Architected secure access control protocols using dynamic URL tokens and password-based authentication to protect user data.
\u2022 Optimized backend architecture to manage user sessions within a local network environment using Node.js.`
    prjContent2.fontSize = 0.4
    prjContent2.maxWidth = 13.5
    prjContent2.color = 0xffffff
    prjContent2.position.set(-6.7, 0.8, -72)
    prjContent2.textAlign = 'justify'

    prjContent2.castShadow = true
    prjContent2.receiveShadow = true

    scene.add(projectNo2, prj2Head, prjsubhead2, prjContent2, projectNo1, prj1Head, prjsubhead1, prjContent1)

    return [prj1Head, prj2Head]
}
