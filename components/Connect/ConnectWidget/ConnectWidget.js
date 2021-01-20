export const ConnectWidget = props => {
  return (
    <div className="connect-widget">
      <h2 className="title">{props.title}</h2>
      <div>{props.formComponent}</div>
    </div>
  )
}