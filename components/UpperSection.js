import Container from '@mui/material/Container'
import Navbar from './Navbar'
import Box from '@mui/material/Box'
import LetItBee from '../images/letitbee.svg'
import BigBee from '../images/bigbee.png'
import Image from 'next/image'
import styled from '../styles/UpperSection.module.css'

const UpperSection = () => {
  return (
    <Container
      id={styled.upperSection}
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
          width: '1530px',
          minHeight: '749px',
          background:
            ' linear-gradient(81.29deg, #FFA232 11.63%, #FFD977 80.12%)',
          borderRadius: '32px',
        }}>
        <div id={styled.letitbee}>
          <Image src={LetItBee} alt='' />
        </div>
      </Box>
      <div id={styled.bigBee}>
        <Image src={BigBee} alt='' />
      </div>
    </Container>
  )
}
export default UpperSection
