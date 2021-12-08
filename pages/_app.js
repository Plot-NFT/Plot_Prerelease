/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import "../scss/style.scss";

import { DAppProvider, ChainId } from "@usedapp/core";
import { UserProvider } from "../context/userContext";

const config = {
  readOnlyChainId: ChainId.Mumbai,
  readOnlyUrls: {
    [ChainId.Mumbai]:
      "https://polygon-mumbai.g.alchemy.com/v2/RHYyHR_rZWtSVvLAG9ul-YfTLzSpCceg",
  },
};

function MyApp({ Component, pageProps }) {
  return (
    <DAppProvider config={config}>
      <UserProvider>
        <div className="grid-wrapper">
          <Component {...pageProps} />
        </div>
      </UserProvider>
    </DAppProvider>
  );
}

export default MyApp;
