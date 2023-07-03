import {proxy} from 'valtio'

const state = proxy({
  intro: true,
  color: '#08E0E7',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
})

export default state
