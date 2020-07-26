import React, { createContext } from "react";
import storeInstance from "@/lib/stores/store";
import PageTemplate from "@/templates/page";
import { GlobalStyle } from "@/lib/styles/global";

export const StoreContext = createContext();

function MyApp({ Component, pageProps }) {
  return (
    <PageTemplate>
      <GlobalStyle />
      <StoreContext.Provider value={storeInstance}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </PageTemplate>
  );
}

export default MyApp;
