import styled from 'styled-components';

const FooterDiv = styled.div`
  position: absolute;
  bottom: 0;
  text-align: right;
  font-size: 0.9rem;
  display: block;
  margin: auto;
  width: 100%;
  padding: 10px;
`

export default function Footer(){
  return <FooterDiv>SongQuiz - {new Date().getFullYear()}</FooterDiv>
}