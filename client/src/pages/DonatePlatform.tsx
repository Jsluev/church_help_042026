import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, CreditCard, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

export default function DonatePlatform() {
  const [amount, setAmount] = useState<number | "">(1000);
  const [submitted, setSubmitted] = useState(false);
  const [agree, setAgree] = useState(true);
  const [news, setNews] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!agree) return;
    setSubmitted(true);
  };

  const getCommissionText = () => {
    if (!amount) return "";
    const num = Number(amount);
    if (isNaN(num)) return "";
    const received = num - (num * 0.005);
    return `Мы получим ${received.toFixed(2).replace(/\.00$/, '')} р. с учетом комиссии 0.5%`;
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Спасибо за вашу поддержку!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Ваше пожертвование поможет нам и дальше развивать платформу, добавлять новые проекты и объединять тех, кто нуждается в помощи, с теми, кто готов помочь.
        </p>
        <Button asChild size="lg" className="rounded-xl">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-[550px]">
      <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-4 mb-6" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Link>
      </Button>

      <div className="bg-white rounded-[2rem] p-6 md:p-10 shadow-xl shadow-slate-200/50 border border-slate-100">
        <h1 className="text-2xl font-serif font-bold text-center mb-8">Сделайте разовое пожертвование</h1>
        
        <Tabs defaultValue="online" className="w-full mb-8">
          <TabsList className="w-full h-14 bg-slate-100/50 p-1.5 rounded-2xl mb-8">
            <TabsTrigger value="online" className="w-full h-full rounded-xl text-base data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm transition-all cursor-pointer">Онлайн</TabsTrigger>
            <TabsTrigger value="bank" className="w-full h-full rounded-xl text-base text-muted-foreground cursor-pointer">Через банк</TabsTrigger>
          </TabsList>
          
          <TabsContent value="online" className="mt-0">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Input */}
              <div className="relative">
                <Input
                  type="number"
                  className="w-full h-24 text-center text-4xl md:text-5xl font-bold font-serif rounded-2xl border-slate-200 focus-visible:ring-primary shadow-sm"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                  required
                  min="10"
                />
              </div>

              {/* Presets */}
              <div className="flex flex-wrap justify-center gap-3 pb-2">
                {[500, 1500, 3000, 5000].map((preset) => (
                  <Button
                    key={preset}
                    type="button"
                    variant={amount === preset ? "default" : "outline"}
                    className={`rounded-2xl h-12 px-6 text-base font-medium shadow-none transition-all ${amount !== preset ? 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50' : ''}`}
                    onClick={() => setAmount(preset)}
                  >
                    {preset} ₽
                  </Button>
                ))}
              </div>
              
              <div className="text-center text-sm text-muted-foreground mb-8 pb-4 border-b border-slate-100">
                {getCommissionText()}
              </div>

              {/* User Data */}
              <div className="space-y-5">
                <div className="relative">
                  <div className="absolute -top-2.5 left-4 px-1 bg-white text-xs font-medium text-slate-400 z-10 pointer-events-none transition-colors peer-focus:text-primary">Ваше имя</div>
                  <Input 
                    id="firstName" 
                    placeholder="Иван Иванов" 
                    className="h-14 rounded-2xl border-slate-200 text-base px-4 shadow-none bg-transparent hover:border-slate-300 transition-colors peer"
                    required 
                  />
                </div>
                <div className="relative">
                  <div className="absolute -top-2.5 left-4 px-1 bg-white text-xs font-medium text-slate-400 z-10 pointer-events-none transition-colors peer-focus:text-primary">Ваш email</div>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="mail@example.com" 
                    className="h-14 rounded-2xl border-slate-200 text-base px-4 shadow-none bg-transparent hover:border-slate-300 transition-colors peer"
                    required 
                  />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-4 py-6">
                <div className="flex items-start space-x-3 group">
                  <Checkbox 
                    id="agree" 
                    checked={agree} 
                    onCheckedChange={(c) => setAgree(c as boolean)}
                    className="rounded-full mt-0.5 w-5 h-5 border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-colors"
                  />
                  <Label htmlFor="agree" className="text-sm font-normal text-slate-500 leading-snug cursor-pointer group-hover:text-slate-700 transition-colors">
                    Соглашаюсь с офертой и политикой конфиденциальности
                  </Label>
                </div>
                <div className="flex items-start space-x-3 group">
                  <Checkbox 
                    id="news" 
                    checked={news} 
                    onCheckedChange={(c) => setNews(c as boolean)}
                    className="rounded-full mt-0.5 w-5 h-5 border-slate-300 data-[state=checked]:bg-primary data-[state=checked]:border-primary transition-colors"
                  />
                  <Label htmlFor="news" className="text-sm font-normal text-slate-500 leading-snug cursor-pointer group-hover:text-slate-700 transition-colors">
                    Хочу получать новости сайта
                  </Label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <Button type="submit" disabled={!agree} className="h-14 rounded-2xl text-base font-semibold bg-[#e61e38] hover:bg-[#cc1830] text-white shadow-md shadow-red-500/20 border-0">
                  Оплатить картой <CreditCard className="ml-2 w-5 h-5 opacity-90" />
                </Button>
                <Button type="submit" disabled={!agree} className="h-14 rounded-2xl text-base font-semibold bg-[#2a2c4e] hover:bg-[#1f2038] text-white shadow-md shadow-slate-800/20 border-0">
                  Оплатить СБП <Smartphone className="ml-2 w-5 h-5 opacity-90" />
                </Button>
              </div>
            </form>
          </TabsContent>
          <TabsContent value="bank" className="mt-0">
            <div className="py-16 text-center bg-slate-50 rounded-2xl border border-slate-100">
              <p className="text-slate-500">Реквизиты для банковского перевода<br/>находятся в разработке</p>
            </div>
          </TabsContent>
        </Tabs>
      </div>
      
      <p className="text-center text-sm text-slate-500 mt-8 px-4">
        Ваша поддержка позволяет порталу «Церковь Помогает» бесперебойно работать и развивать базу данных социальных проектов.
      </p>
    </div>
  );
}
