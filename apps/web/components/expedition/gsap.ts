"use client"

import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { MotionPathPlugin } from "gsap/MotionPathPlugin"
import { Draggable } from "gsap/Draggable"

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, MotionPathPlugin, Draggable)
}

export { gsap, ScrollTrigger, MotionPathPlugin, Draggable }
