import styled from 'styled-components'

const Imagem = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`
export default function Avatar({ src }) {
  return <Imagem src={src} />
}
