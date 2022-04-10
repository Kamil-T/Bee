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
import UpperSectionBg from '../images/UpperSectionBg.svg'
import LetItBee from '../images/letitbee.svg'
import Honey from '../images/Honey.svg'
import BigBee from '../images/bigbee.png'
import MintBeeBg from '../images/mintBeeBg.svg'
import beeGlasses from '../images/beeglasses.png'
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
      maxWidth='false'
      sx={{
        minHeight: { xs: '195vw', sm: '1000px', md: '1037px' },
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundImage: `url(${UpperSectionBg.src})`,
        backgroundPosition: 'center top',
      }}>
      <Navbar />
      <Box
        zIndex='10'
        display='flex'
        flexDirection='column'
        alignItems='center'
        flex='1'
        alignSelf='center'
        borderRadius='32px'
        sx={{
          maxWidth: { xs: '100vw', sm: '1530px' },
          maxHeight: { xs: '145vw', sm: '749px' },
          background:
            ' linear-gradient(81.29deg, #FFA232 11.63%, #FFD977 80.12%)',
        }}>
        <Box marginTop='33px' maxWidth='100vw'>
          <Image src={LetItBee} alt='' />
        </Box>
        <Box
          id={styles.honey}
          maxWidth='100%'
          alignItems='center'
          height='552px'
          display='flex'
          flexDirection='column'
          alignSelf='center'
          position='absolute'
          marginTop='52px'>
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
          <Box
            maxWidth='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
            flexDirection='column'>
            <Box
              display='flex'
              flexDirection='column'
              justifyContent='center'
              width='100vw'
              borderRadius='32px'
              zIndex='25'
              sx={{
                maxWidth: {
                  xs: '85%',
                  sm: '85%',
                  md: '750px',
                  lg: '911px',
                },
                background: '#DB8216',
                border:
                  '4px solid linear-gradient(180deg, #DB8116 0%, #F6AD0B 100%)',
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
            <Button
              sx={{
                zIndex: '26',
                alignSelf: 'center',
                padding: '1em 2em',
                fontSize: { sx: '12px', sm: '14px', md: '16px' },
                fontFamily: 'Satoshi',
                letterSpacing: '0.01em',
                color: '#FFDE73',
                background: '#8A4A00',
                boxShadow: '0px 8px 16px #E18821',
                borderRadius: '100px',
                transform: {
                  xs: 'translateY(-5px)',
                  sm: 'translateY(-15px)',
                  md: 'translateY(-25px)',
                },
                '&:hover': { backgroundColor: 'rgba(158, 74, 0, 1)' },
              }}>
              EXPLORE NOW!
            </Button>
            <Box
              zIndex='1'
              width='80%'
              sx={{
                height: { xs: '250px', sm: '315px', md: '280px', lg: '330px' },
                transform: 'translateY(-120px)',
                backgroundImage: `url(${Honey.src})`,
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: {
                  xs: 'center 30px',
                  sm: 'center 10px',
                  md: 'center 0px',
                },
              }}
            />
          </Box>
        </Box>
        <Box
          display='flex'
          width='96%'
          zIndex='1'
          sx={{
            justifyContent: { xs: 'center', md: 'space-between' },
            margin: {
              xs: '35vw 0 0',
              sm: '150px 0 0',
              md: 'auto 0 75px',
              lg: 'auto 0 25px',
              xl: 'auto 0 30px',
            },
          }}>
          {matches && (
            <Box
              display='flex'
              gap='16px'
              sx={{ flexDirection: { xs: 'column', xl: 'row' } }}>
              <Box
                display='flex'
                width='189px'
                height='217px'
                justifyContent='center'
                alignItems='center'
                sx={{ backgroundImage: `url(${MintBeeBg.src})` }}>
                <Image src={beeGlasses} width={156} height={164} />
              </Box>
              <Box
                display='flex'
                flexDirection='column'
                justifyContent='center'
                maxWidth='194px'>
                <Box>
                  <Typography
                    component='span'
                    sx={{
                      fontFamily: 'Clash Grotesk',
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '32px',
                      letterSpacing: '0em',
                      color: 'white',
                    }}>
                    Mint
                  </Typography>{' '}
                  <Typography
                    component='span'
                    sx={{
                      fontFamily: 'Clash Grotesk',
                      fontSize: '32px',
                      fontWeight: '700',
                      lineHeight: '32px',
                      letterSpacing: '0em',
                      color: 'black',
                    }}>
                    Bee
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: '14px',
                    lineHeight: '24px',
                    letterSpacing: '0.01em',
                    marginY: '8px',
                  }}>
                  Duis egestas rutrum erat vel finibus ipsum lorem.
                </Typography>
                <Button
                  sx={{
                    width: '123px',
                    paddingY: '14px',
                    fontSize: '16px',
                    fontWeight: '900',
                    fontFamily: 'Satoshi',
                    letterSpacing: '0.01em',
                    color: '#FFDE73',
                    background: '#8A4A00',
                    boxShadow: '0px 8px 16px #E18821',
                    borderRadius: '100px',
                    '&:hover': { backgroundColor: 'rgba(158, 74, 0, 1)' },
                  }}>
                  MINT
                </Button>
              </Box>
            </Box>
          )}
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            alignSelf='center'
            paddingX='37px'>
            <Stack
              justifyContent='space-between'
              width='196px'
              direction='row'
              sx={{
                alignItems: { xs: 'flex-end', sm: 'space-between' },
              }}>
              <IconButton
                disableTouchRipple
                href='https://discord.com/'
                aria-label='discord'
                sx={{
                  ':hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.00)',
                    opacity: '0.75',
                  },
                }}>
                <Image src={Discord} />
              </IconButton>
              <IconButton
                disableTouchRipple
                href='https://twitter.com/'
                aria-label='twitter'
                sx={{
                  ':hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.00)',
                    opacity: '0.75',
                  },
                }}>
                <Image src={Twitter} />
              </IconButton>
              <IconButton
                disableTouchRipple
                href='https://instagram.com/'
                aria-label='instagram'
                sx={{
                  ':hover': {
                    backgroundColor: 'rgba(0, 0, 0, 0.00)',
                    opacity: '0.75',
                  },
                }}>
                <Image src={Instagram} />
              </IconButton>
            </Stack>
            {matches && (
              <Stack direction='row'>
                <IconButton
                  disableTouchRipple
                  href='#beesUtilities'
                  aria-label='scroll down'
                  sx={{
                    ':hover': {
                      backgroundColor: 'rgba(0, 0, 0, 0.00)',
                      opacity: '0.75',
                    },
                  }}>
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
          </Box>
        </Box>
      </Box>
      <Box
        id={styles.bigBee}
        zIndex='50'
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
