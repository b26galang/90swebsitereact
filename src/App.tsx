import React from 'react';
import { Buttons } from './buttons';
import { UpcomingEvents } from './upcoming-events';
import { SpeedrunInfo } from './speed-run';
import { Footer } from './footer';
import './style.css';


function App() {
  const speedruns = [
    { game: 'Sonic the Hedgehog', time: '8m 36s', player: 'eandis' },
    { game: 'Super Mario World', time: '41.022s', player: 'FURiOUS' },
    { game: 'Super Mario 64', time: '6m 27s 380ms', player: 'KANNO' },
    { game: 'Banjo-Kazooie', time: '56m 45s', player: '7hornet' },
    { game: 'Star Fox', time: '7m 13s', player: 'JakeD.Snake' },
    { game: 'Spyro the Dragon', time: '37m 57s', player: 'Dayoman' },
    { game: 'Metal Gear Solid', time: '28m 55s', player: 'Tromboncino' },
    { game: 'Resident Evil', time: '35m 07s', player: 'Hamo' }
  ]

  const upcomingEvents = [
    { name: 'Smash Tournament', time: '4pm-10pm', date: '10/1'},
    { name: 'Street Fighter II: The Animated Movie', time: '6pm-8pm', date: '10/7'},
    { name: 'Midnight Release - Legend of Zelda: Ocarina of Time', time: '12am', date: '11/21'},
    { name: 'Board Games', time: '7pm-9pm', date:''}
  ]

  const bodyStyles: React.CSSProperties = {
    fontFamily: "'Noto Sans JP', sans-serif",
    backgroundImage: `url("https://media.istockphoto.com/id/1142640390/vector/pixel-clouds-retro-8-bit-blue-sky-aerial-cloud-pixel-art-background-vector-illustration.jpg?s=612x612&w=0&k=20&c=c72u6ONLuTNhBEKCbCwGBZhgVyHFANhJ9s28M-qw-hE=")`,
    minHeight: "100vh",
    margin: "0px",
  }

  const topTitle: React.CSSProperties = {
    fontFamily: "Luckiest Guy, cursive, sans-serif",
    fontSize: "4rem",
    color: "red"
  }

  const tableStyle: React.CSSProperties = {
    width: "700px",
    height: "200px",
    marginLeft: "30px",
    border: "3px solid black",
    backgroundColor: "yellow",
    color: "blue",
    borderCollapse: "collapse"
  }

  const tableCellStyle: React.CSSProperties = {
    border: "3px solid black",
    borderCollapse: "collapse"
  }

  const eventDiv: React.CSSProperties = {
    float: "right",
    background: "blue",
    width: "500px",
    marginTop: "200px",
    color: "white",
    border: "solid 4px yellow",
    padding: "1rem",
    borderRadius: "10%"
  }

  const UpcomingEventsH2: React.CSSProperties = {
    fontFamily: "Luckiest Guy, cursive, sans-serif",
    fontSize: "3rem",
    color: "orangered",
    textAlign: "center"
  }

  return (
    <body style={bodyStyles}>
      <div>
        <Buttons></Buttons>
        <div style={{ float: 'left', width: '900px' }}>
          <h1 style={topTitle}>World Record Speed Runs</h1>
          <table style={tableStyle}>
            <thead>
              <tr>
                <th style={tableCellStyle}>Game</th>
                <th style={tableCellStyle}>Time</th>
                <th style={tableCellStyle}>Player</th>
              </tr>
            </thead>
            <tbody>
              {speedruns.map(s => <SpeedrunInfo {...s}></SpeedrunInfo>)}
            </tbody>
          </table>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://i.pinimg.com/originals/23/6f/90/236f9077d2e88e70872369ed66515715.png"
              style={{ height: '380px' }} alt="smash characters">
            </img>
          </div>
        </div>
        <div style={eventDiv}>
          <h2 style={UpcomingEventsH2}>Upcoming Events</h2>
          <table>
            {upcomingEvents.map(e => <UpcomingEvents {...e}></UpcomingEvents>)}
          </table>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <img src="https://64.media.tumblr.com/8414f5e3faa5e324033716087b42a7d2/tumblr_mlf1pzBe7p1rfjowdo1_500.gif"
              alt="Kirby running" style={{ height: '100px' }}></img>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </body>
  );
}

export default App;
