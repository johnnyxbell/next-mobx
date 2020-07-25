import React, { createContext } from "react";
import storeInstance from "@/lib/stores/store";
import PageTemplate from "@/templates/page";

export const StoreContext = createContext();

function MyApp({ Component, pageProps }) {
  return (
    <PageTemplate>
      <StoreContext.Provider value={storeInstance}>
        <Component {...pageProps} />
      </StoreContext.Provider>
    </PageTemplate>
  );
}

export default MyApp;
