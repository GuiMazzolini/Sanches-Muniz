import { useState } from 'react';
import { Link } from 'react-router-dom';
import type { ChangeEvent, FormEvent } from 'react';
import PageMeta from '../components/PageMeta';
import { pageSeo } from '../config/seo';
import { contactFaq } from '../data/faq';
import { services } from '../data/services';
import type { FormData, FormErrors } from '../types/services';

const initialFormData: FormData = {
  name: '',
  email: '',
  phone: '',
  legalArea: '',
  message: '',
  acceptedPrivacy: false,
};

const inputClass = (hasError: boolean) =>
  `w-full px-4 py-3 bg-slate-700 border rounded-lg body-text placeholder-gray-400 focus:outline-none focus:ring-1 transition-colors input-field ${
    hasError
      ? 'border-red-500 focus:border-red-500 focus:ring-red-500'
      : 'border-slate-600 focus:border-[#BF8F26] focus:ring-[#BF8F26]'
  }`;

const Contato: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
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

    if (!formData.acceptedPrivacy) {
      newErrors.acceptedPrivacy = 'É necessário aceitar a Política de Privacidade';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    const { name, value, type } = e.target;
    const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
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
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          legalArea: formData.legalArea || 'Não informada',
          message: formData.message,
          _replyto: formData.email,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData(initialFormData);
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
      <>
        <PageMeta
          title={pageSeo.contact.title}
          description={pageSeo.contact.description}
          path={pageSeo.contact.path}
        />
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26]">
              <div className="border border-green-700 rounded-lg p-6">
                <div className="text-green-400 text-5xl mb-4" aria-hidden="true">
                  ✓
                </div>
                <h1 className="text-2xl mb-4 heading-primary">Mensagem enviada com sucesso!</h1>
                <p className="body-text mb-6">
                  Obrigado pelo seu contato. Nossa equipe entrará em contato em breve para discutir
                  suas necessidades jurídicas.
                </p>
                <button type="button" onClick={resetForm} className="btn-gold">
                  Enviar nova mensagem
                </button>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageMeta
        title={pageSeo.contact.title}
        description={pageSeo.contact.description}
        path={pageSeo.contact.path}
      />
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-3xl md:text-4xl heading-primary mb-4">Contato</h1>
            <p className="body-text max-w-2xl mx-auto">
              Utilize o formulário ou o WhatsApp. Resposta em horário comercial.
            </p>
          </div>

          <div className="bg-slate-800 rounded-lg p-8 border border-[#BF8F26] mb-12">
            <h2 className="text-xl heading-primary mb-6 text-center">Como entrar em contato</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm mb-8">
              <p className="body-text">
                <strong className="text-[#D4AC45]">Formulário:</strong> preencha abaixo para contato
                formal
              </p>
              <p className="body-text">
                <strong className="text-[#D4AC45]">WhatsApp:</strong> use o botão flutuante verde no
                canto da tela
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6 text-left" noValidate>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block subtitle mb-2">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass(!!errors.name)}
                    placeholder="Seu nome completo"
                    autoComplete="name"
                  />
                  {errors.name && <p className="field-error">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block subtitle mb-2">
                    E-mail *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass(!!errors.email)}
                    placeholder="seu@email.com"
                    autoComplete="email"
                  />
                  {errors.email && <p className="field-error">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block subtitle mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass(false)}
                    placeholder="(11) 99999-9999"
                    autoComplete="tel"
                  />
                </div>

                <div>
                  <label htmlFor="legalArea" className="block subtitle mb-2">
                    Área de interesse
                  </label>
                  <select
                    id="legalArea"
                    name="legalArea"
                    value={formData.legalArea}
                    onChange={handleChange}
                    className={inputClass(false)}
                  >
                    <option value="">Selecione (opcional)</option>
                    {services.map((service) => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                    <option value="Outro">Outro</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block subtitle mb-2">
                  Mensagem *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className={`${inputClass(!!errors.message)} resize-vertical`}
                  placeholder="Descreva sua necessidade jurídica ou dúvida..."
                />
                {errors.message && <p className="field-error">{errors.message}</p>}
              </div>

              {error && (
                <div className="bg-red-900 border border-red-700 text-red-300 px-4 py-3 rounded-lg input-field text-sm">
                  <strong>Erro:</strong> {error}
                </div>
              )}

              <div className="bg-slate-700 border border-slate-600 rounded-lg p-4 space-y-3">
                <p className="body-text text-sm">
                  <strong className="text-[#D4AC45]">Confidencialidade garantida:</strong> todas as
                  informações são tratadas com sigilo profissional, conforme o Código de Ética da OAB.
                </p>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="acceptedPrivacy"
                    checked={formData.acceptedPrivacy}
                    onChange={handleChange}
                    className="mt-1 accent-[#BF8F26]"
                  />
                  <span className="body-text text-sm">
                    Li e aceito a{' '}
                    <Link to="/privacidade" className="text-[#D4AC45] hover:text-[#F7DC7B] underline">
                      Política de Privacidade (LGPD)
                    </Link>
                    . *
                  </span>
                </label>
                {errors.acceptedPrivacy && (
                  <p className="field-error">{errors.acceptedPrivacy}</p>
                )}
              </div>

              <div className="text-center">
                <button type="submit" disabled={isSubmitting} className="btn-gold">
                  {isSubmitting ? (
                    <span className="flex items-center justify-center">
                      <span className="animate-spin rounded-full h-5 w-5 border-b-2 border-slate-900 mr-2" />
                      Enviando...
                    </span>
                  ) : (
                    'Enviar mensagem'
                  )}
                </button>
              </div>
            </form>
          </div>

          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl heading-primary text-center mb-8">Perguntas frequentes</h2>
            <div className="space-y-4">
              {contactFaq.map((item) => (
                <details
                  key={item.question}
                  className="bg-slate-800 rounded-lg border border-slate-700 group"
                >
                  <summary className="subtitle cursor-pointer px-6 py-4 list-none flex justify-between items-center">
                    {item.question}
                    <span className="text-[#BF8F26] group-open:rotate-180 transition-transform" aria-hidden="true">
                      ▼
                    </span>
                  </summary>
                  <p className="body-text text-sm px-6 pb-4">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
