import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Xyz = () => {
  return (
    <Box
      maxWidth='464px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      sx={{ flexDirection: { xs: 'column', md: 'row' } }}>
      <Box
        display='flex'
        justifyContent='center'
        alignItems='center'
        width='119px'
        height='71.38px'
        marginY='20px'
        marginRight='24px'
        borderRadius='16px'
        position='relative'
        sx={{
          background: 'linear-gradient(to bottom, #DB8116, #F6AD0B)',
          transform: 'rotate(-2.41deg)',
        }}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          width='119px'
          height='71.38px'
          borderRadius='16px'
          border='2px solid transparent'
          sx={{
            background: '#DB8216',
            backgroundClip: 'padding-box',
          }}>
          <Typography
            sx={{
              fontFamily: 'Clash Grotesk',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '32px',
              letterSpacing: '0em',
              color: 'white',
              transform: 'rotate(2.41deg)',
            }}>
            XYZ
          </Typography>
        </Box>
      </Box>
      <Typography
        sx={{
          maxWidth: '341px',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          textAlign: { xs: 'center', md: 'left' },
        }}>
        Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
        purus eget nisl efficitur, at porttitor ex accumsan.
      </Typography>
    </Box>
  )
}

export default Xyz
