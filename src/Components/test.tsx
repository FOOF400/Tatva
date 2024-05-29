import React from 'react';
import './testimonials.css';

const Testimonials: React.FC = () => {
  const sampleTestimonials = [
    {
      name: 'Hikmet Atçeken',
      username: 'hiatceken',
      content: "Pulsefy's our daily tool to bypass averages and reveal true insights, for the whole team!",
      image: 'path/to/hikmet.jpg',
    },
    {
      name: 'Arda Guler',
      username: 'ardaguler_',
      content: "Pulsefy levels the analytics field for our team, enabling both beginners and pros to easily bypass averages and uncover the actionable insights that truly shape our marketing strategies.",
      image: 'path/to/arda.jpg',
    },
    {
      name: 'Maria Ancelotti',
      username: 'maria_ancelotti',
      content: "From novice to pro, Pulsefy helps our team uncover the extraordinary in our marketing data!",
      image: 'path/to/maria.jpg',
    },
    {
      name: 'Ragip Diler',
      username: 'rgdiler',
      content: "Pulsefy empowers our whole team, techies or not, to dive into marketing analytics and spot the insights that really matter—no more average data!",
      image: 'path/to/ragip.jpg',
    },
    {
      name: 'Jenny Wilson',
      username: 'wilson_jenny_19',
      content: "Pulsefy's user-friendly analytics let our whole team, regardless of skill, bypass averages to unearth and act on true, game-changing marketing insights every day.",
      image: 'path/to/jenny.jpg',
    },
    {
      name: 'Guy Hawkins',
      username: 'ghawkins',
      content: "Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy! Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!Pulsefy is a game-changer for our team—easy for beginners and powerful for digging beyond average data. It’s our daily ally in unearthing those pivotal marketing insights that really drive strategy!",
      image: 'path/to/guy.jpg',
    },
  ];

  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-coolvetica text-center text-gray-900 mb-8">But dont take our word for it</h2>
        <p className="text-center text-gray-600 mb-12">Find out how our customers are spreading the word!</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sampleTestimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md h-auto">
              <div className="flex items-center space-x-4 mb-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">{testimonial.name}</h3>
                  <p className="text-gray-600">@{testimonial.username}</p>
                </div>
              </div>
              <p className="text-gray-800">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
