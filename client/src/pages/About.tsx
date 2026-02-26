import { Heart, Users, Target, ShieldCheck, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-slate-50 py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-5xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-slate-900 mb-6 leading-tight">
              О портале «Церковь Помогает»
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-8">
              Единая база данных церковных социальных проектов, созданная Синодальным отделом по церковной благотворительности и социальному служению Русской Православной Церкви.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link href="/projects">Найти проект</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 bg-white">
                <Link href="/submit">Добавить свой проект</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Metrics Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">4500+</div>
              <div className="text-sm text-slate-500 font-medium">Церковных социальных инициатив</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">80+</div>
              <div className="text-sm text-slate-500 font-medium">Приютов для беременных и мам с детьми</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">90+</div>
              <div className="text-sm text-slate-500 font-medium">Приютов для бездомных</div>
            </div>
            <div>
              <div className="text-4xl font-serif font-bold text-primary mb-2">400+</div>
              <div className="text-sm text-slate-500 font-medium">Проектов помощи инвалидам</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Goals */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-serif font-bold mb-6">Наша миссия</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Мы стремимся объединить всех, кто нуждается в помощи, с теми, кто готов ее оказать. Платформа делает церковную социальную работу прозрачной, доступной и понятной для каждого человека, независимо от его вероисповедания.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                Любой человек, оказавшийся в трудной жизненной ситуации, может найти здесь поддержку рядом со своим домом, а благотворители — выбрать надежный проект для пожертвований или стать волонтером.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <ShieldCheck className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-700 font-medium">Проверенные и надежные организации</span>
                </li>
                <li className="flex items-start">
                  <Target className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-700 font-medium">Целевая и адресная помощь нуждающимся</span>
                </li>
                <li className="flex items-start">
                  <Users className="w-6 h-6 text-primary mr-3 shrink-0" />
                  <span className="text-slate-700 font-medium">Сообщество неравнодушных людей</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-square bg-slate-100 rounded-3xl overflow-hidden relative shadow-lg">
                <img 
                  src="/images/volunteer_2.jpg" 
                  alt="Волонтеры помогают людям" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    <Heart className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="font-bold text-slate-900">Помогаем вместе</div>
                    <div className="text-sm text-slate-500">Присоединяйтесь к нам</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For whom */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4">Для кого этот портал?</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Платформа создана для взаимодействия трех ключевых групп участников социального служения
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                <Users className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Нуждающимся</h3>
              <p className="text-slate-600 leading-relaxed">
                Удобный поиск организаций, приютов и центров гуманитарной помощи в вашем регионе. Возможность быстро найти контакты и получить необходимую поддержку.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-green-600 mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Организациям</h3>
              <p className="text-slate-600 leading-relaxed">
                Возможность рассказать о своей деятельности на всю страну, привлечь новых волонтеров и благотворителей, обмениваться опытом с коллегами из других регионов.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6">
                <Heart className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">Благотворителям</h3>
              <p className="text-slate-600 leading-relaxed">
                Достоверная информация о проверенных социальных проектах Церкви. Вы можете выбрать конкретный проект или направление для пожертвования.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}