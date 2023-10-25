import Detailpage from './Detailpage/Detailpage'
import Profile from './Profile/Profile'
import Loginpage from './auth/Loginpage'
import Signuppage from './auth/Signuppage'
import UploadCreatedFile from './pages/UploadCreatedFile'
import Createpage from './screen/Createpage'
import Homepage from './screen/Homepage'
import {Route, Routes} from 'react-router-dom'
import ScrollToTop from './utils/ScrollToTop'
import {useAuth} from './utils/auth-hook'

function App() {
  const {token} = useAuth()
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/detail' element={<Detailpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signuppage />} />

        <Route path='/create' element={<Createpage />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/upload' element={<UploadCreatedFile />} />

        <Route path='*' element={<Homepage />} />
      </Routes>
    </div>
  )
}

export default App
