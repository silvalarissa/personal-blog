import styled from 'styled-components'

const Title = styled.p`
  font-size: 2rem;
  padding: 0 0 1.5rem 0;
`

const Text = styled.p`
  font-size: 1.2rem;
  text-align: justify;
`

export default function Content({ title, text }) {
  return (
    <>
      <Title>{title}</Title>
      <Text>{text}</Text>
    </>
  )
}
