export default function VirarLocation() {
  return (
    <>
      <section className="bg-[#0b0b0b] py-16 px-6 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Visit Our Virar Branch</h2>

          <div className="rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18..."
              width="100%"
              height="350"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
