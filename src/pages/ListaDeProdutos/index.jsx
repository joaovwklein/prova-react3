import React from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

import Table from "react-bootstrap/Table";

import MainNavBar from "../../components/MainNavBar/index.jsx"

import { useState, useEffect } from "react";


const url = "http://localhost:3000/produtos";

const ListaDeProdutos = () => {
  const [produtos, setProdutos] = useState([]);


  //Resgate de dados da API
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url);
        const produtos = await res.json();
        setProdutos(produtos);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
    console.log(produtos);
  }, []);

  return (
    <div>
      <MainNavBar/>

      <Container>
        
        <h1>Lista de Produtos</h1>
 

        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome </th>
              <th>Categoria</th>
              <th>Preço</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((produto) => (
              <tr key={produto.id}>
                <td>{produto.id}</td>
                <td>{produto.nomeProduto}</td>
                <td>{produto.categoriaProduto}</td>
                <td>{produto.precoProduto} R$ </td>
                <td>
                  <ButtonGroup size="sm">
                    <Button variant="info">Editar</Button>
                    <Button
                      variant="danger"
                      onClick={async () => {
                        const res = await fetch(`http://localhost:3000/produtos/${produto.id}`, {
                          method: "DELETE",
                          headers: { "Content-Type": "application/json" },
                        });
                        const produtoRemovido = await res.json()
                        alert(`O produto ${produtoRemovido.nomeProduto} foi excluido`)
                      }}
                    >
                      Excluir
                    </Button>
                  </ButtonGroup>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>


      </Container>
    </div>
  );
};

export default ListaDeProdutos;
