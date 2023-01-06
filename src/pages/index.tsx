import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className={`
      flex h-screen justify-center items-center
      bg-gradient-to-r from-blue-400 to-purple-400
      text-white
    `}>
      <Layout title="Cadastro Simples">
        <span>Conteúdo</span>
      </Layout>
    </div>
  )
}
