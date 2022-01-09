import React from "react";
import { makeStyles } from "@mui/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import DialogKontent from "./dialogContent";
import DialogFooter from "./dialogFooter";

// Set the styles
const useStyles = makeStyles(() => ({
  modal: {
    borderRadius: "32px",
    width: "350px",
  },
}));

export default function TextBanner() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
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
    </div>
  );
}
