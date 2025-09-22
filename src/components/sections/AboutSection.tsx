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
          
          {/* Personal Story */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">My Story</h3>
            <div className="space-y-4 text-charcoal-light leading-relaxed">
              <p>
                My journey in technology started with a fascination for how software can transform 
                ideas into reality. Currently pursuing my <span className="text-jade-dark font-medium">
                Master of Science in Computer Engineering at the University of Washington</span>, 
                I'm expanding my knowledge in advanced computing systems and machine learning.
              </p>
              <p>
                I enjoy exploring new technologies and building full-stack applications that solve 
                real-world problems. My approach combines <span className="text-jade-dark font-medium">
                object-oriented design principles</span> with modern development practices to create 
                scalable, maintainable software solutions.
              </p>
              <p>
                When I'm not coding, you'll find me experimenting with new frameworks, contributing 
                to open-source projects, or exploring the latest developments in machine learning 
                and artificial intelligence.
              </p>
            </div>
          </div>

          {/* Education & Experience */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-charcoal mb-4">Background</h3>
            
            {/* Education */}
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

            {/* Work Experience */}
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