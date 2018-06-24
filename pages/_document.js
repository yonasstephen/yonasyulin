// _document is only rendered on the server side and not on the client side
// Event handlers like onClick can't be added to this file

import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  componendDidMount() {
    window.addeventasync = function() {
      addeventatc.settings({
        appleical: { show: true, text: 'Apple Calendar' },
        google: { show: true, text: 'Google <em>(online)</em>' },
        outlook: { show: true, text: 'Outlook' },
        outlookcom: {
          show: true,
          text: 'Outlook.com <em>(online)</em>'
        },
        yahoo: { show: true, text: 'Yahoo <em>(online)</em>' }
      })
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <title>Yonas & Yulin</title>
          <link rel="stylesheet" href="/_next/static/style.css" />
          <link rel="stylesheet" href="/static/style.css" />
          {this.props.styleTags}

          {/* <!-- AddEvent script --> */}
          <script
            type="text/javascript"
            src="https://addevent.com/libs/atc/1.6.1/atc.min.js"
            async
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
