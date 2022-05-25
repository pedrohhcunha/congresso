import Header from '../components/Header.jsx'
import SubFooter from '../components/SubFooter.jsx'
import Footer from '../components/Footer.jsx'
import Head from 'next/head'
import Modal from '../components/Modal'
import { useEffect, useState } from 'react'
import TrabalhosList from '../components/TrabalhosList.jsx'
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
        <title>1° Congresso Sul brasileiro de Inovação em Saúde - Trabalhos</title>
        <meta name="description" content="
          Security, technology and sustainability in infection prevention and control.
        " />
      </Head>
      <SubHeader />
      <Header openModal={openModal} />
      <TrabalhosList />
      <SubFooter openModal={openModal} />
      <Footer openModal={openModal} />
      <Modal isOpen={statusModal} closeModal={closeModal} />
    </>
  )
}
