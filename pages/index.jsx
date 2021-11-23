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

export default function Home() {
  return (
    <main>
      <Header />
      <Inicio />
      <Sobre />
      <Diferenciais />
      <Cronograma />
      <Palestrantes />
      <ParticipeB />
      <Parceiros />
    </main>
  )
}
