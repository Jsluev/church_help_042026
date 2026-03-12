import { Link, useLocation } from "wouter";
import { useEffect } from "react";
import { HeartHandshake, Menu, MapPin, Search, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const navLinks = [
    { href: "/projects", label: "Каталог проектов" },
    { href: "/news", label: "Новости" },
    { href: "/about", label: "О нас" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background selection:bg-primary/20">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 text-primary hover:opacity-90 transition-opacity">
            <HeartHandshake className="h-7 w-7 shrink-0" />
            <div className="flex items-baseline gap-2">
              <span className="font-serif font-bold text-lg leading-tight tracking-tight whitespace-nowrap">Церковь Помогает</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-6">
            <div className="flex flex-col items-end mr-2">
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Горячая линия</span>
              <a href="tel:88007070222" className="text-sm font-bold text-primary hover:underline leading-none mt-1">8 800 70 70 222</a>
            </div>
            <div className="w-px h-8 bg-border mx-2"></div>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
                  location === link.href ? "text-primary" : "text-muted-foreground"
                }`}>
                {link.label}
              </Link>
            ))}
            <Link href="/submit" className={`text-sm font-medium transition-colors hover:text-primary whitespace-nowrap ${
              location === '/submit' ? "text-primary" : "text-muted-foreground"
            }`}>
              Добавить проект
            </Link>
            <Button variant="default" size="sm" className="ml-2 rounded-full font-medium shrink-0 whitespace-nowrap" asChild>
              <Link href="/donate"><Heart className="w-4 h-4 mr-2" /> Помочь</Link>
            </Button>
          </nav>

          {/* Mobile Nav */}
          <div className="lg:hidden flex items-center gap-4">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-muted-foreground font-medium uppercase tracking-wider">Горячая линия</span>
              <a href="tel:88007070222" className="text-sm font-bold text-primary hover:underline leading-none mt-1">8 800 70 70 222</a>
            </div>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="text-primary">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <nav className="flex flex-col gap-4 mt-8">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} className={`text-lg font-serif transition-colors ${
                        location === link.href ? "text-primary font-bold" : "text-foreground"
                      }`}>
                      {link.label}
                    </Link>
                  ))}
                  <Link href="/submit" className={`text-lg font-serif transition-colors ${
                      location === '/submit' ? "text-primary font-bold" : "text-foreground"
                    }`}>
                    Добавить проект
                  </Link>
                  <div className="mt-4 pt-4 border-t border-border flex flex-col gap-2">
                    <Button className="w-full justify-start rounded-full" variant="outline" asChild>
                      <Link href="/projects"><Search className="w-4 h-4 mr-2" /> Найти проект</Link>
                    </Button>
                    <Button className="w-full justify-start rounded-full" variant="default" asChild>
                      <Link href="/donate"><Heart className="w-4 h-4 mr-2" /> Помочь</Link>
                    </Button>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-200 py-12 mt-auto border-t-4 border-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2 mb-4 text-white">
                <HeartHandshake className="h-6 w-6 text-secondary" />
                <span className="font-serif font-bold text-xl">Церковь Помогает</span>
              </div>
              <p className="text-slate-400 text-sm max-w-md leading-relaxed mb-6">
                Официальная база данных церковных социальных проектов Синодального отдела по церковной благотворительности и социальному служению Русской Православной Церкви.
              </p>
            </div>
            
            <div>
              <h3 className="font-serif font-semibold text-white mb-4">Навигация</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><Link href="/" className="hover:text-secondary transition-colors">Главная</Link></li>
                <li><Link href="/projects" className="hover:text-secondary transition-colors">Каталог проектов</Link></li>
                <li><Link href="/news" className="hover:text-secondary transition-colors">Новости служения</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-serif font-semibold text-white mb-4">Контакты</h3>
              <ul className="space-y-3 text-sm text-slate-400">
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0" />
                  <span>109004, г. Москва, ул. Николоямская, д. 57, стр. 7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center text-xs text-slate-500">
            © {new Date().getFullYear()} Синодальный отдел по церковной благотворительности и социальному служению Русской Православной Церкви
          </div>
        </div>
      </footer>
    </div>
  );
}
