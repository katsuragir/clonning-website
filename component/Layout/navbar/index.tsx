import React from "react";
import DialogCoinComponent from "../../shared/modalComponent/dialog";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="sc-iGkqmO iwcyH">
      <nav className="sc-eXuyPJ fdCbCG">
        <div className="sc-jSFjdj sc-gKAaRy kJmatq jcNvwq">
          <div className="sc-jSFjdj sc-gKAaRy kJmatq jcNvwq">
            <a className="sc-gkCoMD jBMErC logo-large" href="/">
              <img src="/logo.svg" width={160} height={26} alt="logo" />
            </a>
            <a className="sc-gkCoMD jBMErC logo-mini" href="/">
              <img
                src="/mini-logo.svg"
                alt="logo"
                className="image-logo-mobile"
              />
            </a>
          </div>
          <div className="sc-jSFjdj sc-gKAaRy fpWLwd jcNvwq logo-large">
            <div className="sc-jSFjdj fkzWDK">
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <a
                    className="sc-fcmMJX gOgeXN"
                    onClick={handleClickOpen}
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  >
                    Trade
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-jSFjdj fkzWDK">
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <a
                    className="sc-fcmMJX gOgeXN"
                    onClick={handleClickOpen}
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  >
                    Earn
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-jSFjdj fkzWDK">
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <a
                    className="sc-fcmMJX gOgeXN"
                    onClick={handleClickOpen}
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  >
                    Win
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-jSFjdj fkzWDK">
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <a
                    className="sc-fcmMJX gOgeXN"
                    onClick={handleClickOpen}
                    aria-hidden="true"
                    style={{ cursor: "pointer" }}
                  >
                    NFT
                  </a>
                </div>
              </div>
            </div>
            <div className="sc-jSFjdj fkzWDK">
              <div className="sc-jSFjdj kJmatq">
                <div className="sc-fuISkM itZnGa">
                  <a className="sc-fcmMJX gOgeXN" href="/info">
                    <svg
                      viewBox="0 0 24 24"
                      color="textSubtle"
                      width="20px"
                      xmlns="http://www.w3.org/2000/svg"
                      className="sc-bdnxRM cSawQi"
                    >
                      <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sc-jSFjdj sc-gKAaRy togOu">
          <div className="sc-jSFjdj hwtEBz logo-large">
            <a
              href="https://pancakeswap.finance/swap?outputCurrency=0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82"
              target="_blank"
              rel="noreferrer"
              className="sc-giAqHp bYgUJS"
            >
              <img src="/icon1.svg" alt="icon1" className="sc-bdnxRM crMNLM" />
              <div color="textSubtle" className="sc-gtsrHT kgqJZu">
                $10.445
              </div>
            </a>
          </div>
          <div className="sc-jSFjdj cLIAJn">
            <div className="sc-kLojOw iehvjW">
              <button className="sc-hKFxyN kvcgdk" data-scale="xs">
                <img
                  src="/globe.svg"
                  alt="bahasa"
                  className="sc-bdnxRM iaPfuZ"
                />
              </button>
            </div>
          </div>
          <div className="sc-jSFjdj sc-gKAaRy kJmatq jcNvwq">
            <button
              className="sc-hKFxyN fAYovO iLUutT sc-eCApnc"
              data-scale="sm"
            >
              <img
                src="/setting.svg"
                alt="setting"
                className="sc-bdnxRM cSawQi"
              />
            </button>
          </div>
          <button
            className="sc-hKFxyN tSBKF"
            data-scale="sm"
            onClick={handleClickOpen}
          >
            Connect Wallet
          </button>
          <DialogCoinComponent open={open} setOpen={setOpen} />
        </div>
      </nav>
    </div>
  );
}
