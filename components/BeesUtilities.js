import { useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Tabs from '@mui/material/Tabs'
import { useTheme } from '@mui/material/styles'
import useMediaQuery from '@mui/material/useMediaQuery'
import Xyz from './Xyz'
import Bees from './Bees'
import BeesMobile from './BeesMobile'

const BeesUtilities = () => {
  const theme = useTheme()
  const matches = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <>
      <div id='beesUtilities' />
      <Container
        maxWidth='false'
        sx={{
          minHeight: { lg: '1000px', xl: '1158px' },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          background: '#FFC55E',
          paddingTop: {
            xs: '45px',
            sm: '60px',
            lg: '100px',
            xl: '111px',
          },
          zIndex: '5',
        }}>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: { xs: '20px', sm: '24px', md: '22px', lg: '24px' },
            lineHeight: '24px',
            color: 'white',
            marginTop: { xs: '10px', md: '28px' },
            marginLeft: '6px',
            letterSpacing: '0.001rem',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: { xs: '44px', sm: '58px', md: '60px', lg: '64px' },
            margin: {
              xs: '16px 0 25px 6px',
              md: '16px 0 50px 6px',
              lg: '16px 0 70px 6px',
            },
            lineHeight: '64px',
            letterSpacing: '0.001rem',
          }}>
          Bees utilities
        </Typography>
        <Box
          marginBottom='40px'
          display='flex'
          justifyContent='space-between'
          sx={{
            maxWidth: { xs: '800px', lg: '1000px' },
            flexDirection: { xs: 'column', md: 'row' },
            gap: { xs: '35px', lg: '70px' },
          }}>
          <Xyz />
          <Xyz />
        </Box>
        {matches ? <Bees /> : <BeesMobile />}
      </Container>
    </>
  )
}

export default BeesUtilities
