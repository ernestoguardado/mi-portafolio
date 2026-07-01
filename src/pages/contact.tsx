import { useState } from 'react';
import Layout from '@/components/UI/Layout';
import PageHeader from '@/components/UI/PageHeader';
import SectionHeader from '@/components/UI/SectionHeader';
import BackToNavbarButton from '@/components/Section/BackToNavbarButton';
import Button from '@/components/UI/Button';
import { useLanguage } from '@/context/LanguageContext';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export default function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus('sent');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const inputClass =
    'w-full rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm text-gray-900 focus:border-gray-900 focus:outline-none focus:ring-1 focus:ring-gray-900 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:border-white dark:focus:ring-white';

  return (
    <Layout title="Contacto | Ernesto Guardado">
      <PageHeader left={<BackToNavbarButton />} />
      <div className="mx-auto w-full max-w-lg px-4 py-16">
        <SectionHeader
          title={t({ es: 'Contacto', en: 'Contact' })}
          subtitle={t({ es: '¿Tienes un proyecto en mente? Hablemos.', en: "Have a project in mind? Let's talk." })}
        />

        {status === 'sent' ? (
          <div className="rounded-xl border border-gray-200 p-6 text-center dark:border-gray-800">
            <p className="text-2xl mb-2">✓</p>
            <p className="font-medium text-gray-900 dark:text-white">
              {t({ es: '¡Mensaje enviado!', en: 'Message sent!' })}
            </p>
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              {t({ es: 'Te responderé lo antes posible.', en: "I'll get back to you as soon as possible." })}
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-4 text-sm text-gray-400 hover:text-gray-900 dark:hover:text-white underline"
            >
              {t({ es: 'Enviar otro mensaje', en: 'Send another message' })}
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t({ es: 'Nombre', en: 'Name' })}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t({ es: 'Correo electrónico', en: 'Email' })}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300">
                {t({ es: 'Mensaje', en: 'Message' })}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={form.message}
                onChange={handleChange}
                className={inputClass}
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-500">
                {t({ es: 'Error al enviar. Intenta de nuevo.', en: 'Failed to send. Please try again.' })}
              </p>
            )}

            <Button type="submit" disabled={status === 'sending'} className="w-full justify-center">
              {status === 'sending'
                ? t({ es: 'Enviando...', en: 'Sending...' })
                : t({ es: 'Enviar mensaje', en: 'Send message' })}
            </Button>
          </form>
        )}
      </div>
    </Layout>
  );
}
