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

export default () => (
  <div style={{ height: '100%' }}>
    <section style={styles.background} />
    <div style={styles.container}>
      <section style={styles.content0}>
        <Title>Yonas & Yulin</Title>
      </section>
      <section style={styles.content1}>
        <Subtitle>Our Story</Subtitle>
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
    gridTemplateRows: '100% 100% 100%',
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
    paddingTop: '2em'
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
