import React from 'react';
import Slider from 'react-slick';

const Projects = ({ projects }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, // tablets
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640, // mobile
        settings: { slidesToShow: 1 }
      }
    ]
  };

  return (
    <div className="banner1 mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-10">🚀 My Projects</h2>
      <Slider {...settings}>
        
        {projects.map((project, index) => (
          <div key={index} className="px-2">
            <div className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="h-40 w-full object-cover"
              />
              <div className="flex flex-col justify-between flex-1 p-5">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-800">{project.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{project.description}</p>
                </div>
                <div className="mt-auto flex justify-between">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-gray-800 hover:bg-gray-700 px-3 py-1 text-sm rounded"
                  >
                    GitHub
                  </a>
             
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;
