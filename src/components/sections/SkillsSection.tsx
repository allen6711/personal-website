import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code2, Database, Globe, Cloud } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      skills: ['Python', 'Java', 'JavaScript/TypeScript', 'SQL', 'C++', 'Go'],
      color: 'bg-jade-light/20 text-jade-dark',
    },
    {
      title: 'Web & Backend',
      icon: Globe,
      skills: ['React', 'Node.js', 'Express', 'HTML/CSS', 'REST APIs', 'OAuth 2.0', 'Flask', 'Spring Boot'],
      color: 'bg-jade-medium/20 text-jade-dark',
    },
    {
      title: 'Data & Storage',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'Pandas', 'ETL pipelines', 'Redis'],
      color: 'bg-jade-dark/20 text-jade-dark',
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS (EC2, S3, Lambda, RDS)', 'Docker', 'Kubernetes', 'CI/CD', 'Linux', 'Git'],
      color: 'bg-jade-light/20 text-jade-dark',
    },
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={category.title} 
                className="shadow-card hover:shadow-hover transition-smooth group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto rounded-lg ${category.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth`}>
                      <Icon className="h-8 w-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-charcoal">{category.title}</h3>
                  </div>
                  
                  <div className="space-y-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="w-full justify-center bg-jade-light/10 text-charcoal hover:bg-jade-light/20 transition-smooth"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Skills Grid */}
        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-charcoal text-center mb-8">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {[
              'Full-Stack Development',
              'Object-Oriented Design',
              'RESTful APIs',
              'JWT Authentication',
              'Real-time Applications',
              'Data Analysis',
              'Statistical Programming',
              'Agile Development',
              'Problem Solving',
              'Team Collaboration'
            ].map((skill) => (
              <Badge 
                key={skill} 
                className="bg-jade-light text-charcoal hover:bg-jade-medium transition-smooth px-4 py-2 text-sm"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;