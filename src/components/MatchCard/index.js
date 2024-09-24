// matchCard
// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {result, competingTeam, competingTeamLogo, matchStatus} = matchDetails

  const winOrLoss = matchStatus === 'Won' ? 'green-font' : 'red-font'

  return (
    <li className="matchcard-list">
      <img
        src={competingTeamLogo}
        className="competing-team-logo-img"
        alt={`competing team ${competingTeam}`}
      />
      <p className="heading41">{competingTeam}</p>
      <p className="paragraph51">{result}</p>
      <p className={`${winOrLoss}`}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
