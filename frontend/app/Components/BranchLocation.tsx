type Props = {
  branchName: string;
  mapSrc: string;
};

export default function BranchLocation({ branchName, mapSrc }: Props) {
  return (
    <section className="bg-black py-16 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h2 className="text-5xl font-bold mb-10">
          Visit Our {branchName} Branch
        </h2>

        <div className="rounded-xl overflow-hidden">
          <iframe
            src={mapSrc}
            width="100%"
            height="350"
            loading="lazy"
          ></iframe>
        </div>

      </div>
    </section>
  );
}