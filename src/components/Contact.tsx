
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { MailIcon, PhoneIcon, Globe } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      service: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: "",
        email: "",
        service: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-navy-50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-navy-500">
            Get In <span className="text-gold-400">Touch</span>
          </h2>
          <p className="text-navy-300 text-lg">
            Have questions about our services? Ready to get started? Contact our team
            today for personalized assistance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start reveal">
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
            <h3 className="text-xl font-bold text-navy-500 mb-6">Send us a message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-navy-500 mb-1">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  required
                  className="border-gray-200 focus-visible:ring-navy-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-navy-500 mb-1">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="border-gray-200 focus-visible:ring-navy-500"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-medium text-navy-500 mb-1">
                  Service Interest
                </label>
                <Select onValueChange={handleServiceChange} value={formData.service}>
                  <SelectTrigger className="border-gray-200 focus:ring-navy-500">
                    <SelectValue placeholder="Select a service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="incorporation">Business Incorporation</SelectItem>
                    <SelectItem value="compliance">Compliance Services</SelectItem>
                    <SelectItem value="bookkeeping">Bookkeeping</SelectItem>
                    <SelectItem value="contracts">Contract Management</SelectItem>
                    <SelectItem value="other">Other Services</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-navy-500 mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="How can we help you?"
                  required
                  className="border-gray-200 focus-visible:ring-navy-500 min-h-[120px]"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-navy-500 hover:bg-navy-600 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-navy-500 mb-6">Contact Information</h3>

              <div className="space-y-5">
                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <MailIcon className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-500">Email</h4>
                    <a href="mailto:hi@lexstrategixglobal.com" className="text-navy-300 hover:text-gold-400">
                      hi@lexstrategixglobal.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <PhoneIcon className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-500">Phone</h4>
                    <p className="text-navy-300">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="h-10 w-10 rounded-full bg-navy-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Globe className="h-5 w-5 text-navy-500" />
                  </div>
                  <div>
                    <h4 className="font-medium text-navy-500">Based In</h4>
                    <p className="text-navy-300">India, serving US clients globally</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-navy-500 mb-4">Business Hours</h3>
              <p className="text-navy-300 mb-4">
                Our team operates across time zones to serve US clients efficiently.
              </p>

              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-navy-300">Monday - Friday:</span>
                  <span className="text-navy-500">9:00 AM - 6:00 PM EST</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-300">Saturday:</span>
                  <span className="text-navy-500">By appointment</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-navy-300">Sunday:</span>
                  <span className="text-navy-500">Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
