
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const RoboticsLabGallery = () => {
  const images = [
    {
      src: "/lovable-uploads/74002a48-5100-46e2-a5c9-d02577557c89.png",
      alt: "VS Robotics Lab - Main classroom view with workstations"
    },
    {
      src: "/lovable-uploads/5d30a3de-1c0d-4ef6-8be4-c9fac0f7f9b9.png",
      alt: "VS Robotics Lab - Student workstations and equipment"
    },
    {
      src: "/lovable-uploads/5dd43a45-f220-485c-af03-55662435643e.png",
      alt: "VS Robotics Lab - 3D printing and prototyping station"
    },
    {
      src: "/lovable-uploads/1ce762e4-d4b9-4559-9ab3-7fa27e0a92f2.png",
      alt: "VS Robotics Lab - Advanced equipment and learning materials"
    },
    {
      src: "/lovable-uploads/35d2ac7d-ef3a-434c-a7d2-ff6db9b99f62.png",
      alt: "VS Robotics Lab - Interactive learning environment"
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto">
      <Carousel className="w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <div className="p-1">
                <Card className="bg-gray-800/60 border-gray-700">
                  <CardContent className="flex aspect-video items-center justify-center p-0">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700/80" />
        <CarouselNext className="bg-gray-800/80 border-gray-600 text-white hover:bg-gray-700/80" />
      </Carousel>
    </div>
  );
};

export default RoboticsLabGallery;
