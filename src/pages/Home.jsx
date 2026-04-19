import Hero from "../components/Hero";
import Osa from "../pages/Osa";
import Galleri from "./Galleri";
import Information from "./Information";
import Toastmaster from "./Toastmaster";
import Footer from "./Footer";


function Home() {
  return (
    <>
      <Hero />

    <Information/>

      <Galleri/>

      <Toastmaster/>

      <Osa />

      <Footer/>
    </>
  );
}

export default Home;