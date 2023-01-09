import { useState } from "react";
import Input from "./Input";
import Cliente from "../core/Cliente";
import Button from "./Button";

interface FormProps {
  cliente?: Cliente
  clienteChange?: (cliente: Cliente) => void
  cancel?: () => void
}

export default function Form({ cliente, cancel, clienteChange }: FormProps) {
  const id = cliente?.id;
  const [nome, setNome] = useState(cliente?.nome ?? '');
  const [idade, setIdade] = useState(cliente?.idade ?? 0);
  return (
    <div>
      {
        id ? (
          <Input readOnly label="Código" value={id} className="mb-2" />
        ) : false
      }
      <Input
        label="Nome"
        value={nome}
        onChange={setNome}
        className="mb-2"
      />
      <Input
        label="Idade"
        value={idade}
        type="number"
        onChange={setIdade}
      />
      <div className="mt-3 flex justify-end">
        <Button
          className="mr-2"
          onClick={() => clienteChange?.(new Cliente(nome, idade, id))}
        >
          { id ? 'Alterar' : 'Salvar' }
        </Button>
        <Button onClick={cancel}>
          Cancelar
        </Button>
      </div>
    </div>
  );
}
