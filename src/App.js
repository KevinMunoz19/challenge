import './App.css';
import Header from './components/Header'
import logo from './img/logo.png'

function App() {
  let links = [
    {label:'Electronics', link:'#', active:true},
    {label:'Fashion', link:'#', active:false},
    {label:'Tools', link:'#', active:false},
    {label:'Books', link:'#', active:false},
    {label:'More', link:'#', active:false},
  ]
  return (
    <div className="Container">
      <Header links={links} logo={logo}/>
    </div>
  );
}

export default App;
