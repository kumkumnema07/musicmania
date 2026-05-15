

export default function ClassSection() {
  const stats = [
    {
      number: "400+",
      label: "Certified Music Teachers",
    },
    {
      number: "20+",
      label: "Years of Experience",
    },
    {
      number: "1,46,000+",
      label: "Hours of Teaching Annually",
    },
    {
      number: "35,000+",
      label: "Learners Taught",
    },
  ];

  return (
    <div className="flex-1 bg-black text-white p-10">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center mb-3">
        World Class Music Educators
      </h2>

      <p className="text-gray-500 text-center mb-10">
        Learn 1:1 online music from certified teachers – personalized for you
      </p>

      {/* Image Section */}
      <div className="flex justify-center mb-12">
        <img
          src="/logo/musiclogo/frame.png"
          alt="Music Teachers"
          className="max-w-md w-full object-contain"
        />
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-[#f8f8f8] rounded-xl p-6 text-center shadow-sm hover:shadow-md transition"
          >
            <h3 className="text-2xl font-bold text-primary mb-2">
              {item.number}
            </h3>
            <p className="text-sm text-gray-600">
              {item.label}
            </p>
          </div>
        ))}
      </div>
      
    </div>
  );
}