import Link from 'next/link'
import styled from 'styled-components'

import Button from '../components/button'

const Title = styled.h1`
  color: black;
  font-family: great_vibes, adlery_swash;
  font-size: 5em;
  font-weight: lighter;
  text-align: center;
  margin-top: 2em;

  @media (max-width: 414px) {
  }
`

const Subtitle = styled.h1`
  font-family: adlery_swash;
  font-size: 5em;
  text-align: center;
`

const Story = styled.p`
  color: #6f6e77;
  font-size: 1.2em;
  line-height: 1.5em;
  margin: auto;
  max-width: 750px;
  padding: 0 2em;
  text-align: center;

  @media (max-width: 414px) {
  }
`

export default () => (
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
          Technological University Singapore. Two persons from the same hometown
          met for the first time in the tiny red dot pursuing their dreams. It
          was not straight up mutual interest since the first meet, our story
          took the longer route.
          <br />
          <br />
          But eventually love finds its way 2 years later when we officially
          committed to each other. Ever since then millions of tears and
          laughters have beens shared, 3 continents have we conquered, thousands
          of "what should we eat for dinner" have been answered.
          <br />
          <br />
          Fast forward to a little over a year ago, Yonas proposed to Yulin at
          604 metres above sea level, over 10 thousands kilometres away from
          home and No(r)way... she said YES! This wedding will definitely be one
          of the most important moments in our life and we want to share the
          memories with people that we care the most.
          <br />
          <br />
          &hearts;
        </Story>
      </section>
      <section style={styles.content2}>
        <img style={styles.floral} src="/static/img/floral3.png" />
        <Subtitle style={{ paddingTop: '1em' }}>Our Wedding</Subtitle>
        <div style={styles.weddingDetails}>
          <div
            style={Object.assign({}, styles.card, {
              gridColumn: '3 / span 2',
              textAlign: 'right'
            })}
          >
            <div>Holy Matrimony</div>
            <div>Saturday, 8 September 2018</div>
            <div>11:00 AM</div>
            <div>Bukit Batok Presbyterian Church</div>
            <div>West Sanctuary, 2nd Floor</div>
            <div>21 Bukit Batok Street 11</div>
            <div>Singapore 659673</div>
          </div>
          <div style={styles.divider} />
          <div
            style={Object.assign({}, styles.card, { gridColumn: '6 / span 2' })}
          >
            <div>Wedding Reception</div>
            <div>Saturday, 15 September 2018</div>
            <div>7:00 PM</div>
            <div>Hotel Ciputra</div>
            <div>Dian Ballroom, 6th Floor</div>
            <div>Jl. Letnan Jenderal S. Parman</div>
            <div>West Jakarta 11470</div>
          </div>
          <div style={styles.rsvpButtonContainer}>
            <Link href="/rsvp">
              <Button type="button" onClick="" style={styles.rsvpButton}>
                RSVP
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  </div>
)

const styles = {
  container: {
    height: '100%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridTemplateRows: '100% auto 100%',
    gridTemplateAreas: `
      'content0'
      'content1'
      'content2'
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
    backgroundColor: '#ffdcd3'
  },
  subtitle: {},
  image: {
    width: '100%'
  },
  floral: {
    width: '50%',
    maxWidth: '35em',
    minWidth: '25em',
    left: '50%',
    transform: 'translate3d(-50%, -50%, 0) rotate(180deg)',
    position: 'absolute'
  },
  weddingDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr) 1px repeat(4, 1fr)',
    gridTemplateRows: '1fr 2em 5em',
    gridGap: '1em'
  },
  card: {},
  divider: {
    borderLeft: '1px solid black'
  },
  rsvpButtonContainer: {
    gridColumn: '3 / span 5',
    textAlign: 'center'
  },
  rsvpButton: {
    backgroundColor: '#d78380',
    color: '#ffdcd3'
  }
}
