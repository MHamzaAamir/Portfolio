import React,{Suspense} from 'react'
import { Canvas } from '@react-three/fiber'
import { Decal, Float,OrbitControls,Preload,useTexture } from '@react-three/drei'

const Ball = (props) => {
    const [decal] = useTexture([props.imgUrl])
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
        <ambientLight intensity={0.25}/>
        <directionalLight position={[0,0,0.05]}/>
        <mesh castShadow receiveShadow scale={2.75}>
            {/* <icosahedronGeometry args={[1,1]}/> */}
            <sphereGeometry args={[1,64,64]}/>
            <meshStandardMaterial
                // color="#301934"
                color="#411861"
                polygonOffset
                polygonOffsetFactor={-5}
                flatShading
            />
            <Decal
                position={[0,0,1]}
                rotation={[2*Math.PI,0,6.25]}
                flatShading
                map={decal}
            />
        </mesh>
    </Float>
  )
}
 


const BallCanvas = ({icon}) =>{


    return(
        <Canvas
            frameLoop='demand'
            gl={{preserveDrawingBuffer:true}}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    enableDamping = {true}
                    maxPolarAngle={3*Math.PI/4}
                    minPolarAngle={Math.PI/4}

                    minAzimuthAngle={-Math.PI / 4} // Minimum azimuth angle: -45 degrees (clockwise from the north direction)
                    maxAzimuthAngle={Math.PI / 4} // Maximum azimuth angle: 45 degrees (counterclockwise from the north direction)
                    enableZoom={false}

                    rotateSpeed ={0.1}
                />
                <Ball imgUrl = {icon}/>
            </Suspense>
            <Preload all/>
        </Canvas>
    )
}

export default BallCanvas