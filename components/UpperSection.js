import Container from '@mui/material/Container'
import Navbar from './Navbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import Image from 'next/image'
import LetItBee from '../images/letitbee.svg'
import BigBee from '../images/bigbee.png'
import ArrowY from '../images/ArrowY.svg'
import Discord from '../images/DiscordIcon.svg'
import Twitter from '../images/TwitterIcon.svg'
import Instagram from '../images/InstagramIcon.svg'
import Link from '../src/Link'
import styles from '../styles/UpperSection.module.css'

const UpperSection = () => {
  return (
    <Container
      id={styles.upperSection}
      maxWidth='false'
      sx={{
        minHeight: '1037px',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <Navbar />
      <Box
        maxWidth='1530px'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flex: '1',
          alignItems: 'center',
          maxHeight: '749px',
          background:
            ' linear-gradient(81.29deg, #FFA232 11.63%, #FFD977 80.12%)',
          borderRadius: '32px',
        }}>
        <div id={styles.letitbee}>
          <Image src={LetItBee} alt='' />
        </div>
        <Box
          id={styles.honey}
          maxWidth='911.7px'
          sx={{
            height: '552px',
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            position: 'absolute',
            marginTop: '52px',
          }}>
          <Typography
            sx={{
              fontFamily: 'Clash Grotesk',
              fontSize: '72px',
              maxHeight: '97px',
              fontWeight: '700',
              letterSpacing: '0.005rem',
              textAlign: 'center',
            }}>
            Lorem ipsum
          </Typography>
          <Box
            maxWidth='911.7px'
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100vw',
              height: '183px',
              background: '#DB8216',
              border:
                '4px solid linear-gradient(180deg, #DB8116 0%, #F6AD0B 100%)',
              borderRadius: '32px',
              transform: 'rotate(-2.41deg)',
            }}>
            <Typography
              sx={{
                marginBottom: '68px',
                alignSelf: 'center',
                height: '151px',
                textAlign: 'center',
                fontSize: '150.52px',
                fontWeight: '700',
                fontFamily: 'Clash Grotesk',
                color: 'white',
                transform: 'rotate(2.41deg)',
                letterSpacing: '0.005rem',
              }}>
              Let it BEE!
            </Typography>
          </Box>
          <Button
            sx={{
              alignSelf: 'center',
              width: '207px',
              height: '56px',
              fontSize: '16px',
              fontFamily: 'Satoshi',
              letterSpacing: '0.01em',
              color: '#FFDE73',
              background: '#8A4A00',
              boxShadow: '0px 8px 16px #E18821',
              borderRadius: '100px',
              transform: 'translateY(-15px)',
            }}>
            EXPLORE NOW!
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            margin: 'auto 0 30px',
            width: '100%',
            paddingX: '37px',
            justifyContent: 'space-between',
          }}>
          <Stack direction='row'>
            <IconButton aria-label='scroll down'>
              <Image src={ArrowY} />
            </IconButton>
            <Typography
              sx={{
                alignSelf: 'center',
                fontSize: '12px',
                fontWeight: '600',
                fontFamily: 'Montserrat',
                letterSpacing: '0.24em',
                color: '#6C3900',
                paddingX: '8px',
              }}>
              SCROLL DOWN
            </Typography>
          </Stack>
          <Stack direction='row' justifyContent='space-between' width='196px'>
            <Link href='https://discord.com/'>
              <IconButton aria-label='discord'>
                <Image src={Discord} />
              </IconButton>
            </Link>
            <Link href='https://twitter.com/'>
              <IconButton aria-label='twitter'>
                <Image src={Twitter} />
              </IconButton>
            </Link>
            <Link href='https://instagram.com/'>
              <IconButton aria-label='instagram'>
                <Image src={Instagram} />
              </IconButton>
            </Link>
          </Stack>
        </Box>
      </Box>

      <div id={styles.bigBee}>
        <Image src={BigBee} alt='' />
      </div>
    </Container>
  )
}
export default UpperSection
