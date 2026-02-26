import { Link } from "wouter";
import { ArrowRight, Search, Heart, Shield, Users, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { NEWS } from "@/lib/mock-data";

export default function Home() {
  const latestNews = NEWS.slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary/5 py-20 lg:py-32">
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 opacity-10 pointer-events-none">
          <svg width="600" height="600" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90,-16.3,89.1,-0.5C88.1,15.3,83.5,30.6,74.2,42.5C64.9,54.4,50.8,62.9,35.9,70.1C21,77.3,5.2,83.1,-9.6,81.4C-24.5,79.7,-38.5,70.5,-51.2,59.8C-63.9,49.1,-75.3,37,-81.4,22.2C-87.5,7.3,-88.3,-10.3,-82.2,-25.1C-76,-39.9,-62.9,-51.9,-48.9,-59.3C-34.9,-66.7,-20.1,-69.5,-4.4,-61.8C11.3,-54.1,22.7,-35.8,30.6,-83.5Z" transform="translate(100 100) scale(1.1)" />
          </svg>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
              Социальное служение Церкви
            </span>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Единая база социальных проектов Церкви
            </h1>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
              Мы собираем и верифицируем информацию о церковных инициативах помощи по всей России, чтобы нуждающиеся могли найти поддержку, а благотворители — надежные проекты.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full text-base px-8 font-medium shadow-md shadow-primary/20" asChild>
                <Link href="/projects"><Search className="w-5 h-5 mr-2" /> Найти проект помощи</Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-white" asChild>
                <a href="#about" className="text-primary hover:text-primary">Подробнее о портале</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-border/50">
            <div className="px-4">
              <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2">4500+</div>
              <div className="text-sm text-muted-foreground font-medium">Церковных социальных проектов</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2">80</div>
              <div className="text-sm text-muted-foreground font-medium">Приютов для беременных</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2">90</div>
              <div className="text-sm text-muted-foreground font-medium">Приютов для бездомных</div>
            </div>
            <div className="px-4">
              <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-2">400+</div>
              <div className="text-sm text-muted-foreground font-medium">Проектов помощи инвалидам</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features/About Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Для кого этот портал?</h2>
            <p className="text-muted-foreground">
              Платформа создана для объединения усилий в делах милосердия и предоставления актуальной, проверенной информации.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Для нуждающихся</CardTitle>
                <CardDescription className="text-base mt-2">
                  Простой и быстрый поиск центров гуманитарной помощи, приютов, бесплатных столовых и консультаций в вашем регионе.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-secondary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="font-serif text-xl">Для благотворителей</CardTitle>
                <CardDescription className="text-base mt-2">
                  База верифицированных проектов. Вы можете быть уверены, что ваша помощь дойдет до тех, кто в ней действительно нуждается.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Для организаторов</CardTitle>
                <CardDescription className="text-base mt-2">
                  Возможность рассказать о своем проекте на федеральном уровне, найти волонтеров, обменяться опытом с коллегами.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 lg:py-28 bg-slate-50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-3">Новости проектов</h2>
              <p className="text-muted-foreground">Актуальные события социального служения</p>
            </div>
            <Button variant="ghost" className="hidden sm:flex text-primary hover:text-primary/80" asChild>
              <Link href="/news">Все новости <ArrowRight className="ml-2 w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {latestNews.map((news) => (
              <Link key={news.id} href={`/news/${news.id}`}>
                <a className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all">
                  <div className="aspect-[4/3] overflow-hidden bg-muted relative">
                    <img 
                      src={news.image} 
                      alt={news.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <time className="text-xs font-semibold text-secondary uppercase tracking-wider mb-3">
                      {new Date(news.date).toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}
                    </time>
                    <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                      {news.title}
                    </h3>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                      {news.summary}
                    </p>
                    <div className="text-primary text-sm font-medium flex items-center mt-auto">
                      Читать далее <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Button variant="outline" className="w-full" asChild>
              <Link href="/news">Все новости</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
