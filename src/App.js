import Dashboard from './components/Dashboard/Dashboard';

//import 'bootstrap/dist/css/bootstrap.min.css';
import './public/App.css';
import './public/Media.css'


function App() {
  return (
    <div className='container'>
      <div className='d-flex'>
        <div className='adjust-content p-5'>
          <Dashboard />
        </div>
      </div>
    </div>    
  );
}

export default App;
