import Banner from "../component/banner";
import Navbar from "../component/navbar";
import Mobile from "../component/navbar/mobile";

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
