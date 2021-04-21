import React from 'react'
import { useSpring, animated } from 'react-spring'
import {HomePhotoWrapper} from "./HomePhotoStyling";

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 50, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function HomePhoto() {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 } });
    const [props, set] = useSpring(() => ({ xys: [1, 0, 1], config: { mass: 5, tension: 300, friction: 30 } }))
    return(
        <HomePhotoWrapper style={animation}>
            <animated.div
            class="card"
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans)}}
                
            />
        </HomePhotoWrapper>
    );
}