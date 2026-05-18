import { OrbitControls, Preload, useGLTF, useProgress } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useEffect, useRef, useState } from "react";

import CanvasLoader from "../loader";

type ComputersProps = {
  isMobile: boolean;
  isLoaded: boolean;
};

// Computers
const Computers = ({ isMobile, isLoaded }: ComputersProps) => {
  // Import scene
  const computer = useGLTF("./desktop_pc/scene.gltf");
  const computerRef = useRef<any>(null);
  const rotationProgress = useRef(0);
  const rotationDuration = 4; // seconds for one full 360° rotation
  const initialRotationY = -0.2;
  const [startRotation, setStartRotation] = useState(false);

  useEffect(() => {
    if (!isLoaded) return;

    const timer = window.setTimeout(() => {
      setStartRotation(true);
    }, 250);

    return () => window.clearTimeout(timer);
  }, [isLoaded]);

  const ease = (t: number) => t * t * (3 - 2 * t);

  useFrame((_, delta) => {
    if (!computerRef.current || !startRotation || rotationProgress.current >= rotationDuration) return;

    rotationProgress.current = Math.min(
      rotationProgress.current + delta,
      rotationDuration
    );

    const t = rotationProgress.current / rotationDuration;
    computerRef.current.rotation.y =
      initialRotationY + ease(t) * Math.PI * 2;
  });

  return (
    // Mesh
    <mesh>
      {/* Light */}
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, initialRotationY, -0.1]}
      />
    </mesh>
  );
};

// Computer Canvas
const ComputersCanvas = () => {
  // state to check mobile
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is Mobile
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    // handle screen size change
    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setIsMobile(event?.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  const { loaded } = useProgress();

  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 25 }}
      gl={{ preserveDrawingBuffer: true, alpha: true }}
    >
      {/* Canvas Loader show on fallback */}
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* Show Model */}
        <Computers isMobile={isMobile} isLoaded={loaded >= 100} />
      </Suspense>

      {/* Preload all */}
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
