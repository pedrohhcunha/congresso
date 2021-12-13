import Header from '../components/Header.jsx'
import Inicio from '../components/Inicio.jsx'
import Sobre from '../components/Sobre.jsx'
import Diferenciais from '../components/Diferenciais.jsx'
import Cronograma from '../components/Cronograma.jsx'
import Participe from '../components/Participe.jsx'
import Palestrantes from '../components/Palestrantes.jsx'
import ParticipeB from '../components/ParticipeB.jsx'
import Parceiros from '../components/Parceiros.jsx'
import Cadastro from '../components/Cadastro.jsx'
import Mapa from '../components/Mapa.jsx'
import Footer from '../components/Footer.jsx'
import Head from 'next/head'
import Trabalhos from '../components/Trabalhos'
import FaixaDestaque from '../components/FaixaDestaque'

export default function Home() {
  return (
    <>
      <Head>
        <title>1° Congresso Sul brasileiro de Inovação em Saúde</title>
        <meta name="description" content="
          Security, technology and sustainability in infection prevention and control.
        " />
      </Head>
      <Header />
      <Inicio />
      <FaixaDestaque />
      <Sobre />
      <Palestrantes />
      <Participe />
      <Diferenciais />
      <Cronograma />
      <Trabalhos />
      <ParticipeB />
      <Parceiros />
      <Cadastro />
      <Mapa />
      <Footer />
    </>
  )
}
