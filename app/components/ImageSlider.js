import Slider from 'react-slick';

export default function ImageSlider({ slides }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      {slides.map((slide) => {
        if (!slide.image || !slide.image.url) {
          return null;
        }
        return (
          <div key={slide.image.url}>
            <img
              role='img'
              key={slide.id}
              src={slide.image.url}
              alt='product'
            />
          </div>
        );
      })}
    </Slider>
  );
}
