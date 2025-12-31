import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "AI tool developer",
      company: "rasttar",
      duration: "May 2025 – Present",
      responsibilities: [
        "develop tool for AI artist to create art more efficiently.",
        "Built and optimized RESTful APIs with Node.js and Express.js for seamless backend integration.",
        "Collaborated with artist's and designers to deliver user-friendly and experiences.",
      ],
    },
    {
      title: "Web App Developer",
      company: "Sule Market",
      duration: "May 2024 – May 2025",
      responsibilities: [
        "developed 3D web applications for creating shed using THREE.js and Next.js.",
        "Built and optimized RESTful APIs with Node.js and Express.js for seamless backend integration.",
        "Collaborated with designers to deliver user-friendly and experiences.",
      ],
    },
    {
      title: "Web Game Developer",
      company: "Smartiza",
      duration: "Sep 2022 – May 2024",
      responsibilities: [
        "Developed 3D games with THREE.js, focusing on gameplay and optimization.",
        "Engineered multiplayer functionality and real-time gameplay mechanics.",
        "Optimized web application performance to achieve faster load times.",
      ],
    },
    {
      title: "Full-Stack Developer",
      company: "Freelance",
      duration: "Jun 2020 – Sep 2022",
      responsibilities: [
        "Built and maintained full-stack web applications with modern frameworks and libraries.",
        "Designed scalable backend systems and APIs with python and Django.",
        "Collaborated with clients to gather requirements and ensure project goals were met.",
      ],
    },
  ];
  return (
    <section
      id="experience"
      className="bg-slate-900 py-20"
    >
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            Work <span className="text-tGreen">Experience</span>
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            My professional journey and contributions
          </p>
        </div>
        <div className="mx-auto max-w-4xl space-y-6">
          {experiences.map((experience) => (
            <Card
              key={experience.title}
              className="border-slate-800 bg-slate-950/50 backdrop-blur transition-all hover:border-tGreen/50 hover:shadow-lg hover:shadow-tGreen/10"
            >
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1">
                    <div className="mb-2 flex items-start gap-3">
                      <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-lg bg-tGreen/10 text-tGreen">
                        <Briefcase className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {experience.title}
                        </h3>
                        <div className="mt-1 flex flex-wrap items-center gap-2 text-sm">
                          <Badge
                            variant="secondary"
                            className="bg-tGreen/20 text-tGreen hover:bg-tGreen/30"
                          >
                            {experience.company}
                          </Badge>
                          <span className="flex items-center gap-1 text-slate-400">
                            <Calendar className="h-3 w-3" />
                            {experience.duration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-slate-300">
                  {experience.responsibilities.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-tGreen" />
                      <span>{item}</span>
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
}
