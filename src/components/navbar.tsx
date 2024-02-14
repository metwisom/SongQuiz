import Link from 'next/link';
import styled from 'styled-components';

const NavList = styled.div`
  display: block;
  width: auto;
  margin: auto;
  text-align: center;
`

const NavLink = styled(Link)`
  color: #fff;
  padding: 10px;
  display: inline-block;
  font-weight: bold;
  text-decoration: none;
  &:hover{
    text-decoration: underline;
  }
`

export default function Navbar(){
  return <NavList>
    <NavLink href={'/'}>Начало</NavLink>
    <NavLink href={'/songs'}>Список песен</NavLink>
  </NavList>
}