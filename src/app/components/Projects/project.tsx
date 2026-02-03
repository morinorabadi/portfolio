import { IProjectData } from "./Projects";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function Project({ project }: { project: IProjectData }) {
  return (
    <Card className="overflow-hidden border-slate-800 bg-slate-900/50 backdrop-blur">
      <CardContent className="p-0">
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12 min-h-100">
          {/* Video Section */}
          <div className="relative aspect-video w-full overflow-hidden bg-slate-950 md:aspect-auto">
            <div className="absolute inset-0">
              <video
                src={project.videoUrl}
                autoPlay
                playsInline
                preload="metadata"
                muted
                loop
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent" />
          </div>

          {/* Info Section */}
          <div className="flex flex-col justify-center space-y-6 p-6 md:p-8">
            <div>
              <h3 className="text-3xl font-bold capitalize text-white">
                {project.title}
              </h3>
              {project.overview && (
                <p className="mt-3 text-base leading-relaxed text-slate-400">
                  {project.overview}
                </p>
              )}
            </div>

            <div>
              <h4 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="bg-slate-800 text-slate-200 hover:bg-slate-700"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
