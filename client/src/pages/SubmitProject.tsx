import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function SubmitProject() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Заявка успешно отправлена!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Спасибо за ваше обращение. Наши модераторы проверят информацию и свяжутся с вами в ближайшее время для подтверждения данных.
        </p>
        <Button asChild size="lg">
          <Link href="/">Вернуться на главную</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 md:py-12 max-w-3xl">
      <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-2 md:-ml-4 mb-4 md:mb-6" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Link>
      </Button>
      <div className="mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-serif font-bold mb-3">Добавить проект</h1>
        <p className="text-muted-foreground text-base md:text-lg">
          Заполните форму, чтобы мы могли добавить ваш церковный социальный проект в единую базу данных.
        </p>
      </div>
      <Card className="border-border shadow-sm">
        <CardHeader className="px-4 py-6 md:p-6 md:pb-4 border-b border-border/50 bg-slate-50/50">
          <CardTitle className="text-xl md:text-2xl">Информация о проекте</CardTitle>
          <CardDescription className="text-sm md:text-base">
            Пожалуйста, укажите максимально подробную и актуальную информацию. Все поля обязательны к заполнению.
          </CardDescription>
        </CardHeader>
        <CardContent className="px-4 py-6 md:p-6">
          <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
            <div className="space-y-2">
              <Label htmlFor="projectName" className="text-base font-semibold">Название проекта</Label>
              <Input id="projectName" placeholder="Например: Приют «Милосердие»" required className="h-12" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="region" className="text-base font-semibold">Регион (Субъект РФ)</Label>
                <Input id="region" placeholder="Московская область" required className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city" className="text-base font-semibold">Город / Населенный пункт</Label>
                <Input id="city" placeholder="Москва" required className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-base font-semibold">Точный адрес</Label>
              <Input id="address" placeholder="ул. Ленина, д. 1" required className="h-12" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization" className="text-base font-semibold block leading-snug">
                Церковная принадлежность <span className="text-muted-foreground font-normal text-sm block sm:inline mt-1 sm:mt-0">(Учредитель / Храм / Епархия)</span>
              </Label>
              <Input id="organization" placeholder="Например: При храме св. Николая..." required className="h-12" />
            </div>

            <div className="grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-base font-semibold">Контактный телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 000-00-00" required className="h-12" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-base font-semibold">Электронная почта</Label>
                <Input id="email" type="email" placeholder="mail@example.com" required className="h-12" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="website" className="text-base font-semibold block">Сайт или социальные сети проекта</Label>
              <Input id="website" type="url" placeholder="https://vk.com/..." required className="h-12" />
              <p className="text-xs md:text-sm text-muted-foreground mt-1.5 leading-snug">Ссылка на ресурс, где регулярно публикуются новости о вашей деятельности.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-base font-semibold">Описание деятельности проекта</Label>
              <Textarea 
                id="description" 
                placeholder="Расскажите, кому и как именно вы помогаете. Опишите ваши регулярные мероприятия..." 
                className="min-h-[150px] resize-y" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leader" className="text-base font-semibold block leading-snug">
                ФИО руководителя <span className="text-muted-foreground font-normal text-sm block sm:inline mt-1 sm:mt-0">(или контактного лица)</span>
              </Label>
              <Input id="leader" placeholder="Иванов Иван Иванович" required className="h-12" />
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-base md:text-lg font-medium rounded-xl shadow-md shadow-primary/20 mt-4">
              Отправить заявку на проверку
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
