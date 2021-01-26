export const Mission = ({missionStatement}) => {
  return (
    <div id="mission">
      <div className="blob-container">
        <img className="blob" src="/images/blob1.png"/>
        <div className="mission-text-container">
          <h2 className="mission-title">our genesis mission</h2>
          <p className="mission-text">{missionStatement}</p>
        </div>
      </div>
    </div>
  )
}