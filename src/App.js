import './App.css';
import Page from './components/page';
import Layout from './components/Layout/Layout';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


function App() {
  return (
    <div className="App">
      <Layout child={<Page/>}/>
        
    
      
        
    </div>
  );
}

export default App;
