import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, ShieldAlert } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

export default function SubmitProject() {
  const [submitted, setSubmitted] = useState(false);
  const [agreements, setAgreements] = useState({
    church: false,
    finance: false,
    active: false,
    media: false
  });

  const canSubmit = Object.values(agreements).every(Boolean);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (canSubmit) {
      setSubmitted(true);
    }
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
              <Label htmlFor="organization">Церковная принадлежность (Учредитель / Храм / Епархия)</Label>
              <Input id="organization" placeholder="Например: При храме св. Николая или учреждено епархией" required />
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
              <Label htmlFor="website">Сайт или социальные сети проекта</Label>
              <Input id="website" type="url" placeholder="https://vk.com/..." required />
              <p className="text-xs text-muted-foreground">Ссылка на ресурс, где регулярно публикуются новости о вашей деятельности.</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Описание деятельности проекта</Label>
              <Textarea 
                id="description" 
                placeholder="Расскажите, кому и как именно вы помогаете. Опишите ваши регулярные мероприятия..." 
                className="min-h-[120px]" 
                required 
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="leader">ФИО руководителя / Контактное лицо</Label>
              <Input id="leader" placeholder="Иванов Иван Иванович" required />
            </div>

            <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 space-y-4 mt-8">
              <div className="flex items-center gap-2 mb-2 text-primary font-bold">
                <ShieldAlert className="w-5 h-5" />
                <h4>Декларация принципов портала</h4>
              </div>
              
              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="agree-church" 
                  checked={agreements.church}
                  onCheckedChange={(c) => setAgreements(prev => ({...prev, church: !!c}))}
                />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="agree-church" className="text-sm font-medium leading-none cursor-pointer">
                    Церковная принадлежность
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Проект реализуется религиозной организацией или осуществляется по письменному благословению архиерея.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="agree-finance" 
                  checked={agreements.finance}
                  onCheckedChange={(c) => setAgreements(prev => ({...prev, finance: !!c}))}
                />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="agree-finance" className="text-sm font-medium leading-none cursor-pointer">
                    Прозрачные сборы
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Мы не ведем сбор пожертвований на личные банковские карты физических лиц.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="agree-active" 
                  checked={agreements.active}
                  onCheckedChange={(c) => setAgreements(prev => ({...prev, active: !!c}))}
                />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="agree-active" className="text-sm font-medium leading-none cursor-pointer">
                    Опыт и реальная деятельность
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Проект непрерывно работает не менее 3 месяцев и регулярно (не реже 1 раза в месяц) оказывает помощь.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox 
                  id="agree-media" 
                  checked={agreements.media}
                  onCheckedChange={(c) => setAgreements(prev => ({...prev, media: !!c}))}
                />
                <div className="grid gap-1.5 leading-none">
                  <label htmlFor="agree-media" className="text-sm font-medium leading-none cursor-pointer">
                    Открытость
                  </label>
                  <p className="text-xs text-muted-foreground">
                    Проект ведет активную информационную политику в интернете с регулярностью обновлений не реже 1 раза в неделю.
                  </p>
                </div>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full" disabled={!canSubmit}>
              Отправить заявку на проверку
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
