import Link from '../src/Link'
import Button from '@mui/material/Button'
import { styled } from '@mui/material/styles'
const Links = ({ openMobile, setOpenMobile }) => {
  const handleClick = () => {
    setOpenMobile(!openMobile)
  }

  const LinkStyled = styled(Link)(({ theme }) => ({
    display: 'flex',
    marginLeft: 'auto',
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
    all: 'unset',
    color: 'black',
    cursor: 'pointer',
    '& :hover': {
      textDecoration: 'underline',
      backgroundColor: 'transparent',
    },
  }))

  return (
    <>
      <LinkStyled onClick={handleClick} href='/'>
        About us
      </LinkStyled>
      <LinkStyled onClick={handleClick} href='/'>
        Yetis
      </LinkStyled>
      <LinkStyled onClick={handleClick} href='/'>
        Story
      </LinkStyled>
      <LinkStyled onClick={handleClick} href='/'>
        Wishlist
      </LinkStyled>
      <LinkStyled onClick={handleClick} href='#roadMap'>
        Roadmap
      </LinkStyled>
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

export default Links
