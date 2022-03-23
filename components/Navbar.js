import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
import Link from '../src/Link'

const Navbar = () => {
  const LinkStyled = styled(Link)(() => ({
    all: 'unset',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingLeft: '24px',
    paddingRight: '24px',
    fontSize: '16px',
    color: 'black',
  }))

  return (
    <Stack
      flexDirection='row'
      justifyContent='flex-end'
      alignItems='center'
      sx={{ py: '34px', px: '45px' }}>
      <LinkStyled href=''>About us</LinkStyled>
      <LinkStyled href=''>Yetis</LinkStyled>
      <LinkStyled href=''>Story</LinkStyled>
      <LinkStyled href=''>Wishlist</LinkStyled>
      <LinkStyled href='#roadMap'>Roadmap</LinkStyled>
      <Button
        sx={{
          width: '158px',
          height: '56px',
          background: '#8A4A00',
          borderRadius: '100px',
          color: '#FFDE73',
          fontSize: '16px',
          fontFamily: 'Satoshi',
          letterSpacing: '0.01rem',
          fontWeight: '900',
          marginLeft: '24px',
        }}>
        MINT BEE
      </Button>
    </Stack>
  )
}

export default Navbar
