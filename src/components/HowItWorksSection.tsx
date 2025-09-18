import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { useCTAs } from "@/hooks/use-ctas";

// Define the step type
type Step = {
  id: number;
  title: string;
  content: string;
  icon: string;
};

const HowItWorksSection = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const { openGooglePlay, openExternal } = useCTAs();

  const steps: Step[] = [
    {
      id: 1,
      title: 'ШАГ ПЕРВЫЙ',
      content: 'Найдите Сюрприз-пакеты в магазинах и ресторанах рядом с вами. Специальные предложения для студентов и семей в Ташкенте, скоро и других городах Узбекистана.',
      icon: '🔍'
    },
    {
      id: 2,
      title: 'ШАГ ВТОРОЙ',
      content: 'Выберите понравившийся сюрприз-пакет. Каждый пакет содержит продукты высокого качества по специальной цене. Выбирайте из множества вариантов от проверенных партнеров.',
      icon: '🛒'
    },
    {
      id: 3,
      title: 'ШАГ ТРЕТИЙ',
      content: 'Забронируйте и оплатите заказ в приложении. Получайте уведомления о статусе заказа и готовности к выдаче. Быстро, удобно и безопасно!',
      icon: '💳'
    },
    {
      id: 4,
      title: 'ШАГ ЧЕТВЕРТЫЙ',
      content: 'Получите свой заказ в выбранном месте в указанное время. Наслаждайтесь вкусной едой по выгодной цене и помогайте бороться с пищевыми отходами!',
      icon: '🎁'
    }
  ];

  const nextStep = () => {
    setCurrentStep((prev) => (prev < steps.length - 1 ? prev + 1 : prev));
  };

  const prevStep = () => {
    setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));
  };

  const goToStep = (stepIndex: number) => {
    setCurrentStep(stepIndex);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextStep();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevStep();
    }
  };

  return (
    <section id="how-it-works" className="w-full bg-primary text-white py-16 px-4" onKeyDown={handleKeyDown}>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <h3 className="text-lg font-semibold text-white/80 mb-4">
            КАК ИСПОЛЬЗОВАТЬ ПРИЛОЖЕНИЕ
          </h3>
          <div aria-live="polite" role="status">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: 'rgb(252, 247, 98)' }}>
              {steps[currentStep].title}
            </h2>
            <p className="text-lg text-white/90 mb-8">
              {steps[currentStep].content}
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-white/10 p-2 ${currentStep === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={prevStep}
              disabled={currentStep === 0}
              aria-label="Предыдущий шаг"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            
            <div className="flex space-x-2" role="tablist" aria-label="Шаги">
              {steps.map((_, index) => (
                <button 
                  key={index}
                  type="button"
                  onClick={() => goToStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${index === currentStep ? 'bg-white scale-125' : 'bg-white/50'}`}
                  aria-label={`Перейти к шагу ${index + 1}`}
                  aria-pressed={index === currentStep}
                  aria-current={index === currentStep ? 'step' : undefined}
                  role="tab"
                  tabIndex={index === currentStep ? 0 : -1}
                />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              className={`text-white hover:bg-white/10 p-2 ${currentStep === steps.length - 1 ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={nextStep}
              disabled={currentStep === steps.length - 1}
              aria-label="Следующий шаг"
            >
              <ArrowRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Right Content - Step Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 h-96 flex flex-col items-center justify-center text-center">
          <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mb-6">
            <span className="text-4xl">{steps[currentStep].icon}</span>
          </div>
          <h3 className="text-2xl font-bold mb-4">{steps[currentStep].title}</h3>
          <p className="text-white/90">{steps[currentStep].content}</p>
          
          <div className="mt-8 flex space-x-4">
            <Button 
              className="px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-white/90 transition-colors"
              onClick={openGooglePlay}
            >
              Скачать приложение
            </Button>
            <Button 
              variant="ghost"
              className="px-6 py-3 border border-white text-white font-semibold rounded-lg bg-transparent hover:bg-white/10 transition-colors"
              onClick={() => openExternal('https://example.com/learn-more')}
            >
              Узнать больше
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

// ArrowLeft component
const ArrowLeft = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

// ArrowRight component
const ArrowRight = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

export default HowItWorksSection;