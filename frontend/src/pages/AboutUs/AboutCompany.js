import React from "react";

const AboutCompany = () => {
  return (
    <div
      className="p-4 aboutImg md:p-8 h-96 bg-cover bg-center relative text-white justify-items-center self-center"
      style={{ backgroundImage: `url("/aboutImg/about.jpg")` }}
    >
      <div className="w-full h-full main-text bg-black opacity-50"></div>
      <div className="main-text bg-transparent text-grey-300">
        <h1 className="text-center text-4xl p-5 bg-transparent">
          About Tea Wonders
        </h1>
        <p className="text-center bg-transparent">
          Tea is the most popular beverage in the world after water. It’s a
          simple preparation of pouring hot water over cured leaves of the
          Camellia sinensis plant.
          {/* The first recording of tea described it as a
          medicinal beverage in China in the 3rd century AD. Merchants helped
          its popularity to spread quickly across continents. In the early 19th
          century, Great Britain popularized the concept of afternoon tea, a
          break from one’s routine in which tea is served alongside sandwiches
          and baked goods such as scones.  */}
          The flavor of tea varies by where the tea leaves are harvested and how
          they are grown and processed. Black tea is the most popular worldwide,
          followed by green, oolong, and white tea
        </p>
      </div>
    </div>
  );
};

export default AboutCompany;
