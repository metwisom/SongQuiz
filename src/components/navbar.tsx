import Link from 'next/link';
import styled from 'styled-components';
import {ProfileWidget} from '@/components/profileWidget';

const Header = styled.header`
  position: relative;
  text-align: center;
`

const NavList = styled.div`
  display: inline-block;
  width: auto;
`

const NavLink = styled(Link)`
  color: #fff;
  padding: 10px;
  display: inline-block;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export default function Navbar(){
  return <Header>
    <NavList>
      <NavLink href={'/'}>Начало</NavLink>
      <NavLink href={'/songs'}>Список песен</NavLink>
    </NavList>
    <ProfileWidget/>
  </Header>
}