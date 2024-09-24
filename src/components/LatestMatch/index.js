// Write your code here
import './index.css'

// doubt2 how to get the matchcard data from matchDetails
const LatestMatch = props => {
  const {latestMatchData} = props
  const {
    umpires,
    result,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
  } = latestMatchData

  return (
    <li className="lastmatch-card-list">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>

      <img
        src={competingTeamLogo}
        className="competing_team_logo"
        alt={`latest match ${competingTeam}`}
      />

      <div>
        <h1>First Innings</h1>
        <p>{firstInnings}</p>

        <h1>Second Innings</h1>
        <p>{secondInnings}</p>

        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>

        <h1>Umpires</h1>
        <p>{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
