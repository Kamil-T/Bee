import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import PhaseMobile from './PhaseMobile'

const RoadMapMobile = () => {
  const [expanded, setExpanded] = useState('panel1')
  return (
    <Container
      id='roadMap'
      maxWidth='false'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingTop: '72px',
        paddingBottom: '76px',
        background: '#DB8116',
      }}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography
          sx={{
            textAlign: 'center',
            marginBottom: '15px',
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '24px',
            color: '#8A4A00',
            letterSpacing: '0em',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            textAlign: 'center',
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: '64px',
            lineHeight: '64px',
            color: 'white',
            letterSpacing: '0em',
          }}>
          Road map
        </Typography>
      </Box>

      <Box display='flex' flexDirection='column' marginTop='56px' gap='46px'>
        <PhaseMobile text={'1'} expanded={expanded} setExpanded={setExpanded} />
        <PhaseMobile text={'2'} expanded={expanded} setExpanded={setExpanded} />
        <PhaseMobile text={'3'} expanded={expanded} setExpanded={setExpanded} />
      </Box>
    </Container>
  )
}

export default RoadMapMobile
