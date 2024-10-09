import { OrbitControls } from '@react-three/drei'
import Cube from './Components/Cube'

export default function Experience() {
    return <>

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh position-x={- 2}>
            <sphereGeometry />
            <meshStandardMaterial color="orange" />
        </mesh>

        {/* React Browser Extension debuger added on chrome and test it with a cube class */}
        <Cube scale={2} />

        <mesh position-x={2} scale={1.5}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}