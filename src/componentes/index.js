import Logo from '../../src/imagens/logo.svg'

function Logo () {
    return(
        <div className='logo'>
            <img src={logo} alt='logo'></img>
            <p><strong>Alura</strong>Books</p>
        </div>
    )
}

export default Logo