import React from 'react'
import { Canvas } from "@react-three/fiber"
import { useGLTF, PresentationControls, Stage } from "@react-three/drei"

function Model(props){
    const {scene} = useGLTF('./bitcoin.glb')
    return <primitive object={scene} {...props} /> 
}

const OurModel = () => {
  return (
    <>
      <Canvas dpr={[1,2]} shadows camera={{fov: 45}} style={{position:"absolute", top:"7%", marginTop:"20px"}}>
      <color attach="background" args={['#1d0e49']} /> 
      <ambientLight intensity={-1}  />
     
      <PresentationControls speed={1.5} global zoom={.5} polar={[-0.1, Math.PI / 4]} >
          <Stage environment={null} >
          <Model scale={0.01} /> 
          </Stage>
        </PresentationControls>
      </Canvas>
    </>
  )
}

export default OurModel
