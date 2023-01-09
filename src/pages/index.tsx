import Layout from "../components/Layout";
import Table from "../components/Table";
import Cliente from "../core/Cliente";

export default function Home() {
  const clientes = [
    new Cliente('Gabriel', 20, '1'),
    new Cliente('Lucas', 20, '2'),
    new Cliente('Pedro', 20, '3'),
  ];

  function clienteSelecionado(cliente: Cliente) {
    console.log(cliente);
  }

  function clienteExcluido(cliente: Cliente) {
    console.log(`Excluir -> ${cliente.nome}`);
  }

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-purple-400
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <Table clientes={clientes} clienteSelecionado={clienteSelecionado} />
      </Layout>
    </div>
  )
}
