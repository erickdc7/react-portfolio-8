import { useGLTF } from '@react-three/drei'

export function ConsoleModel(props){
    const { nodes, materials } = useGLTF('/consoleModel.glb')

}

useGLTF.preload('/consoleModel.glb')