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
                Мы стремимся объединить всех, кто нуждается в помощи, с теми, кто готов ее оказать. Платформа делает церковную социальную работу прозрачной, доступной и понятной для каждого человека.
              </p>
              <ul className="space-y-4 mt-8">
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
                  src="/images/ortho_10.png" 
                  alt="Красивый пейзаж с храмом" 
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

      {/* Principles Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-4">Декларация принципов</h2>
            <p className="text-lg text-slate-600">
              Все проекты в каталоге проходят верификацию и соответствуют следующим ключевым критериям:
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <ShieldCheck className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Церковная принадлежность и мир</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Проект осознает себя частью социального служения: реализуется или учреждён религиозной организацией, либо действует по письменному благословению правящего архиерея, и поддерживает конструктивные рабочие отношения с епархией.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-sm">₽</div>
                <h3 className="font-bold text-lg">Доверие жертвователей</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Запрет на сбор пожертвований на личные банковские карты физических лиц. Разрешено использование только расчётного счета юридического лица или официальных ящиков.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Target className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Опыт, устойчивость и реальная деятельность</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Деятельность проекта юридически закреплена. Срок непрерывной работы на момент подачи заявки составляет не менее 3 месяцев, а оказание адресной помощи или акции проводятся не реже раза в месяц.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="flex items-center gap-3 mb-3">
                <Users className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Открытая информационная политика</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Проект рассказывает о своей деятельности обществу: имеет действующий сайт или страницы в социальных сетях с регулярностью обновлений не менее одной публикации в неделю.
              </p>
            </div>
          </div>
          
          <div className="mt-10 text-center">
            <Button asChild>
              <Link href="/submit">Подать заявку на добавление</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* History of service */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-serif font-bold mb-6">История и современное состояние служения</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-6">
              Церковное социальное служение имеет глубокие исторические корни. С первых веков христианства забота о ближнем, о бедных, больных и заключенных была неотъемлемой частью жизни Церкви.
            </p>
            <p className="text-lg text-slate-600 leading-relaxed">
              Сегодня Русская Православная Церковь реализует тысячи социальных инициатив по всей стране. Это приюты для матерей, центры реабилитации зависимых, сестричества милосердия, проекты помощи бездомным и инвалидам. Тысячи добровольцев ежедневно отдают свои силы, чтобы мир стал немного добрее.
            </p>
          </div>
        </div>
      </section>

      {/* About Synodal Department */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-primary/5 rounded-3xl p-10 md:p-16 border border-primary/10">
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="w-32 h-32 md:w-48 md:h-48 rounded-full bg-white flex items-center justify-center shadow-lg border border-slate-100 shrink-0 overflow-hidden">
                <img src="/images/ortho_5.png" alt="Символ отдела" className="w-full h-full object-cover" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-bold mb-6">О Синодальном отделе</h2>
                <p className="text-lg text-slate-700 leading-relaxed mb-6">
                  Синодальный отдел по церковной благотворительности и социальному служению Русской Православной Церкви координирует и поддерживает социальные инициативы на общецерковном уровне.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Отдел занимается разработкой методологии, обучением специалистов, распределением гуманитарной помощи при чрезвычайных ситуациях, а также взаимодействием с государственными и общественными организациями для эффективного решения социальных проблем.
                </p>
                <div className="mt-8">
                  <Button asChild>
                    <a href="https://diaconia.ru" target="_blank" rel="noreferrer">
                      Официальный сайт Отдела
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}