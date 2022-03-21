import Container from '@mui/material/Container'
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
    </Container>
  )
}
