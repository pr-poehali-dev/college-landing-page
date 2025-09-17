import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="GraduationCap" size={32} className="text-primary" />
              <span className="font-montserrat font-bold text-2xl text-gray-900">ККУТТ</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="font-open-sans text-gray-700 hover:text-primary transition-colors">Главная</a>
              <a href="#about" className="font-open-sans text-gray-700 hover:text-primary transition-colors">О колледже</a>
              <a href="#programs" className="font-open-sans text-gray-700 hover:text-primary transition-colors">Специальности</a>
              <a href="#contact" className="font-open-sans text-gray-700 hover:text-primary transition-colors">Контакты</a>
            </div>
            <Button className="bg-primary hover:bg-blue-600 text-white font-open-sans">
              Поступить
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-20 lg:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="font-montserrat text-5xl lg:text-7xl font-bold text-gray-900 mb-6">
              Колледж
              <span className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Коммунального
              </span>
              <span className="block text-4xl lg:text-5xl mt-2">Управления и Транспорта</span>
            </h1>
            <p className="font-open-sans text-xl lg:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Твоё будущее начинается здесь! Современное образование, перспективные специальности и поддержка на каждом шаге обучения.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-blue-600 text-white font-open-sans px-8 py-4 text-lg animate-scale-in">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Подать документы
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white font-open-sans px-8 py-4 text-lg animate-scale-in">
                <Icon name="Play" size={20} className="mr-2" />
                Виртуальная экскурсия
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              О нашем колледже
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              ККУТТ — ведущее учебное заведение, готовящее специалистов для городского хозяйства и транспорта
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Award" size={24} className="text-primary" />
                </div>
                <CardTitle className="font-montserrat text-xl">Качественное образование</CardTitle>
                <CardDescription className="font-open-sans">
                  Современные образовательные программы, соответствующие требованиям рынка труда
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <CardTitle className="font-montserrat text-xl">Опытные преподаватели</CardTitle>
                <CardDescription className="font-open-sans">
                  Команда профессионалов с многолетним опытом работы в отрасли
                </CardDescription>
              </CardHeader>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow animate-fade-in">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                  <Icon name="Briefcase" size={24} className="text-accent" />
                </div>
                <CardTitle className="font-montserrat text-xl">Трудоустройство</CardTitle>
                <CardDescription className="font-open-sans">
                  95% выпускников трудоустраиваются в первый год после окончания
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Специальности
            </h2>
            <p className="font-open-sans text-xl text-gray-600 max-w-3xl mx-auto">
              Выбери направление, которое станет основой твоей успешной карьеры
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Bus" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Техническое обслуживание и ремонт автомобильного транспорта</CardTitle>
                <CardDescription className="font-open-sans text-base">
                  Изучи современные технологии диагностики и ремонта автомобилей, получи востребованную профессию автомеханика
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-open-sans">3 года</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-open-sans">Очная форма</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-open-sans">Практика</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-green-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Building2" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Строительство и эксплуатация зданий и сооружений</CardTitle>
                <CardDescription className="font-open-sans text-base">
                  Освой профессию строителя, изучи современные технологии возведения и обслуживания зданий
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-open-sans">3 года</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-open-sans">Очная форма</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-open-sans">Стажировка</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-secondary group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-orange-600 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Zap" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Монтаж и техническая эксплуатация промышленного оборудования</CardTitle>
                <CardDescription className="font-open-sans text-base">
                  Стань специалистом по обслуживанию современного промышленного оборудования
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-open-sans">4 года</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-open-sans">Очная форма</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-open-sans">Лаборатории</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
            
            <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-xl flex items-center justify-center mb-4">
                  <Icon name="Calculator" size={32} className="text-white" />
                </div>
                <CardTitle className="font-montserrat text-2xl">Экономика и бухгалтерский учёт</CardTitle>
                <CardDescription className="font-open-sans text-base">
                  Изучи основы экономики и финансов, стань востребованным специалистом в сфере учёта
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-open-sans">3 года</span>
                  <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-open-sans">Очная/Заочная</span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-open-sans">Сертификация</span>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-purple-500 group-hover:text-white transition-colors">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="font-montserrat text-4xl lg:text-5xl font-bold text-white mb-8">
              Готов начать обучение?
            </h2>
            <p className="font-open-sans text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              Приходи к нам на день открытых дверей или подавай документы онлайн
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-open-sans px-8 py-4 text-lg">
                <Icon name="Calendar" size={20} className="mr-2" />
                День открытых дверей
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-open-sans px-8 py-4 text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="GraduationCap" size={32} className="text-primary" />
                <span className="font-montserrat font-bold text-2xl">ККУТТ</span>
              </div>
              <p className="font-open-sans text-gray-400">
                Колледж коммунального управления и транспорта — ваш путь к успешной карьере
              </p>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">Контакты</h3>
              <div className="space-y-2 font-open-sans text-gray-400">
                <p className="flex items-center"><Icon name="MapPin" size={16} className="mr-2" /> г. Москва, ул. Примерная, 123</p>
                <p className="flex items-center"><Icon name="Phone" size={16} className="mr-2" /> +7 (495) 123-45-67</p>
                <p className="flex items-center"><Icon name="Mail" size={16} className="mr-2" /> info@kkutt.ru</p>
              </div>
            </div>
            <div>
              <h3 className="font-montserrat font-semibold text-lg mb-4">Соцсети</h3>
              <div className="flex space-x-4">
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                  <Icon name="MessageCircle" size={16} />
                </Button>
                <Button size="sm" variant="outline" className="border-gray-600 text-gray-400 hover:bg-primary hover:border-primary hover:text-white">
                  <Icon name="Youtube" size={16} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center">
            <p className="font-open-sans text-gray-400">© 2024 ККУТТ. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;