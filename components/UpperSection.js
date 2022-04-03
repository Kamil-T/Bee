import Container from '@mui/material/Container'
import Navbar from './Navbar'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack'
import IconButton from '@mui/material/IconButton'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Image from 'next/image'
import LetItBee from '../images/letitbee.svg'
import BigBee from '../images/bigbee.png'
import ArrowIcon from './ArrowIcon'
import Discord from '../images/DiscordIcon.svg'
import Twitter from '../images/TwitterIcon.svg'
import Instagram from '../images/InstagramIcon.svg'
import styles from '../styles/UpperSection.module.css'

const UpperSection = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Container
      id={styles.upperSection}
      maxWidth='false'
      sx={{
        minHeight: { xs: '185vw', sm: '1000px', md: '1037px' },
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      }}>
      <Navbar />
      <Box
        alignSelf='center'
        sx={{
          maxWidth: { xs: '100vw', sm: '1530px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: '1',
          maxHeight: { xs: '145vw', sm: '749px' },
          background:
            ' linear-gradient(81.29deg, #FFA232 11.63%, #FFD977 80.12%)',
          borderRadius: '32px',
        }}>
        <Box marginTop='33px' sx={{ maxWidth: '100vw' }}>
          <Image src={LetItBee} alt='' />
        </Box>
        <Box
          id={styles.honey}
          maxWidth='100%'
          alignItems='center'
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
              fontSize: { xs: '35px', sm: '60px', md: '64px', lg: '72px' },
              maxHeight: '97px',
              fontWeight: '700',
              letterSpacing: '0.005rem',
              textAlign: 'center',
            }}>
            Lorem ipsum
          </Typography>
          <Box maxWidth='100%' display='flex' justifyContent='center'>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                maxWidth: {
                  xs: '85%',
                  sm: '85%',
                  md: '750px',
                  lg: '911px',
                },
                width: '100vw',
                background: '#DB8216',
                border:
                  '4px solid linear-gradient(180deg, #DB8116 0%, #F6AD0B 100%)',
                borderRadius: '32px',
                transform: 'rotate(-2.41deg)',
              }}>
              <Typography
                sx={{
                  alignSelf: 'center',
                  textAlign: 'center',
                  fontSize: {
                    xs: '50px',
                    sm: '85px',
                    md: '100px',
                    lg: '150.5px',
                  },
                  lineHeight: '109%',
                  fontWeight: '700',
                  fontFamily: 'Clash Grotesk',
                  color: 'white',
                  transform: 'rotate(2.41deg)',
                  letterSpacing: '0.005rem',
                }}>
                Let it BEE!
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              alignSelf: 'center',
              padding: '1em 2em',
              fontSize: { sx: '12px', sm: '14px', md: '16px' },
              fontFamily: 'Satoshi',
              letterSpacing: '0.01em',
              color: '#FFDE73',
              background: '#8A4A00',
              boxShadow: '0px 8px 16px #E18821',
              borderRadius: '100px',
              transform: { xs: 'translateY(-5px)', sm: 'translateY(-15px)' },
              '&:hover': { backgroundColor: 'rgba(138, 74, 0, 0.85)' },
            }}>
            EXPLORE NOW!
          </Button>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: {
              xs: '35vw 0 0',
              sm: '150px 0 0',
              md: 'auto 0 250px',
              lg: 'auto 0 30px',
            },
            width: '100%',
            paddingX: '37px',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignSelf: 'center',
          }}>
          {matches && (
            <Stack direction='row'>
              <IconButton href='#beesUtilities' aria-label='scroll down'>
                <ArrowIcon />
              </IconButton>
              <Typography
                sx={{
                  alignSelf: 'center',
                  textAlign: 'center',
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
          )}
          <Stack
            justifyContent='space-between'
            width='196px'
            direction='row'
            sx={{
              alignItems: { xs: 'flex-end', sm: 'space-between' },
            }}>
            <IconButton href='https://discord.com/' aria-label='discord'>
              <Image src={Discord} />
            </IconButton>
            <IconButton href='https://twitter.com/' aria-label='twitter'>
              <Image src={Twitter} />
            </IconButton>
            <IconButton href='https://instagram.com/' aria-label='instagram'>
              <Image src={Instagram} />
            </IconButton>
          </Stack>
        </Box>
      </Box>
      <Box
        id={styles.bigBee}
        alignSelf='center'
        position='absolute'
        bottom='-10px'
        sx={{ maxWidth: { xs: '75%', sm: '100%' } }}>
        <Image src={BigBee} alt='' />
      </Box>
    </Container>
  )
}
export default UpperSection
