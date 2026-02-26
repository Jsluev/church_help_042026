import { useState } from "react";
import { Link, useParams } from "wouter";
import { ArrowLeft, CheckCircle2, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { PROJECTS } from "@/lib/mock-data";

export default function DonateProject() {
  const { projectId } = useParams();
  const project = PROJECTS.find(p => p.id === projectId);
  
  const [amount, setAmount] = useState<number | "">("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Проект не найден</h1>
        <Button asChild><Link href="/projects">Вернуться в каталог</Link></Button>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Спасибо за пожертвование!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Ваша поддержка направлена напрямую проекту «{project.name}». Спаси Господи за ваше доброе сердце.
        </p>
        <Button asChild size="lg" variant="outline" className="mr-4">
          <Link href={`/projects/${project.id}`}>Вернуться к проекту</Link>
        </Button>
        <Button asChild size="lg">
          <Link href="/projects">Другие проекты</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-3xl">
      <Button variant="ghost" className="text-muted-foreground hover:text-foreground -ml-4 mb-6" asChild>
        <Link href={`/projects/${project.id}`}>
          <ArrowLeft className="w-4 h-4 mr-2" />
          Назад к проекту
        </Link>
      </Button>

      <div className="mb-8 p-6 bg-slate-50 border rounded-2xl">
        <div className="flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-2">
          <Heart className="w-4 h-4" />
          Целевой сбор
        </div>
        <h1 className="text-3xl font-serif font-bold mb-2">Поддержать проект</h1>
        <p className="text-xl text-foreground font-medium mb-1">
          {project.name}
        </p>
        <p className="text-muted-foreground text-sm">
          Все собранные средства будут зачислены на расчетный счет организации напрямую.
        </p>
      </div>

      <Card className="shadow-md border-primary/20">
        <CardHeader>
          <CardTitle>Оформить пожертвование</CardTitle>
          <CardDescription>
            Выберите сумму или введите свою.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Label className="mb-3 block text-base">Сумма (₽)</Label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[500, 1000, 3000, 10000].map((preset) => (
                  <Button
                    key={preset}
                    type="button"
                    variant={amount === preset ? "default" : "outline"}
                    className="h-12 text-lg font-medium"
                    onClick={() => setAmount(preset)}
                  >
                    {preset} ₽
                  </Button>
                ))}
              </div>
              <Input
                type="number"
                placeholder="Другая сумма"
                className="h-12 text-lg"
                value={amount}
                onChange={(e) => setAmount(e.target.value ? Number(e.target.value) : "")}
                required
                min="10"
              />
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b pb-2">Ваши данные</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Имя</Label>
                  <Input id="firstName" placeholder="Анна" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (для квитанции)</Label>
                  <Input id="email" type="email" placeholder="mail@example.com" required />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b pb-2">Способ оплаты</h3>
              <div className="space-y-2 opacity-70">
                <Label htmlFor="card">Номер карты (Тестовый режим)</Label>
                <Input id="card" placeholder="0000 0000 0000 0000" disabled />
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg">
              Пожертвовать {amount ? `${amount} ₽` : ""} проекту
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
