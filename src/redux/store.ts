import { configureStore } from '@reduxjs/toolkit';

import userInterfaceReducer from './slices/userInterface';
import authenticationReducer from './slices/authentication';
import SEOReducer from './slices/SEO';

const store = configureStore({
  reducer: {
    userInterface: userInterfaceReducer,
    authentication: authenticationReducer,
    SEO: SEOReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
