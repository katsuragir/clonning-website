import React from "react";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogKontent from "../banner/dialogContent";
import DialogFooter from "../banner/dialogFooter";

// Set the styles
const useStyles = makeStyles(() => ({
  modal: {
    borderRadius: "32px",
    width: "350px",
  },
}));

export default function Mobile() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="sc-jSFjdj sc-gKAaRy sc-EZqKI kJmatq eOHJkb kahMgl">
      <div className="sc-jSFjdj kJmatq">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj kJmatq">
            <span className="sc-khIgEk hQhHpX">
              <a
                className="sc-bQCEYZ jSDxCO"
                onClick={handleClickOpen}
                aria-hidden="true"
              >
                <div className="sc-jSFjdj sc-gKAaRy gbsSVA cGbKBa">
                  <div className="sc-jHcXXw boHuaK">
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon3.svg" className="sc-bdnxRM cSawQi" />
                    </div>
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon4.svg" className="sc-bdnxRM dubkGi" />
                    </div>
                  </div>
                  <div
                    color="textSubtle"
                    className="sc-gtsrHT sc-fXgAZx gTkcdG erAkNO"
                  >
                    Trade
                  </div>
                </div>
              </a>
              <span color="failure" className="sc-hTRkXV jbtuJx" />
            </span>
          </div>
        </div>
      </div>
      <div className="sc-jSFjdj kJmatq">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj kJmatq">
            <span className="sc-khIgEk hQhHpX">
              <button
                type="button"
                className="sc-bQCEYZ jSDxCO"
                onClick={handleClickOpen}
                aria-hidden="true"
              >
                <div className="sc-jSFjdj sc-gKAaRy gbsSVA cGbKBa">
                  <div className="sc-jHcXXw boHuaK">
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon5.svg" className="sc-bdnxRM cSawQi" />
                    </div>
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon6.svg" className="sc-bdnxRM dubkGi" />
                    </div>
                  </div>
                  <div
                    color="textSubtle"
                    className="sc-gtsrHT sc-fXgAZx gTkcdG erAkNO"
                  >
                    Earn
                  </div>
                </div>
              </button>
              <span color="failure" className="sc-hTRkXV jbtuJx" />
            </span>
          </div>
        </div>
      </div>
      <div className="sc-jSFjdj kJmatq">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj kJmatq">
            <span className="sc-khIgEk hQhHpX">
              <button
                type="button"
                className="sc-bQCEYZ jSDxCO"
                onClick={handleClickOpen}
                aria-hidden="true"
              >
                <div className="sc-jSFjdj sc-gKAaRy gbsSVA cGbKBa">
                  <div className="sc-jHcXXw boHuaK">
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon7.svg" className="sc-bdnxRM cSawQi" />
                    </div>
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon8.svg" className="sc-bdnxRM dubkGi" />
                    </div>
                  </div>
                  <div
                    color="textSubtle"
                    className="sc-gtsrHT sc-fXgAZx gTkcdG erAkNO"
                  >
                    Win
                  </div>
                </div>
              </button>
              <span color="failure" className="sc-hTRkXV jbtuJx" />
            </span>
          </div>
        </div>
      </div>
      <div className="sc-jSFjdj kJmatq">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj kJmatq">
            <span className="sc-khIgEk hQhHpX">
              <button
                type="button"
                className="sc-bQCEYZ jSDxCO"
                onClick={handleClickOpen}
                aria-hidden="true"
              >
                <div className="sc-jSFjdj sc-gKAaRy gbsSVA cGbKBa">
                  <div className="sc-jHcXXw boHuaK">
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon9.svg" className="sc-bdnxRM cSawQi" />
                    </div>
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon10.svg" className="sc-bdnxRM dubkGi" />
                    </div>
                  </div>
                  <div
                    color="textSubtle"
                    className="sc-gtsrHT sc-fXgAZx gTkcdG erAkNO"
                  >
                    NFT
                  </div>
                </div>
              </button>
              <span color="failure" className="sc-hTRkXV jbtuJx" />
            </span>
          </div>
        </div>
      </div>
      <div className="sc-jSFjdj kJmatq">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj kJmatq">
            <span className="sc-khIgEk hQhHpX">
              <button type="button" className="sc-bQCEYZ jSDxCO">
                <div className="sc-jSFjdj sc-gKAaRy gbsSVA cGbKBa">
                  <div className="sc-jHcXXw lictcj">
                    <div className="sc-dWBRfb iTdypV">
                      <img src="/icon11.svg" className="sc-bdnxRM cSawQi" />
                    </div>
                  </div>
                  <div
                    color="textSubtle"
                    className="sc-gtsrHT sc-fXgAZx gTkcdG erAkNO"
                  />
                </div>
              </button>
              <span color="failure" className="sc-hTRkXV jbtuJx" />
            </span>
          </div>
        </div>
      </div>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        classes={{
          paper: classes.modal,
        }}
      >
        <DialogTitle
          id="customized-dialog-title"
          style={{
            background: `linear-gradient(
      139.73deg, rgb(229, 253, 255) 0%, rgb(243, 239, 255) 100%)`,
            fontWeight: "Bold",
          }}
        >
          <IconButton
            aria-label="close"
            onClick={handleClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: `rgb(31, 199, 212)`,
            }}
          >
            <CloseIcon />
          </IconButton>
          Connect Wallet
        </DialogTitle>
        <DialogContent dividers>
          <DialogKontent />
        </DialogContent>
        <DialogActions
          style={{
            alignSelf: "center",
            justifyContent: "center",
            placeContent: "center",
          }}
        >
          <DialogFooter />
        </DialogActions>
      </Dialog>
    </div>
  );
}
