import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { privateRoute, publicRoute } from './route'
import PrivateRoute from './route/PrivateRoute'
import Home from "./page/home/Home";
import DefaultLayout from './Layout/DefaultLayout';
import { useAppSelector } from './redux/hook';


function App() {
  const currentUser = useAppSelector((state) => state.auth.currentUser);

  return (
    <Router>
      <Routes>
        {currentUser && Object.keys(currentUser).length > 0&&
          <Route path='/' element={<DefaultLayout><Home/></DefaultLayout>}/>}

        {publicRoute.map((item,index)=>{
          const Page = item.component
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const Layout: any = item.layout ;
          return (
            <Route key={index} path={item.path} element={<Layout><Page/></Layout>}/>
          )
        })}

        <Route element={<PrivateRoute/>}>
          {privateRoute.map((item,index)=>{
            const Page = item.component
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const Layout:any = item.layout
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
// { component: Home, path: "/", layout: DefaultLayout },