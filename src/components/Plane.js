const Plane = () => {
    return (
        <mesh position={[0, 0, 0]}>
            <planeBufferGeometry attach="geometry" args={[300, 300]} />
            <meshStandardMaterial color={"black"} />
        </mesh>
    );
}

export default Plane;