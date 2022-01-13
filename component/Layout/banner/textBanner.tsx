import React from "react";
import DialogCoinComponent from "../../shared/modalComponent/dialog";

export default function TextBanner() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  return (
    <div className="sc-jSFjdj sc-gKAaRy kJmatq iKOCuh">
      <h2
        className="sc-gtsrHT sc-jJMGnK gLmuIw"
        data-scale="xxl"
        data-color="secondary"
      >
        The moon is made of pancakes.
      </h2>
      <h2
        data-scale="md"
        data-color="text"
        className="sc-gtsrHT sc-jJMGnK gcLVyG kUBYHh"
      >
        Trade, earn, and win crypto on the most popular decentralized platform
        in the galaxy.
      </h2>
      <div className="sc-jSFjdj sc-gKAaRy kJmatq jcNvwq">
        <button
          className="sc-hKFxyN cCyxGH"
          data-scale="md"
          onClick={handleClickOpen}
        >
          Connect Wallet
        </button>
        <a onClick={handleClickOpen} aria-hidden="true">
          <button className="sc-hKFxyN jRWmGv" data-scale="md">
            Trade Now
          </button>
        </a>
        <DialogCoinComponent open={open} setOpen={setOpen} />
      </div>
    </div>
  );
}
