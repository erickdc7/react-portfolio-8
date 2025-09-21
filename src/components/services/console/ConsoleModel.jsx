import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props){
    const { nodes, materials } = useGLTF('/consoleModel.glb')
    return(
        <group {...props} dispose={null}>
             <group rotation={[-Math.PI / 2, 0, 0]} scale={1.112}>
             <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
             </group>
             </group>
        </group>
    )

}

useGLTF.preload('/consoleModel.glb')