import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Phase from './Phase'
import Image from 'next/image'
import roadMap from '../images/RoadMap.svg'

const RoadMap = () => {
  return (
    <Container
      id='roadMap'
      maxWidth='false'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '1254px',
        paddingTop: '96px',
        background: '#DB8116',
      }}>
      <Box display='flex' flexDirection='column'>
        <Phase text={'1'} />
        <Phase text={'3'} />
      </Box>
      <Box>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: '24px',
            lineHeight: '24px',
            color: '#8A4A00',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: '64px',
            lineHeight: '64px',
            color: 'white',
          }}>
          Road map
        </Typography>
        <Box alignSelf='center'>
          <Image src={roadMap} />
        </Box>
      </Box>
      <Box display='flex'>
        <Phase text={'2'} />
      </Box>
    </Container>
  )
}

export default RoadMap
