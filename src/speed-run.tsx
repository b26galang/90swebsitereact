type SpeedrunProps = {
    game: string,
    time: string,
    player: string
}

const tableCellStyle: React.CSSProperties = {
    border: "3px solid black",
    borderCollapse: "collapse"
  }

export function SpeedrunInfo(props: SpeedrunProps) {
    const { game, time, player } = props;
    return <>
        <tr>
            <td style={tableCellStyle}>{game}</td>
            <td style={tableCellStyle}>{time}</td>
            <td style={tableCellStyle}>{player}</td>
        </tr>
    </>
}