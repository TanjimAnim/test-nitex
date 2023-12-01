"use client";
import { Provider } from "react-redux";
import { store } from "../store";
import ChakraProviders from "./providers";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ChakraProviders>{children}</ChakraProviders>
    </Provider>
  );
}
