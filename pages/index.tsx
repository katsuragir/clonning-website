import Banner from "../component/Layout/banner";
import Navbar from "../component/Layout/navbar";
import Mobile from "../component/Layout/navbar/mobile";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <div className="logo-mini">
        <Mobile />
      </div>
    </>
  );
}
