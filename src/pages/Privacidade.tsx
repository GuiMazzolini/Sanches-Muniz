import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import PageMeta from '../components/PageMeta';
import { pageSeo } from '../config/seo';
import { CONTACT, SITE_NAME } from '../config/site';

const LAST_UPDATED = '1 de junho de 2026';

const Section = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => (
  <section className="space-y-3">
    <h2 className="text-xl heading-secondary">{title}</h2>
    <div className="body-text text-sm leading-relaxed space-y-3">{children}</div>
  </section>
);

const Privacidade = () => {
  return (
    <>
      <PageMeta
        title={pageSeo.privacy.title}
        description={pageSeo.privacy.description}
        path={pageSeo.privacy.path}
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800">
        <section className="py-12 px-4">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <h1 className="text-3xl md:text-4xl heading-primary mb-4">
              Política de Privacidade e Proteção de Dados
            </h1>
            <p className="body-text text-sm">
              Em conformidade com a Lei nº 13.709/2018 (LGPD)
            </p>
            <p className="subtitle text-xs mt-2">Última atualização: {LAST_UPDATED}</p>
          </div>

          <div className="max-w-3xl mx-auto bg-slate-800 rounded-lg p-6 md:p-10 border border-[#BF8F26] space-y-8">
            <Section title="1. Quem somos">
              <p>
                O <strong>{SITE_NAME}</strong> (“Escritório”, “nós”) é o controlador dos dados
                pessoais tratados por meio deste site institucional, disponível em nosso domínio
                oficial.
              </p>
              <p>
                Responsáveis: <strong>Dra. Leticia C. Muniz</strong> (OAB/SP 409.866) e{' '}
                <strong>Dra. Camilla Sanches</strong> (OAB/SP 503.228), com atuação em{' '}
                {CONTACT.region}.
              </p>
              <p>
                Canal de privacidade:{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-[#D4AC45] hover:text-[#F7DC7B]">
                  {CONTACT.email}
                </a>{' '}
                | Telefone:{' '}
                <a href={`tel:${CONTACT.phoneTel}`} className="text-[#D4AC45] hover:text-[#F7DC7B]">
                  {CONTACT.phone}
                </a>
              </p>
            </Section>

            <Section title="2. Quais dados coletamos">
              <p>Podemos tratar os seguintes dados pessoais, conforme o canal utilizado:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Formulário de contato:</strong> nome, e-mail, telefone (opcional) e
                  mensagem.
                </li>
                <li>
                  <strong>WhatsApp:</strong> número de telefone, nome de perfil e conteúdo das
                  mensagens enviadas por você.
                </li>
                <li>
                  <strong>Navegação no site:</strong> dados técnicos (endereço IP, navegador,
                  páginas visitadas, cliques, rolagem e interações), quando você aceitar cookies
                  analíticos.
                </li>
              </ul>
              <p>
                Não solicitamos dados sensíveis por este site. Caso você os informe voluntariamente
                em sua mensagem, eles serão tratados apenas na medida necessária para analisar seu
                contato e, se for o caso, para a prestação de serviços advocatícios.
              </p>
            </Section>

            <Section title="3. Para que usamos seus dados">
              <p>Utilizamos os dados pessoais para as finalidades abaixo:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Responder solicitações de contato e agendamento de consultas;</li>
                <li>Prestar assessoria e serviços jurídicos, quando houver relação contratual;</li>
                <li>Cumprir obrigações legais e regulatórias aplicáveis à advocacia;</li>
                <li>Garantir a segurança e o funcionamento técnico do site;</li>
                <li>Melhorar a experiência de navegação com cookies analíticos (após consentimento);</li>
                <li>
                  Analisar o uso do site (mapas de calor, gravações de sessão anonimizadas) para
                  aprimorar conteúdo e layout.
                </li>
              </ul>
            </Section>

            <Section title="4. Bases legais (LGPD)">
              <p>O tratamento fundamenta-se, conforme o caso, em:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Consentimento</strong> — ao enviar o formulário ou iniciar contato pelo
                  WhatsApp;
                </li>
                <li>
                  <strong>Execução de contrato ou procedimentos preliminares</strong> — quando o
                  contato evoluir para relação de prestação de serviços;
                </li>
                <li>
                  <strong>Legítimo interesse</strong> — para segurança do site e comunicação
                  institucional, respeitados seus direitos;
                </li>
                <li>
                  <strong>Cumprimento de obrigação legal ou regulatória</strong> — inclusive normas
                  da OAB e do ordenamento jurídico.
                </li>
              </ul>
            </Section>

            <Section title="5. Compartilhamento de dados">
              <p>
                Não vendemos seus dados. Podemos compartilhá-los apenas com operadores necessários
                à operação do site e do atendimento, tais como:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Formspree</strong> (processamento do formulário de contato), nos EUA —
                  com medidas contratuais de proteção de dados;
                </li>
                <li>
                  <strong>Meta / WhatsApp</strong> — quando você optar por esse canal de contato;
                </li>
                <li>
                  <strong>Provedores de hospedagem e infraestrutura</strong> do site;
                </li>
                <li>
                  <strong>Microsoft Clarity</strong> — ferramenta de análise de comportamento
                  (mapas de calor, rolagem e gravações de sessão), nos EUA, quando você aceitar
                  cookies analíticos;
                </li>
                <li>
                  <strong>Plausible Analytics</strong> — estatísticas agregadas de visitas, na UE,
                  quando configurado e aceito.
                </li>
              </ul>
              <p>
                Também poderemos compartilhar dados com autoridades públicas quando houver
                determinação legal ou ordem judicial.
              </p>
            </Section>

            <Section title="6. Transferência internacional">
              <p>
                Alguns prestadores de serviço (como o Formspree e a Microsoft Clarity) podem
                processar dados fora do Brasil. Nesses casos, adotamos cláusulas e garantias
                compatíveis com a LGPD para assegurar nível adequado de proteção.
              </p>
            </Section>

            <Section title="7. Prazo de armazenamento">
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  Dados de contato sem contratação de serviços: até 2 (dois) anos após o último
                  contato, salvo necessidade de prazo maior por motivo legal.
                </li>
                <li>
                  Dados de clientes: pelo prazo necessário à execução do mandato, cumprimento de
                  obrigações legais, prazos prescricionais e de guarda de documentos advocatícios.
                </li>
                <li>
                  Logs técnicos: pelo período usual de segurança da infraestrutura, limitado ao
                  necessário.
                </li>
              </ul>
            </Section>

            <Section title="8. Seus direitos como titular">
              <p>
                Nos termos da LGPD, você pode solicitar, mediante requisição ao canal de
                privacidade:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Confirmação da existência de tratamento e acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>Anonimização, bloqueio ou eliminação de dados desnecessários ou excessivos;</li>
                <li>Portabilidade, quando aplicável;</li>
                <li>Eliminação dos dados tratados com base no consentimento;</li>
                <li>Informação sobre compartilhamentos e sobre a possibilidade de não consentir;</li>
                <li>Revogação do consentimento;</li>
                <li>
                  Oposição a tratamento em desconformidade com a lei, ou revisão de decisões
                  automatizadas, quando couber.
                </li>
              </ul>
              <p>
                Responderemos em prazo razoável, conforme a legislação. Você também pode apresentar
                reclamação à Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </Section>

            <Section title="9. Segurança da informação">
              <p>
                Adotamos medidas técnicas e organizacionais para proteger os dados contra acesso não
                autorizado, perda, alteração ou divulgação indevida, incluindo comunicação por HTTPS
                e controle de acesso aos sistemas utilizados pelo Escritório.
              </p>
              <p>
                Informações enviadas em contexto de relação advocatícia também estão sujeitas ao{' '}
                <strong>sigilo profissional</strong> previsto no Estatuto da Advocacia e no Código
                de Ética da OAB.
              </p>
            </Section>

            <Section title="10. Cookies e ferramentas de análise">
              <p>
                Cookies são pequenos arquivos armazenados no seu navegador. Utilizamos:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Cookies essenciais:</strong> necessários ao funcionamento do site (por
                  exemplo, registrar sua preferência de cookies). Não exigem consentimento.
                </li>
                <li>
                  <strong>Cookies analíticos:</strong> carregados somente após você clicar em
                  &quot;Aceitar&quot; no banner. Incluem o <strong>Microsoft Clarity</strong>, que
                  registra interações como cliques, rolagem e sessões de navegação para mapas de
                  calor e melhorias no site. Você pode recusar no banner; nesse caso, essas
                  ferramentas não são ativadas.
                </li>
              </ul>
              <p>
                Você pode gerenciar ou desativar cookies nas configurações do seu navegador. A
                desativação de cookies essenciais pode afetar partes do site. Para revogar o
                consentimento, limpe os dados do site no navegador ou entre em contato conosco.
              </p>
            </Section>

            <Section title="11. Dados de crianças e adolescentes">
              <p>
                Este site não se destina a menores de 18 anos. Não coletamos intencionalmente dados
                de crianças e adolescentes por meio do formulário institucional.
              </p>
            </Section>

            <Section title="12. Alterações desta política">
              <p>
                Podemos atualizar esta Política para refletir mudanças legais ou operacionais. A
                data da última revisão será indicada no topo da página. Alterações relevantes
                poderão ser comunicadas por meio do site ou por contato direto, quando apropriado.
              </p>
            </Section>

            <Section title="13. Contato">
              <p>
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados
                pessoais:
              </p>
              <p>
                E-mail:{' '}
                <a href={`mailto:${CONTACT.email}`} className="text-[#D4AC45] hover:text-[#F7DC7B]">
                  {CONTACT.email}
                </a>
                <br />
                Telefone:{' '}
                <a href={`tel:${CONTACT.phoneTel}`} className="text-[#D4AC45] hover:text-[#F7DC7B]">
                  {CONTACT.phone}
                </a>
              </p>
            </Section>

            <p className="body-text text-xs border-t border-slate-600 pt-6 opacity-80">
              Este documento tem caráter informativo e não substitui orientação jurídica
              personalizada. Recomenda-se revisão periódica por profissional responsável pelo
              Escritório.
            </p>
          </div>

          <div className="max-w-3xl mx-auto text-center mt-8">
            <Link to="/contato" className="btn-gold inline-block">
              Voltar ao contato
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default Privacidade;
