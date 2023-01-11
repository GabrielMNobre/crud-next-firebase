import { useEffect, useState } from "react";
import CollectionCliente from "../backend/db/CollectionCliente";
import Cliente from "../core/Cliente";
import ClienteRepository from "../core/ClienteRepository";
import useVisible from "./useVisible";

export default function useClient() {
  const repo: ClienteRepository = new CollectionCliente();
  const { exibirTabela, exibirFormulario } = useVisible();
  const [clientes, setClientes] = useState<Cliente[]>([]);
  const [cliente, setCliente] = useState<Cliente>(Cliente.vazio());
  
  useEffect(getAll, [])
  
  function getAll() {
    repo.getAll().then((clientes) => {
      setClientes(clientes);
      exibirTabela();
    });
  }

  function select(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario();
  }

  async function remove(cliente: Cliente) {
    await repo.delete(cliente);
    getAll();
  }

  async function save(cliente: Cliente) {
    await repo.add(cliente);
    getAll();
  }

  function reset() {
    setCliente(Cliente.vazio());
    exibirFormulario();
  }

  return {
    clientes,
    cliente,
    select,
    remove,
    save,
    reset,
    getAll
  }
}
