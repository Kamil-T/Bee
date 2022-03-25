import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const Phase = ({ text }) => {
  return (
    <Box display='flex' flexDirection='column' height='317px' marginTop='60px'>
      <Box
        display='flex'
        sx={{
          alignSelf: 'center',
          justifyContent: 'center',
          background: '#E9A00A',
          width: '327.8px',
          height: '76px',
          borderRadius: '16px',
          transform: 'matrix(1, -0.03, 0.03, 1, 0, 0)',
        }}>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '32px',
            color: '#FFFFFF',
            transform: 'matrix(1, 0.03, 0, 1, 0, 0)',
            alignSelf: 'center',
          }}>
          Phase {text}
        </Typography>
      </Box>
      <Box maxWidth='341px' marginTop='17px'>
        <Typography
          sx={{
            marginLeft: '5px',
            fontFamily: 'Montserrat',
            fontWeight: '700',
            fontSize: '20px',
            lineHeight: '32px',
            letterSpacing: '0.01em',
            color: 'white',
          }}>
          Duis egestas rutrum erat vel finibus. Lorem ipsum dolor.
        </Typography>
        <Typography
          sx={{
            marginLeft: '5px',
            marginTop: '15px',
            fontFamily: 'Montserrat',
            fontWeight: '500',
            fontSize: '14px',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            color: 'white',
          }}>
          Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
          purus eget nisl efficitur, at porttitor ex accumsan. Duis egestas
          rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus purus eget
          nisl efficitur, at porttitor ex accumsan.
        </Typography>
      </Box>
    </Box>
  )
}

export default Phase
