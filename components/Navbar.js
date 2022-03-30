import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '../src/Link'
import { useState } from 'react'

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

  const MenuItemStyled = styled(MenuItem)(() => ({
    paddingRight: '0px',
    paddingLeft: '0px',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  }))

  const Links = () => {
    return (
      <>
        <MenuItemStyled>
          <LinkStyled onClick={handleClose} href='/'>
            About us
          </LinkStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          <LinkStyled onClick={handleClose} href='/'>
            Yetis
          </LinkStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          <LinkStyled onClick={handleClose} href='/'>
            Story
          </LinkStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          <LinkStyled onClick={handleClose} href='/'>
            Wishlist
          </LinkStyled>
        </MenuItemStyled>
        <MenuItemStyled>
          <LinkStyled onClick={handleClose} href='#roadMap'>
            Roadmap
          </LinkStyled>
        </MenuItemStyled>
      </>
    )
  }
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Stack
      flexDirection='row'
      justifyContent='flex-end'
      alignItems='center'
      marginRight='8vw'
      sx={{ py: { xs: '15px', md: '34px' }, px: { xs: '20px', md: '45px' } }}>
      {matches ? (
        <>
          <Button
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}>
            <IconButton
              size='large'
              edge='center'
              aria-label='open drawer'
              sx={{ color: '#DB8216' }}>
              <MenuIcon />
            </IconButton>
          </Button>
          <Menu
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}>
            <Links />
          </Menu>
        </>
      ) : (
        <Links />
      )}
      <Button
        sx={{
          width: '158px',
          height: '56px',
          background: '#8A4A00',
          borderRadius: '100px',
          color: '#FFDE73',
          fontSize: { xs: '12px', md: '16px' },
          fontFamily: 'Satoshi',
          letterSpacing: '0.01rem',
          fontWeight: '900',
          marginLeft: { xs: '0px', lg: '24px' },
          '&:hover': { backgroundColor: 'rgba(138, 74, 0, 0.85)' },
        }}>
        MINT BEE
      </Button>
    </Stack>
  )
}

export default Navbar
