import { Button } from '@/components/ui/button';
import { ArrowDown, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.png';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-10 px-6">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <p className="text-jade-dark font-medium text-lg">Hey, I'm Wei-Lun 👋</p>
              <h1 className="text-5xl lg:text-6xl font-bold text-charcoal leading-snug">
                Full-Stack
                <span className="text-charcoal block">Software Engineer</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                MS Computer Engineering at University of Washington | Full-Stack Development | 
                Machine Learning Enthusiast
              </p>
            </div>

            <p className="text-lg text-charcoal-light leading-relaxed max-w-2xl">
              I'm passionate about exploring new technologies, building full-stack applications, 
              and applying object-oriented design and databases to solve real-world problems. 
              With a background as a Senior Statistical Programmer at Parexel, I bring both 
              academic knowledge and industry experience to every project.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg"
                className="bg-jade-light hover:bg-jade-medium text-charcoal font-medium px-8"
                onClick={() => scrollToSection('projects')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-jade-light text-jade-dark hover:bg-jade-light/10 px-8"
                onClick={() => scrollToSection('contact')}
              >
                Contact Me
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="pt-8">
              <button 
                onClick={() => scrollToSection('about')}
                className="flex flex-col items-center space-y-2 text-muted-foreground hover:text-jade-dark transition-smooth"
              >
                <span className="text-sm">Scroll to learn more</span>
                <ArrowDown className="h-5 w-5 animate-bounce" />
              </button>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="flex justify-center lg:justify-end pr-4 lg:pr-24 -mt-36 animate-fade-in-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-jade-light to-jade-medium rounded-full blur-2xl opacity-20 animate-pulse-glow"></div>
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full border-4 border-jade-light/30 shadow-hover overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Wei-Lun Profile Photo" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;