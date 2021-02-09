import Header from '../src/components/Header'
import { Layout } from '../src/components/Layout'
import { Main } from '../src/components/Main'
import Footer from '../src/components/Footer'

export default function Home() {
  return (
    <>
      <Header
        avatarSrc="https://github.com/silvalarissa.png"
        title="Larissa Silva"
        subTitle="Desenvolvedora Front End"
      />
      <Main>
        <Layout>content</Layout>
      </Main>
      <Footer />
    </>
  )
}
