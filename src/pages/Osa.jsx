import { useState } from "react";

function Osa() {
  const [attending, setAttending] = useState("");
  const [guests, setGuests] = useState("1");
  const [submitted, setSubmitted] = useState(false);
  const [response, setResponse] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const attendingValue = formData.get("attending");

    await fetch("https://formspree.io/f/xqegkvzj", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    setResponse(attendingValue);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="flex items-start justify-center pt-40 pb-5 px-4 bg-neutral-900 mt-10">
        <div className="max-w-3xl w-full p-8 bg-neutral-800 rounded-xl shadow">
          {response === "Ja" ? (
            <>
              <h2 className="text-2xl font-serif mb-3 text-white rubrik">
                Tack för ditt OSA ❤️
              </h2>
              <p className="text-gray-300">
                Vi har registrerat svaret och ser fram emot att fira tillsammans!
              </p>
            </>
          ) : (
            <>
              <h2 className="text-2xl font-serif mb-3 text-white rubrik">
                Tack för att du svarade
              </h2>
              <p className="text-gray-300">
                Vad tråkigt att du/ni inte kan komma. Vi hoppas att vi ses vid ett annat tillfälle.
              </p>
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    
    <div className="min-h-screen flex items-start justify-center pt-40 px-4 bg-neutral-900">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 max-w-2xl w-full bg-neutral-800 p-8 rounded-xl shadow"
      >
        <h2 className="text-3xl font-serif text-center mb-2 text-white">OSA</h2>
        <p className="text-center text-neutral-300 mb-6">Svara senast 29 augusti</p>

        {/* Namn */}
        <input
          type="text"
          name="name"
          placeholder="Namn"
          required
          className="border border-neutral-600 p-3 rounded w-full bg-neutral-700 text-white placeholder-neutral-300"
        />

        {/* Kommer ni */}
        <div className="text-white">
          <p className="mb-2 font-medium">Kommer du/ni?</p>
          <label className="mr-4">
            <input
              type="radio"
              name="attending"
              value="Ja"
              required
              onChange={(e) => setAttending(e.target.value)}
            />{" "}
            Ja
          </label>
          <label>
            <input
              type="radio"
              name="attending"
              value="Nej"
              onChange={(e) => setAttending(e.target.value)}
            />{" "}
            Nej
          </label>
        </div>

        {/* Visa extra fält bara om de kommer */}
        {attending === "Ja" && (
          <>
            {/* Antal gäster */}
            <div>
              <label className="font-medium text-white">
                Hur många kommer från ditt sällskap?
              </label>
              <select
                name="guests"
                value={guests}
                onChange={(e) => setGuests(e.target.value)}
                className="border border-neutral-600 p-3 rounded w-full mt-1 bg-neutral-700 text-white"
              >
                <option value="1">1 person</option>
                <option value="2">2 personer</option>
              </select>
            </div>

            {/* Person 2 */}
            {guests === "2" && (
              <input
                type="text"
                name="guest2"
                placeholder="Namn på medföljande"
                className="border border-neutral-600 p-3 rounded w-full bg-neutral-700 text-white placeholder-gray-300"
              />
            )}

            {/* Allergier person 1 */}
            <textarea
              name="allergies1"
              placeholder="Allergier eller specialkost"
              className="border border-neutral-600 p-3 rounded w-full bg-neutral-700 text-white placeholder-gray-300"
            />

      

            {/* Låtar */}
            <p>Hjälp oss med spellistan! Önska en eller ett par låtar till kvällens dansgolv. Gärna inom genren rock, hårdrock eller metal.</p>
            <textarea
              name="songs1"
              placeholder="Vad måste spelas på dansgolvet?"
              className="border border-neutral-600 p-3 rounded w-full bg-neutral-700 text-white placeholder-gray-300"
            />




          </>
        )}

        <button
          type="submit"
          className="mx-8 bg-neutral-300 text-black py-3 rounded-xl hover:bg-neutral-500 transition mt-4"
        >
          Skicka OSA
        </button>
      </form>
    </div>
  );
}

export default Osa;