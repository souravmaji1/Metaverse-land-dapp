
const Navbar = ({ web3Handler, account }) => {
    return (
        <nav className="flex-between" >
            <a
                className='flex'
                href="http://ww.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{fontSize: "45px", color: "#1ae8c2"}}
            >
               
                METAVERSE 
            </a>

            {account ? (
                <a
                    href={`${""}/address/${account}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button">
                    {account.slice(0, 5) + '...' + account.slice(38, 42)}
                </a>
            ) : (
                <button onClick={web3Handler} className="button">Connect Wallet</button>
            )}
        </nav>
    )
}

export default Navbar;