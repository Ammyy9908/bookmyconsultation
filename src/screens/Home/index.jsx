import React from "react";
import Header from "../../commons/Header";
import TabPanel from "../../commons/Tab";
import "./index.css";
import DoctorCard from "../../commons/DoctorCard";

function HomePage() {
  return (
    <div style={{ width: "100%" }}>
      <Header />
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
    </div>
  );
}

export default HomePage;
