import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props){
    const { nodes, materials } = useGLTF('/consoleModel.glb')
    return(
        <group {...props} dispose={null}>
            
        </group>
    )

}

useGLTF.preload('/consoleModel.glb')