import { Link } from "wouter";
import { Calendar, ArrowRight } from "lucide-react";
import { NEWS } from "@/lib/mock-data";

export default function NewsList() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-4">Новости служения</h1>
        <p className="text-lg text-muted-foreground">
          Узнайте о последних событиях, акциях и достижениях церковных социальных проектов со всей страны.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
        {NEWS.map((news, index) => (
          <Link key={news.id} href={`/news/${news.id}`}>
            <a className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <img 
                  src={news.image} 
                  alt={news.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <time className="text-sm font-medium text-muted-foreground flex items-center mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  {new Date(news.date).toLocaleDateString('ru-RU', { 
                    day: 'numeric', month: 'long', year: 'numeric' 
                  })}
                </time>
                <h3 className="font-serif text-2xl font-bold mb-4 group-hover:text-primary transition-colors leading-snug">
                  {news.title}
                </h3>
                <p className="text-muted-foreground text-base line-clamp-3 mb-6 flex-1 leading-relaxed">
                  {news.summary}
                </p>
                <div className="text-primary font-semibold flex items-center mt-auto">
                  Читать полностью <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
}
