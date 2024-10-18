import styles from "./page.module.css";
import Vaga from '@/components/Vaga/Vaga';
import Sensor from '@/components/Sensor/Sensor'; 
import { VagaModel } from '@/models/VagaModel';

const vagas: VagaModel[] = [
  { numero: 1, estaOcupada: false },
  { numero: 2, estaOcupada: true },
  { numero: 3, estaOcupada: false },
  { numero: 4, estaOcupada: true },
  { numero: 5, estaOcupada: false },
  { numero: 6, estaOcupada: true },
  { numero: 7, estaOcupada: false },
  { numero: 8, estaOcupada: true },
  { numero: 9, estaOcupada: false },
  { numero: 10, estaOcupada: true },
];

const contarVagas = (vagas: VagaModel[]) => {
  let quantidadeOcupados = 0;
  let quantidadeLivres = 0;
  
  vagas.forEach((vagas) => {
    if (vagas.estaOcupada) quantidadeOcupados++;
    else quantidadeLivres++;
  });

  return { quantidadeOcupados, quantidadeLivres };
};

const { quantidadeOcupados, quantidadeLivres } = contarVagas(vagas);

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <div className={styles.bloco}>
          {vagas.map((vaga) => (
            <Vaga key={vaga.numero} vaga={vaga} />
          ))}
        </div>

        <div>
          <br />
          <Sensor estaAtivo={false} /> <p>Vagas Livres: {quantidadeOcupados}</p>

          <Sensor estaAtivo={true} /> <p>Vagas Ocupadas: {quantidadeLivres}</p>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  );
}
