import { applyMiddleware, combineReducers, createStore, Middleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { reducer as formReducer } from 'redux-form';

import { rootReducer, rootSaga } from './redux';

const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(
  combineReducers({
    ...rootReducer,
    form: formReducer,
  }),
  composeWithDevTools(applyMiddleware(...middleware))
);

sagaMiddleware.run(rootSaga);

export { store };
