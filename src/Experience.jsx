import { OrbitControls } from '@react-three/drei'
//npm i leva > import useConrols helper from leva
import { button, useControls } from 'leva'
//npm install r3f-perf > import Perf
import { Perf } from 'r3f-perf';//Monitorare il performance di gpu, cpu, ecc "live"


export default function Experience() {
    const { prefVisible } = useControls({
        prefVisible: false
    })

    //how to use useControls helper, 
    const { position, color, visible } = useControls('sphere', { //Folder 'sphere'
        position: { //tweak x position
            value: { x: -2, y: 0 },
            joystick: 'invertY',
            step: 0.01
        },
        color: '#ff0000',
        visible: true, //tweak di visibilità
        myInterval: //tweak di Intervallo se c'è bisgno di un range 
        {
            min: 0,
            max: 10,
            value: [4, 5]
        },
        clickme: button(() => { //tweak di un button, import button funcion
            console.log('clicked');
        }),
        chioice: { options: ['a', 'b', 'c'] }, //tweak di selection con le ozioni
    })

    const { scale } = useControls('cube', { //Folder 'cube'
        scale: {
            value: 1.5,
            step: 0.01,
            min: 0,
            max: 5
        }
    })


    return <>
        {prefVisible ? <Perf position="top-left" visible={prefVisible} /> : null}

        <OrbitControls makeDefault />

        <directionalLight position={[1, 2, 3]} intensity={4.5} />
        <ambientLight intensity={1.5} />

        <mesh position={[position.x, position.y, 0]} visible={visible} >
            <sphereGeometry />
            <meshStandardMaterial color={color} />
        </mesh>

        <mesh position-x={2} scale={scale}>
            <boxGeometry />
            <meshStandardMaterial color="mediumpurple" />
        </mesh>

        <mesh position-y={- 1} rotation-x={- Math.PI * 0.5} scale={10}>
            <planeGeometry />
            <meshStandardMaterial color="greenyellow" />
        </mesh>

    </>
}