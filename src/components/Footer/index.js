import styled from 'styled-components'
import Link from 'next/link'
import { FaTwitter } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'

const BoxFooter = styled.footer`
  height: 8vh;
  width: 100vw;
  display: block;
  position: fixed;
  bottom: 0;
  left: 0;
  background: ${(props) => props.theme.colors.primary};
`
const FooterInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  color: ${(props) => props.theme.colors.secondary};

  a {
    font-size: 1.3rem;

    &:nth-child(2) {
      padding: 0 2rem;
    }

    &:visited {
      color: ${(props) => props.theme.colors.secondary};
    }
  }
`

export default function Footer() {
  return (
    <BoxFooter>
      <FooterInfo>
        <Link href="https://twitter.com/larefortal">
          <a target="_blank">
            <FaTwitter />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/larissaslv/">
          <a target="_blank">
            <FaLinkedinIn />
          </a>
        </Link>
        <Link href="https://github.com/silvalarissa">
          <a target="_blank">
            <FaGithub />
          </a>
        </Link>
      </FooterInfo>
    </BoxFooter>
  )
}
