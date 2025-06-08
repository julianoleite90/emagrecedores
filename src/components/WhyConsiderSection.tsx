'use client';
import { useState, useRef } from 'react';
import ScrollLink from './ScrollLink';
import { trackQuizStep, trackQuizCompleted, trackQuizCTA } from '@/utils/analytics';

interface WhyConsiderSectionProps {
  onQuizComplete?: (completed: boolean) => void;
}

const WhyConsiderSection = ({ onQuizComplete }: WhyConsiderSectionProps) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({
    motivation: '',
    goal: '',
    challenge: '',
    timeframe: ''
  });

  // Refs for each question section
  const question2Ref = useRef<HTMLDivElement>(null);
  const question3Ref = useRef<HTMLDivElement>(null);
  const question4Ref = useRef<HTMLDivElement>(null);
  const resultRef = useRef<HTMLDivElement>(null);

  const questions = {
    1: {
      title: 'Você verdadeiramente deseja emagrecer e ter uma vida mais saudável e mais disposição?',
      subtitle: 'Seja sincera(o) isso é fundamental para conquistar os objetivos de emagrecimento.',
      options: [
        { id: 'sim', text: 'Sim' },
        { id: 'nao', text: 'Não' }
      ]
    },
    2: {
      title: 'Qual é seu maior objetivo para emagrecer?',
      options: [
        { id: 'cintura', text: 'Perder até 8 cm de cintura rapidamente' },
        { id: 'compulsao', text: 'Acabar com a compulsão por comida' },
        { id: 'queimar', text: 'Queimar gordura mais rápido' },
        { id: 'inchaco', text: 'Reduzir inchaço abdominal em 7 dias' },
        { id: 'peso', text: 'Perder 5 kg em 30 dias' }
      ]
    },
    3: {
      title: 'Qual é o seu maior desafio atual?',
      options: [
        { id: 'fome', text: 'Controlar a fome e compulsão' },
        { id: 'metabolismo', text: 'Acelerar o metabolismo lento' },
        { id: 'motivacao', text: 'Manter a motivação e disciplina' },
        { id: 'resultados', text: 'Ver resultados que durem' },
        { id: 'tempo', text: 'Falta de tempo para exercícios' }
      ]
    },
    4: {
      title: 'Em quanto tempo você quer ver resultados?',
      options: [
        { id: '7dias', text: 'Em 7 dias (resultados rápidos)' },
        { id: '15dias', text: 'Em 15 dias (resultados moderados)' },
        { id: '30dias', text: 'Em 30 dias (resultados consistentes)' },
        { id: '60dias', text: 'Em 60 dias (transformação completa)' }
      ]
    }
  };

  const handleAnswer = (questionKey: string, answerId: string) => {
    const newAnswers = { ...answers, [questionKey]: answerId };
    setAnswers(newAnswers);
    
    // Get the text for the selected answer
    const questionNum = currentStep;
    const selectedOption = questions[questionNum as keyof typeof questions].options.find(opt => opt.id === answerId);
    
    // Track quiz step completion
    trackQuizStep(questionNum, selectedOption?.text);
    
    if (currentStep < 4) {
      setTimeout(() => {
        setCurrentStep(currentStep + 1);
        // Scroll to next question after it appears
        setTimeout(() => {
          if (currentStep === 1 && question2Ref.current) {
            question2Ref.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest' 
            });
          } else if (currentStep === 2 && question3Ref.current) {
            question3Ref.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest' 
            });
          } else if (currentStep === 3 && question4Ref.current) {
            question4Ref.current.scrollIntoView({ 
              behavior: 'smooth', 
              block: 'start',
              inline: 'nearest' 
            });
          }
        }, 100); // Small delay to ensure the element is rendered
      }, 300);
    } else {
      // Quiz completed, track completion event
      trackQuizCompleted({
        motivation: newAnswers.motivation,
        goal: newAnswers.goal,
        challenge: newAnswers.challenge,
        timeframe: newAnswers.timeframe
      });
      
      // Notify parent component
      const completed = newAnswers.motivation && newAnswers.goal && newAnswers.challenge && newAnswers.timeframe;
      if (completed && onQuizComplete) {
        setTimeout(() => {
          onQuizComplete(true);
        }, 600); // Small delay to show the result first
      }
      
      // Scroll to result after answering the last question
      setTimeout(() => {
        if (resultRef.current) {
          resultRef.current.scrollIntoView({ 
            behavior: 'smooth', 
            block: 'start',
            inline: 'nearest' 
          });
        }
      }, 400);
    }
  };

  const handleQuizCTA = () => {
    trackQuizCTA();
  };

  const getPersonalizedResult = () => {
    const { goal } = answers;
    
    // Base recommendations based on answers
    const recommendations = {
      cintura: {
        description: 'Uma fórmula com fibras inteligentes que bloqueia até 72% da absorção de gorduras dos alimentos, combinada com aceleradores metabólicos, pode te ajudar a reduzir até 8cm na cintura.',
        formula: 'Fórmula de fibras inteligentes com ação termogênica'
      },
      compulsao: {
        description: 'Fórmulas especializadas em controle do apetite, com compostos naturais que reduzem a fome em até 82%, eliminando a compulsão alimentar.',
        formula: 'Fórmula supressora natural do apetite'
      },
      queimar: {
        description: 'Uma combinação de aceleradores metabólicos que atuam 24 horas por dia, aumentando a queima de gordura em até 30%, mesmo durante o sono.',
        formula: 'Fórmula termogênica 24h'
      },
      inchaco: {
        description: 'Fórmulas detox especializadas em eliminar retenção de líquidos e toxinas, com 80% dos usuários relatando redução significativa do inchaço abdominal.',
        formula: 'Fórmula detox anti-inchaço'
      },
      peso: {
        description: 'Tecnologia de absorção rápida que potencializa a queima de gordura e acelera o metabolismo, com 78% dos usuários relatando perda de peso significativa.',
        formula: 'Fórmula de absorção rápida'
      }
    };

    return recommendations[goal as keyof typeof recommendations] || recommendations.peso;
  };

  const isQuizComplete = currentStep === 4 && answers.motivation && answers.goal && answers.challenge && answers.timeframe;

  return (
    <section id="quiz" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Qual Emagrecedor Vai Te Ajudar a <span className="text-green-600">Perder Peso?</span>
          </h2>
          <p className="text-lg text-gray-600">
            Responda 4 perguntas em 1 minuto e encontre o emagrecedor ideal para alcançar seus objetivos de perda de peso!
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-gray-500">Progresso</span>
              <span className="text-sm text-gray-500">{Math.min(currentStep, 4)}/4</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-green-600 h-2 rounded-full transition-all duration-500"
                style={{ width: `${(Math.min(currentStep, 4) / 4) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Question 1 - Motivation */}
          {currentStep >= 1 && (
            <div className={`mb-8 ${currentStep > 1 ? 'opacity-50' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                1. {questions[1].title}
              </h3>
              <p className="text-gray-600 mb-6 italic">
                {questions[1].subtitle}
              </p>
              <div className="grid gap-3">
                {questions[1].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer('motivation', option.id)}
                    disabled={currentStep > 1}
                    className={`p-4 text-left border-2 rounded-lg transition-all duration-300 ${
                      answers.motivation === option.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    } ${currentStep > 1 ? 'cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        answers.motivation === option.id
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {answers.motivation === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 2 - Goal */}
          {currentStep >= 2 && (
            <div ref={question2Ref} className={`mb-8 ${currentStep > 2 ? 'opacity-50' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                2. {questions[2].title}
              </h3>
              <div className="grid gap-3">
                {questions[2].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer('goal', option.id)}
                    disabled={currentStep > 2}
                    className={`p-4 text-left border-2 rounded-lg transition-all duration-300 ${
                      answers.goal === option.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    } ${currentStep > 2 ? 'cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        answers.goal === option.id
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {answers.goal === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 3 - Challenge */}
          {currentStep >= 3 && (
            <div ref={question3Ref} className={`mb-8 ${currentStep > 3 ? 'opacity-50' : ''}`}>
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                3. {questions[3].title}
              </h3>
              <div className="grid gap-3">
                {questions[3].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer('challenge', option.id)}
                    disabled={currentStep > 3}
                    className={`p-4 text-left border-2 rounded-lg transition-all duration-300 ${
                      answers.challenge === option.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    } ${currentStep > 3 ? 'cursor-not-allowed' : 'hover:shadow-md'}`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        answers.challenge === option.id
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {answers.challenge === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Question 4 - Timeframe */}
          {currentStep >= 4 && (
            <div ref={question4Ref} className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">
                4. {questions[4].title}
              </h3>
              <div className="grid gap-3">
                {questions[4].options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleAnswer('timeframe', option.id)}
                    className={`p-4 text-left border-2 rounded-lg transition-all duration-300 ${
                      answers.timeframe === option.id
                        ? 'border-green-500 bg-green-50'
                        : 'border-gray-200 hover:border-green-300'
                    } hover:shadow-md`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                        answers.timeframe === option.id
                          ? 'border-green-500 bg-green-500'
                          : 'border-gray-300'
                      }`}>
                        {answers.timeframe === option.id && (
                          <div className="w-2 h-2 bg-white rounded-full m-auto mt-1"></div>
                        )}
                      </div>
                      <span className="text-gray-700 font-medium">{option.text}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Result - Only show when quiz is complete */}
          {isQuizComplete && (
            <div ref={resultRef} className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6 animate-fadeIn">
              <div className="flex items-start space-x-3">
                <div className="text-green-600 text-2xl">✓</div>
                <div>
                  <h4 className="font-semibold text-green-800 mb-2">
                    Perfeito! Baseado nas suas respostas, aqui está sua recomendação:
                  </h4>
                  <p className="text-green-700 mb-3">
                    {getPersonalizedResult().description}
                  </p>
                  <p className="text-sm text-green-600 font-medium">
                    Tipo de fórmula ideal: {getPersonalizedResult().formula}
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* CTA Button - Only show when quiz is complete */}
          {isQuizComplete && (
            <div className="text-center">
              <ScrollLink 
                targetId="ranking"
                className="inline-flex bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-300 items-center space-x-2"
                onClick={handleQuizCTA}
              >
                <span>Ver Ranking Completo dos Melhores Emagrecedores</span>
                <span>↓</span>
              </ScrollLink>
              <p className="text-sm text-gray-500 mt-3">
                Descubra todos os detalhes e escolha o melhor para você
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyConsiderSection; 