import React from 'react';
import styles from './Vaga.module.css';
import Sensor from '@/components/Sensor/Sensor'; 
import { VagaModel } from '@/models/VagaModel';

interface VagaModelProps {
  vaga: VagaModel;
}

const Vaga: React.FC<VagaModelProps> = ({ vaga }) => {
  return (
      <div className={` ${styles.vaga} `}>
          <Sensor estaAtivo={vaga.estaOcupada} />
      </div>
  );
};

export default Vaga;