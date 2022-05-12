import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import Link from '../src/Link'
import { useState } from 'react'
import BumbleParty from '../images/BumbleParty.png'
import UpperSectionBg from '../images/UpperSectionBg.svg'
import Image from 'next/image'

const Navbar = () => {
  const MenuItemStyled = styled(MenuItem)(({ theme }) => ({
    justifyContent: 'flex-end',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingLeft: '22px',
    paddingRight: '22px',
    fontSize: '16px',
    lineHeight: '36px',
    width: '150px',
    marginLeft: 'auto',

    [theme.breakpoints.only('md')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '14px',
    },
    [theme.breakpoints.only('lg')]: {
      paddingLeft: '18px',
      paddingRight: '18px',
      fontSize: '15px',
    },
    '& a': {
      all: 'unset',
      color: 'black',
      cursor: 'pointer',
      '& :hover': {
        textDecoration: 'underline',
        backgroundColor: 'transparent',
      },
    },
  }))

  const Links = () => {
    return (
      <>
        <MenuItemStyled onClick={handleClose}>
          <Link href='/'>About us</Link>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <Link href='/'>Yetis</Link>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <Link href='/'>Story</Link>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <Link href='/'>Wishlist</Link>
        </MenuItemStyled>
        <MenuItemStyled onClick={handleClose}>
          <Link href='#roadMap'>Roadmap</Link>
        </MenuItemStyled>
        <Button
          sx={{
            width: { xs: '95vw', md: '134px', lg: '146px', xl: '158px' },
            height: { xs: '56px', md: '50px', lg: '53px', xl: '56px' },
            background: '#8A4A00',
            borderRadius: '100px',
            color: '#FFDE73',
            fontSize: { xs: '12px', md: '14px', lg: '15px', xl: '16px' },
            fontFamily: 'Satoshi',
            letterSpacing: '0.01rem',
            fontWeight: '900',
            marginLeft: { xs: '0px', lg: '24px' },
            '&:hover': { backgroundColor: 'rgba(138, 74, 0, 0.85)' },
          }}>
          MINT BEE
        </Button>
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
      alignSelf='center'
      width='100%'
      height='90px'
      marginBottom='34px'
      sx={{
        pt: { xs: '15px', md: '28px', lg: '34px' },
        maxWidth: { xs: '100vw', md: '80vw', lg: '85vw', xl: '1460px' },
        height: { xs: '90px', md: '70px', lg: '80px', xl: '90px' },
      }}>
      <Box
        sx={{
          maxWidth: { xs: '150px', sm: 'false', md: '140px', xl: 'false' },
          marginTop: '65px',
          marginRight: 'auto',
          zIndex: '9999',
        }}>
        <Image src={BumbleParty} width={220} height={155} />
      </Box>
      {matches ? (
        <>
          <IconButton
            id='basic-button'
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup='true'
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
            size='large'
            edge='start'
            aria-label='open drawer'
            sx={{ color: '#DB8216' }}>
            {open ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Menu
            variant='menu'
            id='basic-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
              'aria-labelledby': 'basic-button',
            }}
            marginThreshold={0}
            PaperProps={{
              sx: {
                display: 'flex',
                justifyContent: 'center',
                width: '100vw',
                boxShadow: 'none',
                maxWidth: '100vw',
                height: 'calc(100vh - 60px)',
                backgroundImage: `url(${UpperSectionBg.src})`,
                backgroundPosition: 'center -60px',
              },
            }}
            anchorReference='anchorPosition'
            anchorPosition={{ top: 60 }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}
            sx={{ display: 'flex' }}>
            <Links />
          </Menu>
        </>
      ) : (
        <Links />
      )}
    </Stack>
  )
}

export default Navbar
