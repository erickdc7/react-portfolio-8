import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props){
    const { nodes, materials } = useGLTF('/consoleModel.glb')
    return(
        
    )

}

useGLTF.preload('/consoleModel.glb')