import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Xyz from './Xyz'
import Bees from './Bees'

const BeesUtilities = () => {
  return (
    <>
      <div id='beesUtilities' />
      <Container
        maxWidth='false'
        sx={{
          minHeight: { lg: '1000px', xl: '1158px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#FFC55E',
          paddingTop: {
            xs: '45px',
            sm: '60px',
            md: '85px',
            lg: '100px',
            xl: '111px',
          },
          zIndex: '5',
        }}>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: { xs: '20px', sm: '24px' },
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
            fontSize: { xs: '44px', sm: '58px', md: '64px' },
            margin: '16px 0 70px 6px',
            lineHeight: '64px',
            letterSpacing: '0.001rem',
          }}>
          Bees utilities
        </Typography>
        <Box
          marginBottom='80px'
          display='flex'
          maxWidth='1000px'
          justifyContent='space-between'
          sx={{
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '35px', md: '70px' },
          }}>
          <Xyz />
          <Xyz />
        </Box>
        <Bees />
      </Container>
    </>
  )
}

export default BeesUtilities
