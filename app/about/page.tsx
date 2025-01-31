import AboutCarousel from "@/app/about/components/about-carousel";
import { getAboutHeader, getCarouselInfo } from "@/app/about/data";
import AboutInfo from "@/app/about/components/about-info";

export default async function AboutPage() {
  const carouselInfo = await getCarouselInfo();
  const aboutHeader = await getAboutHeader();

  return (
    <main className="min-h-screen my-10 space-y-10 max-md:px-5">
      <AboutInfo aboutHeader={aboutHeader} />
      <AboutCarousel
        carouselItems={carouselInfo.carouselItems}
        delay={carouselInfo.delay}
        isAutoPlay={carouselInfo.isAutoPlay}
      />
    </main>
  );
}
