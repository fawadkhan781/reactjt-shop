import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { MyRoutes } from './MyRoutes';

function App() {
  return (
    <BrowserRouter>
       <MyRoutes />
    </BrowserRouter>
  )
}

export default App
