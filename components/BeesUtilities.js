import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Xyz from './Xyz'
import styles from '../styles/BeesUtilities.module.css'
import Bees from './Bees'

const BeesUtilities = () => {
  return (
    <Container
      maxWidth='false'
      sx={{
        minHeight: '1158px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: '#FFC55E',
        paddingTop: '111px',
        zIndex: '5',
      }}>
      <Typography
        sx={{
          fontFamily: 'Clash Grotesk',
          fontWeight: '600',
          fontSize: '24px',
          lineHeight: '24px',
          color: 'white',
          marginTop: '28px',
          marginLeft: '6px',
          letterSpacing: '0.001rem',
        }}>
        Lorem ipsum dolor sit amet
      </Typography>
      <Typography
        sx={{
          fontFamily: 'Clash Grotesk',
          fontWeight: '700',
          fontSize: '64px',
          margin: '16px 0 70px 6px',
          lineHeight: '64px',
          letterSpacing: '0.001rem',
        }}>
        Bees utilities
      </Typography>
      <Box marginBottom='90px' id={styles.xyz}>
        <Xyz />
        <Xyz />
      </Box>
      <Bees />
    </Container>
  )
}

export default BeesUtilities
