import './App.css';
import { Parent } from './Callback/parent';
import { FetchApiUse } from './CustomHook/FetchApiUse';
import { UseMemo } from './useMemoTask/UseMemo';
import LandingPage from './usereducer/LandingPage.js';
// import  LandingPage  from './UseReducer/LandingPage.JS';

function App() {
  return (
    <div className="App">
     
      <LandingPage/>
      <FetchApiUse/>
      <UseMemo/>
      <Parent/>
     
    </div>
  );
}

export default App;
