import styled from 'styled-components';


const Input = styled.input`
  box-sizing: content-box;
  padding: 12px 20px;
  font-size: 1rem;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-color: var(--accent);
  border-radius: calc(var(--border-radius) * 1px);
  text-align: center;
  outline: transparent;
  width: 100%;
  transition: border-color calc(var(--transition, 0.2) * 1s) ease;
  box-sizing: border-box;
`
const Button = styled.button`
  box-sizing: content-box;
  padding: 12px 20px;
  font-size: 1rem;
  border-width: calc(var(--border-width) * 1px);
  border-style: solid;
  border-color: var(--accent);
  border-radius: calc(var(--border-radius) * 1px);
  text-align: center;
  outline: transparent;
  width: 100%;
  transition: border-color calc(var(--transition, 0.2) * 1s) ease;
  cursor: pointer;
  box-sizing: border-box;
`

export {Input,Button}