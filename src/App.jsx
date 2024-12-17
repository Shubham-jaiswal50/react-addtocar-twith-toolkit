import { BrowserRouter,Route,Routes } from "react-router-dom"
import Home from './Home'
import Features from './Features'
import Cart from './Cart'
import Layout from "./Layout"

const App=()=>{
  return(
    <>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Layout/>}>
      <Route index="Home" element={<Home/>}/>
      <Route path="Home" element={<Home/>}/>
      <Route path="Features" element={<Features/>}/>
      <Route path="Cart" element={<Cart/>}/>
       

      </Route>



     </Routes>
     
     </BrowserRouter>
    
    
    </>
  )
}
export default App