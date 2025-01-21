import { useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
import '../Page/MainPage.css';
import textureUrl from '../assets/Screenshot 2025-01-21 221648.png';

function Points() {
    const pointsRef = useRef();
    const mouseRef = useRef({ x: 0, y: 0 });
    const texture = useLoader(THREE.TextureLoader, textureUrl);

    const [geometry] = useState(() => new THREE.BufferGeometry());
    const [opacity, setOpacity] = useState(0);
    useEffect(() => {
        const vertices = [];
        const colors = [];
        for (let i = 0; i < 5000; i++) {
            const p = getPoint();
            vertices.push(p.x, p.y, p.z);

            colors.push(Math.random(), Math.random(), Math.random());
        }

        geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
        geometry.setAttribute('color', new THREE.Float32BufferAttribute(colors, 3));

        let opacityInterval = setInterval(() => {
            setOpacity((prev) => Math.min(prev + 0.05, 1));
            if (opacity >= 1) clearInterval(opacityInterval);
        }, 100);

        return () => clearInterval(opacityInterval);
    }, []);

    useEffect(() => {
        const handleMouseMove = (event) => {
            mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
            mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useFrame(() => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y += (mouseRef.current.x * 1- pointsRef.current.rotation.y) * 0.05;
            pointsRef.current.rotation.x += (mouseRef.current.y * 1 - pointsRef.current.rotation.x) * 0.05;
        }
    });

    function getPoint() {
        const u = Math.random();
        const v = Math.random();
        const theta = u * 2.0 * Math.PI;
        const phi = Math.acos(2.0 * v - 1.0);
        const r = Math.cbrt(Math.random());
        return {
            x: r * Math.sin(phi) * Math.cos(theta),
            y: r * Math.sin(phi) * Math.sin(theta),
            z: r * Math.cos(phi),
        };
    }

    return (
        <points ref={pointsRef}>
            <bufferGeometry attach="geometry" {...geometry} />
            <pointsMaterial
                attach="material"
                size={0.05}
                transparent
                opacity={opacity}
                map={texture}
                vertexColors
            />
        </points>
    );
}

function ThreeScene() {
    return (
        <div className="anime">
            <Canvas camera={{ position: [0, 0, 2], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <Points />
                <OrbitControls />
            </Canvas>
        </div>
    );
}

export default ThreeScene;
