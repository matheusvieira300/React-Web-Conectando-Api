import Logo from '../Logo'
import OpcoesHeader from '../OpcoesHeader'
import IconesHeader from '../IconesHeader'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HeaderContainer = styled.header`//container
    background-color: #FFF;
    display: flex;
    justify-content: center; // manter todos os componentes no centro
`

function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
                <Logo />
            </Link>
            <OpcoesHeader />
            <IconesHeader />
        </HeaderContainer>
    )
}

export default Header