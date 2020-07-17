// Label.react.test.js
import React from 'react';
import Label from './Label';
import renderer from 'react-test-renderer';

test('Teste de titulo', () => {
  const titulos = [{ nome : "Fernando Henrique"}, {nome : "Gabriel Ramos"}];

  let titulo = titulos.map((titulo) => {
    <Label texto={titulo.nome}  className="teste"/>
  })

  const component = renderer.create(
    titulo
  );

  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  console.log(tree);
});