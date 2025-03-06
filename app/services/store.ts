import { configureStore } from "@reduxjs/toolkit";
import modalsSlice from "./modals/modals-slice";
import alertsSlice from "./alerts/alerts-slice";
import { api } from "./api";

const store = configureStore({
  reducer: {
    alerts: alertsSlice,
    modals: modalsSlice,
    [api.reducerPath]: api.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
