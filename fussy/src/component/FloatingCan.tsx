"use client"
import { Float } from '@react-three/drei'
import React, { forwardRef } from 'react'
import { Group } from 'three'
import { SodaCan } from './SodaCan'

type FloatingCanProps = {

}

const FloatingCan = forwardRef<Group, FloatingCanProps>((props: FloatingCanProps) => {
  return (
    <group>
        <Float
  speed={1} // Animation speed, defaults to 1
  rotationIntensity={1} // XYZ rotation intensity, defaults to 1
  floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
  floatingRange={[1, 10]} // Range of y-axis values the object will float within, defaults to [-0.1,0.1]
>
    <SodaCan />
        </Float>
    </group>
  );
});
 
FloatingCan.displayName ="FloatingCan"

export default FloatingCan