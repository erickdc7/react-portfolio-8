import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { MugModel } from "./MugModel";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";

const MugModelContainer = () => {
    return (
        <Canvas>
            <Suspense fallback={null}>
                <ambientLight intensity={1} />
                
                <OrbitControls enableZoom={false} autoRotate />
                <PerspectiveCamera position={[0, -1, 2]} zoom={0.7} makeDefault />
            </Suspense>
        </Canvas>
    );
};

export default MugModelContainer;