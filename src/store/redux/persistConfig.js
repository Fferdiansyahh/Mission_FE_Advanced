// src/store/redux/persistConfig.js
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user"], // atau properti lain yang ingin dipersist
  transforms: [
    // Tambahkan transform jika diperlukan
  ],
};

export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authReducer
);
