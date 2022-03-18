import React from 'react';
import Title from './Title';
import MissionCard from './MissionCard';
import missions from '../data/missions';

class Missions extends React.Component {
  render() {
    const missao = missions.map((cadaMissao) => (
      <MissionCard
        key={ cadaMissao.name }
        name={ cadaMissao.name }
        year={ cadaMissao.year }
        country={ cadaMissao.country }
        destination={ cadaMissao.destination }
      />
    ));
    return (
      <>
        <div data-testid="missions" />
        <Title headline="Missões" />
        <section className="paiDoPai">{missao}</section>
      </>
    );
  }
}

export default Missions;

// requisito 7: importei o React, criei o componente Missions através da class, coloquei o render para o código poder funcionar, e o retorno, com a tag div que vai englobar todo o conteúdo, com o atributo data-testid. Depois, exportei o Missions para poder ser renderizado no App.js que é o componente principal.
// requisito 8: importei o componente Title, depois, dentro da tag div pertencente ao componente Missions chamei o componente Title e a props headline com o valor "Missões". O componente Title está dentro de uma tag pq ele é como se fosse uma tag, ele é uma tag especial e passamos a props como se fosse um atributo da tag pq ele está dentro do Title.
// requisito 10: importei o componente MissionCard e o missions do data. Dentro do render, antes do return, para poder criar um array novo com o nome, ano, país e local de cada item da lista de missões, criei uma const missao para poder rodar o map no missions. Aí dentro do map abri uma arrow function, coloquei o parâmetro, aí abri a tag (pq depois eu vou chamar ele dentro do return e preciso que ele volte lá em html) e chamei o MissionCard e como forma de atributos, eu passei a key (chave) com o nome da missão, pq cada elemento tem que ter uma chave com um nome diferente (pq o react não sabe diferenciar), e como as missões não se repetem dá certo, aí passei as props name com o parâmetro.name (pq quero o nome lá do arquivo missions do data), e repeti esse processo mais 3x com o year, country e destination. Com isso, meu novo array vai estar criado. Aí, dentro do return, eu coloquei uma tag section chamando a minha constante criada acima para poder funcionar e aparecer na tela as missões com seus nomes, anos, países e locais.
