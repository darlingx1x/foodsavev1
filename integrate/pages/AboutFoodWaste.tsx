import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import heroImage from '@/assets/food-waste-hero.jpg';
import uzbekistanStats from '@/assets/uzbekistan-stats.jpg';
import businessImpact from '@/assets/business-impact.jpg';

const AboutFoodWaste = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    investmentAmount: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время для обсуждения инвестиционных возможностей.",
    });
    setIsModalOpen(false);
    setFormData({
      name: '',
      email: '',
      company: '',
      phone: '',
      investmentAmount: '',
      message: ''
    });
  };

  const scrollToSolution = () => {
    const solutionSection = document.getElementById('solution-section');
    if (solutionSection) {
      solutionSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const styles = {
    foodsaveGradient: {
      background: 'linear-gradient(135deg, hsl(179 100% 19%), hsl(179 100% 16%))'
    },
    foodsaveGradientLight: {
      background: 'linear-gradient(135deg, hsl(179 100% 16%), hsl(179 80% 25%))'
    },
    statCard: {
      background: 'linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255,255,255,0.1)'
    },
    impactNumber: {
      background: 'linear-gradient(135deg, hsl(45 85% 55%), hsl(120 70% 45%))',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        .slide-in-left {
          animation: slideInLeft 1s ease-out forwards;
          opacity: 0;
          transform: translateX(-50px);
        }
        .slide-in-right {
          animation: slideInRight 1s ease-out forwards;
          opacity: 0;
          transform: translateX(50px);
        }
        @keyframes slideInLeft {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        @keyframes slideInRight {
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px hsl(179 100% 19% / 0.3); }
          50% { box-shadow: 0 0 40px hsl(179 100% 16% / 0.5); }
        }
      `}</style>

      {/* Hero Section */}
      <section style={styles.foodsaveGradient} className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${heroImage})` }}
        ></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
          <div className="slide-in-left">
            <p className="text-lg font-medium mb-4 text-yellow-300">ФАКТЫ О ПИЩЕВЫХ ОТХОДАХ</p>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              О ПИЩЕВЫХ<br />
              <span className="impact-number">ОТХОДАХ</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed mb-12">
              Пищевые отходы — это глобальный вызов. Понимание масштабов и воздействия помогает нам 
              сделать реальную разницу к лучшему. Давайте погрузимся в факты и статистику.
            </p>
          </div>
          
          <div className="slide-in-right grid md:grid-cols-3 gap-8 mt-16">
            <div style={styles.statCard} className="rounded-2xl p-8 pulse-glow">
              <div style={styles.impactNumber} className="text-4xl font-bold mb-2">40%</div>
              <p className="text-lg">продуктов выбрасывается глобально</p>
            </div>
            <div style={styles.statCard} className="rounded-2xl p-8 pulse-glow">
              <div style={styles.impactNumber} className="text-4xl font-bold mb-2">2.5млрд</div>
              <p className="text-lg">тонн еды тратится ежегодно</p>
            </div>
            <div style={styles.statCard} className="rounded-2xl p-8 pulse-glow">
              <div style={styles.impactNumber} className="text-4xl font-bold mb-2">80,000кг</div>
              <p className="text-lg">выбрасывается каждую секунду</p>
            </div>
          </div>
        </div>
      </section>

      {/* Global Food Waste Stats */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Сколько еды тратится в мире?
              </h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                По данным WWF (2021), <strong className="text-teal-700">40% продуктов</strong>, которые мы производим 
                глобально, идет в отходы. Это означает, что <strong className="text-teal-700">2,5 миллиарда тонн</strong> 
                еды тратится каждый год.
              </p>
              
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-teal-600">
                  <h3 className="font-bold text-teal-800 mb-2">Овощи - 25%</h3>
                  <p className="text-gray-600">Наиболее выбрасываемая категория продуктов</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-600">
                  <h3 className="font-bold text-green-800 mb-2">Зерновые - 24%</h3>
                  <p className="text-gray-600">Вторая по объему потерь категория</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-yellow-600">
                  <h3 className="font-bold text-yellow-800 mb-2">Фрукты - 12%</h3>
                  <p className="text-gray-600">Третья категория по объему отходов</p>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right floating-animation">
              <img 
                src={heroImage} 
                alt="Food waste statistics visualization" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Uzbekistan Market Opportunity */}
      <section style={styles.foodsaveGradient} className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Узбекистан: <span className="text-yellow-300">Неосвоенный рынок</span>
            </h2>
            <p className="text-xl max-w-3xl mx-auto">
              Мы первые, кто интегрирует технологию борьбы с пищевыми отходами в Узбекистане. 
              Огромная возможность для инвесторов.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <img 
                src={uzbekistanStats} 
                alt="Uzbekistan food waste statistics" 
                className="rounded-2xl shadow-2xl w-full"
              />
            </div>
            
            <div className="slide-in-right space-y-8">
              <div style={styles.statCard} className="rounded-2xl p-8">
                <div style={styles.impactNumber} className="text-5xl font-bold mb-4">35 млн</div>
                <h3 className="text-2xl font-bold mb-2">Население Узбекистана</h3>
                <p className="text-lg opacity-90">Огромный потенциальный рынок для нашего приложения</p>
              </div>
              
              <div style={styles.statCard} className="rounded-2xl p-8">
                <div style={styles.impactNumber} className="text-5xl font-bold mb-4">0</div>
                <h3 className="text-2xl font-bold mb-2">Конкурентов</h3>
                <p className="text-lg opacity-90">Мы первые на рынке Узбекистана с этой технологией</p>
              </div>
              
              <div style={styles.statCard} className="rounded-2xl p-8">
                <div style={styles.impactNumber} className="text-5xl font-bold mb-4">$2.1B</div>
                <h3 className="text-2xl font-bold mb-2">Потенциальный рынок</h3>
                <p className="text-lg opacity-90">Оценочная стоимость рынка пищевых отходов в регионе</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Impact */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Экологическое воздействие
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Пищевые отходы не только экономическая проблема, но и один из крупнейших 
              источников выбросов парниковых газов.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-2xl text-center border border-red-200">
              <div className="text-4xl font-bold text-red-600 mb-4">8-10%</div>
              <h3 className="font-bold text-red-800 mb-2">Парниковых газов</h3>
              <p className="text-red-700">от пищевых отходов глобально</p>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-2xl text-center border border-blue-200">
              <div className="text-4xl font-bold text-blue-600 mb-4">25%</div>
              <h3 className="font-bold text-blue-800 mb-2">Пресной воды</h3>
              <p className="text-blue-700">тратится на выброшенную еду</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-2xl text-center border border-green-200">
              <div className="text-4xl font-bold text-green-600 mb-4">28%</div>
              <h3 className="font-bold text-green-800 mb-2">Сельхозземель</h3>
              <p className="text-green-700">используется для выброшенной еды</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-2xl text-center border border-purple-200">
              <div className="text-4xl font-bold text-purple-600 mb-4">$1трлн</div>
              <h3 className="font-bold text-purple-800 mb-2">Экономический ущерб</h3>
              <p className="text-purple-700">от пищевых отходов ежегодно</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Impact & Investment Opportunity */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="slide-in-left">
              <h2 className="text-4xl font-bold mb-6">
                Инвестиционная возможность
              </h2>
              <p className="text-xl mb-8 opacity-90">
                FoodSave решает глобальную проблему пищевых отходов с помощью инновационной 
                технологии, создавая экономическую ценность для всех участников.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div style={styles.foodsaveGradientLight} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">1</div>
                  <div>
                    <h3 className="font-bold text-lg">Первопроходцы рынка</h3>
                    <p className="opacity-80">Нулевая конкуренция в Узбекистане</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div style={styles.foodsaveGradientLight} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">2</div>
                  <div>
                    <h3 className="font-bold text-lg">Масштабируемая модель</h3>
                    <p className="opacity-80">Готов к расширению в регионе</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div style={styles.foodsaveGradientLight} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">3</div>
                  <div>
                    <h3 className="font-bold text-lg">Социальное воздействие</h3>
                    <p className="opacity-80">Решение экологических проблем</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div style={styles.foodsaveGradientLight} className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg">4</div>
                  <div>
                    <h3 className="font-bold text-lg">Проверенная модель</h3>
                    <p className="opacity-80">Успех Too Good To Go в Европе</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="slide-in-right">
              <img 
                src={businessImpact} 
                alt="Business impact and investment opportunity" 
                className="rounded-2xl shadow-2xl w-full floating-animation"
              />
              
              <div className="mt-8 grid grid-cols-2 gap-6">
                <div style={styles.statCard} className="rounded-xl p-6 text-center">
                  <div style={styles.impactNumber} className="text-3xl font-bold mb-2">500%</div>
                  <p className="text-sm opacity-90">Потенциальный ROI</p>
                </div>
                <div style={styles.statCard} className="rounded-xl p-6 text-center">
                  <div style={styles.impactNumber} className="text-3xl font-bold mb-2">2M</div>
                  <p className="text-sm opacity-90">Пользователей в 5 лет</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution-section" style={styles.foodsaveGradientLight} className="py-20 text-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Наше решение</h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto opacity-90">
            FoodSave соединяет рестораны, кафе и магазины с потребителями, 
            помогая спасти качественную еду от выбрасывания.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div style={styles.statCard} className="rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-yellow-400 mx-auto mb-6 flex items-center justify-center text-2xl">🏪</div>
              <h3 className="text-xl font-bold mb-4">Для бизнеса</h3>
              <p className="opacity-90">Монетизация излишков, сокращение потерь, улучшение имиджа</p>
            </div>
            
            <div style={styles.statCard} className="rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-green-400 mx-auto mb-6 flex items-center justify-center text-2xl">👥</div>
              <h3 className="text-xl font-bold mb-4">Для потребителей</h3>
              <p className="opacity-90">Качественная еда по выгодным ценам, экологическая ответственность</p>
            </div>
            
            <div style={styles.statCard} className="rounded-2xl p-8">
              <div className="w-16 h-16 rounded-full bg-blue-400 mx-auto mb-6 flex items-center justify-center text-2xl">🌍</div>
              <h3 className="text-xl font-bold mb-4">Для планеты</h3>
              <p className="opacity-90">Сокращение CO2, экономия ресурсов, устойчивое развитие</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Присоединяйтесь к революции против пищевых отходов
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Инвестируйте в будущее устойчивого питания и получите доступ к неосвоенному рынку Узбекистана.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
              <DialogTrigger asChild>
                <button style={styles.foodsaveGradient} className="text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg pulse-glow">
                  Инвестировать сейчас
                </button>
              </DialogTrigger>
              <DialogContent className="max-w-md">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">Инвестиционная заявка</DialogTitle>
                  <DialogDescription className="text-center">
                    Заполните форму, и мы свяжемся с вами для обсуждения инвестиционных возможностей
                  </DialogDescription>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Имя и фамилия *</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Введите ваше имя"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Email *</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Компания</label>
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Название компании"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Телефон</label>
                    <Input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+998 XX XXX XX XX"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Планируемая сумма инвестиций</label>
                    <Input
                      name="investmentAmount"
                      value={formData.investmentAmount}
                      onChange={handleInputChange}
                      placeholder="$100,000"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label className="text-sm font-medium">Дополнительная информация</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Расскажите о ваших инвестиционных интересах..."
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      rows={3}
                    />
                  </div>
                  
                  <div className="flex gap-3 pt-4">
                    <Button type="submit" className="flex-1" style={styles.foodsaveGradient}>
                      Отправить заявку
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsModalOpen(false)}>
                      Отмена
                    </Button>
                  </div>
                </form>
              </DialogContent>
            </Dialog>
            
            <button 
              onClick={scrollToSolution}
              className="border-2 border-teal-600 text-teal-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-teal-600 hover:text-white transition-all duration-300"
            >
              Узнать больше
            </button>
          </div>
          
          <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">35M+</div>
              <p className="text-gray-600">Потенциальных пользователей</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">$100M+</div>
              <p className="text-gray-600">Размер рынка</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-teal-600 mb-2">0</div>
              <p className="text-gray-600">Прямых конкурентов</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutFoodWaste;