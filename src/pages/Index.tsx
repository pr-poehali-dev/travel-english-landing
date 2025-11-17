import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });
  const [spotsLeft, setSpotsLeft] = useState(12);

  useEffect(() => {
    const interval = setInterval(() => {
      setSpotsLeft(prev => {
        if (prev > 3) {
          return Math.max(3, prev - 1);
        }
        return prev;
      });
    }, 180000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "" });
  };

  const scrollToForm = () => {
    document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section 
        className="relative h-screen flex items-center justify-center text-white overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://cdn.poehali.dev/projects/86bebf1c-37ed-4dc1-8766-22d889daeea7/files/a1e9726b-9481-4ac7-82cd-f81aeee8b6eb.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="container mx-auto px-4 text-center z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Английский для путешествий.<br />Результат за 30 дней!
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Преодолей языковой барьер и получай максимум от каждой поездки
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent/90 text-white text-lg px-8 py-6 rounded-full shadow-2xl transform hover:scale-105 transition-all"
            onClick={scrollToForm}
          >
            Начать обучение
            <Icon name="ArrowRight" className="ml-2" size={20} />
          </Button>
          <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full border border-white/20">
            <Icon name="Users" className="text-white" size={20} />
            <span className="text-lg font-semibold">Осталось всего <span className="text-accent">{spotsLeft} мест</span> в потоке</span>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
              Больше никаких стрессов
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Забудьте о напряжении в аэропорту, отеле или ресторане
            </p>
            <p className="text-xl text-gray-600">
              Вы сможете легко общаться с местными жителями и заводить новых друзей по всему миру
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Преимущества курса
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { icon: "Calendar", title: "Всего 20 минут в день", desc: "Гибкий график под вашу занятость" },
              { icon: "MessageCircle", title: "Практика с носителями", desc: "Разговорные клубы каждую неделю" },
              { icon: "Smartphone", title: "Мобильное приложение", desc: "Учитесь где угодно и когда угодно" },
              { icon: "Target", title: "Только важное", desc: "Лексика специально для путешествий" }
            ].map((item, idx) => (
              <Card key={idx} className="text-center hover:shadow-lg transition-all transform hover:scale-105">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={item.icon} className="text-primary" size={32} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Как проходит обучение
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { icon: "Video", title: "Видеоуроки", desc: "Короткие увлекательные уроки от профессиональных преподавателей" },
              { icon: "Users", title: "Разговорные клубы", desc: "Практикуйте язык с другими студентами и носителями" },
              { icon: "UserCheck", title: "Персональный куратор", desc: "Личный наставник поможет на каждом этапе" },
              { icon: "FileCheck", title: "Домашние задания", desc: "Закрепляйте материал на практике" }
            ].map((item, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="p-6 flex gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} className="text-accent" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Отзывы наших студентов
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { name: "Мария Петрова", text: "Через месяц уверенно общалась в Лондоне! Курс действительно работает", rating: 5 },
              { name: "Алексей Смирнов", text: "Отличная структура и поддержка преподавателей. Рекомендую всем", rating: 5 },
              { name: "Елена Волкова", text: "Мобильное приложение — просто спасение. Занималась даже в метро", rating: 5 }
            ].map((review, idx) => (
              <Card key={idx} className="hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <div className="flex gap-1 mb-4">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" className="text-yellow-400 fill-yellow-400" size={20} />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{review.text}"</p>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Выберите свой тариф
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              { 
                name: "Базовый", 
                price: "4 990₽", 
                features: ["Доступ к видеоурокам", "Домашние задания", "Чат поддержки"],
                popular: false
              },
              { 
                name: "Оптимальный", 
                price: "7 990₽", 
                features: ["Всё из Базового", "Разговорные клубы 2 раза в неделю", "Персональный куратор", "Мобильное приложение"],
                popular: true
              },
              { 
                name: "Премиум", 
                price: "12 990₽", 
                features: ["Всё из Оптимального", "Индивидуальные занятия", "Безлимитные разговорные клубы", "Сертификат по окончании"],
                popular: false
              }
            ].map((plan, idx) => (
              <Card key={idx} className={`relative hover:shadow-2xl transition-all ${plan.popular ? 'border-2 border-accent transform scale-105' : ''}`}>
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent">
                    Популярный
                  </Badge>
                )}
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                  <div className="text-4xl font-bold text-primary mb-6">{plan.price}</div>
                  <ul className="space-y-3 mb-8 text-left">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Icon name="Check" className="text-green-500 flex-shrink-0 mt-1" size={20} />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-accent hover:bg-accent/90' : ''}`}
                    onClick={scrollToForm}
                  >
                    Выбрать тариф
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-900">
            Часто задаваемые вопросы
          </h2>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {[
              { q: "Подойдёт ли курс для начинающих?", a: "Да! Курс рассчитан на любой уровень. Мы начинаем с базовых фраз и постепенно повышаем сложность." },
              { q: "Сколько времени нужно заниматься?", a: "Всего 20 минут в день достаточно для прогресса. Главное — регулярность!" },
              { q: "Что если я не успею за 30 дней?", a: "Доступ к материалам остаётся у вас на 60 дней, чтобы вы могли заниматься в комфортном темпе." },
              { q: "Выдаётся ли сертификат?", a: "Да, после успешного завершения курса вы получите именной сертификат." }
            ].map((item, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left text-lg font-semibold">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section id="form" className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Начните свое путешествие в мир без языковых барьеров!
            </h2>
            <p className="text-xl mb-10 opacity-90">
              Оставьте заявку и получите бесплатный пробный урок
            </p>
            <Card className="text-gray-900">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input 
                      placeholder="Ваше имя" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="email" 
                      placeholder="Email" 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input 
                      type="tel" 
                      placeholder="Телефон" 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-accent hover:bg-accent/90 text-white h-12 text-lg"
                  >
                    Записаться на курс
                    <Icon name="Send" className="ml-2" size={20} />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg mb-4">Английский для путешествий за 30 дней</p>
          <p className="text-gray-400">© 2024. Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;