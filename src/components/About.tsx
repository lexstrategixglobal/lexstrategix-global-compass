
import { Badge } from "@/components/ui/badge";
import { Globe, Users, TrendingUp } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-navy-50">
      <div className="section-container">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-navy-200 rounded-full opacity-20 blur-3xl"></div>
              <div className="absolute -bottom-6 -right-6 w-60 h-60 bg-gold-200 rounded-full opacity-20 blur-3xl"></div>
              
              <div className="relative bg-white rounded-xl overflow-hidden shadow-xl border border-gray-100 z-10">
                <div className="h-4 bg-navy-500 w-full"></div>
                <div className="p-6">
                  <Badge className="mb-3 bg-navy-100 text-navy-500 hover:bg-navy-200">Since 2018</Badge>
                  <h3 className="text-xl font-bold text-navy-500 mb-2">Lexstrategix Global</h3>
                  <p className="text-navy-300 mb-4">
                    Delivering excellence in business services to US clients from our 
                    operation center in India.
                  </p>
                  
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-xl font-bold text-navy-500">500+</div>
                      <div className="text-xs text-navy-300">Clients Served</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-navy-500">50+</div>
                      <div className="text-xs text-navy-300">US States</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-bold text-navy-500">98%</div>
                      <div className="text-xs text-navy-300">Client Retention</div>
                    </div>
                  </div>
                  
                  <div className="flex space-x-2">
                    <div className="flex -space-x-2">
                      {[1, 2, 3].map((item) => (
                        <div key={item} className="h-8 w-8 rounded-full bg-navy-200 border-2 border-white flex items-center justify-center">
                          <span className="text-navy-500 text-xs font-bold">US</span>
                        </div>
                      ))}
                    </div>
                    <div className="text-sm text-navy-300 flex items-center">
                      +45 more satisfied US clients
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-6 reveal">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-500">
              About <span className="text-gold-400">Lexstrategix Global</span>
            </h2>
            
            <p className="text-navy-300">
              Founded with a vision to provide premium US business services from India, 
              Lexstrategix Global bridges international boundaries to deliver exceptional 
              incorporation, compliance, bookkeeping, and contract services to US clients.
            </p>
            
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Globe className="h-5 w-5 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-medium text-navy-500 mb-1">Global Expertise, Local Knowledge</h3>
                  <p className="text-sm text-navy-300">
                    Our team combines deep understanding of US business requirements with 
                    cost-effective service delivery from India.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-medium text-navy-500 mb-1">Dedicated Team</h3>
                  <p className="text-sm text-navy-300">
                    Our professionals work across time zones to ensure your business 
                    needs are met with prompt attention and expert care.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="h-5 w-5 text-navy-500" />
                </div>
                <div>
                  <h3 className="font-medium text-navy-500 mb-1">Value-Driven Results</h3>
                  <p className="text-sm text-navy-300">
                    We deliver high-quality services at competitive rates, helping US 
                    businesses thrive while optimizing operational costs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
