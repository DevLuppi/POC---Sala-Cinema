import { createContext, useState, useContext } from 'react'; // Importa os hooks necessários do React

// Criação do contexto de tema
const ThemeContext = createContext();

/**
 * Provedor de Tema:
 * - Envolve o componente principal da aplicação para fornecer o estado de tema (light/dark) e a função de alternância.
 */
export const ThemeProvider = ({ children }) => {
  // Estado para armazenar o tema atual (padrão: 'dark')
  const [theme, setTheme] = useState('dark');

  // Função para alternar entre os temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark')); // Altera para 'light' se for 'dark', e vice-versa
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* Envolve os filhos do contexto com a classe do tema atual */}
      <div className={theme}>{children}</div>
    </ThemeContext.Provider>
  );
};

/**
 * Hook personalizado para acessar o contexto do tema.
 * - Simplifica o uso do tema e da função de alternância em outros componentes.
 */
export const useTheme = () => useContext(ThemeContext);
