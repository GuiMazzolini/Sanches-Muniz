import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import type { FormData, FormErrors } from '../types/services';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Mensagem é obrigatória';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLButtonElement>): Promise<void> => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://formspree.io/f/mldwnlnp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
      } else {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Erro ao enviar formulário');
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('Erro ao enviar formulário. Verifique sua conexão e tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = (): void => {
    setSubmitted(false);
    setErrors({});
    setError('');
  };

  if (submitted) {
    return (
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
            <div className="border border-green-700 rounded-lg p-6">
              <div className="text-green-400 text-5xl mb-4">✓</div>
              <h2 className="text-2xl mb-4 heading-primary" >
                Mensagem Enviada com Sucesso!
              </h2>
              <p className="body-text mb-6">
                Obrigado pelo seu contato. Nossa equipe entrará em contato em breve para discutir suas necessidades jurídicas.
              </p>
              <button
                onClick={resetForm}
                className="btn-gold"
              >
                Enviar Nova Mensagem
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
          <h2 className="text-2xl heading-primary mb-6">
            Como entrar em contato:
          </h2>
          
          <div className="mb-8 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center">
                <span className="mr-3 text-xl">📋</span>
                <span className="body-text">
                  <strong>Formulário:</strong> Preencha abaixo para contato formal
                </span>
              </div>
              <div className="flex items-center">
                <span className="mr-3 text-xl">💬</span>
                <span className="body-text">
                  <strong>WhatsApp:</strong> Clique no botão a direita para contato
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block subtitle mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 border rounded-lg body-text placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                    errors.name 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-slate-600 focus:border-[#BF8F26] focus:ring-[#BF8F26]'
                  }`}
                  placeholder="Seu nome completo"
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div>
                <label htmlFor="email" className="block subtitle mb-2" >
                  E-mail *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-slate-700 border rounded-lg body-text placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors ${
                    errors.email 
                      ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                      : 'border-slate-600 focus:border-[#BF8F26] focus:ring-[#BF8F26]'
                  }`}
                  placeholder="seu@email.com"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1" style={{fontFamily: 'Montserrat, sans-serif'}}>
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block subtitle font-medium mb-2">
                  Telefone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg body-text placeholder-gray-400 focus:outline-none focus:border-[#BF8F26] focus:ring-1 focus:ring-[#BF8F26] transition-colors"
                  placeholder="(11) 99999-9999"
                />
              </div>
            </div>

            {/* Mensagem */}
            <div>
              <label htmlFor="message" className="block subtitle font-medium mb-2">
                Mensagem *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`w-full px-4 py-3 bg-slate-700 border rounded-lg body-text placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors resize-vertical ${
                  errors.message 
                    ? 'border-red-500 focus:border-red-500 focus:ring-red-500' 
                    : 'border-slate-600 focus:border-[#BF8F26] focus:ring-[#BF8F26]'
                }`}
                placeholder="Descreva sua necessidade jurídica ou dúvida..."
              />
              {errors.message && (
                <p className="text-red-400 text-sm mt-1" style={{fontFamily: 'Montserrat, sans-serif'}}>
                  {errors.message}
                </p>
              )}
            </div>

            {error && (
              <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-lg" style={{fontFamily: 'Montserrat, sans-serif'}}>
                <strong>Erro:</strong> {error}
              </div>
            )}

            <div className="bg-slate-700 border border-slate-600 rounded-lg p-4">
              <p className="body-text text-sm flex items-start">
                <span className="text-[#BF8F26] mr-2 text-base">🔒</span>
                <span>
                  <strong className="text-[#D4AC45]">Confidencialidade garantida:</strong> Todas as informações compartilhadas 
                  são tratadas com absoluto sigilo e protegidas pelo segredo profissional, conforme o 
                  Código de Ética da OAB.
                </span>
              </p>
            </div>

            <div className="text-center">
              <button
                type="button"
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="btn-gold"
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2"></div>
                    Enviando...
                  </div>
                ) : (
                  'Enviar Mensagem'
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;