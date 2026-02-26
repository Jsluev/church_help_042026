import { useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, CheckCircle2, HeartHandshake } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

export default function DonatePlatform() {
  const [amount, setAmount] = useState<number | "">("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="container mx-auto px-4 py-20 max-w-2xl text-center">
        <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
          <HeartHandshake className="w-10 h-10" />
        </div>
        <h1 className="text-3xl font-serif font-bold mb-4">Спасибо за вашу поддержку!</h1>
        <p className="text-muted-foreground text-lg mb-8">
          Ваше пожертвование поможет нам и дальше развивать платформу, добавлять новые проекты и объединять тех, кто нуждается в помощи, с теми, кто готов помочь.
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
        <h1 className="text-4xl font-serif font-bold mb-3">Пожертвование платформе</h1>
        <p className="text-muted-foreground text-lg">
          Ваша поддержка позволяет порталу «Церковь Помогает» бесперебойно работать, верифицировать новые социальные проекты и развивать функционал базы данных.
        </p>
      </div>

      <Card className="shadow-md">
        <CardHeader>
          <CardTitle>Оформить пожертвование</CardTitle>
          <CardDescription>
            Выберите сумму или введите свою. Все средства пойдут на техническую поддержку и развитие сайта.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-8">
            <div>
              <Label className="mb-3 block text-base">Сумма пожертвования (₽)</Label>
              <div className="grid grid-cols-3 gap-3 mb-4">
                {[500, 1000, 2000, 5000].map((preset) => (
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
                  <Input id="firstName" placeholder="Иван" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email (для чека)</Label>
                  <Input id="email" type="email" placeholder="mail@example.com" required />
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-medium text-lg border-b pb-2">Данные карты (модация)</h3>
              <div className="space-y-2">
                <Label htmlFor="card">Номер карты</Label>
                <Input id="card" placeholder="0000 0000 0000 0000" disabled />
                <p className="text-xs text-muted-foreground mt-1">Это дизайн-прототип. Вводить реальные данные карты не нужно.</p>
              </div>
            </div>

            <Button type="submit" size="lg" className="w-full h-14 text-lg">
              Пожертвовать {amount ? `${amount} ₽` : ""}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
