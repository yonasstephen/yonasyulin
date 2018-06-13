import Head from 'next/head';
import Link from 'next/link';
import styled from 'styled-components';

const RSVPButton = styled.button`
  background-color: #ffdcd3;
  border: none;
  box-shadow: 0 4px 6px rgba(50,50,93,.11), 0 1px 3px rgba(0,0,0,.08);
  padding: 1em 2em;
  font-weight: bold;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 7px 14px rgba(50,50,93,.1), 0 3px 6px rgba(0,0,0,.08);
  }
`

export default () =>
<div style={styles.container}>
  <Head>
    <title>Yonas & Yulin</title>
    <link href="/static/style.css" rel="stylesheet" />
  </Head>
  <div style={styles.content0}>
    <div style={styles.title}>Yonas & Yulin</div>
  </div>
  <div style={styles.content1}>
    <img style={
      Object.assign({}, styles.floral, {left: '25%'}
      )} src="/static/img/floral1.png"
    />
    <img style={
      Object.assign({}, styles.floral, {right: '25%', transform: 'scaleX(-1)'}
      )} src="/static/img/floral1.png"
    />
    <div style={styles.subtitle}>Our Wedding</div>
    <div style={styles.weddingDetails}>
      <div style={Object.assign({}, styles.card, { gridColumn: '3 / span 2', textAlign: 'right'})}>
        <div>Holy Matrimony</div>
        <div>Saturday, 8 September 2018</div>
        <div>11:00 AM</div>
        <div>Bukit Batok Presbyterian Church</div>
        <div>West Sanctuary, 2nd Floor</div>
        <div>21 Bukit Batok Street 11</div>
        <div>Singapore 659673</div>
      </div>
      <div style={styles.divider}></div>
      <div style={Object.assign({}, styles.card, { gridColumn: '6 / span 2'})}>
        <div>Wedding Reception</div>
        <div>Saturday, 15 September 2018</div>
        <div>7:00 PM</div>
        <div>Hotel Ciputra</div>
        <div>Dian Ballroom, 6th Floor</div>
        <div>Jl. Letnan Jenderal S. Parman</div>
        <div>West Jakarta 11470</div>
      </div>
      <div style={styles.rsvpButtonContainer}>
        <Link href='/rsvp'>
          <RSVPButton type='button' onClick=''>RSVP</RSVPButton>
        </Link>
      </div>
      <img style={styles.floral3} src="/static/img/floral3.png"/>
    </div>
  </div>
  <div style={styles.content2}>
    <div style={styles.subtitle}>Our Story</div>
  </div>
</div>

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
  content0: {
    gridArea: 'content0',
    backgroundImage: 'url("https://images.unsplash.com/photo-1489094889106-39069373d6ef?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=62e496e0a9d0cec2476c2896f61df1a4&auto=format&fit=crop&w=1952&q=80")'
  },
  content1: {
    gridArea: 'content1',
    paddingTop: '2em'
  },
  content2: {
    gridArea: 'content2',
    backgroundColor: '#ffdcd3'
  },
  title: {
    color: 'black',
    fontFamily: 'great_vibes,adlery_swash',
    fontSize: '5em',
    textAlign: 'center',
    marginTop: '2em',
  },
  subtitle: {
    fontFamily: 'adlery_swash',
    fontSize: '5em',
    textAlign: 'center',
    marginTop: '15%',
  },
  image: {
    width: '100%',
  },
  floral: {
    width: '30%',
    position: 'absolute',
    zIndex: '-1',
  },
  floral2: {
    width: '50%'
  },
  weddingDetails: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr) 1px repeat(4, 1fr)',
    gridTemplateRows: '1fr 2em 5em',
    gridGap: '1em',
  },
  card: {
  },
  divider: {
    borderLeft: '1px solid black',
  },
  rsvpButtonContainer: {
    gridColumn: '3 / span 5',
    textAlign: 'center',
  },
  floral3: {
    gridColumn: '3 / span 5',
    width: '100%',
    transform: 'rotate(180deg)'
  }
}
