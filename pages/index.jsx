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
import SubHeader from '../components/SubHeader.jsx'

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
        <script async src="https://www.googletagmanager.com/gtag/js?id=AW-10828932296"></script>
        <script dangerouslySetInnerHTML={{__html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'AW-10828932296');`}}>
        </script>
        <meta name="facebook-domain-verification" content="p7ggm1dn5yisgl777d51y2h30279xv" />
        <script dangerouslySetInnerHTML={{ __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '745379369760835');
          fbq('track', 'PageView');` }}
        />
        <noscript dangerouslySetInnerHTML={{ __html: `<img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=745379369760835&ev=PageView&noscript=1"
        />`}}
        />
      </Head>
      {/* <SubHeader /> */}
      <Header openModal={openModal} />
      <Inicio />
      <FaixaDestaque />
      <Sobre openModal={openModal} />
      <Palestrantes />
      <ParticipeB openModal={openModal} />      
      <Diferenciais />
      <Cronograma />
      <Trabalhos />
      <Participe openModal={openModal} />
      <Parceiros />
      <Mapa />
      <SubFooter openModal={openModal} />
      <Footer openModal={openModal} />
      <Modal isOpen={statusModal} closeModal={closeModal} />
    </>
  )
}
