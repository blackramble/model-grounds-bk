import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Keyboard from './models/BasicModel/Keyboard/Keyboard';
const Demo = () => {
    return (
        <Suspense fallback={null}>
            <Canvas
                shadows
                flat
                linear
            >
                <OrbitControls makeDefault />
                {/* <ambientLight />
            <pointLight position={[10, 10, 10]} /> */}

                <Keyboard />
            </Canvas>
        </Suspense>
    );
};

export default Demo;

// function Box(props: any) {
//     // This reference will give us direct access to the mesh
//     const mesh = useRef<any>();
//     // Set up state for the hovered and active state
//     const [hovered, setHover] = useState(false);
//     const [active, setActive] = useState(false);
//     // Subscribe this component to the render-loop, rotate the mesh every frame
//     useFrame((state, delta) => (mesh.current.rotation.x += delta));
//     // Return view, these are regular three.js elements expressed in JSX
//     return (
//         <mesh
//             {...props}
//             ref={mesh}
//             scale={active ? 1.5 : 1}
//             onClick={() => setActive(!active)}
//             onPointerOver={() => setHover(true)}
//             onPointerOut={() => setHover(false)}
//         >
//             <boxGeometry args={[1, 1, 1]} />
//             <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
//         </mesh>
//     );
// }
