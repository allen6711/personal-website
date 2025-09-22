import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Mail, Phone, Linkedin, Github, MapPin, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ContactSection = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = `Message from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:weilunhuang6711@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    window.location.href = mailtoLink;
    
    toast({
      title: "Message prepared!",
      description: "Your email client should open with the message ready to send.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'weilunhuang6711@gmail.com',
      href: 'mailto:weilunhuang6711@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '(425) 469-7812',
      href: 'tel:+14254697812'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'wei-lun-allen-huang',
      href: 'https://linkedin.com/in/wei-lun-allen-huang'
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'allen6711',
      href: 'https://github.com/allen6711'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Seattle, WA',
      href: '#'
    }
  ];

  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss opportunities, collaborations, or just connect over shared interests in technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal mb-6">Let's Connect</h3>
              <p className="text-charcoal-light leading-relaxed mb-8">
                I'm always excited to discuss new opportunities, innovative projects, or potential 
                collaborations. Whether you're looking for a developer, have a project idea, or 
                just want to chat about technology, I'd love to hear from you.
              </p>
            </div>

            <div className="space-y-4">
              {contactInfo.map((info) => {
                const Icon = info.icon;
                return (
                  <Card key={info.label} className="shadow-card hover:shadow-hover transition-smooth group">
                    <CardContent className="p-4">
                      <div className="flex items-center space-x-4">
                        <div className="bg-jade-light/20 p-3 rounded-lg group-hover:bg-jade-light/30 transition-smooth">
                          <Icon className="h-5 w-5 text-jade-dark" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          {info.href === '#' ? (
                            <p className="text-charcoal font-medium">{info.value}</p>
                          ) : (
                            <a 
                              href={info.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-charcoal font-medium hover:text-jade-dark transition-smooth"
                            >
                              {info.value}
                            </a>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground text-sm">
                <strong>Response Time:</strong> I typically respond within 24 hours during business days.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-card">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-charcoal mb-6">Send a Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 gap-4">
                    <div>
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 border-jade-light/30 focus:border-jade-medium focus:ring-jade-light"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 border-jade-light/30 focus:border-jade-medium focus:ring-jade-light"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={6}
                      className="mt-1 border-jade-light/30 focus:border-jade-medium focus:ring-jade-light resize-none"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-jade-light hover:bg-jade-medium text-charcoal font-medium"
                  >
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </form>

                <p className="text-xs text-muted-foreground mt-4 text-center">
                  This form will open your email client with the message pre-filled.
                </p>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;