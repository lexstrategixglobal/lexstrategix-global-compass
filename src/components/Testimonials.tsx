
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    company: "Tech Startup, California",
    image: "",
    quote: "Lexstrategix Global handled our LLC formation and ongoing compliance with exceptional attention to detail. Their team's expertise in navigating US regulations while operating from India is truly impressive.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    company: "E-commerce Business, New York",
    image: "",
    quote: "The bookkeeping services provided by Lexstrategix have transformed how we manage our finances. Their accurate reporting and attention to US tax requirements have been invaluable to our growth.",
    rating: 5,
  },
  {
    name: "David Williams",
    company: "Consulting Firm, Texas",
    image: "",
    quote: "Their contract review services saved us from potential legal issues multiple times. The team is responsive, thorough, and provides expert guidance despite being based overseas.",
    rating: 5,
  },
  {
    name: "Jennifer Lopez",
    company: "Real Estate Investment, Florida",
    image: "",
    quote: "I've been working with Lexstrategix for our multi-state compliance needs for three years now. Their service is reliable, professional, and they make the complex simple.",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 150) {
      handleNext();
    }

    if (touchStart - touchEnd < -150) {
      handlePrevious();
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">
            What Our <span className="text-gold-400">Clients Say</span>
          </h2>
          <p className="text-navy-300 text-lg">
            Don't just take our word for it. Here's what US businesses are saying 
            about our services.
          </p>
        </div>

        <div className="relative reveal">
          <div 
            className="overflow-hidden" 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <Card className="border-gray-100 shadow-lg mx-auto max-w-4xl p-8">
                    <div className="flex flex-col items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-navy-100 flex items-center justify-center mb-4 text-navy-500 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>

                      <div className="flex mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-gold-400 text-gold-400" />
                        ))}
                      </div>

                      <blockquote className="text-xl text-navy-500 italic mb-6">
                        "{testimonial.quote}"
                      </blockquote>

                      <div className="text-navy-500 font-medium">
                        {testimonial.name}
                      </div>
                      <div className="text-navy-300 text-sm">{testimonial.company}</div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={handlePrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center text-navy-500 hover:text-gold-400 transition-colors z-10"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white h-10 w-10 rounded-full shadow-lg flex items-center justify-center text-navy-500 hover:text-gold-400 transition-colors z-10"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? "w-8 bg-gold-400" : "w-2 bg-gray-300"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
