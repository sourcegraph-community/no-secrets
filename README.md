# 🤫 No Secrets!

Find secrets in your repos before others do. [Try it](https://sourcegraph-community.github.io/secrets-bookmarklet-demo/).

## Peace of Mind

Find potentially sensitive files pushed to public repositories on GitHub. Searches for the following secrets:

✅ AWS

✅ Google Cloud (GCP)

✅ Mailchimp

✅ Mailgun

✅ RSA, DSA, EC, PGP Private Keys

✅ Stripe

✅ Twilio

✅ GitHub

✅ Facebook

✅ Twitter

✅ YouTube

### Coming Soon

🟡 Braintree

🟡 Heroku

🟡 Square

## Development (WIP)

### Web

 ```shell
$ npm install --global http-server
$ http-server
$ http://127.0.0.1:8080
```
> TODO: Replace with Jekyll

### Generate Bookmarklet JavaScript

1. Copy everything in `sourcegraph-console-query.txt`
1. Paste query in [search console](https://sourcegraph.com/search/console?q=repo%3Agithub.com%2Fsourcegraph-community%2Fsecrets-bookmarklet-demo%24%0A%0A%2F%2F%20Filter%20out%20any%20files%20you%20don%27t%20want%0A-file%3A(index.html%7Csourcegraph-console-query.txt%7CREADME.md%7Cbookmarklet.js)%0A%0Apatterntype%3Aregex%0A%0A%2F%2F%20Use%20this%20list%20of%20known%20patterns%20(from%20truffleHog)%20and%20add%20your%20own!%0A%2F%2F%20Slack%20Token%0A(xox%5Bpborsa%5D-%5B0-9%5D%7B12%7D-%5B0-9%5D%7B12%7D-%5B0-9%5D%7B12%7D-%5Ba-z0-9%5D%7B32%7D)%20or%0A%0A%2F%2F%20RSA%20private%20key%0A-----BEGIN%20RSA%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20SSH%20(DSA)%20private%20key%0A-----BEGIN%20DSA%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20SSH%20(EC)%20private%20key%0A-----BEGIN%20EC%20PRIVATE%20KEY-----%20or%0A%0A%2F%2F%20PGP%20private%20key%20block%0A-----BEGIN%20PGP%20PRIVATE%20KEY%20BLOCK-----%20or%0A%0A%2F%2F%20AWS%20API%20Key%0A((%3F%3AA3T%5BA-Z0-9%5D%7CAKIA%7CAGPA%7CAIDA%7CAROA%7CAIPA%7CANPA%7CANVA%7CASIA)%5BA-Z0-9%5D%7B16%7D)%20or%0A%0A%2F%2F%20Amazon%20MWS%20Auth%20Token%0Aamzn%5C%5C.mws%5C%5C.%5B0-9a-f%5D%7B8%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B4%7D-%5B0-9a-f%5D%7B12%7D%20or%0A%0A%2F%2F%20AWS%20API%20Key%0AAKIA%5B0-9A-Z%5D%7B16%7D%20or%0A%0A%2F%2F%20AWS%20AppSync%20GraphQL%20Key%0Ada2-%5Ba-z0-9%5D%7B26%7D%20or%0A%0A%2F%2F%20Facebook%20Access%20Token%0AEAACEdEose0cBA%5B0-9A-Za-z%5D%2B%20or%0A%0A%2F%2F%20Facebook%20OAuth%0A%5BfF%5D%5BaA%5D%5BcC%5D%5BeE%5D%5BbB%5D%5BoO%5D%5BoO%5D%5BkK%5D.*%5B%27%7C%5C%22%5D%5B0-9a-f%5D%7B32%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20GitHub%0A%5BgG%5D%5BiI%5D%5BtT%5D%5BhH%5D%5BuU%5D%5BbB%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B35%2C40%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Generic%20API%20Key%0A%5BaA%5D%5BpP%5D%5BiI%5D_%3F%5BkK%5D%5BeE%5D%5ByY%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B32%2C45%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Generic%20Secret%0A%5BsS%5D%5BeE%5D%5BcC%5D%5BrR%5D%5BeE%5D%5BtT%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B32%2C45%7D%5B%27%7C%5C%22%5D%20or%0A%0A%2F%2F%20Google%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Cloud%20Platform%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Cloud%20Platform%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20Drive%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Drive%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20(GCP)%20Service-account%0A%5C%22type%5C%22%3A%20%5C%22service_account%5C%22%20or%0A%0A%2F%2F%20Google%20Gmail%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20Gmail%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Google%20OAuth%20Access%20Token%0Aya29%5C%5C.%5B0-9A-Za-z%5C%5C-_%5D%2B%20or%0A%0A%2F%2F%20Google%20YouTube%20API%20Key%0AAIza%5B0-9A-Za-z%5C%5C-_%5D%7B35%7D%20or%0A%0A%2F%2F%20Google%20YouTube%20OAuth%0A%5B0-9%5D%2B-%5B0-9A-Za-z_%5D%7B32%7D%5C%5C.apps%5C%5C.googleusercontent%5C%5C.com%20or%0A%0A%2F%2F%20Heroku%20API%20Key%0A%5BhH%5D%5BeE%5D%5BrR%5D%5BoO%5D%5BkK%5D%5BuU%5D.*%5B0-9A-F%5D%7B8%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B4%7D-%5B0-9A-F%5D%7B12%7D%20or%0A%0A%2F%2F%20Mailchimp%20API%20Key%0A%5B0-9a-f%5D%7B32%7D-us%5B0-9%5D%7B1%2C2%7D%20or%0A%0A%2F%2F%20Mailgun%20API%20Key%0Akey-%5B0-9a-zA-Z%5D%7B32%7D%20or%0A%0A%2F%2F%20Password%20in%20URL%0A%5Ba-zA-Z%5D%7B3%2C10%7D%3A%2F%2F%20%5B%5E%2F%5C%5Cs%3A%40%5D%7B3%2C20%7D%3A%5B%5E%2F%5C%5Cs%3A%40%5D%7B3%2C20%7D%40.%7B1%2C100%7D%5B%5C%22%27%5C%5Cs%5D%20or%0A%0A%2F%2F%20PayPal%20Braintree%20Access%20Token%0Aaccess_token%5C%5C%24production%5C%5C%24%5B0-9a-z%5D%7B16%7D%5C%5C%24%5B0-9a-f%5D%7B32%7D%20or%0A%0A%2F%2F%20Picatic%20API%20Key%0Ask_live_%5B0-9a-z%5D%7B32%7D%20or%0A%0A%2F%2F%20Slack%20Webhook%0Ahttps%3A%2F%2F%20hooks%5C%5C.slack%5C%5C.com%2Fservices%2FT%5Ba-zA-Z0-9_%5D%7B8%7D%2FB%5Ba-zA-Z0-9_%5D%7B8%7D%2F%5Ba-zA-Z0-9_%5D%7B24%7D%20or%0A%0A%2F%2F%20Stripe%20API%20Key%0Ask_live_%5B0-9a-zA-Z%5D%7B24%7D%20or%0A%0A%2F%2F%20Stripe%20Restricted%20API%20Key%0Ark_live_%5B0-9a-zA-Z%5D%7B24%7D%20or%0A%0A%2F%2F%20Square%20Access%20Token%0Asq0atp-%5B0-9A-Za-z%5C%5C-_%5D%7B22%7D%20or%0A%0A%2F%2F%20Square%20OAuth%20Secret%0Asq0csp-%5B0-9A-Za-z%5C%5C-_%5D%7B43%7D%20or%0A%0A%2F%2F%20Telegram%20Bot%20API%20Key%0A%5B0-9%5D%2B%3AAA%5B0-9A-Za-z%5C%5C-_%5D%7B33%7D%20or%0A%0A%2F%2F%20Twilio%20API%20Key%0ASK%5B0-9a-fA-F%5D%7B32%7D%20or%0A%0A%2F%2F%20Twitter%20Access%20Token%0A%5BtT%5D%5BwW%5D%5BiI%5D%5BtT%5D%5BtT%5D%5BeE%5D%5BrR%5D.*%5B1-9%5D%5B0-9%5D%2B-%5B0-9a-zA-Z%5D%7B40%7D%20or%0A%0A%2F%2F%20Twitter%20OAuth%0A%5BtT%5D%5BwW%5D%5BiI%5D%5BtT%5D%5BtT%5D%5BeE%5D%5BrR%5D.*%5B%27%7C%5C%22%5D%5B0-9a-zA-Z%5D%7B35%2C44%7D%5B%27%7C%5C%22%5D%22%0A%0A%2F%2F%20Not%20from%20truffleHog%0A%0A%2F%2F%20Twitter%20Secret%0A%5B0-9a-zA-Z%5D%7B50%7D%0A%0A%2F%2F%20Twitter%20Bearer%20Token%0AA%7B22%7D%5B0-9a-zA-Z%5D.%7B89%7D%0A%0A%2F%2F%20GitHub%20Token%0Aghp_%5B0-9a-z%5D%7B36%7D).
1. Copy the URL in the address bar
1. Open `bookmarklet.js`
1. Paste the URL on line `9` omitting anything before `%24%0A%0A%`
1. Copy everything in `bookmarklet.js` in to [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker)
1. Click the "Generate Bookmarklet" button
1. Copy the "Output"

### Services

* [Bootstrap 5 via jsDelivr](https://www.bootstrapcdn.com/)
* [Bookmarklet Maker](https://caiorss.github.io/bookmarklet-maker)
* [Sourcegraph Console](https://sourcegraph.com/search/console)
* GitHub Pages

---

<img referrerpolicy="no-referrer-when-downgrade" src="https://static.scarf.sh/a.png?x-pxid=70db69c6-fc62-4290-854f-e17ce3b37300" />
