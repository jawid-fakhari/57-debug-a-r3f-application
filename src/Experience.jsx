import { OrbitControls } from '@react-three/drei'
//npm i leva > import useConrols helper from leva
import { useControls } from 'leva'


export default function Experience() {
    //how to use useControls helper, 
    const { position, color } = useControls({
        position: { //tweak x position
            value: { x: -2, y: 1, z: 0 },
            min: -4,
            max: 4,
            step: 0.01
        },
        color: '#ff0000'
    })


    return <>

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh position={[position.x, position.y, position.z]}>
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

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