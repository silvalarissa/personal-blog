import styled from 'styled-components'
import Link from 'next/link'
import { FaBars } from 'react-icons/fa'
import Avatar from '../Avatar'

const Box = styled.header`
  background: ${(props) => props.theme.colors.primary};
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 10vh;
`

const HeaderInfo = styled.div`
  width: 90vw;
  height: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
`

const HeaderTitle = styled.div`
  padding: 0 0 0 0.5rem;
`

const Title = styled.h1`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.secondary};
`

const SubTitle = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.secondary};
`

const HeaderOptions = styled.div`
  font-size: 1.3rem;
  color: ${(props) => props.theme.colors.secondary};
`

export default function Header({ avatarSrc, title, subTitle }) {
  return (
    <Box>
      <HeaderInfo>
        <Link href="/">
          <HeaderContent>
            <Avatar src={avatarSrc} />
            <HeaderTitle>
              <Title>{title}</Title>
              <SubTitle>{subTitle}</SubTitle>
            </HeaderTitle>
          </HeaderContent>
        </Link>
        <HeaderOptions>
          <FaBars />
        </HeaderOptions>
      </HeaderInfo>
    </Box>
  )
}
