import { useState }  from "react";
import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {
  const [visivel, setVisivel] = useState<'tabela' | 'formulario'>('tabela');
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  const clientes = [
    new Cliente('Gabriel', 20, '1'),
    new Cliente('Lucas', 20, '2'),
    new Cliente('Pedro', 20, '3'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    setCliente(cliente);
    setVisivel('formulario');
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir -> ${cliente.nome}`);
  }

  function salvarCliente(cliente: Cliente) {
    console.log(cliente);
    setVisivel('tabela');
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    setVisivel('formulario');
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-purple-400
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {
          visivel === 'tabela'
            ? (
              <>
                <div className="flex justify-end">
                  <Button
                    className="mb-4"
                    cor="green"
                    onClick={() => novoCliente()}
                  >Novo Cliente</Button>
                </div>
                <Table
                  clientes={clientes}
                  clienteSelecionado={clienteSelecionado}
                  clienteExcluido={clienteExcluido}
                />
              </>
            )
            : (
              <Form
                cliente={cliente}
                cancel={() => setVisivel('tabela')}
                clienteChange={salvarCliente}
              />
            )
        }

      </Layout>
    </div>
  )
}
