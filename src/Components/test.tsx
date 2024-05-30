import React from 'react';
import Slider from 'react-slick';
import './testimonials.css';

const Testimonials: React.FC = () => {
    const sampleTestimonials = [
        {
          name: 'Ravi Sharma',
          username: 'ravi_sharma',
          content: "Tatva Essence's Organic Aged Compost has completely transformed my garden. My plants are healthier and more vibrant than ever!",
          image: './img1.jpeg',
        },
        {
          name: 'Anita Verma',
          username: 'anita_verma',
          content: "I've been using Tatva Essence's compost for a few months now, and I can see a significant improvement in the quality of my soil.",
          image: './img2.jpeg',
        },
        {
          name: 'Vikram Singh',
          username: 'vikram_singh',
          content: "This compost is truly a game-changer! It's easy to use and has helped me grow the most beautiful flowers.",
          image: './img3.jpeg',
        },
        {
          name: 'Priya Kapoor',
          username: 'priya_kapoor',
          content: "I love Tatva Essence's compost because it's organic and eco-friendly. My vegetables have never tasted better.",
          image: './dirtmound.jpeg',
        },
        {
          name: 'Amit Joshi',
          username: 'amit_joshi',
          content: "Tatva Essence's compost has improved the texture and fertility of my garden soil. I highly recommend it!",
          image: './logoDark.png',
        },
        {
          name: 'Meera Gupta',
          username: 'meera_gupta',
          content: "I was skeptical at first, but after using Tatva Essence's compost, my garden is thriving. I'm so happy with the results.",
          image: './vite.svg',
        },
        {
          name: 'Karan Malhotra',
          username: 'karan_malhotra',
          content: "The quality of Tatva Essence's compost is unmatched. My garden has never looked so green and lush.",
          image: './instagram.png',
        },
        {
          name: 'Sonia Patel',
          username: 'sonia_patel',
          content: "Tatva Essence's Organic Aged Compost is fantastic! It's made my gardening experience so much more rewarding.",
          image: './linkedin.png',
        },
      ];
            

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    customPaging: () => (
        <button>{/* Custom button content */}</button>
      ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-12 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-coolvetica text-center text-gray-900 mb-8">
          But don't take our word for it
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Find out how our customers are spreading the word!
        </p>
        <Slider {...settings}>
          {sampleTestimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="testimonial-image"
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">@{testimonial.username}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.content}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Testimonials;
