import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Rating } from "@mui/material";

export default function DoctorCard() {
  const [rating, setRating] = React.useState(3);
  return (
    <Card sx={{ width: "100%" }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Doctor Name:Sumit
        </Typography>
        <Typography variant="p" color="text.secondary">
          Spiciality:Disease Name
        </Typography>
        <br />
        <Rating
          name="simple-controlled"
          style={{ marginTop: "10px" }}
          value={rating}
          onChange={(event, newValue) => {
            setRating(newValue);
          }}
        />
      </CardContent>
      <div
        style={{
          padding: "16px 12px",
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}
      >
        <Button
          size="small"
          style={{ backgroundColor: "#0D47A1", color: "#fff" }}
        >
          Book Appointment
        </Button>
        <Button
          size="small"
          style={{ backgroundColor: "#008000", color: "#fff" }}
        >
          View Details
        </Button>
      </div>
    </Card>
  );
}
