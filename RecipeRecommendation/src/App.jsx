/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
import QuestionaryScreen from './screens/QuestionaryScreen/QuestionaryScreen.jsx';

import ResultQuestionaryScreen from './screens/ResultQuestScreen/ResultQuestionaryScreen.jsx';
import HomeScreen from '/src/screens/HomeScreen/HomeScreen.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/questionary' element={<QuestionaryScreen/>} />
          <Route path='/result' element={<ResultQuestionaryScreen/>} />
        </Routes>
      </BrowserRouter>
  );
}


export default App;
