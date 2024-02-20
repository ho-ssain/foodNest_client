import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-slate-800">
          Enjoy a takeaway meal today.
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>

      {/* -------------------------------------------------  */}

      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingImage" />

        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Place your takeaway order even quicker.
          </span>

          <span>
            Get the Foodnest app for speedier ordering and tailored suggestions.
          </span>

          <img src={appDownloadImage} alt="appDownload" />
        </div>
      </div>
    </div>
  );
};

export default Home;
