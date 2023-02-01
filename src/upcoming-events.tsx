
type UpcomingEvents = {
    name: string,
    time: string,
    date: string
}

export function UpcomingEvents(props: UpcomingEvents) {
    const { name, time, date, } = props;

    return <>
        <tr>
            <td style={{ width: '400px', padding: '10px' }}>{name}</td>
            <td style={{ width: '100px', padding: '10px' }}>{time}</td>
        {date.length === 0 ? <>
            <td style={{ width: '50px', padding: '10px' }}>{date}</td>
        </>: <td style={{ width: '50px', padding: '10px', color: 'red' }}>TBA</td>}
        </tr>
    </>
}