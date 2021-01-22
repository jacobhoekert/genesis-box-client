export const ConnectWidget = props => {
  return (
    <div className="connect-widget">
      <div className="title-container">
        <h2 className={props.title == "CONTACT US." ? "title" : "testimony-title" }>{props.title}</h2>
      </div>
      <div>{props.formComponent}</div>
    </div>
  )
}