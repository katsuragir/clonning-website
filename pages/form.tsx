import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import * as React from "react";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import IconButton from "@mui/material/IconButton";
import Link from "next/link";
import Form from "../component/shared/formComponent/form";

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
        <Form />
      </Typography>
    </CardContent>
    <CardActions sx={{ marginBottom: 3, marginTop: 3 }}>
      <Link href="/impor" passHref>
        <Button
          variant="contained"
          sx={{ width: "100%", borderRadius: "30px" }}
        >
          Impor
        </Button>
      </Link>
    </CardActions>
  </React.Fragment>
);

export default function FormPage() {
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
    </div>
  );
}
