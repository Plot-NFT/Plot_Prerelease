import "../scss/style.scss";

import { DAppProvider, ChainId } from "@usedapp/core";

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
      <div className="grid-wrapper">
        <Component {...pageProps} />
      </div>
    </DAppProvider>
  );
}

export default MyApp;
