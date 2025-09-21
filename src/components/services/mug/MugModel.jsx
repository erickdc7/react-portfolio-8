import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
    const { nodes, materials } = useGLTF('/mugModel.glb')
    return (
        <group {...props} dispose={null}>

        </group>
    )
}

useGLTF.preload('/mugModel.glb')