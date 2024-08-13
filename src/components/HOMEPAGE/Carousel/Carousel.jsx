import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import "./Carousel.css";
import banner1 from "../../../assets/banner/banner1.jpg";
import banner2 from "../../../assets/banner/banner2.jpg";
import banner3 from "../../../assets/banner/banner3.jpg";

export default function Carousel() {
  const banner = [banner1, banner2, banner3];

  return (
    <div className="d-flex justify-content-center">
      <Splide
        id="home-carousel"
        aria-label="My Favorite Images"
        options={{
          type: "loop",
          autoplay: true,
          pauseOnHover: false,
          resetProgress: false,
          rewind: true, 
          interval: 5000,
          waitForTransition: true,
          flickMaxPages: 1,
        }}
      >
        {banner.map((img, index) => (
          <SplideSlide className="img-wrap">
            <img
              src={img}
              alt={`banner-${index}`}
              className="img-carousel img-fluid"
            />
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
