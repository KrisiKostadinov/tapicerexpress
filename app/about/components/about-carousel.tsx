"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import { AboutPageCarouselItem } from "@/app/about/data";

type CarouselProps = {
  carouselItems: AboutPageCarouselItem[];
  delay: number;
  isAutoPlay: boolean;
};

export default function AboutCarousel({
  carouselItems,
  delay,
  isAutoPlay,
}: CarouselProps) {
  const plugins = [];

  if (isAutoPlay) {
    plugins.push(
      Autoplay({
        delay: delay * 1000,
      }),
    );
  }

  return (
    <div className="bg-white w-full max-md:px-5 min-h-[400px] max-h-[400px] border shadow rounded container mx-auto">
      <Carousel plugins={plugins} className="h-full">
        <CarouselContent className="h-full">
          {carouselItems.map((carouselItem, index) => (
            <CarouselItem key={index} className="h-full">
              <div className="py-20 h-full flex flex-col justify-center items-center">
                <h3 className="text-center text-2xl font-semibold mb-5">
                  {carouselItem.title}
                </h3>
                <p
                  className="text-center text-lg max-w-xl mx-auto"
                  dangerouslySetInnerHTML={{ __html: carouselItem.content }}
                ></p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        {carouselItems.length > 1 && <CarouselPrevious />}
        {carouselItems.length > 1 && <CarouselNext />}
      </Carousel>
    </div>
  );
}
