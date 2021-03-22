import React from 'react'
import { useSpring, animated } from 'react-spring'
import {HomeContentPhotoWrapper} from "./HomeStyling";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 50, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function HomeContentPhoto(){
    const [props, set] = useSpring(() => ({ xys: [1, 0, 1], config: { mass: 5, tension: 300, friction: 30 } }))
    return(
        <HomeContentPhotoWrapper>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
            />
        </HomeContentPhotoWrapper>
    );
}