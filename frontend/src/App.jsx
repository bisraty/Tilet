
import Detailpage from "./Detailpage/Detailpage";
import Profile from "./Profile/Profile";
import ScrollToTop from "./ScrollToTop";
import Loginpage from "./auth/Loginpage";
import Signuppage from "./auth/Signuppage";
import Createpage from "./screen/Createpage";
import Homepage from "./screen/Homepage";
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
    <div >
      <ScrollToTop />
        <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/home' element={<Homepage />} />
        <Route path='/create' element={<Createpage />} />
        <Route path='/detail' element={<Detailpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signuppage />} />
        <Route path='/profile' element={<Profile />} />

        <Route path='*' element={<Homepage />} />
      </Routes>
    </div>

  )
}

export default App
