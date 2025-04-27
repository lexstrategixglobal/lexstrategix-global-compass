
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Building2, ClipboardCheck, BookOpen, FileText } from "lucide-react";

const services = [
  {
    title: "Business Incorporation",
    description:
      "We handle the complete process of forming your US entity, including document preparation, state filings, EIN application, and obtaining necessary business licenses.",
    icon: Building2,
    benefits: ["LLC & Corporation Formation", "Foreign Qualification", "Business Licenses", "EIN Registration"],
  },
  {
    title: "Compliance Services",
    description:
      "Our team ensures your business meets all regulatory requirements with ongoing compliance support, annual report filings, and corporate maintenance.",
    icon: ClipboardCheck,
    benefits: ["Annual Reports", "Corporate Maintenance", "Registered Agent Services", "State Compliance"],
  },
  {
    title: "Bookkeeping Services",
    description:
      "Professional financial record-keeping that provides clear visibility into your business finances, prepared according to US accounting standards.",
    icon: BookOpen,
    benefits: ["Financial Statements", "Expense Tracking", "Reconciliation", "Tax-Ready Reports"],
  },
  {
    title: "Contract Management",
    description:
      "Expert drafting and review of business contracts and legal documents, customized to protect your interests and ensure legal compliance.",
    icon: FileText,
    benefits: ["Contract Drafting", "Legal Review", "Template Creation", "Negotiation Support"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">
            Our <span className="text-gold-400">Services</span>
          </h2>
          <p className="text-navy-300 text-lg">
            Comprehensive business solutions designed specifically for US enterprises, 
            delivered with precision and expertise from our team in India.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 reveal">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="border-gray-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center mb-2">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-3">
                    <service.icon className="h-5 w-5 text-navy-500" />
                  </div>
                  <CardTitle className="text-xl text-navy-500">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-navy-300">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="grid grid-cols-2 gap-2">
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-center text-sm text-navy-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-gold-400 mr-2"></span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
