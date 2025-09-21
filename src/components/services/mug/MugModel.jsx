import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
    const { nodes, materials } = useGLTF('/mugModel.glb')
    return (
        <group {...props} dispose={null}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
            </group>
        </group>
    )
}

useGLTF.preload('/mugModel.glb')