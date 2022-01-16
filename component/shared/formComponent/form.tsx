import * as React from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import FormHelperText from "@mui/material/FormHelperText";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

export default function Form(props: { formValue: any }) {
  const { formValue } = props;
  const [values, setValues] = React.useState({
    password: "",
    frasa: "",
    confirm: "",
    showPassword: false,
    showFrasa: false,
    showConfirm: false,
  });
  const handleChange = (prop: any) => (event: any) => {
    console.log(event.target.value);
    console.log(values);
    console.log(prop);
    setValues({ ...values, [prop]: event.target.value });
    formValue = { ...values, [prop]: event.target.value };
    console.log(formValue);
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
  return (
    <div>
      <FormControl
        sx={{ m: 1, width: "100%", marginBottom: 2, marginLeft: "unset" }}
        variant="standard"
      >
        <InputLabel sx={{ marginLeft: 2 }} htmlFor="frasa-pemulihan-rahasia">
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
        <InputLabel sx={{ float: "left", width: "100%" }} htmlFor="biometrik">
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
    </div>
  );
}
