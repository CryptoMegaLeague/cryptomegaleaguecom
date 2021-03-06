import NewsletterForm from "./NewsletterForm";

function Hero() {
  return (
    <div
      className="h-screen bg-gradient-to-tl from-gradient1 to-gradient2 lg:px-64 flex justify-center items-center"
      id="home"
    >
      <div className="pt-24 pb-16 px-4 text-white flex flex-col items-center">
        <p className="lg:text-2xl text-xl">
          An NFT Aggregation Platform for College Sports Communities
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          Starting from unique digital collectibles that live on the Ethereum
          blockchain, we plan to build a vibrant ecosystem that provides
          features like: Decentralized Autonomous Organization (DAO) platform
          that ensures an engaging community, community token issuance,
          Decentralized Finance (DeFi), and play-to-earn DeFi game.
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          We are a team of students at the University of Washington striving to
          bring the best in blockchain technology to our community. Our NFTs aim
          to help college athletes and artists build a fan base, bridge the gap
          and facilitate the community to be closer and more engaging than ever.
        </p>
        <p className="text-left lg:w-96 mt-4 lg:my-2">
          Owning a CML NFT means you are a stakeholder of our project and an
          investor in the future of blockchain technology, cryptocurrency, and
          the Metaverse. It also shows your support to student designers and
          college athletes.
        </p>
        <p className="mt-4">Inquiry:</p>
        <a href="mailto: CryptoMegaLeague@gmail.com" className="underline">
          CryptoMegaLeague@gmail.com
        </a>
      </div>
      {/* <NewsletterForm></NewsletterForm> */}
    </div>
  );
}

export default Hero;
