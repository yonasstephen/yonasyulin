import Link from 'next/link'
import styled from 'styled-components'
import moment from 'moment'
import countdown from 'countdown'
import momentCountdown from 'moment-countdown'

import Button from '../components/button'

const Title = styled.h1`
  color: black;
  font-family: great_vibes, adlery_swash;
  font-size: 5em;
  font-weight: lighter;
  text-align: center;
  margin-top: 2em;

  @media (max-width: 414px) {
    font-size: 4em;
    margin-top: 1.5em;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }

  @media (max-width: 320px) {
    font-size: 3em;
  }
`

const Subtitle = styled.h1`
  font-family: adlery_swash;
  font-size: 5em;
  text-align: center;

  @media (max-width: 414px) {
    font-size: 4.5em;
  }

  @media (max-width: 375px) {
    font-size: 4em;
  }

  @media (max-width: 375px) {
    font-size: 3.5em;
  }
`

const Story = styled.p`
  color: #6f6e77;
  font-family: tajawal, sans-serif;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: auto;
  max-width: 750px;
  padding: 0 2em;
  text-align: center;

  @media (max-width: 414px) {
    padding: 0 1em;
  }
`

const Floral = styled.img`
  width: 50%;
  max-width: 35em;
  min-width: 20em;
  left: 50%;
  transform: translate3d(-50%, -50%, 0) rotate(180deg);
  -webkit-transform: translate3d(-50%, -50%, 0) rotate(180deg);
  -ms-transform: translate3d(-50%, -50%, 0) rotate(180deg);
  position: absolute;
`

const Countdown = styled.div`
  color: #c7a298;
  font-size: 1.5em;
  text-align: center;
`

const CountdownNumber = styled.span`
  color: #e47077;
  font-size: 1.2em;
  font-weight: bold;
  margin: 0 0.2em;
`

const WeddingDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  grid-gap: 1em;
  margin: auto;
  max-width: 700px;
  padding: 1em;

  @media (max-width: 414px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
`

const Card = styled.div`
  background: #c7e0c5;
  border-radius: 4px;
  box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
  font-family: tajawal, sans-serif;
  line-height: 1.5em;
  padding: 1em;
  position: relative;
  overflow: hidden;
  z-index: 0;

  @media (max-width: 414px) {
    font-size: 1.2em;
  }

  @media (max-width: 375px) {
    font-size: 1.2em;
  }
`

const CardTitle = styled.h3`
  font-family: berkshire_swash;
  font-size: 1.5em;
  font-weight: bold;
  margin: 0.5em 0;
`

const CardIcon = styled.img`
  position: absolute;
  width: 7em;
  z-index: -1;

  @media (max-width: 375px) {
    width: 6em;
  }

  @media (max-width: 320px) {
    width: 5em;
  }
`

const WeddingVenue = styled.a`
  color: #33771f;
  font-weight: bold;
  text-decoration-color: #33771f;
  z-index: 2;
`

const WeddingAddress = styled.div`
  color: #33771f;
`

const GithubLink = styled.div`
  text-align: center;
  margin-bottom: 1em;
`

export default () => {
  const timeleft = moment('2018-09-08').countdown()
  return (
    <div style={{ height: '100%' }}>
      <section style={styles.background} />
      <div style={styles.container}>
        <section style={styles.content0}>
          <Title>Yonas & Yulin</Title>
        </section>
        <section style={styles.content1}>
          <Subtitle>Our Story</Subtitle>
          <Story>
            We met in the summer of 2010 when both were freshmen at Nanyang
            Technological University Singapore. Two persons from the same
            hometown met for the first time in the tiny red dot pursuing their
            dreams. It was not straight up mutual interest since the first meet,
            our story took the longer route.
            <br />
            <br />
            But eventually love found its way 2 years later when we officially
            committed to each other. Ever since then millions of tears and
            laughters have been shared, 3 continents have we conquered,
            thousands of "what should we eat for dinner" have been answered.
            <br />
            <br />
            Fast forward to a little over a year ago, Yonas proposed to Yulin at
            604 metres above sea level, over 10 thousands kilometres away from
            home and No(r)way... she said YES! This wedding will definitely be
            one of the most important moments in our life and we want to share
            the memories with people that we care the most.
            <br />
            <br />
            <img src="/static/img/heart.svg" style={{ width: '1.5em' }} />
          </Story>
        </section>
        <section style={styles.content2}>
          <Floral src="/static/img/floral3.png" />
          <Subtitle style={{ paddingTop: '1em', marginBottom: '.2em' }}>
            Our Wedding
          </Subtitle>
          <Countdown>
            <CountdownNumber>{timeleft.months}</CountdownNumber>
            months
            <CountdownNumber>{timeleft.days}</CountdownNumber>
            days to eternity
          </Countdown>
          <WeddingDetails>
            <Card venue="sg" style={{ textAlign: 'right' }}>
              <CardIcon
                src="/static/img/singapore.svg"
                style={{ left: '-1.5em' }}
              />
              <CardTitle>Holy Matrimony</CardTitle>
              <div>Sat, 8 September 2018</div>
              <div style={styles.weddingTime}>11:00 AM</div>
              <WeddingVenue
                href="https://www.google.com/maps/place/Bukit+Batok+Presbyterian+Church/@1.3492122,103.7409816,17z/data=!3m1!4b1!4m5!3m4!1s0x31da103c8b347d05:0xf437a7b7d5d020f6!8m2!3d1.3492122!4d103.7431703"
                target="_blank"
              >
                Bukit Batok Presbyterian Church
              </WeddingVenue>
              <WeddingAddress>West Sanctuary, 2nd Floor</WeddingAddress>
              <WeddingAddress>21 Bukit Batok Street 11</WeddingAddress>
              <WeddingAddress>Singapore 659673</WeddingAddress>
            </Card>
            <Card venue="jkt">
              <CardIcon
                src="/static/img/jakarta.svg"
                style={{ right: '-1.5em' }}
              />
              <CardTitle>Wedding Reception</CardTitle>
              <div>Sat, 15 September 2018</div>
              <div style={styles.weddingTime}>7:00 PM</div>
              <WeddingVenue
                href="https://www.google.com/maps/place/Hotel+Ciputra+Jakarta/@-6.168163,106.7842292,17z/data=!3m1!4b1!4m7!3m6!1s0x2e69f60404a5e893:0x6f9b862724e130c4!5m1!1s2018-06-25!8m2!3d-6.168163!4d106.7864179"
                target="_blank"
              >
                Hotel Ciputra
              </WeddingVenue>
              <WeddingAddress>Dian Ballroom, 6th Floor</WeddingAddress>
              <WeddingAddress>Jl. Letnan Jenderal S. Parman</WeddingAddress>
              <WeddingAddress>West Jakarta 11470</WeddingAddress>
            </Card>
          </WeddingDetails>
          <div style={styles.rsvpButtonContainer}>
            <Link href="/rsvp">
              <Button type="button" onClick="" style={styles.rsvpButton}>
                RSVP
              </Button>
            </Link>
          </div>
        </section>
        <footer style={styles.content3}>
          <div style={{ fontSize: '1.5em', marginTop: '1em' }}>
            #YonasYulin #TheJourneYY
          </div>
          <div style={{ color: 'gray', margin: '.5em' }}>
            Made with&nbsp;
            <img src="/static/img/like.svg" style={{ height: '.8em' }} /> by
            yonas
          </div>
          <GithubLink>
            <iframe
              src="https://ghbtns.com/github-btn.html?user=yonasstephen&repo=yonasyulin&type=star&count=true"
              frameBorder="0"
              scrolling="0"
              width="72px"
              height="20px"
            />
          </GithubLink>
        </footer>
      </div>
    </div>
  )
}
const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '100% repeat(3, auto)',
    gridTemplateAreas: `
      'content0'
      'content1'
      'content2'
      'content3'
    `
  },
  background: {
    backgroundImage: 'url("/static/img/0.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    position: 'fixed',
    width: '100%',
    height: '100%',
    zIndex: '-1'
  },
  content0: {
    gridArea: 'content0'
  },
  content1: {
    backgroundColor: '#e1efdb',
    gridArea: 'content1',
    paddingTop: '2em',
    paddingBottom: '10em'
  },
  content2: {
    gridArea: 'content2',
    backgroundColor: '#ffdcd3',
    paddingBottom: '4em'
  },
  content3: {
    gridArea: 'content3',
    backgroundColor: 'rgba(255,255,255,0.8)',
    textAlign: 'center'
  },
  image: {
    width: '100%'
  },
  weddingTime: {
    fontFamily: 'tajawal',
    fontWeight: 'bold'
  },
  rsvpButtonContainer: {
    textAlign: 'center'
  },
  rsvpButton: {
    backgroundColor: '#d78380',
    color: '#ffdcd3',
    fontSize: '1em'
  }
}
