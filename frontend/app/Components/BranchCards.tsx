import Image from "next/image";
import AnimatedHeader from "../Components/AnimatedHeader";

export default function BranchCards() {
  const branches = [
    {
      name: "Virar Branch",
      image: "/logo/musiclogo/Untitled design.png",
      address: "Station Road, Virar West, Mumbai",
      phone: "+91 9876543210",
    },
    {
      name: "Vasai Branch",
      image: "/logo/musiclogo/vasai.svg",
      address: "Ambadi Road, Vasai West, Mumbai",
      phone: "+91 9876543211",
    },
    {
      name: "Nalasopara Branch",
      image: "/logo/musiclogo/nalapora.svg",
      address: "Achole Road, Nalasopara East, Mumbai",
      phone: "+91 9876543212",
    },
  ];

  return (
    <section className="bg-black py-20">
      <div className="max-w-7xl mx-auto px-4">
        <AnimatedHeader
          title="Our Branches"
          subtitle="Visit our branches across Mumbai and start your musical journey."
        ></AnimatedHeader>

        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg hover:scale-105 transition"
            >
              <Image
                src={branch.image}
                alt={branch.name}
                width={400}
                height={250}
                className="w-full h-[220px] object-cover"
              />

              <div className="p-6 text-center">
                <h3 className="text-xl text-white font-semibold mb-2">
                  {branch.name}
                </h3>

                <p className="text-gray-400 text-sm">{branch.address}</p>

                <p className="text-primary mt-3 font-semibold">
                  📞 {branch.phone}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
