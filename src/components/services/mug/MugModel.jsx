import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
    const { nodes, materials } = useGLTF('/mugModel.glb')
    return(
        
    )
}

useGLTF.preload('/mugModel.glb')