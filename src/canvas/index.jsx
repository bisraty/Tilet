import React from 'react'
import {Canvas} from '@react-three/fiber'
import {Environment, Center} from '@react-three/drei'
import Shirt from './Shirt'
import CameraRig from './CameraRig'
import Backdrop from './Backdrop'
import {useSnapshot} from 'valtio'
import state from '../store'
const CanvasModel = () => {
  const snap = useSnapshot(state)
  console.log({test: snap.intro})
  return (
    <Canvas
      shadows
      camera={{position: [0, 0, 0], fov: 25}}
      gl={{preserveDrawingBuffer: true}}
      className={`${snap.intro ? 'w-full max-w-full' : 'w-[40%] max-w-[40%] '}
       h-[40vh] my-auto mx-auto  transition-all ease-in`}
    >
      <ambientLight intensity={0.5} />
      <Environment preset='city' />
      <CameraRig>
        <Backdrop />
        <Center>
          <Shirt />
        </Center>
      </CameraRig>
    </Canvas>
  )
}

export default CanvasModel
