import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'

const Footer = () => {
  return (
    <Container
      component='footer'
      maxWidth='false'
      sx={{
        display: 'flex',
        justifyContent: 'center',
        minHeight: '50px',
        background: '#402200',
        borderTop: '2px solid #00A6F1',
      }}>
      <Typography
        sx={{
          fontFamily: 'Montserrat',
          fontSize: '16px',
          lineHeight: '200%',
          textAlign: 'center',
          letterSpacing: '0.01em',
          color: '#FFFFFF',
          alignSelf: 'center',
        }}>
        © 2022 BEE
      </Typography>
    </Container>
  )
}

export default Footer
