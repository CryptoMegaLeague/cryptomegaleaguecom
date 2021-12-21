import NewsletterForm from "./NewsletterForm";

function Hero() {
  return (
    <div
      className="h-screen bg-gradient-to-tl from-gradient1 to-gradient2 lg:px-64 flex justify-center items-center"
      id="home"
    >
      <div className="pt-24 pb-16 px-4 text-white flex flex-col items-center">
        <p className="lg:text-2xl text-xl">
          Student-run football NFTs collection
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          Our NFT collection is guaranteed to be unique and their scarcity is
          ensured using <strong>blockchain</strong> technology and the use of{" "}
          <strong>smart contracts</strong>.
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          The collections are well-designed and hand-drawn by our creative UW
          student designers.
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          Owning an NFT shows your support to UW student designers and sport
          teams, as well as your support to the future of cryptocurrency and
          Metaverse. We aim to build and facilitate an ecosystem and community
          through our athletes NFTs stories.
        </p>
        <p className="mt-4">Inquiry:</p>
        <a href = "mailto: CryptoMegaLeague@gmail.com" className="underline">CryptoMegaLeague@gmail.com</a>
      </div>
      {/* <NewsletterForm></NewsletterForm> */}
    </div>
  );
}

export default Hero;
