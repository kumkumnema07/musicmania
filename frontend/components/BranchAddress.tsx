type Props = {
  branchName: string;
  address: string;
  phone: string;
};

export default function BranchAddress({
  branchName,
  address,
  phone,
}: Props) {
  return (
    <section className="bg-black text-white py-16">
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* TITLE */}
        <h2 className="text-3xl md:text-5xl font-bold text-primary text-center mb-10">
          {branchName} Contact Details
        </h2>

        {/* BOX */}
        <div className="bg-zinc-900 rounded-xl p-6 md:p-10">
          
          <div className="flex flex-col md:flex-row">
            
            {/* LEFT - ADDRESS */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-3"> Address</h3>
              <p className="text-gray-300 leading-relaxed">
                {address}
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block w-px bg-white/20 mx-8"></div>

            {/* RIGHT - PHONE */}
            <div className="flex-1 mt-6 md:mt-0">
              <h3 className="text-xl font-semibold mb-3"> Phone</h3>
              <p className="text-gray-300 text-lg">
                {phone}
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}