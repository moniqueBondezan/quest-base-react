export const Button = ({ label }) => {
    return <button onClick={() => alert(`A label desse botão é: ${label}`)}>Clique Aqui</button>
}

Button.defaultProps = {
    label: 'Olá Mundo.'
}