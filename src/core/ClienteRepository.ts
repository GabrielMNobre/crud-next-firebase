import Cliente from "./Cliente";

export default interface ClienteRepository {
  add(cliente: Cliente): Promise<Cliente | undefined>
  delete(cliente: Cliente): Promise<void>
  getAll(): Promise<Cliente[]>
}
