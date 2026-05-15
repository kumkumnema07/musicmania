"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import AnimatedHeader from "@/app/Components/AnimatedHeader";

const CTA = () => {
  const [banner, setBanner] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCTA = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/cta");

        setBanner(res.data?.image || "");
      } catch (error) {
        console.error("Error fetching CTA:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCTA();
  }, []);

  return (
    <div className="bg-black py-20">
      <div className="w-[90%] mx-auto">
        <AnimatedHeader
          title="Latest Video"
          subtitle="Visit our branches across Mumbai and start your musical journey."
        />

        <div className="mt-10 rounded-2xl overflow-hidden">
          {loading ? (
            <p className="text-gray-400 text-center">Loading...</p>
          ) : (
            <img
              src={banner || "/logo/musiclogo/default.jpg"}
              alt="CTA Banner"
              className="w-full h-[400px] md:h-[500px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default CTA;
