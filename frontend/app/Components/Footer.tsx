"use client";
import { useEffect, useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

type AppConfig = {
  app_name?: string;
  phone?: string;
  address?: string;
  facebook_link?: string;
  instagram_link?: string;
  youtube_link?: string;
};



export default function Footer() {
  const [config, setConfig] = useState<AppConfig>({});

useEffect(() => {
const fetchConfig = async () => {
try {
const res = await fetch("http://localhost:5000/api/app-config");
const data = await res.json();
setConfig(data);
} catch (err) {
console.log(err);
}
};


fetchConfig();

}, []);


  return (
    <footer className="bg-black text-gray-300 pt-16 pb-6 relative">
      <div className="max-w-7xl mx-auto px-6 mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Logo Section */}
        <div>
          <h2 className="text-2xl font-bold text-primary mb-4">
           ● {config.app_name || "Music Mania"}
          </h2>
          <p className="text-gray-400 text-sm leading-6">
            Learn music professionally with expert guidance. Guitar, Piano,
            Vocals & more.
          </p>

          <div className="flex space-x-4 mt-6 text-primary">
            {/* Facebook */}
            {config.facebook_link ? ( <a href={config.facebook_link} target="_blank"> <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaFacebookF className="text-black w-4 h-4" /> </div> </a> ) : ( <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaFacebookF className="text-black w-4 h-4" /> </div> )}

            {/* Instagram */}
            {config.instagram_link ? ( <a href={config.instagram_link} target="_blank"> <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaInstagram className="text-black w-4 h-4" /> </div> </a> ) : ( <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaInstagram className="text-black w-4 h-4" /> </div> )}

            {/* YouTube */}
            {config.youtube_link ? ( <a href={config.youtube_link} target="_blank"> <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaYoutube className="text-black w-4 h-4" /> </div> </a> ) : ( <div className="bg-primary p-3 rounded-full hover:scale-110 transition cursor-pointer"> <FaYoutube className="text-black w-4 h-4" /> </div> )}
          </div>
        </div>

        {/* Sitemap */}
        <div className="md:ml-20">
          <h3 className="text-xl font-semibold text-primary  mb-4">Sitemap</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/privacy policy">privacy policy</Link>
            </li>
            <li>
              <Link href="/gallery">Terms & Condition</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">
            Contact Info
          </h3>
          <div className="space-y-3 text-sm">
            <div className="flex items-center space-x-2">
              <MapPin className="text-primary" size={16} />

              <span>Mumbai, India</span>
            </div>

            <div className="flex items-center space-x-2">
              <MapPin className="text-primary" size={16} /> <span>{config.address || "Mumbai, India"}</span>
            </div>
          </div>
        </div>

        {/* Subscribe */}
        <div>
          <h3 className="text-xl font-semibold text-primary mb-4">Subscribe</h3>

          <div className="flex items-center bg-[#1a1a1a] rounded-full overflow-hidden">
            <input
              type="email"
              placeholder="Your email..."
              className="bg-transparent px-4 py-2 w-full outline-none text-sm"
            />
            <button className="bg-primary p-3 text-black">
              <Send size={16} />
            </button>
          </div>

          <div className="mt-3 text-xs text-gray-500">
            I agree to terms & conditions
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-gray-800 mt-12 pt-4 text-center text-sm text-gray-500">
        © 2026 MusicMania. All Rights Reserved.
      </div>
    </footer>
  );
}
