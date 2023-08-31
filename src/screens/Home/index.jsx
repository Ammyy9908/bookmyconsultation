import React, { useState } from "react";
import Header from "../../commons/Header";
import TabPanel from "../../commons/Tab";
import "./index.css";
import DoctorCard from "../../commons/DoctorCard";
import AuthModal from "../../commons/AuthModal";

function HomePage() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ width: "100%" }}>
      <Header setOpen={setOpen} />
      <div className="container">
        <div className="flex items-center justify-center">
          <TabPanel />
        </div>

        <div
          className="doctor-cards flex flex-col"
          style={{
            width: "75%",
            margin: "64px auto",
            gap: "32px",
          }}
        >
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
          <DoctorCard />
        </div>
      </div>
      <AuthModal open={open} setOpen={setOpen} />
    </div>
  );
}

export default HomePage;
