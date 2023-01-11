import Button from "../components/Button";
import Form from "../components/Form";
import Layout from "../components/Layout";
import Table from "../components/Table";
import useClient from "../hooks/useClient";
import useVisible from "../hooks/useVisible";

export default function Home() {
  const { clientes, cliente, select, remove, reset, save } = useClient();
  const { tabelaVisivel, exibirTabela } = useVisible();

  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-purple-400
      text-white
    `}>
      <Layout title="Cadastro Simples">
        {
          tabelaVisivel
            ? (
              <>
                <div className="flex justify-end">
                  <Button
                    className="mb-4"
                    cor="green"
                    onClick={() => reset()}
                  >Novo Cliente</Button>
                </div>
                <Table
                  clientes={clientes}
                  clienteSelecionado={select}
                  clienteExcluido={remove}
                />
              </>
            )
            : (
              <Form
                cliente={cliente}
                cancel={exibirTabela}
                clienteChange={save}
              />
            )
        }
      </Layout>
    </div>
  )
}
