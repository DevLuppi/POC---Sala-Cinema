import { useEffect } from 'react'; // Importa o hook useEffect para lidar com efeitos colaterais
import styles from './ThemeToggle.module.css'; // Importa os estilos específicos para o componente

/**
 * Componente `ThemeToggle`:
 * - Permite alternar entre os temas "light" e "dark".
 * - Gerencia a persistência do tema no localStorage.
 * - Aplica classes CSS dinâmicas ao elemento <html> com base no tema selecionado.
 */
export default function ThemeToggle() {
  // Função para alternar o tema
  const toggleTheme = () => {
    // Verifica o tema atual no elemento <html>
    const currentTheme = document.documentElement.classList.contains('light-theme')
      ? 'light' // Se "light-theme" está aplicado, o tema atual é claro
      : 'dark'; // Caso contrário, o tema atual é escuro

    // Define o novo tema com base no tema atual
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Remove a classe do tema atual e adiciona a classe do novo tema
    document.documentElement.classList.remove(`${currentTheme}-theme`);
    document.documentElement.classList.add(`${newTheme}-theme`);

    // Salva o novo tema no localStorage para persistência
    localStorage.setItem('theme', newTheme);
  };

  // useEffect executa após o componente ser montado
  useEffect(() => {
    // Recupera o tema salvo no localStorage ou usa "dark" como padrão
    const savedTheme = localStorage.getItem('theme') || 'dark';

    // Aplica a classe correspondente ao tema salvo no elemento <html>
    document.documentElement.classList.add(`${savedTheme}-theme`);
  }, []); // Executa apenas uma vez no carregamento inicial

  return (
    <div className={styles.toggleContainer}>
      {/* Alternância de Tema */}
      <label className={styles.switch}>
        <input type="checkbox" onClick={toggleTheme} /> {/* Executa toggleTheme ao clicar */}
        <span className={styles.slider}></span> {/* Representa o botão deslizante */}
      </label>
      <span className={styles.label}>Tema</span> {/* Exibe o texto do toggle */}
    </div>
  );
}
