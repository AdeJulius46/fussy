"use client"
import FloatingCan from '@/component/FloatingCan'
import { Cloud, Clouds, Environment, OrbitControls } from '@react-three/drei'
import React, { useRef } from 'react'
import * as THREE from "three"
import { Text } from '@react-three/drei'
import { Content } from '@prismicio/client'

type SkyDiveProps = {
    sentence: string | null;
    flavor: Content.SkyDiveSliceDefaultPrimary["flavor"];
  };
  

export default function Scene({sentence, flavor }: SkyDiveProps) {
    const groupRef =useRef<THREE.Group>(null)
    const canRef =useRef<THREE.Group>(null)
    const cloud1Ref =useRef<THREE.Group>(null)
    const cloud2Ref =useRef<THREE.Group>(null)
    const cloudsRef =useRef<THREE.Group>(null)
    const wordsRef =useRef<THREE.Group>(null)

    
  return (
    <group  ref={groupRef}>
    <group  rotation={[0,0,0.5]}>
        <FloatingCan  ref={canRef} >
          <pointLight intensity={30} color="#8C0413" decay={0.6} />
         </FloatingCan>
    </group>

     <Clouds ref={cloudsRef}>
        <Cloud ref={cloud1Ref} bounds={[10, 10, 2]} />
        <Cloud ref={cloud2Ref} bounds={[10, 10, 2]} />
      </Clouds>


        <group   ref={wordsRef}>
            {sentence && <ThreeText sentence={sentence} color='#F97315' />}

        </group>

 <OrbitControls/>
             <ambientLight   intensity={2} color="#9DDEFA"/>
        <Environment files="/hdr/field.hdr" environmentIntensity={1.5} />

    </group>
  )
}


function ThreeText({
sentence,
color= "white",
}:{
  sentence: string;
  color?: string;
}){

return  <Text>
    {sentence}
</Text>
}