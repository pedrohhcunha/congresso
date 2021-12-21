import Header from '../components/Header.jsx'
import Inicio from '../components/Inicio.jsx'
import Sobre from '../components/Sobre.jsx'
import Diferenciais from '../components/Diferenciais.jsx'
import Cronograma from '../components/Cronograma.jsx'
import Participe from '../components/Participe.jsx'
import Palestrantes from '../components/Palestrantes.jsx'
import ParticipeB from '../components/ParticipeB.jsx'
import Parceiros from '../components/Parceiros.jsx'
import SubFooter from '../components/SubFooter.jsx'
import Mapa from '../components/Mapa.jsx'
import Footer from '../components/Footer.jsx'
import Head from 'next/head'
import Trabalhos from '../components/Trabalhos'
import FaixaDestaque from '../components/FaixaDestaque'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'

export default function Home() {

  const [statusModal, setStatusModal] = useState(false);

  useEffect(() => {
    window.addEventListener('keydown', event => {
      if(event.key === "Escape") {
        setStatusModal(false)
      }
    })
  }, []);

  const openModal = () => {
    setStatusModal(true)
    console.log("Abrindo o modal!")
  }

  const closeModal = () => {
    setStatusModal(false)
    console.log("Fechando o modal!")
  }

  return (
    <>
      <Head>
        <title>1° Congresso Sul brasileiro de Inovação em Saúde</title>
        <meta name="description" content="
          Security, technology and sustainability in infection prevention and control.
        " />
          <script dangerouslySetInnerHTML={{ __html: `  !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '459271282379020');
            fbq('track', 'PageView');` }}
        />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
  src="https://www.facebook.com/tr?id=459271282379020&ev=PageView&noscript=1"
/>` }}
        />
      </Head>
      <Header openModal={openModal} />
      <Inicio />
      <FaixaDestaque />
      <Sobre openModal={openModal} />
      <Palestrantes />
      <Participe openModal={openModal} />
      <Diferenciais />
      <Cronograma />
      <Trabalhos />
      <ParticipeB openModal={openModal} />
      <Parceiros />
      <Mapa />
      <SubFooter openModal={openModal} />
      <Footer openModal={openModal} />
      <Modal isOpen={statusModal} closeModal={closeModal} />
    </>
  )
}
