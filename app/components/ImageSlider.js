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
      {slides.map((slide) => (
        <div key={slide.id}>
          <img src={slide.image.url} alt='product' />
        </div>
      ))}
    </Slider>
  );
}
