import { ConnectTitle } from '../ConnectTitle/ConnectTitle'
import { ConnectWidget } from '../ConnectWidget/ConnectWidget'
import { EmailListForm } from '../EmailListForm/EmailListForm'
import { TestimonyPrayerForm } from '../TestimonyPrayerForm/TestimonyPrayerForm'
import { SendMessageForm } from '../SendMessageForm/SendMessageForm'

export const Connect = props => {
  return (
    <div id="connect">
      <ConnectTitle />
      <div className="image-ribbon">
        <div className="top-widget-container">
          <ConnectWidget title="JOIN OUR EMAIL COMMUNITY." formComponent={<EmailListForm />}/>
        </div>
      </div>
      <div className="bottom-widgets-container">
        <ConnectWidget title="SHARE A TESTIMONY OR PRAYER REQUEST." formComponent={<TestimonyPrayerForm />}/>
        <ConnectWidget title="CONTACT US." formComponent={<SendMessageForm />}/>
      </div>
      <img className="connect-blue-logo" src="/images/genesis-blue-circle.png"/>
    </div>
  )
}