import React from 'react';
import jumboData from '../fixtures/jumbo.json';
import { Jumbotron } from '../components';

const JumbotronContainer = () => {
  return (
    <Jumbotron.Container>
      {jumboData.map((item) => {
        return (
          <Jumbotron key={item.id} directtion={item.direction}>
            <Jumbotron.Pane>
              <Jumbotron.Title>{item.title}</Jumbotron.Title>
              <Jumbotron.SubTitle>{item.subTitle}</Jumbotron.SubTitle>
            </Jumbotron.Pane>
            <Jumbotron.Pane>
              <Jumbotron.Image src={`${process.env.PUBLIC_URL}${item.image}`} alt={item.alt} />
            </Jumbotron.Pane>
          </Jumbotron>
        )
      })}
    </Jumbotron.Container>
  );
}

export default JumbotronContainer;
