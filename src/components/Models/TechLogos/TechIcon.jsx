import { Environment, Float, OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import * as THREE from 'three';

const TechIcon = ({ model }) => {

  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Interactive Developer'){
        scene.scene.traverse((child) => {
            if(child.isMesh && child.name === 'Object_5'){
                child.material = new THREE.MeshStandardMaterial({color: 'white' })
            }
        })
    }
  }, [scene])

  return (
    <Canvas>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5,5,5]} intensity={1} />
        <Environment preset="city" />

        <OrbitControls enableZoom={false} />

        <Float speed={5.5} rotationIntensity={2} floatIntensity={0.8}>
            <group scale={model.scale} rotation={model.rotation}>
                <primi object={scene.scene}/>
            </group>
        </Float>
    </Canvas>
  )
}

export default TechIcon