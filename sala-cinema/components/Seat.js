// Importa os estilos específicos para o componente de assento
import styles from './Seat.module.css';

/**
 * Componente `Seat`:
 * - Representa um assento na grade de assentos.
 * - Usa classes CSS dinâmicas para refletir o estado do assento (livre, selecionado ou ocupado).
 * 
 * Props:
 * - `status`: Define o estado atual do assento (livre, selecionado, ocupado).
 * - `onClick`: Função chamada quando o assento é clicado.
 */
export default function Seat({ status, onClick }) {
  return (
    <div
      // Aplica classes CSS dinâmicas com base no estado do assento
      className={`${styles.seat} ${styles[status]}`}
      // Executa a função `onClick` ao clicar no assento
      onClick={onClick}
    ></div>
  );
}
