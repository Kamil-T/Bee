import Stack from '@mui/material/Stack'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Menu from '@mui/material/Menu'
import MenuList from '@mui/material/MenuList'
import { styled, useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Link from '../src/Link'
import { useState } from 'react'
import BumbleParty from '../images/BumbleParty.png'
import UpperSectionBg from '../images/UpperSectionBg.svg'
import Image from 'next/image'

const Navbar = () => {
  const LinkStyled = styled(Link)(({ theme }) => ({
    all: 'unset',
    fontFamily: 'Montserrat',
    fontWeight: '500',
    paddingLeft: '22px',
    paddingRight: '22px',
    fontSize: '16px',
    color: 'black',
    cursor: 'pointer',
    '&:hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
    width: 'fit-Content',

    [theme.breakpoints.only('md')]: {
      paddingLeft: '16px',
      paddingRight: '16px',
      fontSize: '14px',
    },
  }))

  const Links = () => {
    return (
      <>
        <LinkStyled onClick={handleClose} href='/'>
          About us
        </LinkStyled>
        <LinkStyled onClick={handleClose} href='/'>
          Yetis
        </LinkStyled>
        <LinkStyled onClick={handleClose} href='/'>
          Story
        </LinkStyled>
        <LinkStyled onClick={handleClose} href='/'>
          Wishlist
        </LinkStyled>
        <LinkStyled onClick={handleClose} href='#roadMap'>
          Roadmap
        </LinkStyled>
        <Button
          sx={{
            width: { xs: '100%', md: '134px', lg: '158px' },
            height: { xs: '56px', md: '50px', lg: '56px' },
            background: '#8A4A00',
            borderRadius: '100px',
            color: '#FFDE73',
            fontSize: { xs: '12px', md: '14px', lg: '16px' },
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
        height: { xs: '90px', md: '70px', lg: '90px' },
      }}>
      <Box
        sx={{
          maxWidth: { xs: '150px', sm: 'false', md: '140px', lg: 'false' },
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
            <MenuIcon />
          </IconButton>
          <Menu
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
                boxShadow: 'none',
                maxWidth: '100vw',
                maxHeight: 'calc(100vh - 65px)',
                height: '100%',
                backgroundImage: `url(${UpperSectionBg.src})`,
                backgroundPosition: 'center -60px',
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'center',
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'center',
            }}>
            <MenuList
              sx={{
                padding: '32px 48px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: '25px',
                width: '100vw',
                height: 'calc(97vh - 90px )',
              }}>
              <Links />
            </MenuList>
          </Menu>
        </>
      ) : (
        <Links />
      )}
    </Stack>
  )
}

export default Navbar
