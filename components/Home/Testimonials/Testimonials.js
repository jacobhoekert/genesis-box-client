import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Testimonials = ({data}) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
  };
  return (
    <div id="testimonials">
      <h2 className="title">encouragement<span><br />from our community</span></h2>
      <div className="slider">
        <Slider {...settings}>
          {
            data.testimonials.map((testimonial, index) => {
              return (
                <div key={index} className="testimonial">
                  <p className="testimonial-text">{testimonial.testimonial}</p>
                  <p className="testimonial-name">{testimonial.name}</p>
                </div>
              )
            })
          }
        </Slider>
      </div>
    </div>
  );
}