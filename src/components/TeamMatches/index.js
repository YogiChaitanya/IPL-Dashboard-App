// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'
import './index.css'

const teamMatchesApiUrl = `https://apis.ccbp.in/ipl/`

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormatedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`${teamMatchesApiUrl}${id}`)
    const fetchedData = await response.json()
    console.log(fetchedData)

    const formatedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatch: this.getFormatedData(fetchedData.latest_match_details),
      recentMatches: fetchedData.recent_matches.map(eachMatch =>
        this.getFormatedData(eachMatch),
      ),
    }

    this.setState({
      teamMatchesData: formatedData,
      isLoading: false,
    })
  }

  renderTeamMatches = () => {
    const {teamMatchesData} = this.state
    const {teamBannerUrl, latestMatch, recentMatches} = teamMatchesData
    return (
      <div>
        <img
          src={teamBannerUrl}
          className="team-banner-img"
          alt="team banner"
        />

        <p className="paragraph91">Latest Matches</p>
        <LatestMatch latestMatchData={latestMatch} />

        <ul className="matchcard-list-container">
          {recentMatches.map(eachMatch => (
            <MatchCard key={eachMatch.id} matchDetails={eachMatch} />
          ))}
        </ul>
      </div>
    )
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  renderLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="Oval" color="#ffffff" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <div className={`team-matches-container ${this.getRouteClassName()}`}>
        {isLoading ? this.renderLoader() : this.renderTeamMatches()}
      </div>
    )
  }
}

export default TeamMatches
