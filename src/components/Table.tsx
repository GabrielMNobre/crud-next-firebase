import { ReactNode } from "react";
import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icons";

interface TableProps {
  clientes: Cliente[]
  clienteSelecionado?: (cliente: Cliente) => void
  clienteExcluido?: (cliente: Cliente) => void
}

export default function Table({ clientes, clienteSelecionado, clienteExcluido } : TableProps) {
  const renderAction = clienteSelecionado || clienteExcluido; 

  function renderHeader() {
    return (
      <tr>
        <th className="text-left p-4">Código</th>
        <th className="text-left p-4">Nome</th>
        <th className="text-left p-4">Idade</th>
        {
          renderAction ? <th className="text-center p-4">Ações</th> : false
        }
      </tr>
    );
  }

  function renderActions(cliente: Cliente) {
    return (
      <td className="flex justify-center">
        {
          clienteSelecionado
            ? (
              <button className={`
                flex justify-center items-center
                text-green-600 rounded-full p-2 m-1
                hover:bg-purple-50
              `}
              onClick={() => clienteSelecionado?.(cliente)}
              >
                { IconeEdicao }
              </button>
            ) : false
        }
        {
          clienteExcluido
            ? (
              <button className={`
                flex justify-center items-center
                text-red-500 rounded-full p-2 m-1
                hover:bg-purple-50
              `}
              onClick={() => clienteExcluido?.(cliente)}
              >
                { IconeLixo }
              </button>
            ) : false
        }
      </td>
    );
  }

  function renderData() {
    return (
      clientes?.map((cliente, i) => {
        return (
          <tr key={cliente.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100'}`} > 
            <td className="text-left p-2">{cliente.id}</td>
            <td className="text-left p-2">{cliente.nome}</td>
            <td className="text-left p-2">{cliente.idade}</td>
            {
              renderAction ? <td>{ renderActions(cliente) }</td> : false
            }
          </tr>
        );
      })
    );
  }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className={`
        bg-gradient-to-r from-purple-500 to-purple-800
        text-gray-100
      `}>
        { renderHeader() }
      </thead>
      <tbody>
        { renderData() }
      </tbody>
    </table>
  );
}
