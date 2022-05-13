import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import BumbleParty from '../images/BumbleParty.png'
import { useState } from 'react'
import Image from 'next/image'
import Links from './Links'

const Navbar = ({ openMobile, setOpenMobile }) => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.down('md'))

  const handleClick = () => {
    setOpenMobile(!openMobile)
  }

  return (
    <AppBar
      position='static'
      sx={{
        width: '100',
        height: '90px',
        marginBottom: '34px',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        alignSelf: 'center',
        background: 'transparent',
        boxShadow: 'none',
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
            onClick={handleClick}
            size='large'
            edge='start'
            aria-label='open menu'
            sx={{ color: '#DB8216' }}>
            {openMobile ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
        </>
      ) : (
        <Links openMobile={openMobile} setOpenMobile={setOpenMobile} />
      )}
    </AppBar>
  )
}

export default Navbar
