import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'

const HeaderConteiner = styled.header`
    background-color: #FFF;
    display: flex;
    justify-content: center;
`

function Header() {
    return (
        <HeaderConteiner>
            <Logo/>
            <OpcoesHeader/>
            <IconesHeader/>
        </HeaderConteiner>
    )
}

export default Header