// Write your code here
import {Link} from 'react-router-dom'
import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, id, teamImageUrl} = teamDetails

  return (
    <li className="list-card-team">
      <Link to={`/team-matches/${id}`} className="item-link">
        <img src={teamImageUrl} className="team-img" alt={name} />
        <p className="team-name">{name}</p>
      </Link>
    </li>
  )
}

export default TeamCard
