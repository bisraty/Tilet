import {motion, AnimatePresence} from 'framer-motion'
import {useSnapshot} from 'valtio'

import state from '../store'
// import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from '../config/motion'
import CustomButton from '../components/CustomButton'
import {useNavigate} from 'react-router-dom'
import {useAuth} from '../utils/auth-hook'
import {useEffect} from 'react'

const Home = () => {
  const navigate = useNavigate()
  const {token, user} = useAuth()
  console.log({token})
  console.log({user})

  return (
    <AnimatePresence>
      <motion.section className='home  ' {...slideAnimation('left')}>
        <motion.header {...slideAnimation('down')}></motion.header>

        <motion.div className='home-content' {...headContainerAnimation}>
          <motion.div {...headTextAnimation}>
            <h1 className='head-text'>
              Ignite your
              <br />
              Innovation.
            </h1>
          </motion.div>
          <motion.div {...headContentAnimation} className='flex flex-col gap-5'>
            <p className='max-w-md font-normal text-gray-600 text-base'>
              Create your unique and exclusive shirt with our brand-new 3D customization tool.{' '}
              <strong>Unleash your imagination</strong> and define your own style.
            </p>

            <CustomButton
              type='filled'
              title='Customize It'
              handleClick={() => {
                navigate('/create')
              }}
              customStyles='w-fit px-4 py-2.5 font-bold text-sm'
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </AnimatePresence>
  )
}

export default Home
