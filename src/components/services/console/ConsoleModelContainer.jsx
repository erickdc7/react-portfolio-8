import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { ConsoleModel } from "./ConsoleModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const ConsoleModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[10, 10, 5]} intensity={1} />
                <pointLight position={[-10, -10, -10]} intensity={0.5} />
                <ConsoleModel />
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[-1, 0, 1.8]} zoom={0.8} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default ConsoleModelContainer;