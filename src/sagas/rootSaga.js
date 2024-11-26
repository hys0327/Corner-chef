import { all } from 'redux-saga/effects';
import { watchExampleSaga } from './exampleSaga';

export default function* rootSaga() {
  yield all([watchExampleSaga()]);
}
