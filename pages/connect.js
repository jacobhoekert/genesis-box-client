import Head from 'next/head'
import { ConnectTitle } from '../components/Connect/ConnectTitle/ConnectTitle'
import { ConnectWidget } from '../components/Connect/ConnectWidget/ConnectWidget'
import { HeaderImage } from '../components/HeaderImage/HeaderImage'
import { Navbar } from '../components/Navbar/Navbar'
import { SendMessageForm } from '../components/Connect/SendMessageForm/SendMessageForm'
import { EmailListForm } from '../components/Connect/EmailListForm/EmailListForm'

export default function ConnectPage({data}) {
  return (
    <>
      <Head>
        <title>The Genesis Box</title>
      </Head>
      <HeaderImage imagePath='/images/montana-122.jpg' height='340px'/>
      <Navbar />
      <ConnectTitle />
      <ConnectWidget title="JOIN OUR EMAIL COMMUNITY." formComponent={<EmailListForm />}/>
      <ConnectWidget title="CONTACT US." formComponent={<SendMessageForm />}/>
    </>
  )
}

// export async function getStaticProps(){
//   const res = await StrapiApi.get('/why-genesis')
//   const data = res.data;
//   console.log(data);
//   return {
//     props: {
//       data
//     }
//   }
// }
