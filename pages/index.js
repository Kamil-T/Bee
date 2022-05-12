import { Box } from '@mui/material'
import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useState } from 'react'
import BeesTraits from '../components/BeesTraits'
import BeesUtilities from '../components/BeesUtilities'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import Links from '../components/Links'
import Navbar from '../components/Navbar2'
import RoadMap from '../components/RoadMap'
import RoadMapMobile from '../components/RoadMapMobile'
import UpperSection from '../components/UpperSection'
import UpperSectionBg from '../images/UpperSectionBg.svg'

export default function Index() {
  const [openMobile, setOpenMobile] = useState(false)
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))
  const mobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
    <Container
      id='pageContainer'
      maxWidth='false'
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      {mobile && openMobile ? (
        <Box
          sx={{
            backgroundImage: `url(${UpperSectionBg.src})`,
            backgroundPosition: 'center 0px',
          }}>
          <Navbar openMobile={openMobile} setOpenMobile={setOpenMobile} />
          <Box
            display='flex'
            flexDirection='column'
            width='100vw'
            gap='25px'
            alignItems='center'
            maxWidth='100vw'
            height='93vh'>
            <Links openMobile={openMobile} setOpenMobile={setOpenMobile} />
          </Box>
        </Box>
      ) : (
        <>
          <UpperSection openMobile={openMobile} setOpenMobile={setOpenMobile} />
          <BeesUtilities />
          <BeesTraits />
          {matches ? <RoadMap /> : <RoadMapMobile />}
          <Faq />
          <Footer />
        </>
      )}
    </Container>
  )
}
