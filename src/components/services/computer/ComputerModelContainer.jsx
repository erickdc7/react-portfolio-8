import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ComputerModel } from "./ComputerModel";
import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";

const ComputerModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback="loading...">
                <Stage environment="night" intensity={0.5}>
                    <ComputerModel />
                </Stage>
                <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
        </Canvas>
    );
};

export default ComputerModelContainer;