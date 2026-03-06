import { Link, useParams } from "wouter";
import { 
  ArrowLeft, ArrowRight, MapPin, Phone, Mail, Globe, 
  Building, User, Calendar, ExternalLink, ShieldCheck
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PROJECTS, NEWS } from "@/lib/mock-data";

export default function ProjectSingle() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Проект не найден</h1>
        <Button asChild><Link href="/projects">Вернуться в каталог</Link></Button>
      </div>
    );
  }

  // Find related news
  const relatedNews = NEWS.filter(n => n.projectId === id);

  return (
    <div className="bg-slate-50/50 min-h-screen pb-20">
      {/* Top Navigation */}
      <div className="bg-white border-b sticky top-16 z-40">
        <div className="container mx-auto px-4 h-14 flex items-center">
          <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground -ml-2" asChild>
            <Link href="/projects">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Вернуться в каталог
            </Link>
          </Button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        <div className="bg-white rounded-2xl shadow-sm border overflow-hidden">
          {/* Header Area */}
          <div className="p-6 md:p-10 border-b relative overflow-hidden">
            {/* Soft decorative background */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
            
            <div className="relative z-10">
              <div className="flex flex-wrap gap-2 mb-6">
                <Badge className="bg-primary text-white hover:bg-primary/90 text-sm font-medium border-0 px-3 py-1">
                  {project.type}
                </Badge>
                {project.categories.map(cat => (
                  <Badge key={cat} variant="outline" className="bg-white/80 backdrop-blur-sm text-sm font-medium text-slate-700 border-slate-200 shadow-sm px-3 py-1">
                    {cat}
                  </Badge>
                ))}
              </div>

              <h1 className="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6 text-foreground max-w-3xl">
                {project.name}
              </h1>

              <div className="flex flex-wrap items-center gap-6 text-sm text-slate-600 mt-4">
                {project.organization && (
                  <div className="flex items-center">
                    <Building className="w-4 h-4 mr-2 opacity-70" />
                    {project.organization}
                  </div>
                )}
                {project.churchAffiliation && (
                  <div className="flex items-center">
                    <ShieldCheck className="w-4 h-4 mr-1.5 opacity-70" />
                    {project.churchAffiliation}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-3 divide-y md:divide-y-0 md:divide-x border-b">
            {/* Left Column - Main Content */}
            <div className="md:col-span-2 p-6 md:p-10">
              {project.images && project.images.length > 0 && (
                <div className="mb-10 rounded-xl overflow-hidden aspect-[16/9] border bg-muted">
                  <img 
                    src={project.images[0]} 
                    alt={project.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div className="prose prose-slate max-w-none prose-headings:font-serif prose-headings:font-bold">
                <h3 className="text-2xl mb-4">О проекте</h3>
                <p className="text-lg leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                
                {/* Additional mock text to make it look like a full page */}
                <p className="mt-4 leading-relaxed text-slate-600">
                  Мы стараемся найти индивидуальный подход к каждому подопечному. Оказание помощи сопровождается социальным работником, который помогает не только ресурсами, но и консультацией по восстановлению документов, оформлению льгот и поиску вариантов выхода из кризиса.
                </p>
              </div>
            </div>

            {/* Right Column - Contacts & Info */}
            <div className="bg-slate-50/50">
              <div className="p-6 md:p-8 space-y-8">
                <div>
                  <h4 className="font-serif font-semibold text-lg mb-4">Контакты</h4>
                  <ul className="space-y-4">
                    {project.address && (
                      <li className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 text-muted-foreground shrink-0 mt-0.5" />
                        <span className="text-sm font-medium">{project.address}</span>
                      </li>
                    )}
                    {project.phone && (
                      <li className="flex items-center">
                        <Phone className="w-5 h-5 mr-3 text-muted-foreground shrink-0" />
                        <a href={`tel:${project.phone}`} className="text-sm font-medium hover:text-primary transition-colors">{project.phone}</a>
                      </li>
                    )}
                    {project.email && (
                      <li className="flex items-center">
                        <Mail className="w-5 h-5 mr-3 text-muted-foreground shrink-0" />
                        <a href={`mailto:${project.email}`} className="text-sm font-medium hover:text-primary transition-colors">{project.email}</a>
                      </li>
                    )}
                    {project.site && (
                      <li className="flex items-center">
                        <Globe className="w-5 h-5 mr-3 text-muted-foreground shrink-0" />
                        <a href={`https://${project.site}`} target="_blank" rel="noreferrer" className="text-sm font-medium text-primary hover:underline flex items-center">
                          {project.site} <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </li>
                    )}
                    <li className="flex items-center pt-2">
                      <Heart className="w-5 h-5 mr-3 text-primary shrink-0" />
                      <a href={`/donate/${project.id}`} className="text-sm font-semibold text-primary hover:underline flex items-center">
                        Как помочь проекту <ArrowRight className="w-3 h-3 ml-1" />
                      </a>
                    </li>
                  </ul>
                </div>

                {project.leader && (
                  <div>
                    <h4 className="font-serif font-semibold text-lg mb-4">Руководитель</h4>
                    <div className="flex items-center bg-white p-4 rounded-lg border shadow-sm">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0">
                        <User className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm font-medium">{project.leader}</span>
                    </div>
                  </div>
                )}
                
                <div className="pt-6 border-t mt-8">
                  <p className="text-sm text-muted-foreground mb-4">
                    Вы можете поддержать этот проект финансово, если у вас есть такая возможность. Любая сумма поможет в реализации добрых дел.
                  </p>
                  <Button className="w-full rounded-full" variant="outline" asChild>
                    <Link href={`/donate/${project.id}`}>
                      Пожертвовать
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
