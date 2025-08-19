import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Index = () => {
  const services = [
    {
      icon: "Scale",
      title: "Налоговые споры",
      description: "Защита интересов клиентов в налоговых органах и судах всех инстанций"
    },
    {
      icon: "FileText",
      title: "Таможенные споры",
      description: "Профессиональное сопровождение при разрешении таможенных конфликтов"
    },
    {
      icon: "Calculator",
      title: "Налоговое планирование",
      description: "Оптимизация налоговых обязательств в рамках действующего законодательства"
    },
    {
      icon: "Briefcase",
      title: "Консультирование бизнеса",
      description: "Комплексные юридические услуги для ведения предпринимательской деятельности"
    },
    {
      icon: "CheckCircle",
      title: "Налоговые проверки",
      description: "Сопровождение выездных и камеральных налоговых проверок"
    },
    {
      icon: "Shield",
      title: "Защита прав",
      description: "Представление интересов в административных и судебных процедурах"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Icon name="Scale" className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">TaxLegal Pro</span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-primary font-medium">Главная</a>
                <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Услуги</a>
                <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Контакты</a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero секция */}
      <section className="bg-gradient-to-br from-muted to-background py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Налоговые и Таможенные
              <span className="text-primary block">Консультации</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              Профессиональная защита ваших интересов в налоговых и таможенных спорах. 
              Опытные юристы с многолетней практикой в области налогового права.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-3 text-lg">
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
                Наши услуги
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Наши услуги</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Полный спектр юридических услуг в области налогового и таможенного права
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Преимущества */}
      <section className="bg-muted/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-foreground mb-6">
                Почему выбирают нас
              </h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Icon name="Award" className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Опытные специалисты</h3>
                    <p className="text-muted-foreground">
                      Более 10 лет успешной практики в налоговом и таможенном праве
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Target" className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">
                      Каждый случай рассматривается с учетом особенностей конкретной ситуации
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="h-6 w-6 text-primary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Оперативность</h3>
                    <p className="text-muted-foreground">
                      Быстрое реагирование на запросы и соблюдение всех процессуальных сроков
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-card rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-foreground mb-4">Бесплатная консультация</h3>
              <p className="text-muted-foreground mb-6">
                Получите профессиональную оценку вашей ситуации и рекомендации по дальнейшим действиям
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="h-5 w-5 text-primary mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-primary mr-3" />
                  <span>info@taxlegal.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-primary mr-3" />
                  <span>Москва, ул. Профсоюзная, 123</span>
                </div>
              </div>
              <Button className="w-full mt-6" size="lg">
                Записаться на консультацию
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Icon name="Scale" className="h-8 w-8 text-primary mr-2" />
              <span className="font-bold text-xl text-foreground">TaxLegal Pro</span>
            </div>
            <p className="text-muted-foreground">
              Профессиональные юридические услуги в области налогового и таможенного права
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 TaxLegal Pro. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;