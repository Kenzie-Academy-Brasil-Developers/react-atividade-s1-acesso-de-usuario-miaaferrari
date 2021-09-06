export const RestrictedPage = ({isLogged, user, Login, Logout}) => {
    
    return (
        <>
            {isLogged ? (
                <><h1>Bem-vinda, {user}!</h1><button className='logout' onClick={Logout}>Logout</button></>
            ) : (
                <><p>Você não pode acessar essa página</p><button className='login' onClick={Login}>Login</button></>
            )}
        </>
    )
}