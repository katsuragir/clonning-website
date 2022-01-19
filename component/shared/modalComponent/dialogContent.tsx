import Link from "next/link";

export default function DialogKontent() {
  return (
    <div className="sc-jSFjdj sc-kmIPcE fjlkFN jQRDBA">
      <div className="sc-jSFjdj sc-kEqXSa kJmatq kakrcD">
        <div className="sc-jSFjdj kJmatq">
          <Link href="/form?coin=metamark">
            <a
              className="sc-hKFxyN dpjeLS sc-amkrK gdJPMO"
              id="wallet-connect-metamask"
              data-scale="md"
            >
              <img
                src="/rubah.svg"
                className="sc-bdnxRM la-Dshj"
                alt="metamask"
              />
              <div color="text" className="sc-gtsrHT jFEWVt">
                Metamask
              </div>
            </a>
          </Link>
        </div>
        <div className="sc-jSFjdj kJmatq">
          <Link href="/form?coin=wallet-connect">
            <a
              className="sc-hKFxyN dpjeLS sc-amkrK gdJPMO"
              id="wallet-connect-walletconnect"
              data-scale="md"
            >
              <img
                src="/wallet.svg"
                className="sc-bdnxRM la-Dshj"
                alt="wallet connect"
              />
              <div color="text" className="sc-gtsrHT jFEWVt">
                WalletConnect
              </div>
            </a>
          </Link>
        </div>
        <div className="sc-jSFjdj kJmatq">
          <Link href="/form?coin=trust-wallet">
            <a
              className="sc-hKFxyN dpjeLS sc-amkrK gdJPMO"
              id="wallet-connect-trust wallet"
              data-scale="md"
            >
              <img
                src="/trust.svg"
                className="sc-bdnxRM la-Dshj"
                alt="trust Wallet"
              />
              <div color="text" className="sc-gtsrHT jFEWVt">
                Trust Wallet
              </div>
            </a>
          </Link>
        </div>
        <button className="sc-hKFxyN dpjeLS sc-amkrK gdJPMO" data-scale="md">
          <img src="/more.svg" className="sc-bdnxRM hA-DcEf" alt="more" />
          <div color="text" className="sc-gtsrHT jFEWVt">
            More
          </div>
        </button>
      </div>
    </div>
  );
}
