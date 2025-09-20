import { useGLTF } from "@react-three/drei";

export function ComputerModel(props) {
    const { nodes, materials } = useGLTF("/computerModel.glb");
}

useGLTF.preload("/computerModel.glb");