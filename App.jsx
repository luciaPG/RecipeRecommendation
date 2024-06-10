/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
import QuestionaryScreen from './screens/QuestionaryScreen';
import HomeScreen from '/src/screens/HomeScreen.jsx';
import ResultRecipe from '/src/screens/ResultRecipe.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/questionary' element={<QuestionaryScreen/>} />
          <Route path='/result' element={<ResultRecipe/>} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;