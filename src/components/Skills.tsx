import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const technicalSkills = {
    "Languages": [
      { name: "JavaScript", level: 90, color: "bg-yellow-500" },
      { name: "HTML/CSS", level: 95, color: "bg-orange-500" },
      { name: "C++", level: 75, color: "bg-blue-600" }
    ],
    "Frontend": [
      { name: "React.js", level: 88, color: "bg-cyan-500" },
      { name: "Tailwind CSS", level: 92, color: "bg-teal-500" },
      { name: "Bootstrap", level: 85, color: "bg-purple-600" }
    ],
    "Backend": [
      { name: "Node.js", level: 86, color: "bg-green-600" },
      { name: "Express.js", level: 84, color: "bg-gray-600" },
      { name: "Socket.IO", level: 80, color: "bg-indigo-600" }
    ],
    "Databases": [
      { name: "MongoDB", level: 85, color: "bg-green-500" },
      { name: "MySQL", level: 78, color: "bg-blue-500" }
    ]
  };

  const tools = [
    "Git", "VSCode", "Postman", "Render", "JWT Authentication", 
    "RESTful APIs", "MVC Architecture", "Clean Architecture"
  ];

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Technical Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Proficient in modern web technologies with hands-on experience in full-stack development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {Object.entries(technicalSkills).map(([category, skills], index) => (
            <Card key={category} className="card-gradient border-border animate-slide-up" 
                  style={{ animationDelay: `${index * 0.1}s` }}>
              <CardHeader>
                <CardTitle className="text-2xl text-gradient">{category}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{skill.name}</span>
                      <span className="text-muted-foreground text-sm">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-secondary"
                    />
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="card-gradient border-border animate-slide-up">
          <CardHeader>
            <CardTitle className="text-2xl text-gradient">Tools & Technologies</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool, index) => (
                <Badge 
                  key={tool} 
                  variant="secondary"
                  className="px-4 py-2 text-sm bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 cursor-default"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  {tool}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;