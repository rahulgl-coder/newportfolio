import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "Stackmod Innovations Pvt Ltd",
      location: "Trivandrum, Kerala",
      period: "July 2024 - Present",
      type: "Internship",
      description: "Developed and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js). Ensured seamless front-end integration and gained hands-on experience in building applications through both personal and academic projects.",
      achievements: [
        "Built multiple full-stack web applications using MERN stack",
        "Implemented responsive and user-friendly interfaces",
        "Developed RESTful APIs for seamless data management",
        "Collaborated with team members on complex projects",
        "Gained expertise in modern development practices"
      ],
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JavaScript", "Git"]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Arts - History",
      institution: "Annamalai University",
      location: "Tamil Nadu",
      period: "2015 - 2018",
      type: "Bachelor's Degree"
    },
    {
      degree: "Mechanical Engineering",
      institution: "Central Polytechnic College",
      location: "Trivandrum, Kerala", 
      period: "2009 - 2012",
      type: "Diploma"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Experience & Education</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional journey and educational background that shaped my development career
          </p>
        </div>

        {/* Work Experience */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            💼 Work Experience
          </h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border animate-slide-up hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                    <div>
                      <CardTitle className="text-2xl text-primary mb-2">{exp.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-lg">
                        <Building className="h-5 w-5" />
                        {exp.company}
                      </CardDescription>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Badge variant="secondary" className="w-fit bg-primary/20 text-primary">
                        {exp.type}
                      </Badge>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {exp.description}
                  </p>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-foreground mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge 
                          key={tech} 
                          variant="outline"
                          className="border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h3 className="text-3xl font-bold mb-8 text-foreground">
            🎓 Education
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card 
                key={index} 
                className="card-gradient border-border animate-slide-up hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <CardHeader>
                  <div className="flex justify-between items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-primary mb-2">{edu.degree}</CardTitle>
                      <CardDescription className="text-foreground font-medium">
                        {edu.institution}
                      </CardDescription>
                    </div>
                    <Badge variant="secondary" className="bg-accent/20 text-accent">
                      {edu.type}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      <span>{edu.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;