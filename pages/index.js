import Container from '@mui/material/Container'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import BeesTraits from '../components/BeesTraits'
import BeesUtilities from '../components/BeesUtilities'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import RoadMap from '../components/RoadMap'
import RoadMapMobile from '../components/RoadMapMobile'
import UpperSection from '../components/UpperSection'

export default function Index() {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  return (
    <Container
      id='pageContainer'
      maxWidth='false'
      sx={{
        display: 'flex',
        flexDirection: 'column',
      }}>
      <UpperSection />
      <BeesUtilities />
      <BeesTraits />
      {matches ? <RoadMap /> : <RoadMapMobile />}
      <Faq />
      <Footer />
    </Container>
  )
}
