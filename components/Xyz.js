import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Xyz = () => {
  return (
    <Box
      width='464px'
      display='flex'
      justifyContent='space-between'
      marginX='23px 0'>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '119px',
          height: '71.38px',
          background: '#DB8216',
          borderRadius: '16px',
          transform: 'rotate(-2.41deg)',
          border: '2px solid',
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
      <Typography
        sx={{
          width: '341px',
          fontFamily: 'Montserrat',
          fontSize: '14px',
          lineHeight: '24px',
          letterSpacing: '0.01em',
          paddingLeft: '24px',
        }}>
        Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
        purus eget nisl efficitur, at porttitor ex accumsan.
      </Typography>
    </Box>
  )
}

export default Xyz
