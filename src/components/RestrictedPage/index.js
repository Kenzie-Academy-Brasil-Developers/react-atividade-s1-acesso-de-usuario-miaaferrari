export const RestrictedPage = ({isLogged, user, login, logout}) => {
    
    return (
        <>
            {isLogged ? (
                <>
                    <h1>Bem-vinda, {user}!</h1>
                    <button className='logout' onClick={logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>Você não pode acessar essa página</p>
                    <button className='login' onClick={login}>Login</button>
                </>
            )}
        </>
    )
}