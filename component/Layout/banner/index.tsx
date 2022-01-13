import ImageAnimation from "./imageAnimation";
import TextBanner from "./textBanner";

export default function Banner() {
  return (
    <div className="sc-jSFjdj sc-eWnToP eOXxgx fEDxD">
      <div className="sc-kTCsyW gxdqsh">
        <div className="sc-jSFjdj kJmatq">
          <div className="sc-jSFjdj sc-gKAaRy sc-cOohKt fKBiSv jcNvwq dVhZcw sc-cRgdMP gZyAEM">
            <div
              className="sc-jSFjdj jxszLn sc-iLCGUA SJrhE"
              style={{ margin: "0px", width: "100%" }}
            >
              <div className="sc-iazTlQ dJqkyv">
                <div className="sc-eSRwjH lnhkkx">
                  <img src="/icon2.svg" alt="background" />
                </div>
              </div>
              <div
                id="homepage-hero"
                className="sc-jSFjdj sc-gKAaRy bcKnBX gyufHB"
              >
                <TextBanner />
                <div className="sc-jSFjdj sc-gKAaRy bqmzQM cDfOxl">
                  <div className="sc-kQfVtO bFctYW">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="/images/home/lunar-bunny/bunny.webp 512w,
                        /images/home/lunar-bunny/bunny@1.5x.webp 768w,
                        /images/home/lunar-bunny/bunny@2x.webp 1024w,"
                      />
                      <source
                        type="image/png"
                        srcSet="/images/home/lunar-bunny/bunny.png 512w,
                        /images/home/lunar-bunny/bunny@1.5x.png 768w,
                        /images/home/lunar-bunny/bunny@2x.png 1024w,"
                      />
                      <img
                        src="/images/home/lunar-bunny/bunny.png"
                        alt="Lunar bunny"
                      />
                    </picture>
                  </div>
                  <ImageAnimation />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
