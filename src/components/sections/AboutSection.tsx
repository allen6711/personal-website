import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Briefcase, Calendar } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A passionate technologist with a love for innovation, problem-solving, and continuous learning
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Education */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Education</h3>
            
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-jade-light/20 p-3 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-jade-dark" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-charcoal">Master of Science in Computer Engineering</h4>
                    <p className="text-jade-dark font-medium">University of Washington</p>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      Expected 2027
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Work Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Work Experience</h3>
            
            <Card className="shadow-card hover:shadow-hover transition-smooth">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-jade-light/20 p-3 rounded-lg">
                    <Briefcase className="h-6 w-6 text-jade-dark" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-charcoal">Senior Statistical Programmer</h4>
                    <p className="text-jade-dark font-medium">Parexel</p>
                    <div className="flex items-center text-muted-foreground text-sm mt-1">
                      <Calendar className="h-4 w-4 mr-1" />
                      June 2019 – November 2024
                    </div>
                    <p className="text-charcoal-light text-sm mt-2">
                      Developed statistical analysis programs and data management solutions 
                      for clinical trials, ensuring data quality and regulatory compliance.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;