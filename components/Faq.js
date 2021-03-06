import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion/'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import styles from '../styles/Faq.module.css'
import ArrowIcon from './ArrowIcon'
import frequentlyAskedQuestion from '../faq'
import DiscordIcon from './DiscordIcon'
import TwitterIcon from './TwitterIcon'
import InstagramIcon from './InstagramIcon'
import FaqBg from '../images/faqBg.svg'
import IconBg from '../images/Iconbg.svg'
import { useState } from 'react'

const IconBoxStyled = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  maxWidth: '245px',
  maxHeight: '230px',
  width: '100vw',
  height: '100vh',
}))

const Faq = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))
  const [expanded, setExpanded] = useState(false)

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  const faq = frequentlyAskedQuestion
  return (
    <Container
      maxWidth='false'
      sx={{
        paddingBottom: { xs: '50px', sm: '80px' },
        paddingTop: { xs: '60px', sm: '90px' },
        minHeight: {
          xs: '1120px',
          sm: '1320px',
          md: '1160px',
          lg: '1180px',
          xl: '1320px',
        },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'flex-start',
        backgroundImage: `url(${FaqBg.src})`,
        backgroundPosition: 'bottom',
      }}>
      <Typography
        sx={{
          fontFamily: 'Clash Grotesk',
          fontWeight: '700',
          fontSize: { xs: '64px', md: '48px', lg: '56px', xl: '64px' },
          color: '#8A4A00',
        }}>
        FAQ
      </Typography>

      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: { xs: '952px', md: '80vw', xl: '952px' },
          paddingX: { xs: '20px', sm: '32px' },
          paddingY: '25px',
          marginY: '25px',
          boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.25)',
          borderRadius: '24px',
        }}>
        {faq.map(({ question, answer }, index) => {
          return (
            <Accordion
              key={index}
              expanded={expanded === `panel${index}`}
              onChange={handleChange(`panel${index}`)}
              disableGutters
              sx={{
                maxWidth: '888px',
                paddingY: '27px',
                boxShadow: 'none',
                borderTop: '1px solid',
                borderColor: 'rgba(242, 226, 175, 1)',
                ':before': {
                  opacity: '0',
                },
                ':first-of-type': { borderTop: 'none' },
              }}>
              <AccordionSummary
                className={styles.icon}
                expandIcon={
                  <ArrowIcon
                    fill={expanded === `panel${index}` ? '#FFF6D8' : 'none'}
                  />
                }
                aria-controls={answer}
                id={question}
                sx={{
                  paddingX: { xs: '12px', sm: '24px' },
                }}>
                <Typography
                  className={
                    expanded === `panel${index}` ? styles.questionActive : ''
                  }
                  sx={{
                    fontFamily: 'Clash Grotesk',
                    fontWeight: '600',
                    fontSize: { xs: '15px', sm: '24px' },
                    lineHeight: '133%',
                    letterSpacing: '0.01em',
                    color: '#8A4A00',
                  }}>
                  {question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography
                  sx={{
                    fontFamily: 'Montserrat',
                    fontSize: { xs: '12px', sm: '14px' },
                    lineHeight: '171%',
                    letterSpacing: '0.01em',
                    color: '#8A4A00',
                    marginBottom: '-10px',
                  }}>
                  {answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          )
        })}
      </Paper>
      <Typography
        sx={{
          fontFamily: 'Clash Grotesk',
          fontWeight: '700',
          fontSize: {
            xs: '38px',
            sm: '64px',
            md: '48px',
            lg: '56px',
            xl: '64px',
          },
          lineHeight: '64px',
          color: '#8A4A00',
          margin: { xs: '50px 0 25px', sm: 'auto 0 25px' },
        }}>
        Our community
      </Typography>
      {matches ? (
        <Box
          display='flex'
          flexDirection='row'
          marginBottom='7px'
          marginRight='5px'
          sx={{
            gap: { md: '23px', lg: '112px' },
          }}>
          <IconBoxStyled className={styles.iconBg}>
            <TwitterIcon />
          </IconBoxStyled>
          <IconBoxStyled className={styles.iconBg}>
            <DiscordIcon />
          </IconBoxStyled>
          <IconBoxStyled className={styles.iconBg}>
            <InstagramIcon />
          </IconBoxStyled>
        </Box>
      ) : (
        <IconBoxStyled
          className={styles.iconBg}
          marginTop='auto'
          marginRight='5px'
          display='flex'
          gap='6px'
          sx={{ marginBottom: { xs: '36px', sm: '7px' } }}>
          <TwitterIcon />
          <DiscordIcon />
          <InstagramIcon />
        </IconBoxStyled>
      )}
    </Container>
  )
}

export default Faq
