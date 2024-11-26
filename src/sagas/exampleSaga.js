import { takeEvery, put } from 'redux-saga/effects';
import { increment } from '../features/exampleSlice';

function* handleIncrement() {
  console.log('Increment Saga Triggered!');
  yield put(increment()); // 액션 디스패치
}

export function* watchExampleSaga() {
  yield takeEvery('example/incrementAsync', handleIncrement);
}
