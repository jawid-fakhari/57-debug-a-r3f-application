
function Cube({ scale = 1 }) {
    return (
        <mesh scale={scale}>
            <boxGeometry />
            <meshStandardMaterial color="red" />
        </mesh>
    )
}

export default Cube