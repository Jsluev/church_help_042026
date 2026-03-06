import { useState } from "react";
import { Link } from "wouter";
import { Calendar, ArrowRight, Tags } from "lucide-react";
import { NEWS } from "@/lib/mock-data";
import { Button } from "@/components/ui/button";

const NEWS_CATEGORIES = [
  "Все", "Гуманитарная помощь", "Помощь бездомным", "Поддержка семьи", "Помощь инвалидам", "Работа с зависимыми", "Больничное служение"
];

export default function NewsList() {
  const ITEMS_PER_PAGE = 6;
  const [currentPage, setCurrentPage] = useState(1);
  const [activeCategory, setActiveCategory] = useState("Все");

  const filteredNews = activeCategory === "Все" 
    ? NEWS 
    : NEWS.filter((_, i) => i % NEWS_CATEGORIES.length === NEWS_CATEGORIES.indexOf(activeCategory)); // Mock filtering

  const totalPages = Math.ceil(filteredNews.length / ITEMS_PER_PAGE);
  const currentNews = filteredNews.slice((currentPage - 1) * ITEMS_PER_PAGE, currentPage * ITEMS_PER_PAGE);

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl flex flex-col min-h-[calc(100vh-200px)]">
      <div className="mb-12 text-center max-w-2xl mx-auto">
        <h1 className="text-4xl font-serif font-bold mb-4">Новости служения</h1>
        <p className="text-lg text-muted-foreground">
          Узнайте о последних событиях, акциях и достижениях церковных социальных проектов со всей страны.
        </p>
      </div>

      <div className="mb-10">
        <div className="flex items-center gap-2 mb-4">
          <Tags className="w-5 h-5 text-muted-foreground" />
          <h2 className="text-lg font-medium">Рубрики:</h2>
        </div>
        <div className="flex flex-wrap gap-2">
          {NEWS_CATEGORIES.map(category => (
            <Button 
              key={category} 
              variant={activeCategory === category ? "default" : "outline"}
              className="rounded-full"
              onClick={() => {
                setActiveCategory(category);
                setCurrentPage(1);
              }}
            >
              {category}
            </Button>
          ))}
        </div>
      </div>

      {currentNews.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 flex-1">
          {currentNews.map((news) => (
          <Link key={news.id} href={`/news/${news.id}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all duration-300">
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
          </Link>
        ))}
      ) : (
        <div className="text-center py-20 bg-slate-50 rounded-2xl border border-dashed flex-1">
          <p className="text-muted-foreground">В этой рубрике пока нет новостей.</p>
        </div>
      )}

      {totalPages > 1 && (
        <div className="mt-12 flex justify-center items-center gap-2">
          <Button 
            variant="outline" 
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
          >
            Назад
          </Button>
          <div className="flex gap-1">
            {Array.from({ length: totalPages }).map((_, i) => (
              <Button
                key={i}
                variant={currentPage === i + 1 ? "default" : "outline"}
                size="icon"
                onClick={() => setCurrentPage(i + 1)}
                className="w-10 h-10"
              >
                {i + 1}
              </Button>
            ))}
          </div>
          <Button 
            variant="outline" 
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
          >
            Вперед
          </Button>
        </div>
      )}
    </div>
  );
}
