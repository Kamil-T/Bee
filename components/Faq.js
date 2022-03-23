import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import Accordion from '@mui/material/Accordion/'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Box from '@mui/material/Box'
import ArrowY from '../images/ArrowY.svg'
import styles from '../styles/Faq.module.css'
import Image from 'next/image'
import frequentlyAskedQuestion from '../faq'
import OurCommunity from './OurCommunity'

const Faq = () => {
  const faq = frequentlyAskedQuestion
  return (
    <Container
      id={styles.faq}
      maxWidth='false'
      sx={{
        paddingTop: '92px',
        minHeight: '1320px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Typography
        sx={{
          fontFamily: 'Clash Grotesk',
          fontWeight: '700',
          fontSize: '64px',
          color: '#8A4A00',
        }}>
        FAQ
      </Typography>
      <Paper
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          minWidth: '952px',
          marginTop: '44px',
          boxShadow: '0px 16px 32px rgba(0, 0, 0, 0.25)',
          borderRadius: '24px',
        }}>
        {faq.map(({ question, answer }) => {
          return (
            <Accordion
              disableGutters
              sx={{ maxWidth: '888px', paddingY: '30px', boxShadow: 'none' }}>
              <AccordionSummary
                expandIcon={<Image src={ArrowY} />}
                aria-controls={answer}
                id={question}
                sx={{ paddingX: '24px' }}>
                <Typography
                  sx={{
                    fontFamily: 'Clash Grotesk',
                    fontWeight: '600',
                    fontSize: '24px',
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
                    fontSize: '14px',
                    lineHeight: '171%',
                    letterSpacing: '0.01em',
                    color: '#8A4A00',
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
          fontSize: '64px',
          color: '#8A4A00',
          marginTop: '132px',
        }}>
        Our community
      </Typography>

      <Box sx={{ justifySelf: 'flex-end' }}>
        <OurCommunity />
      </Box>
    </Container>
  )
}

export default Faq
