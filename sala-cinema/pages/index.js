import { useState, useEffect } from 'react'; // Importa hooks do React para gerenciar estados e efeitos colaterais
import ThemeToggle from '../components/ThemeToggle'; // Importa o componente para alternância de tema
import styles from '../styles/Home.module.css'; // Importa os estilos da página principal

export default function Home() {
  // Estado para armazenar os dados do filme (carregados de um JSON)
  const [movieData, setMovieData] = useState(null);

  // Estado para rastrear os assentos selecionados pelo usuário
  const [selectedSeats, setSelectedSeats] = useState([]);

  // useEffect para carregar os dados do JSON quando o componente é montado
  useEffect(() => {
    fetch('/movieData.json') // Busca os dados do arquivo JSON
      .then((response) => response.json()) // Converte a resposta em JSON
      .then((data) => setMovieData(data)); // Armazena os dados no estado `movieData`
  }, []); // Executa apenas uma vez, no carregamento do componente

  // Função para gerenciar a seleção de assentos
  const handleSeatSelection = (seatNumber) => {
    setSelectedSeats((prevSelected) =>
      prevSelected.includes(seatNumber) // Verifica se o assento já está selecionado
        ? prevSelected.filter((num) => num !== seatNumber) // Remove o assento se ele já está selecionado
        : [...prevSelected, seatNumber] // Adiciona o assento se ele não está selecionado
    );
  };

  // Função chamada ao clicar no botão de compra
  const handlePurchase = () => {
    if (selectedSeats.length === 0) {
      // Alerta se nenhum assento foi selecionado
      alert('Por favor, selecione ao menos um assento.');
      return;
    }
    // Confirma a compra com um alerta
    alert('Compra realizada com sucesso!');
  };

  // Exibe um indicador de carregamento enquanto os dados do filme não estão disponíveis
  if (!movieData) {
    return <div>Carregando...</div>;
  }

  // Desestruturação dos dados do filme para facilitar o acesso às propriedades
  const { titulo, sinopse, dataLancamento, direcao, horario, preco, assentos } = movieData;

  // Calcula o valor total da compra com base nos assentos selecionados
  const totalPrice = (selectedSeats.length * preco).toFixed(2);

  return (
    <div className={styles.container}>
      {/* Botão de Alternância de Tema */}
      <ThemeToggle />

      {/* Título e horário do filme */}
      <div className={styles.titleSection}>
        <h1>{titulo}</h1>
        <h2>{horario}</h2>
      </div>

      <div className={styles.mainContent}>
        {/* Seção dos Assentos */}
        <div className={styles.seatSection}>
          <h3>Selecione seus assentos:</h3>
          <div className={styles.seatGrid}>
            {/* Mapeia os assentos e renderiza cada um */}
            {assentos.map((seat) => (
              <div
                key={seat.numero} // Define uma chave única para cada assento
                className={`${styles.seat} ${
                  seat.disponivel // Verifica se o assento está disponível
                    ? selectedSeats.includes(seat.numero) // Verifica se o assento está selecionado
                      ? styles.selected // Aplica a classe de "selecionado"
                      : styles.free // Aplica a classe de "livre"
                    : styles.taken // Aplica a classe de "indisponível"
                }`}
                onClick={() => seat.disponivel && handleSeatSelection(seat.numero)} // Seleciona o assento se estiver disponível
              ></div>
            ))}
          </div>
          {/* Representação da tela do cinema */}
          <div className={styles.screen}>tela</div>

          {/* Legenda dos assentos */}
          <div className={styles.legend}>
            <div className={styles.legendItem}>
              <div className={`${styles.seat} ${styles.free}`}></div>
              <span>livre</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.seat} ${styles.selected}`}></div>
              <span>selecionado</span>
            </div>
            <div className={styles.legendItem}>
              <div className={`${styles.seat} ${styles.taken}`}></div>
              <span>indisponível</span>
            </div>
          </div>
        </div>

        {/* Informações do Filme */}
        <div className={styles.movieInfo}>
          <p><strong>Sinopse:</strong> {sinopse}</p>
          <p><strong>Data de lançamento:</strong> {dataLancamento}</p>
          <p><strong>Direção:</strong> {direcao}</p>
        </div>
      </div>

      {/* Botão de Compra */}
      <div className={styles.buySection}>
        <button onClick={handlePurchase} className={styles.buyButton}>
          Comprar - R$ {totalPrice} {/* Exibe o valor total calculado */}
        </button>
      </div>
    </div>
  );
}
