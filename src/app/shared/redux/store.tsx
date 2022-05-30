import { combineReducers } from 'redux';
import { questionReucer } from './reducers/question.reducer';

const rootReducers = combineReducers({
   question: questionReucer
})

export default rootReducers;