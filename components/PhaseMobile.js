import Box from '@mui/material/Box'
import Accordion from '@mui/material/Accordion/'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ArrowIcon from './ArrowIcon'

const PhaseMobile = ({ text, expanded, setExpanded, defExpanded = false }) => {
  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

  return (
    <Box>
      <Accordion
        defaultExpanded={defExpanded}
        key={text}
        expanded={expanded === `panel${text}`}
        onChange={handleChange(`panel${text}`)}
        disableGutters
        sx={{
          maxWidth: 'max-content',
          backgroundColor: '#DB8116',
          boxShadow: 'none',
        }}>
        <AccordionSummary
          expandIcon={
            <ArrowIcon
              fill={expanded === `panel${text}` ? '#FFFFFF' : 'none'}
              border={expanded === `panel${text}` ? '#FFFFFF' : '#6C3900'}
            />
          }
          aria-controls={`phase${text}`}
          id={`phase${text}`}
          sx={{
            paddingX: '5px',
            background: '#E9A00A',
            height: '76px',
            borderRadius: '16px',
          }}>
          <Box
            display='flex'
            flexDirection='column'
            alignSelf='center'
            justifyContent='center'
            width='40vw'
            sx={{
              transform: 'matrix(1, -0.03, 0.03, 1, 0, 0)',
            }}>
            <Typography
              sx={{
                fontFamily: 'Clash Grotesk',
                fontWeight: '700',
                fontSize: '32px',
                whiteSpace: 'nowrap',
                lineHeight: '32px',
                color: '#FFFFFF',
                transform: 'matrix(1, 0.03, 0, 1, 0, 0)',
                alignSelf: 'center',
              }}>
              Phase {text}
            </Typography>
          </Box>
        </AccordionSummary>
        <AccordionDetails>
          <Box maxWidth='341px' marginTop='17px'>
            <Typography
              sx={{
                marginLeft: '5px',
                fontFamily: 'Montserrat',
                fontWeight: '700',
                fontSize: '20px',
                lineHeight: '32px',
                letterSpacing: '0.01em',
                color: 'white',
              }}>
              Duis egestas rutrum erat vel finibus. Lorem ipsum dolor.
            </Typography>
            <Typography
              sx={{
                marginLeft: '5px',
                marginTop: '15px',
                fontFamily: 'Montserrat',
                fontWeight: '500',
                fontSize: '14px',
                lineHeight: '24px',
                letterSpacing: '0.01em',
                color: 'white',
              }}>
              Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec
              dapibus purus eget nisl efficitur, at porttitor ex accumsan. Duis
              egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
              purus eget nisl efficitur, at porttitor ex accumsan.
            </Typography>
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}

export default PhaseMobile
