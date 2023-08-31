import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import FormControl from "@mui/material/FormControl";
import { Input, InputLabel } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
};

export default function AuthModal({ open, setOpen }) {
  //const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [fname, setFname] = React.useState("");
  const [lname, setLname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [mobile, setMobile] = React.useState("");
  const [value, setValue] = React.useState("login");

  const [showEmailTooltip, setShowEmailTooltip] = React.useState(false);
  const [showPasswordTooltip, setShowPasswordTooltip] = useState(false);

  const resetForm = () => {
    setFname("");
    setPassword("");
    setMobile("");
    setLname("");
    setEmail("");
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    resetForm();
  };

  const handleLoginRegister = () => {
    // Reset tooltip states
    setShowEmailTooltip(false);
    setShowPasswordTooltip(false);

    // Check for empty fields and set the corresponding tooltip states
    if (email === "") {
      setShowEmailTooltip(true);
      setTimeout(() => {
        setShowEmailTooltip(false);
      }, 3000);
    }

    if (password === "") {
      setShowPasswordTooltip(true);
      setTimeout(() => {
        setShowPasswordTooltip(false);
      }, 3000);
    }

    // Implement your login or registration logic here
  };

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        bgcolor="rgba(255, 255, 255, 0.9)"
      >
        <Box sx={style}>
          <div style={{ backgroundColor: "#800080", padding: "22px 18px" }}>
            <p style={{ color: "#fff" }}>Authentication</p>
          </div>

          <div className="w-full" style={{ padding: "16px 12px" }}>
            <Tabs
              value={value}
              onChange={handleChange}
              textColor="secondary"
              indicatorColor="secondary"
              aria-label="secondary tabs example"
              style={{ width: "100%" }}
            >
              <Tab value="login" label="Login" style={{ width: "50%" }} />
              <Tab value="register" label="Register" style={{ width: "50%" }} />
            </Tabs>

            <div
              style={{
                padding: "0px 16px",
                display: "flex",
                flexDirection: "column",
                gap: "32px",
                marginTop: "18px",
                alignItems: "center",
                width: "75%",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              {value !== "login" && (
                <FormControl style={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="fname"
                    shrink={fname !== "" ? true : false}
                  >
                    First Name
                  </InputLabel>
                  <Input
                    id="fname"
                    aria-describedby="my-helper-fname"
                    type="text"
                    value={fname}
                    onChange={(e) => setFname(e.target.value)}
                  />
                </FormControl>
              )}
              {value !== "login" && (
                <FormControl style={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="lname"
                    shrink={lname !== "" ? true : false}
                  >
                    Last Name
                  </InputLabel>
                  <Input
                    id="lname"
                    aria-describedby="my-helper-lname"
                    type="text"
                    value={lname}
                    onChange={(e) => setLname(e.target.value)}
                  />
                </FormControl>
              )}
              <FormControl style={{ width: "100%", position: "relative" }}>
                <InputLabel
                  htmlFor="email"
                  shrink={email !== "" ? true : false}
                >
                  Email address
                </InputLabel>
                <Tooltip
                  title="Please fill out this field."
                  open={showEmailTooltip}
                  sx={{ padding: "16px", position: "absolute", left: 0 }}
                />
                <Input
                  id="email"
                  aria-describedby="my-helper-email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </FormControl>
              <FormControl style={{ width: "100%" }}>
                <InputLabel
                  htmlFor="password"
                  shrink={password !== "" ? true : false}
                >
                  Password
                </InputLabel>
                <Tooltip
                  title="Please fill out this field."
                  open={showPasswordTooltip}
                  sx={{ padding: "16px", position: "absolute", left: 0 }}
                />
                <Input
                  id="password"
                  aria-describedby="my-helper-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </FormControl>
              {value !== "login" && (
                <FormControl style={{ width: "100%" }}>
                  <InputLabel
                    htmlFor="mob"
                    shrink={mobile !== "" ? true : false}
                  >
                    Mobile No. *
                  </InputLabel>
                  <Input
                    id="mob"
                    aria-describedby="my-helper-mobile"
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                  />
                </FormControl>
              )}
              <Button variant="contained" onClick={handleLoginRegister}>
                {value === "login" ? "Login" : "Register"}
              </Button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
