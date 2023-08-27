import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        style={{ backgroundColor: "#800080", padding: "11px" }}
      >
        <Toolbar>
          <img
            src="/assets/doctor_logo.jpeg"
            alt="brand-logo"
            width={48}
            height={48}
          />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} ml={2}>
            Doctor Finder
          </Typography>
          <Button color="inherit" style={{ backgroundColor: "#ff7f7f" }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
