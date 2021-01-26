import Markdown from 'markdown-to-jsx'
import { EmailListForm } from '../Connect/EmailListForm/EmailListForm'

export const Footer = ({footerData}) => {
  return (
    <div className="footer">
      <div className="text-and-form-container">
        <Markdown className="footer-text">{footerData.text}</Markdown>
        <EmailListForm isFooter={true}/>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div className="accepted-payments">
            <img src={'/images/accepted-payments.jpg'}></img>
          </div>
          <div className="social-and-copyright">
            <div className="instagram-logo-container"><img src={'/images/instagram-logo.png'} className="instagram-logo"></img></div>
            <div className="copyright">© 2021, The Genesis Box Powered by Shopify</div>
          </div>
        </div>
      </div>
    </div>
  );
};