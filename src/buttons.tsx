

const btnsDiv: React.CSSProperties = {
    float: "left",
    height: "280px",
    marginTop: "200px",
    padding: "auto",
    width: "10%|"
}

const btnStyle: React.CSSProperties = {
    borderRadius: "10%",
    border: "solid 5px orangered",
    height: "100px",
    width: "350px",
    fontFamily: "'Press Start 2P', cursive",
    backgroundColor: "blueviolet",
    color: "yellow",
    fontSize: "2rem",
    textAlign: "center",
    marginBottom: "20px"
}

export function Buttons() {

    return <div style={btnsDiv}>
        <ul style={{ listStyle: 'none', padding: '5px', }}>
            <li>
                <button style={btnStyle}><a href="#">Guides</a></button>
            </li>
            <li>
                <button style={btnStyle}><a href="#">Cheats</a></button>
            </li>
            <li>
                <button style={btnStyle}><a href="#">Reviews</a></button>
            </li>
            <li>
                <button style={btnStyle}><a href="#">Contribute</a></button>
            </li>
        </ul>
    </div>

}

