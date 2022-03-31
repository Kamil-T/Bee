import { useState } from 'react'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Image from 'next/image'
import PhaseMobile from './PhaseMobile'
import roadMap from '../images/RoadMap.svg'

const RoadMapMobile = () => {
  const [expanded, setExpanded] = useState(false)
  return (
    <Container
      id='roadMap'
      maxWidth='false'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        minHeight: '950px',
        paddingTop: '96px',
        background: '#DB8116',
      }}>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography
          sx={{
            marginBottom: '15px',
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: { xs: '20px', sm: '22px', md: '24px' },
            lineHeight: '24px',
            color: '#8A4A00',
            letterSpacing: '0em',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: { xs: '44px', sm: '52px', md: '58px', lg: '64px' },
            lineHeight: '64px',
            color: 'white',
            letterSpacing: '0em',
          }}>
          Road map
        </Typography>
      </Box>
      <Box display='flex' height='700px' justifyContent='center'>
        <Box
          height='100%'
          minWidth='50px'
          display='flex'
          flexDirection='column'
          alignSelf='center'
          paddingTop='65px'
          marginX='6vw'>
          <Image src={roadMap} />
        </Box>
        <Box
          display='flex'
          flexDirection='column'
          justifyContent='space-between'
          marginTop='40px'>
          <PhaseMobile
            text={'1'}
            expanded={expanded}
            setExpanded={setExpanded}
          />
          <PhaseMobile
            text={'2'}
            expanded={expanded}
            setExpanded={setExpanded}
          />
          <PhaseMobile
            text={'3'}
            expanded={expanded}
            setExpanded={setExpanded}
          />
        </Box>
      </Box>
    </Container>
  )
}

export default RoadMapMobile
