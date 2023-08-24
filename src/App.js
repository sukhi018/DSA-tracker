import {RouterProvider, createBrowserRouter} from 'react-router-dom'
import RootLayout from './Components/RootLayout.js'
import Dash from './Components/Dash.js';
import QuesChart from './Components/QuesChart.js';

const router = createBrowserRouter([
  {path:'/',element:<RootLayout/>,children:[
    {path:'/',element :<Dash/>},
    {path:'/topic/:name',element :<QuesChart/>},
  ]}
])

function App() {
  return <RouterProvider router={router}/>
}
export default App;
