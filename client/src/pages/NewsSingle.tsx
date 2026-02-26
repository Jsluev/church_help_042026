import { Link, useParams } from "wouter";
import { ArrowLeft, Calendar, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NEWS, PROJECTS } from "@/lib/mock-data";

export default function NewsSingle() {
  const { id } = useParams();
  const article = NEWS.find(n => n.id === id);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Новость не найдена</h1>
        <Button asChild><Link href="/news">Ко всем новостям</Link></Button>
      </div>
    );
  }

  const project = PROJECTS.find(p => p.id === article.projectId);

  return (
    <div className="bg-white min-h-screen">
      <article className="max-w-3xl mx-auto px-4 py-12 md:py-16">
        <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-4 mb-8" asChild>
          <Link href="/news">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Все новости
          </Link>
        </Button>

        <div className="mb-10 text-center">
          <time className="inline-flex items-center text-sm font-medium text-secondary mb-6 uppercase tracking-widest">
            <Calendar className="w-4 h-4 mr-2" />
            {new Date(article.date).toLocaleDateString('ru-RU', { 
              day: 'numeric', month: 'long', year: 'numeric' 
            })}
          </time>
          <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-8">
            {article.title}
          </h1>
          
          {project && (
            <div className="inline-flex items-center justify-center p-1.5 pr-4 bg-slate-50 border rounded-full">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 shrink-0 text-primary font-bold text-xs">
                П
              </div>
              <div className="text-left">
                <div className="text-[10px] text-muted-foreground uppercase font-semibold leading-none tracking-wider mb-1">Проект</div>
                <Link href={`/projects/${project.id}`} className="text-sm font-medium hover:text-primary transition-colors">
                  {project.name}
                </Link>
              </div>
            </div>
          )}
        </div>

        {article.image && (
          <div className="rounded-2xl overflow-hidden mb-12 aspect-[16/9] shadow-lg border">
            <img 
              src={article.image} 
              alt={article.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <div className="prose prose-slate prose-lg md:prose-xl mx-auto prose-headings:font-serif prose-p:leading-relaxed prose-a:text-primary hover:prose-a:text-primary/80">
          <p className="lead text-xl md:text-2xl font-serif text-slate-600 mb-8 border-l-4 border-primary pl-6 py-1 bg-slate-50 rounded-r-lg">
            {article.summary}
          </p>
          <p>
            {article.content}
          </p>
          <p>
            В рамках реализации проекта мы продолжаем развивать инфраструктуру помощи. 
            Ежедневный труд волонтеров и сестер милосердия позволяет охватить заботой сотни нуждающихся.
            Средства, собранные в ходе последних благотворительных акций, были полностью направлены на закупку необходимых материалов.
          </p>
          <p>
            Мы благодарим всех неравнодушных людей за участие в делах милосердия!
          </p>
        </div>

        <div className="mt-16 pt-8 border-t flex justify-between items-center">
          <div className="text-sm text-muted-foreground">
            Поделиться статьей:
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              <Share2 className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </article>
    </div>
  );
}
