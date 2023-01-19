import { Routes, Route } from 'react-router-dom'
import Home from './pages/home'
import Exercicio01 from './pages/exercicio01'
import Exercicio02 from './pages/exercicio02'
import Exercicio03 from './pages/exercicio03'
import Exercicio04 from './pages/exercicio04'
import Exercicio05 from './pages/exercicio05'
import Exercicio06 from './pages/exercicio06'
import Exercicio07 from './pages/exercicio07'
import Exercicio08 from './pages/exercicio08'
import Exercicio09 from './pages/exercicio09'
import Exercicio10 from './pages/exercicio10'
import Exercicio11 from './pages/exercicio11'
import Exercicio12 from './pages/exercicio12'
import Exercicio13 from './pages/exercicio13'
import Exercicio14 from './pages/exercicio14'
import Exercicio15 from './pages/exercicio15'
import Exercicio16 from './pages/exercicio16'
import Exercicio17 from './pages/exercicio17'
import Exercicio18 from './pages/exercicio18'
import Exercicio19 from './pages/exercicio19'
import Exercicio20 from './pages/exercicio20'
import Exercicio21 from './pages/exercicio21'
import Exercicio22 from './pages/exercicio22'
import Exercicio23 from './pages/exercicio23'
import Exercicio24 from './pages/exercicio24'
import Exercicio25 from './pages/exercicio25'
import Exercicio26 from './pages/exercicio26'
import Exercicio27 from './pages/exercicio27'

import './App.css'

function App() {

  return (
  <Routes>
    <Route path="*" element={<Home/>}/>
    <Route path="exercicio01" element={<Exercicio01/>}/>
    <Route path="exercicio02" element={<Exercicio02/>}/>
    <Route path="exercicio03" element={<Exercicio03/>}/>
    <Route path="exercicio04" element={<Exercicio04/>}/>
    <Route path="exercicio05" element={<Exercicio05/>}/>
    <Route path="exercicio06" element={<Exercicio06/>}/>
    <Route path="exercicio07" element={<Exercicio07/>}/>
    <Route path="exercicio08" element={<Exercicio08/>}/>
    <Route path="exercicio09" element={<Exercicio09/>}/>
    <Route path="exercicio10" element={<Exercicio10/>}/>
    <Route path="exercicio11" element={<Exercicio11/>}/>
    <Route path="exercicio12" element={<Exercicio12/>}/>
    <Route path="exercicio13" element={<Exercicio13/>}/>
    <Route path="exercicio14" element={<Exercicio14/>}/>
    <Route path="exercicio15" element={<Exercicio15/>}/>
    <Route path="exercicio16" element={<Exercicio16/>}/>
    <Route path="exercicio17" element={<Exercicio17/>}/>
    <Route path="exercicio18" element={<Exercicio18/>}/>
    <Route path="exercicio19" element={<Exercicio19/>}/>
    <Route path="exercicio20" element={<Exercicio20/>}/>
    <Route path="exercicio21" element={<Exercicio21/>}/>
    <Route path="exercicio22" element={<Exercicio22/>}/>
    <Route path="exercicio23" element={<Exercicio23/>}/>
    <Route path="exercicio24" element={<Exercicio24/>}/>
    <Route path="exercicio25" element={<Exercicio25/>}/>
    <Route path="exercicio26" element={<Exercicio26/>}/>
    <Route path="exercicio27" element={<Exercicio27/>}/>

  </Routes>

  )
}

export default App
