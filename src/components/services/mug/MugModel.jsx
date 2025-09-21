import { useGLTF } from '@react-three/drei'

export function MugModel(props) {
    const { nodes, materials } = useGLTF('/mugModel.glb')
}

useGLTF.preload('/mugModel.glb')