import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import styles from '../styles/BeesTraits.module.css'

const BeesTraits = () => {
  return (
    <Container
      maxWidth='false'
      id={styles.beesTraits}
      sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: '997px',
        background: '#8A4A00',
      }}>
      <Box
        display='flex'
        flexDirection='column'
        width='341px'
        sx={{ marginBottom: '70px', marginLeft: '216px' }}>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: '24px',
            color: '#FFC55E',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            marginBottom: '40px',
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: '64px',
            lineHeight: '80px',
            color: '#FFFFFF',
          }}>
          Bees traits
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.01em',
            color: '#FFFFFF',
          }}>
          Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
          purus eget nisl efficitur, at porttitor ex accumsan.
        </Typography>
      </Box>
      <Box>
        
      </Box>
    </Container>
  )
}

export default BeesTraits
