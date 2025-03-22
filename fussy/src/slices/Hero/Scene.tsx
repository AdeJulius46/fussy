"use client"

import FloatingCan from "@/component/FloatingCan"
import { Environment, OrbitControls } from "@react-three/drei"
import { useRef } from "react"
import { Group } from "three"
import gsap from "gsap"
// import { ScrollTrigger } from "gsap-trial/all"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

type Props = {}

export default function Scene({}: Props) {
    const can1Ref = useRef<Group>(null)
    const can2Ref = useRef<Group>(null)
    const can3Ref = useRef<Group>(null)
    const can4Ref = useRef<Group>(null)
    const can5Ref = useRef<Group>(null)


    const can1GroupRef = useRef<Group>(null)
    const can2GroupRef = useRef<Group>(null)

    const groupRef = useRef<Group>(null)

    const FLOAT_SPEED = 2.5 

    useGSAP(()=>{
      if (
        !can1Ref.current ||
        !can2Ref.current ||
        !can3Ref.current ||
        !can4Ref.current ||
        !can5Ref.current ||
        !can1GroupRef.current ||
        !can2GroupRef.current ||
        !groupRef.current 
       
      )
      return;

      gsap.set(can1Ref.current.position, { x: -1.5 });
      gsap.set(can1Ref.current.rotation, { z: -0.5 });

      gsap.set(can2Ref.current.position, { x: 1.5 });
      gsap.set(can2Ref.current.position, { z: 0.5 });

      gsap.set(can3Ref.current.position, { y:5 , z: 2});
      gsap.set(can4Ref.current.position, { x:2 , y:4 , z: 2 });
      gsap.set(can4Ref.current.position, { y:-5});

  

      const introTl = gsap.timeline({
        defualts:{
          duration:3,
          ease:"back.out(1.4)"
        }
      })
      introTl
      .from(can1GroupRef.current.position, {y:-5, x:1}, 0)
      .from(can1GroupRef.current.rotation, {z:3 }, 0)
      .from(can2GroupRef.current.position, {y:5, x:1}, 0)
      .from(can2GroupRef.current.rotation, {z:3}, 0)


      const scrolTl = gsap.timeline({
        defaults:{
          duration:2
        },
        scrollTrigger:{
          trigger:".hero",
          start:"top top",
          end:"bottom bottom",
          scrub: 1.5,



        }
      })
      scrolTl
      .to(groupRef.current.rotation,{y:Math.PI * 2})
    })

  return (

    <group  ref={groupRef}>
                <group ref={can1GroupRef} >
              <FloatingCan  ref={can1Ref} flavor="blackCherry"  
              floatspeed={FLOAT_SPEED}
              />
              </group>

              <group ref={can2GroupRef}>
              <FloatingCan  ref={can2Ref} flavor="lemonLime"  
              floatspeed={FLOAT_SPEED}
              />
              </group>

              <FloatingCan  ref={can3Ref} flavor="grape"  
              floatspeed={FLOAT_SPEED}
              />
              

         
              <FloatingCan  ref={can4Ref} flavor="strawberryLemonade"  
              floatspeed={FLOAT_SPEED}
              />
              
              <FloatingCan  ref={can5Ref} flavor="watermelon"  
              floatspeed={FLOAT_SPEED}
              />
            <OrbitControls />
              <Environment  files="/hdr/lobby.hdr"  environmentIntensity={1.5}/>
    </group>
  )
}