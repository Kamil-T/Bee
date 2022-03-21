import Container from '@mui/material/Container'
import Navbar from './Navbar'
import styled from '../styles/UpperSection.module.css'

const UpperSection = () => {
  return (
    <Container
      id={styled.upperSection}
      maxWidth='false'
      sx={{ height: '1037px' }}>
      <Navbar />
    </Container>
  )
}
export default UpperSection
