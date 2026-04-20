import { useState, useEffect } from "react";

function Countdown() {
  const weddingDate = new Date("2026-10-10T16:00:00+02:00").getTime();

  const [timeLeft, setTimeLeft] = useState(weddingDate - Date.now());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(weddingDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const safeTime = Math.max(timeLeft, 0);

  const days = Math.floor(safeTime / (1000 * 60 * 60 * 24));
  const hours = Math.floor((safeTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((safeTime % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((safeTime % (1000 * 60)) / 1000);

  // 🎉 När tiden är inne
  if (timeLeft <= 0) {
    return (
      <div className="container text-center mt-10">
        <p className="text-3xl md:text-5xl rubrik text-white">
          🎉 Idag smäller det! 🎉
        </p>
        <p className="text-neutral-400 mt-4 tracking-widest">
          Vi ses kl. 16:00
        </p>
      </div>
    );
  }

  return (
    <div className="container text-center mt-10">
      <p className="text-lg text-neutral-400 tracking-widest md:text-2xl mb-2">
        Kom och fira med oss om:
      </p>

      <div className="flex justify-center gap-6 text-2xl md:text-4xl  text-white">
        <div>
          <span>{days}</span>
          <p className="text-sm text-neutral-400">Dagar</p>
        </div>
        <div>
          <span>{hours}</span>
          <p className="text-sm text-neutral-400">Timmar</p>
        </div>
        <div>
          <span>{minutes}</span>
          <p className="text-sm text-neutral-400">Minuter</p>
        </div>
        <div>
          <span>{seconds}</span>
          <p className="text-sm text-neutral-400">Sekunder</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;