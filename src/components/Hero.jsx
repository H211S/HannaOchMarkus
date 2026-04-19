import Countdown from "./Countdown";

function Hero() {
  return (
    <section className="relative h-screen overflow-hidden">

      {/* Bakgrundsbild (extra lager bakom hero) */}
      <img
        src="/src/assets/background.jpg"
        alt="Bakgrund"
        className="absolute w-full h-full object-cover opacity-40 object-[15%_85%]"
      />

      {/* Hero-bild */}
      <img
        src="/src/assets/background.jpg"
        alt="Hanna & Markus"
        className="absolute w-full h-full object-cover opacity-70 object-[15%_85%]"
      />

      {/* Overlay för moody look */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Text + Countdown */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <p className="tracking-widest mb-10"></p>
        <h1 className="text-4xl md:text-7xl  mb-12  rubrik">Hanna & Markus</h1>
        <p className="text-2xl tracking-wide mb-8 rubrik">10 Oktober · Karlskrona</p>

        <Countdown />
      </div>
    </section>
  );
}

export default Hero;