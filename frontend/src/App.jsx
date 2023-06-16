
import Loginpage from "./auth/Loginpage";
import Signuppage from "./auth/Signuppage";
import Createpage from "./screen/Createpage";
import Homepage from "./screen/Homepage";
import {Route, Routes} from 'react-router-dom'


function App() {

  return (
  <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/create' element={<Createpage />} />
        <Route path='/login' element={<Loginpage />} />
        <Route path='/signup' element={<Signuppage />} />

        <Route path='*' element={<Homepage />} />
      </Routes>
  )
}

export default App
