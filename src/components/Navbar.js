const navbar = () =>{
    return (
        <nav>
            <div className='options__nav-left'>
                <ul>
                    <li><a href='#'>Products</a></li>
                    <li><a href='#'>About Us</a></li>
                    <li><a href='#'>Location</a></li>
                </ul>
            </div>
            <div className='logo__nav'>
                <h1><a href='#'>Revenant</a></h1>
            </div>
            <div className='options__nav-right'>
                <ul>
                    <li><a href='#'>Register</a></li>
                    <li><a href='#'>My Cart</a></li>
                    <li><a href='#'><i className="fa-solid fa-user"></i></a></li>
                </ul>
            </div>
        </nav>
    )
}

export default navbar