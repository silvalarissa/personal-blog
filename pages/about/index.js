import Header from '../../src/components/Header'
import { Layout } from '../../src/components/Layout'
import { Main } from '../../src/components/Main'
import Footer from '../../src/components/Footer'
import Content from '../../src/components/Content'

export default function About() {
  const texto =
    'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.'
  return (
    <>
      <Header
        avatarSrc="https://github.com/silvalarissa.png"
        title="Larissa Silva"
        subTitle="Desenvolvedora Front End"
      />
      <Main>
        <Layout>
          <Content title="Lorem Ipsum" text={texto} />
        </Layout>
      </Main>
      <Footer />
    </>
  )
}
