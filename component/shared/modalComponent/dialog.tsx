import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import DialogKontent from "./dialogContent";
import DialogFooter from "./dialogFooter";

interface DialogProps {
  setOpen: any;
  open: any;
}

// Set the styles
const useStyles = makeStyles(() => ({
  modal: {
    borderRadius: "32px",
    width: "350px",
  },
}));

export default function DialogCoinComponent(props: DialogProps) {
  const { open, setOpen } = props;
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
  return (
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
  );
}
