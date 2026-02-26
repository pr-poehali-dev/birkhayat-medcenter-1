import { useState } from "react";
import Navbar from "@/components/Navbar";
import MainSections from "@/components/MainSections";
import AppointmentSection from "@/components/AppointmentSection";
import ReviewsBlogContactsFooter from "@/components/ReviewsBlogContactsFooter";

export default function Index() {
  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleScrollToAppointment = (doctorName: string) => {
    setSelectedDoctor(doctorName);
    document.getElementById("appointment")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--dark)", color: "#E8E0D0" }}>
      <Navbar />
      <MainSections onScrollToAppointment={handleScrollToAppointment} />
      <AppointmentSection selectedDoctor={selectedDoctor} setSelectedDoctor={setSelectedDoctor} />
      <ReviewsBlogContactsFooter />
    </div>
  );
}
