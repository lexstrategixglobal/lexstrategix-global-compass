
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-b from-white to-blue-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 reveal">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-navy-500 leading-tight">
              Global Business Solutions for
              <span className="text-gold-400"> US Enterprises</span>
            </h1>
            <p className="text-lg text-navy-300 max-w-lg">
              Expert incorporation, compliance, bookkeeping, and contract
              services for US businesses, delivered with precision from our base
              in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-navy-500 hover:bg-navy-600 text-white text-lg px-8 py-6"
                asChild
              >
                <a href="#services">
                  Our Services <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                className="border-navy-300 text-navy-500 hover:bg-navy-50 text-lg px-8 py-6"
                asChild
              >
                <a href="#contact">Contact Us</a>
              </Button>
            </div>
          </div>
          <div className="hidden md:block relative reveal">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-navy-200 rounded-full opacity-20 blur-3xl"></div>
            <div className="relative z-10 bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="font-bold text-navy-500">Business Incorporation</h3>
                  <p className="text-sm text-navy-300">US Company Formation</p>
                </div>
                <div className="h-12 w-12 bg-navy-500 rounded-full flex items-center justify-center text-white font-bold">
                  US
                </div>
              </div>
              <div className="space-y-4 mb-6">
                <div className="h-2 w-full bg-gray-100 rounded-full">
                  <div className="h-2 bg-gold-400 rounded-full w-[90%]"></div>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-navy-300">Progress</span>
                  <span className="text-navy-500 font-medium">90%</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="py-3 px-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-navy-300">Formation</p>
                  <p className="font-medium text-navy-500">Complete</p>
                </div>
                <div className="py-3 px-4 bg-gray-50 rounded-lg">
                  <p className="text-xs text-navy-300">Compliance</p>
                  <p className="font-medium text-navy-500">In Progress</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
