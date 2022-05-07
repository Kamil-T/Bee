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
        marginY='20px'
        borderRadius='16px'
        position='relative'
        sx={{
          marginRight: { xs: '24px', md: '20px', lg: '24px' },
          width: { xs: '119px', md: '90px', lg: '119px' },
          height: { xs: '71.38px', md: '61.38px', lg: '71.38px' },
          background: 'linear-gradient(to bottom, #DB8116, #F6AD0B)',
          transform: 'rotate(-2.41deg)',
        }}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          borderRadius='16px'
          border='2px solid transparent'
          sx={{
            width: { xs: '119px', md: '90px', lg: '119px' },
            height: { xs: '71.38px', md: '61.38px', lg: '71.38px' },
            background: '#DB8216',
            backgroundClip: 'padding-box',
          }}>
          <Typography
            sx={{
              fontFamily: 'Clash Grotesk',
              fontSize: { xs: '32px', md: '28px', lg: '32px' },
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
          fontSize: { xs: '14px', md: '12px', lg: '14px' },
          lineHeight: { xs: '24px', md: '20px', lg: '24px' },
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
