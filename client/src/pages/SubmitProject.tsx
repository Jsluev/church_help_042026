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
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-4 mb-6" asChild>
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад
        </Link>
      </Button>

      <div className="mb-8">
        <h1 className="text-4xl font-serif font-bold mb-3">Добавить проект</h1>
        <p className="text-muted-foreground text-lg">
          Заполните форму, чтобы мы могли добавить ваш церковный социальный проект в единую базу данных.
        </p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Информация о проекте</CardTitle>
          <CardDescription>
            Пожалуйста, укажите максимально подробную и актуальную информацию. Все поля обязательны к заполнению.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="projectName">Название проекта</Label>
              <Input id="projectName" placeholder="Например: Приют «Милосердие»" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="region">Регион (Субъект РФ)</Label>
                <Input id="region" placeholder="Московская область" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="city">Город / Населенный пункт</Label>
                <Input id="city" placeholder="Москва" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address">Точный адрес</Label>
              <Input id="address" placeholder="ул. Ленина, д. 1" required />
            </div>

            <div className="space-y-2">
              <Label htmlFor="organization">Церковная принадлежность (Учредитель / Храм)</Label>
              <Input id="organization" placeholder="При храме св. Николая" required />
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone">Контактный телефон</Label>
                <Input id="phone" type="tel" placeholder="+7 (999) 000-00-00" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Электронная почта</Label>
                <Input id="email" type="email" placeholder="mail@example.com" required />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание деятельности проекта</Label>
              <Textarea 
                id="description" 
                placeholder="Расскажите, кому и как именно вы помогаете..." 
                className="min-h-[120px]" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leader">ФИО руководителя / Контактное лицо</Label>
              <Input id="leader" placeholder="Иванов Иван Иванович" required />
            </div>

            <Button type="submit" size="lg" className="w-full">
              Отправить заявку на проверку
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
