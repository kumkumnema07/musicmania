"use client";
import { useState } from "react";
export default function AdmissionForm() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [branch, setBranch] = useState("");
  const [address, setAddress] = useState("");
  const [hour, setHour] = useState("");
  const [minute, setMinute] = useState("");
  const [period, setPeriod] = useState("");
  const [guardian, setGuardian] = useState("");
  const [payment, setPayment] = useState("");
  const [fee, setFee] = useState("");
  const [photoFile, setPhotoFile] = useState<File | null>(null);

  const [hear, setHear] = useState("");
  const [otherHear, setOtherHear] = useState("");
  const [course, setCourse] = useState("");
  const [otherCourse, setOtherCourse] = useState("");
  const [occupation, setOccupation] = useState("");
  const [otherOccupation, setOtherOccupation] = useState("");
  const [selectedDays, setSelectedDays] = useState<string[]>([]);
  // const [hear, setHear] = useState("");
  // const [otherHear, setOtherHear] = useState("");
  // const [course, setCourse] = useState("");
  // const [otherCourse, setOtherCourse] = useState("");
  // const [occupation, setOccupation] = useState("");
  // const [otherOccupation, setOtherOccupation] = useState("");
  // const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const handleDayChange = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((d) => d !== day));
    } else if (selectedDays.length < 2) {
      setSelectedDays([...selectedDays, day]);
    } else {
      alert("You can select only 2 days");
    }
  };

  // 🔥 SUBMIT FUNCTION
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("name", name);
    formData.append("email", email);
    formData.append("mobile", mobile);
    formData.append("date_of_birth", dob);
    formData.append("gender", gender);
    formData.append("branch", branch);
    formData.append("address", address);
    formData.append("batch_hour", hour);
    formData.append("batch_minute", minute);
    formData.append("batch_period", period);
    formData.append("class_days", selectedDays.join(","));
    formData.append("photo", photoFile as File);
    formData.append("course", course === "Other" ? otherCourse : course);
    formData.append("guardian_number", guardian);
    formData.append("payment_method", payment);
    formData.append("fee_submitted", fee);
    formData.append(
      "occupation",
      occupation === "Other" ? otherOccupation : occupation,
    );
    formData.append("heard_about", hear === "Other" ? otherHear : hear);

    const res = await fetch(`${API_URL}/admissions`, {
      method: "POST",
      body: formData,
    });

    const data = await res.json();
    alert(data.message);
  };

  return (
    <div className="min-h-screen bg-black flex justify-center pt-6 p-6">
      <form
      onSubmit={handleSubmit}
      className="bg-black text-white border border-gray-800 shadow-xl rounded-xl p-6 md:p-8 w-full max-w-4xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold text-center">
          Student Admission Form
        </h1>

        {/* Name Email Mobile */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
              required
            />
          </div>

          <div>
            <label className="font-medium">Mobile Number *</label>
            <input
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
              required
            />
          </div>
        </div>

        {/* DOB Gender Branch */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <label className="font-medium">Date of Birth</label>
            <input
              type="date"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Gender *</label>

            <div className="flex gap-6 mt-2">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  onChange={(e) => setGender(e.target.value)}
                />{" "}
                Female
              </label>
            </div>
          </div>

          <div>
            <label className="font-medium">Branch</label>

            <select
              value={branch}
              onChange={(e) => setBranch(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
            >
              <option value="">Select Branch</option>
              <option value="vasai">Vasai</option>
              <option value="nalasopara">Nalasopara</option>
              <option value="virar">Virar</option>
            </select>
          </div>
        </div>

        {/* Address */}

        <div>
          <label className="font-medium">Address *</label>

          <textarea
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
            required
          />
        </div>

        {/* Batch Time */}

        <div>
          <label className="font-medium">Batch Time *</label>

          <div className="flex flex-wrap items-center gap-3 mt-2">
            <input
              value={hour}
              onChange={(e) => setHour(e.target.value)}
              placeholder="HH"
              className="w-20 border border-gray-700 bg-black text-white rounded p-2"
            />
            <input
              value={minute}
              onChange={(e) => setMinute(e.target.value)}
              placeholder="MM"
              className="w-20 border border-gray-700 bg-black text-white rounded p-2"
            />
            <select
              value={period}
              onChange={(e) => setPeriod(e.target.value)}
              className="border border-gray-700 bg-black text-white rounded p-2"
            >
              <option value="">AM/PM</option>
              <option>AM</option>
              <option>PM</option>
            </select>
          </div>
        </div>

        {/* Class Days */}

        {/* Class Days */}

        <div>
          <label className="font-medium">
            Class Days * (only 2 days selected)
          </label>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-2">
            {[
              "Sunday",
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
            ].map((day) => (
              <label key={day} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  value={day}
                  checked={selectedDays.includes(day)}
                  disabled={
                    !selectedDays.includes(day) && selectedDays.length >= 2
                  }
                  onChange={() => handleDayChange(day)}
                />
                {day}
              </label>
            ))}
          </div>
        </div>

        {/* Upload Photo */}

        <div>
          <label className="font-medium">Upload Passport Size Photo *</label>

          <input
            type="file"
            onChange={(e) => setPhotoFile(e.target.files?.[0] || null)}
          />
        </div>

        {/* Course */}

        <div>
          <label className="font-medium">What do you want to learn?</label>

          <select
            value={course}
            onChange={(e) => setCourse(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Acoustic Guitar">Acoustic Guitar</option>
            <option value="Bass Guitar">Bass Guitar</option>
            <option value="Electric Guitar">Electric Guitar</option>
            <option value="Vocal">Vocal</option>
            <option value="Keyboard">Keyboard</option>
            <option value="Other">Other</option>
          </select>
          {course === "Other" && (
            <input
              type="text"
              placeholder="Please specify"
              value={otherCourse}
              onChange={(e) => setOtherCourse(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-2"
            />
          )}
        </div>

        {/* Guardian */}

        <div>
          <label className="font-medium">Guardian Number *</label>

          <input
            type="tel"
            value={guardian}
            onChange={(e) => setGuardian(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          />
        </div>

        {/* Payment */}

        <div>
          <label className="font-medium">
            Where have you made your payment?
          </label>

          <select
            value={payment}
            onChange={(e) => setPayment(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Cash">Cash</option>
            <option value="UPI">UPI</option>
          </select>
        </div>

        {/* Fee */}

        <div>
          <label className="font-medium">Have you submitted fee?</label>

          <select
            value={fee}
            onChange={(e) => setFee(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* occupation */}

        <div>
          <label className="font-medium">Occupation</label>

          <select
            value={occupation}
            onChange={(e) => setOccupation(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          >
            <option value="">Select Occupation</option>
            <option value="Job">Job</option>
            <option value="Business">Business</option>
            <option value="Self Employed">Self Employed</option>
            <option value="Student">Student</option>
            <option value="Other">Other</option>
          </select>
          {occupation === "Other" && (
            <input
              type="text"
              placeholder="Please specify occupation"
              value={otherOccupation}
              onChange={(e) => setOtherOccupation(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-2"
            />
          )}
        </div>

        {/* heared */}

        <div>
          <label className="font-medium">
            How did you hear about the class?
          </label>

          <select
            value={hear}
            onChange={(e) => setHear(e.target.value)}
            className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-1"
          >
            <option value="">Select</option>
            <option value="Google">Google</option>
            <option value="Social Media">Social Media</option>
            <option value="Reference">Reference</option>
            <option value="Other">Other</option>
          </select>

          {hear === "Other" && (
            <input
              type="text"
              placeholder="Please specify"
              value={otherHear}
              onChange={(e) => setOtherHear(e.target.value)}
              className="w-full border border-gray-700 bg-black text-white rounded p-2 mt-2"
            />
          )}
        </div>

        <button
  type="submit"
  className="mx-auto block w-48 bg-primary text-black font-semibold py-2 rounded hover:bg-primary transition"
>
  Submit Form
</button>
      </form>
    </div>
  );
}
