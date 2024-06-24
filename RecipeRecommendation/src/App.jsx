/* eslint-disable max-len */
/* eslint-disable require-jsdoc */
/* eslint-disable linebreak-style */
import QuestionaryScreen from './screens/Questionary/QuestionaryScreen.jsx';

import ResultQuestionaryScreen from './screens/ResultQuestionary/ResultQuestionaryScreen.jsx';
import RecipeSchedulerScreen from './screens/RecipeScheduler/RecipeSchedulerScreen.jsx';
import RecipeScreen from './screens/RecipeScreen/RecipeScreen.jsx';
import HomeScreen from '/src/screens/HomeScreen/HomeScreen.jsx';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  return (

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomeScreen/>} />
          <Route path='/questionary' element={<QuestionaryScreen/>} />
          <Route path='/result' element={<ResultQuestionaryScreen/>} />
          <Route path='/recipe' element={<RecipeScreen/>} />
          <Route path='/recipeScheduler' element={<RecipeSchedulerScreen/>} />
          
        </Routes>
      </BrowserRouter>
  );
}


export default App;
