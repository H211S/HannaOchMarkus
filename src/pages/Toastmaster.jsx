  function Toastmaster () {
  
  return(
<section
  id="information"
  className="py-24 bg-neutral-900 text-neutral-200"
>
  <h2 className="text-2xl md:text-4xl font-serif mb-12 text-center rubrik">
    Toastmaster & Toastmadame
  </h2>

  <div className="max-w-4xl mx-auto px-6">

    {/* WRAPPER SOM KÄNNS SOM EN ENHET */}
    <div className="flex flex-col md:flex-row justify-center items-stretch gap-10 md:gap-0 md:divide-x md:divide-neutral-700 md:bg-neutral-900 md:rounded-xl md:py-2">

      {/* Toastmadame */}
      <div className="w-full md:w-auto md:px-10 text-center md:text-left space-y-1">
        <p className="font-serif text-lg mb-3">Toastmadame</p>
        <p className="text-neutral-100">Jenny Mathisson</p>
        <p className="text-sm text-neutral-300">jennie_mathisson@hotmail.com</p>
        <p className="text-sm text-neutral-300">070-147 49 79</p>
      </div>

      {/* Toastmaster */}
      <div className="w-full md:w-auto md:px-10 text-center md:text-left space-y-1">
        <p className="font-serif text-lg mb-3">Toastmaster</p>
        <p className="text-neutral-100">Petter Jonasson</p>
        <p className="text-sm text-neutral-300">petter@hlrsyd.nu</p>
        <p className="text-sm text-neutral-300">072-252 94 72</p>
      </div>

    </div>

    <div className="mt-12 max-w-2xl mx-auto text-center text-neutral-300 leading-relaxed">
      <p>
        Ta gärna kontakt med toastmaster eller toastmadame för att anmäla tal,
        spex eller annat roligt inslag under kvällen.
      </p>
    </div>

  </div>
</section>
)

      }


export default Toastmaster