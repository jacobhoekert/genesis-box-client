const Mailchimp = require('mailchimp-api-v3');
var md5 = require('md5');

export default async (req, res) => {
  const mailchimp = new Mailchimp(process.env.MAILCHIMP_API_KEY);
  if (req.method === 'POST') {
    try {
      const subscriberHash = md5(req.body.email);

      mailchimp.get(`/lists/179cc6b0e3/members/${subscriberHash}`)
        // if email is found in mailchimp, do nothing
        .then((result) => {
          res.status(200).send("Done");
        })
        // else if email is not found in mailchimp, add the member
        .catch((err) => {
          mailchimp.post('/lists/179cc6b0e3/members', {
            email_address : req.body.email,
            status : 'subscribed',
            merge_fields: {
              "FNAME": req.body.firstName,
              "LNAME": req.body.lastName
            }
          })
            .then((result) => {
              res.status(200).send("Done");
            })
            .catch((err) => {
              console.log(err)
            })
        })
    } catch (error) {
      console.log(error);
    }
  } else {
    console.log('/api/subscribeToMailChimp only handles post requests')
  }
}