// Importa o CSS global da aplicação
import '../styles/globals.css';

// Importa o ThemeProvider do contexto de tema
import { ThemeProvider } from '../context/ThemeContext';

/**
 * Função principal que encapsula todas as páginas da aplicação.
 * - O `ThemeProvider` envolve o componente para fornecer o tema atual e a funcionalidade de alternância.
 */
function MyApp({ Component, pageProps }) {
  return (
    // Provedor de Tema: fornece contexto para toda a aplicação
    <ThemeProvider>
      {/* Renderiza o componente da página atual com suas propriedades */}
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

// Exporta o componente como padrão, garantindo que o Next.js o utilize como ponto de entrada
export default MyApp;
