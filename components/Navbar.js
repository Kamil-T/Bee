import Stack from '@mui/material/Stack'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'

const Navbar = () => {
  const MenuItemStyled = styled(MenuItem)(() => ({
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
      sx={{ py: '34px', px: '45px' }}>
      <MenuItemStyled component='nav'>About us</MenuItemStyled>
      <MenuItemStyled component='nav'>Yetis</MenuItemStyled>
      <MenuItemStyled component='nav'>Story</MenuItemStyled>
      <MenuItemStyled component='nav'>Wishlist</MenuItemStyled>
      <MenuItemStyled component='nav'>Roadmap</MenuItemStyled>
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
