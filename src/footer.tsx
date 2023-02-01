
const footerStyle:React.CSSProperties = {
    position: "absolute",
    left: "0",
    bottom:"0",
    width: "100%",
    backgroundColor:"lawngreen",
    height: "200px",
    textAlign: "center",
}

export function Footer() {
    return <footer style={footerStyle}>
        <img src="https://i0.wp.com/fourteenten.com/wp-content/uploads/2017/03/PlayStation-Client-Logo.jpg?w=800&ssl=1"
            alt="playstation logo" style={{ height: '200px' }}></img>
        &nbsp;
        <img src="https://1000logos.net/wp-content/uploads/2017/07/Emblem-N64.jpg" alt="n64 logo" style={{ height: '200px' }}></img>
        &nbsp;
        <img src="https://i.ytimg.com/vi/wc64cjGr3ik/maxresdefault.jpg" alt="dreamcast logo" style={{ height: '200px' }}></img>
        &nbsp;
        <img src="https://loodibee.com/wp-content/uploads/Nintendo_Game_Boy_Logo.png" alt="gameboy logo"
            style={{ backgroundColor: 'white', height: '200px' }}></img>
        &nbsp;
        <img src="https://loodibee.com/wp-content/uploads/super-nintendo-logo.png" alt="super nintendo logo"
            style={{ backgroundColor: 'white', height: '200px' }}></img>
    </footer>
}