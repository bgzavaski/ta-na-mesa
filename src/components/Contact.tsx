import { useState, type FormEvent } from 'react';

type SubmitState = 'idle' | 'sending' | 'success' | 'error';

interface ApiResponse {
  message?: string;
  error?: string;
}

async function readApiResponse(response: Response): Promise<ApiResponse> {
  const body = await response.text();

  if (!body) return {};

  try {
    return JSON.parse(body) as ApiResponse;
  } catch {
    return {};
  }
}

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitState('sending');
    setFeedback('Enviando sua mensagem...');

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, message }),
      });

      const data = await readApiResponse(response);

      if (!response.ok) {
        const serverMessage = data.error ?? `O servidor respondeu com o status ${response.status}.`;
        throw new Error(serverMessage);
      }

      setSubmitState('success');
      setFeedback(data.message ?? 'Mensagem enviada com sucesso!');
      setEmail('');
      setMessage('');
    } catch (error) {
      setSubmitState('error');
      setFeedback(error instanceof Error ? error.message : 'Não foi possível enviar a mensagem.');
    }
  }

  return (
    <section className="contact" id="contact">
      <div className="container contact__content">
        <header className="section-heading">
          <p className="contact__eyebrow">Envie sua dúvida</p>
          <h2>Entre em contato</h2> 
          <p>
            Entre em contato, estamos dispostos a tirar qualquer dúvida,<br className="desktop-only" />
            seja um orçamento ou alguma informação sobre nossos produtos.<br className="desktop-only" />
            Estamos à disposição para responder 😎
          </p>
        </header>

        <form className="contact__form" onSubmit={handleSubmit}>
          <div className="contact__field">
            <label htmlFor="contact-email">Seu melhor e-mail</label>
            <input
              id="contact-email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Seu melhor Email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={submitState === 'sending'}
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="contact-message">Motivo do contato</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="Motivo do contato. Ex: Gostei muito do produto X, poderia me enviar um orçamento?"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              disabled={submitState === 'sending'}
              rows={4}
              required
            />
          </div>

          <button className="contact__submit" type="submit" disabled={submitState === 'sending'}>
            {submitState === 'sending' ? 'Enviando...' : 'Enviar'}
          </button>

          {feedback && (
            <p className={`contact__feedback contact__feedback--${submitState}`} role="status" aria-live="polite">
              {feedback}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
