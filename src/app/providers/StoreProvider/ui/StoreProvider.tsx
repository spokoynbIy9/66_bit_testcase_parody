import { Provider } from "react-redux";
import { store } from "../config/store";
import { FC, ReactNode } from "react";

type StoreProvider = {
  children: ReactNode;
};

export const StoreProvider: FC<StoreProvider> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
