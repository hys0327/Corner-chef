import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import exampleReducer from '../features/exampleSlice';
import rootSaga from '../sagas/rootSaga';

// Redux-Saga 미들웨어 생성
const sagaMiddleware = createSagaMiddleware();

// 스토어 생성
const store = configureStore({
  reducer: {
    example: exampleReducer, // Slice를 연결
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

// Redux-Saga 실행
sagaMiddleware.run(rootSaga);

export default store;
