import React from 'react';
import styles from './Sensor.module.css';

type SensorProps = {
  estaAtivo: boolean;
};

const Vaga: React.FC<SensorProps> = ({ estaAtivo }) => {
  return (
        <div className={ ` ${styles.sensor} ${estaAtivo ? styles.ativado : styles.desativado}  ` }></div>
  );
};

export default Vaga;