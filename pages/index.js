import Container from '@mui/material/Container'
import BeesTraits from '../components/BeesTraits'
import BeesUtilities from '../components/BeesUtilities'
import Faq from '../components/Faq'
import Footer from '../components/Footer'
import RoadMap from '../components/RoadMap'
import UpperSection from '../components/UpperSection'

export default function Index() {
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
      <RoadMap />
      <Faq />
      <Footer />
    </Container>
  )
}
