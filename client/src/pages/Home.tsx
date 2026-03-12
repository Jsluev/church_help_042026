import { Link } from "wouter";
import { ArrowRight, Search, Heart, Shield, Users, Newspaper, MapPin } from "lucide-react";
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-3xl">
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-semibold tracking-wider uppercase mb-6">
                Социальное служение Церкви
              </span>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                Единая база церковных социальных проектов
              </h1>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
                Мы собираем и верифицируем информацию о церковных инициативах помощи по всей России, чтобы нуждающиеся могли найти поддержку, а благотворители — надежные проекты.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="rounded-full text-base px-8 font-medium shadow-md shadow-primary/20" asChild>
                  <Link href="/projects"><Search className="w-5 h-5 mr-2" /> Каталог проектов</Link>
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-base px-8 bg-white" asChild>
                  <Link href="/about" className="text-primary hover:text-primary">О портале</Link>
                </Button>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-4 rounded-2xl border shadow-sm inline-flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary shrink-0">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-foreground">Координируется Синодальным отделом</div>
                  <div className="text-xs text-muted-foreground">по церковной благотворительности</div>
                </div>
              </div>
            </div>

            <div className="hidden lg:block relative rounded-2xl overflow-hidden shadow-xl border bg-muted aspect-video">
              {/* Video Placeholder */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-900 group cursor-pointer">
                <img 
                  src="/images/ortho_6.png" 
                  alt="Презентация проекта" 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity"
                />
                <div className="absolute w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[16px] border-l-white border-b-[10px] border-b-transparent ml-1"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest News (Moved up) */}
      <section className="py-20 bg-slate-50 border-b border-border">
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
              <Link key={news.id} href={`/news/${news.id}`} className="group flex flex-col h-full bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-md transition-all">
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

      {/* Map Infographic Section */}
      <section className="py-20 lg:py-28 bg-white border-b border-border">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">География служения</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Церковные социальные инициативы работают в каждой епархии от Калининграда до Владивостока
            </p>
          </div>
          
          <div className="relative w-full aspect-[2/1] bg-slate-50 rounded-3xl border overflow-hidden shadow-sm group">
             {/* Map image background */}
             <div className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105" style={{
                backgroundImage: 'url("/images/map-placeholder.png")',
             }}>
               <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]"></div>
             </div>
             
             <div className="relative z-10 flex items-center justify-center h-full">
               <div className="text-center p-8 bg-white/95 backdrop-blur-md rounded-2xl shadow-lg border max-w-md mx-4 transform transition-all group-hover:-translate-y-1">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                    <MapPin className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif font-bold text-xl mb-2">Интерактивная карта</h3>
                  <p className="text-sm text-slate-600 mb-6">В разработке. Здесь будет доступен удобный визуальный поиск центров помощи по регионам России.</p>
                  <Button variant="default" className="w-full rounded-full shadow-md shadow-primary/20" asChild>
                    <Link href="/projects">Перейти в каталог проектов</Link>
                  </Button>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* About Platform / Features Section */}
      <section id="about" className="py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">О проекте</h2>
            <p className="text-muted-foreground text-lg">
              Информационный портал создан для систематизации, развития и поддержки церковных социальных инициатив по всей стране.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Search className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Единая база</CardTitle>
                <CardDescription className="text-base mt-2">
                  Актуальная информация обо всех действующих центрах гуманитарной помощи, приютах и службах милосердия в России.
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-secondary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="font-serif text-xl">Верификация</CardTitle>
                <CardDescription className="text-base mt-2">
                  Все проекты проходят проверку. Мы подтверждаем их церковную принадлежность и реальную деятельность.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="border-none shadow-md hover:shadow-lg transition-shadow bg-gradient-to-b from-white to-primary/5">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="font-serif text-xl">Объединение усилий</CardTitle>
                <CardDescription className="text-base mt-2">
                  Платформа помогает нуждающимся найти поддержку, благотворителям — надежные проекты, а организаторам — обменяться опытом.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
          
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" className="rounded-full" asChild>
              <Link href="/about">Читать подробнее о проекте</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
