import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

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

  const cases = [
    {
      title: "Налоговый спор на 15 млн рублей",
      description: "Успешно оспорили доначисление НДС в арбитражном суде",
      result: "Полная отмена доначислений",
      category: "НДС"
    },
    {
      title: "Таможенная процедура",
      description: "Восстановление нарушенных прав при таможенном оформлении грузов",
      result: "Возврат 8 млн рублей",
      category: "Таможня"
    },
    {
      title: "Налоговое планирование",
      description: "Оптимизация налоговой нагрузки крупного производственного предприятия",
      result: "Снижение на 30%",
      category: "Планирование"
    }
  ];

  const team = [
    {
      name: "Иванов Сергей Александрович",
      position: "Управляющий партнер",
      experience: "15 лет",
      specialization: "Налоговое право, арбитражные споры"
    },
    {
      name: "Петрова Анна Викторовна",
      position: "Старший юрист",
      experience: "12 лет",
      specialization: "Таможенное право, валютное законодательство"
    },
    {
      name: "Сидоров Михаил Петрович",
      position: "Юрист-консультант",
      experience: "8 лет",
      specialization: "Налоговое планирование, консультирование"
    }
  ];

  const news = [
    {
      title: "Изменения в налоговом законодательстве с 2024 года",
      date: "15 августа 2024",
      excerpt: "Обзор ключевых изменений, которые повлияют на бизнес в новом году..."
    },
    {
      title: "Новые требования к таможенному оформлению",
      date: "10 августа 2024",
      excerpt: "ФТС России ввела дополнительные требования к документообороту..."
    },
    {
      title: "Практика применения льгот по НДС",
      date: "5 августа 2024",
      excerpt: "Анализ судебной практики по спорным вопросам применения льгот..."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Навигация */}
      <nav className="border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <img src="https://www.logoai.com/logo/6463613" alt="Правда НТ" className="h-12 w-auto mr-3" />
              <div>
                <span className="font-bold text-2xl text-foreground">Правда НТ</span>
                <div className="text-xs text-muted-foreground">Налогово-таможенная практика</div>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <a href="#" className="text-secondary font-medium">Главная</a>
                <a href="#about" className="text-muted-foreground hover:text-secondary transition-colors">О нас</a>
                <a href="#services" className="text-muted-foreground hover:text-secondary transition-colors">Услуги</a>
                <a href="#cases" className="text-muted-foreground hover:text-secondary transition-colors">Кейсы</a>
                <a href="#news" className="text-muted-foreground hover:text-secondary transition-colors">Новости</a>
                <a href="#contact" className="text-muted-foreground hover:text-secondary transition-colors">Контакты</a>
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
              <span className="text-secondary block">Консультации</span>
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

      {/* О нас */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">О нас</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Юридическая компания "Правда НТ" специализируется на налоговом и таможенном праве с 2009 года. 
              Наша команда объединяет опытных юристов с глубокими знаниями в области налогового законодательства.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">15+</div>
              <div className="text-lg font-semibold mb-2">лет опыта</div>
              <p className="text-muted-foreground">Успешной практики в налоговом праве</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">500+</div>
              <div className="text-lg font-semibold mb-2">выигранных дел</div>
              <p className="text-muted-foreground">В арбитражных судах всех инстанций</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">2 млрд</div>
              <div className="text-lg font-semibold mb-2">рублей сэкономлено</div>
              <p className="text-muted-foreground">Для наших клиентов</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {team.map((member, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-secondary font-medium">{member.position}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Icon name="Clock" className="h-4 w-4 text-muted-foreground mr-2" />
                      <span className="text-sm">Опыт: {member.experience}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {member.specialization}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Услуги */}
      <section id="services" className="py-20 bg-muted/30">
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
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon name={service.icon} className="h-6 w-6 text-secondary" />
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

      {/* Кейсы */}
      <section id="cases" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Кейсы успешных дел</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Примеры наших побед в сложных налоговых и таможенных спорах
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {cases.map((caseItem, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{caseItem.category}</Badge>
                  </div>
                  <CardTitle className="text-xl">{caseItem.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {caseItem.description}
                  </CardDescription>
                  <div className="bg-secondary/10 rounded-lg p-4">
                    <div className="text-sm font-medium text-secondary mb-1">Результат:</div>
                    <div className="font-semibold">{caseItem.result}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Новости */}
      <section id="news" className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Новости и аналитика</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Актуальная информация о изменениях в налоговом и таможенном законодательстве
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {news.map((article, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" className="h-4 w-4 mr-2" />
                    {article.date}
                  </div>
                  <CardTitle className="text-xl leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base mb-4">
                    {article.excerpt}
                  </CardDescription>
                  <Button variant="outline" size="sm">
                    Читать далее
                    <Icon name="ArrowRight" className="h-4 w-4 ml-2" />
                  </Button>
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
                  <Icon name="Award" className="h-6 w-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Опытные специалисты</h3>
                    <p className="text-muted-foreground">
                      Более 10 лет успешной практики в налоговом и таможенном праве
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Target" className="h-6 w-6 text-secondary mt-1 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Индивидуальный подход</h3>
                    <p className="text-muted-foreground">
                      Каждый случай рассматривается с учетом особенностей конкретной ситуации
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="Clock" className="h-6 w-6 text-secondary mt-1 mr-4 flex-shrink-0" />
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
                  <Icon name="Phone" className="h-5 w-5 text-secondary mr-3" />
                  <span>+7 (495) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="h-5 w-5 text-secondary mr-3" />
                  <span>info@pravda-nt.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="h-5 w-5 text-secondary mr-3" />
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
              <img src="https://www.logoai.com/logo/6463613" alt="Правда НТ" className="h-10 w-auto mr-3" />
              <div className="text-center">
                <span className="font-bold text-xl text-foreground block">Правда НТ</span>
              </div>
            </div>
            <p className="text-muted-foreground">
              Профессиональные юридические услуги в области налогового и таможенного права
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              © 2024 Правда НТ. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;