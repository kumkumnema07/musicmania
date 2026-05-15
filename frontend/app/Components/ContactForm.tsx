"use client";

export default function ContactForm() {
  return (
    <div className="w-full lg:w-1/3 bg-black  border rounded-3xl p-10 text-white flex flex-col justify-center">
      
      <h2 className="text-3xl font-bold mb-3 text-primary">
        Book Your Free Trial Class
      </h2>
      <p className="text-gray-400 mb-8 text-sm">
        Limited demo slots available today
      </p>

      <div className="space-y-6">
        
        {/* Name */}
        <div>
          <label className="text-sm text-gray-400">Student Name</label>
          <input
            type="text"
            placeholder="Enter student's name"
            className="w-full mt-2 px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:border-primary focus:outline-none"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="text-sm text-gray-400">Phone Number</label>
          <input
            type="text"
            placeholder="Enter WhatsApp number"
            className="w-full mt-2 px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:border-primary focus:outline-none"
          />
        </div>

        {/* Age */}
        <div>
          <label className="text-sm text-gray-400">Select Age Group</label>
          <div className="flex gap-3 mt-3 flex-wrap">
            {["6-12", "13-21", "22-30", "31-40", "40+"].map((age) => (
              <button
                key={age}
                type="button"
                className="px-4 py-2 rounded-full border border-gray-600 hover:bg-primary hover:text-black transition text-sm"
              >
                {age}
              </button>
            ))}
          </div>
        </div>

        {/* Course */}
        <div>
          <label className="text-sm text-gray-400">Select Course</label>
          <select className="w-full mt-2 px-4 py-3 rounded-lg bg-[#222] border border-gray-700 focus:border-primary focus:outline-none">
            <option>Select Course</option>
            <option>Keyboard & Piano</option>
            <option>Guitar</option>
            <option>Drums</option>
            <option>Vocal Training</option>
            <option>Western Vocal</option>
          </select>
        </div>

        {/* Button */}
        <button className="w-full bg-primary text-black py-3 rounded-lg font-semibold hover:scale-105 transition">
          Book Free Trial
        </button>
      </div>
    </div>
  );
}