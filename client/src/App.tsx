import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { privateRoute, publicRoute } from './route'
import PrivateRoute from './route/PrivateRoute'

function App() {

  return (
    <Router>
      <Routes>
        {publicRoute.map((item,index)=>{
          const Page = item.component
          const Layout = item.layout
          return (
            <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
          )
        })}

        <Route element={<PrivateRoute/>}>
          {privateRoute.map((item,index)=>{
            const Page = item.component
            const Layout = item.layout
            return (
              <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
            )
          })}
        </Route>
      </Routes>
    </Router>
  )
}

export default App
