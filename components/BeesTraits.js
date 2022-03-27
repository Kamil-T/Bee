import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import ArrowIcon from '../images/ArrowX.svg'
import Image from 'next/image'
import beesTraitsBee from '../images/beesTraitsBee.png'
import glasses from '../images/glasses.png'
import gun from '../images/gun.png'
import wings from '../images/wings.png'
import hat from '../images/hat.png'
import styles from '../styles/BeesTraits.module.css'
import { useEffect, useState } from 'react'

const BeesTraits = () => {
  const traits = ['Hats', 'Glasses', 'Noses', 'Hands', 'Wings']
  const [count, setCount] = useState(0)
  const [trait, setTrait] = useState(traits[count])

  const handleChange = (direction) => {
    direction === 'plus' ? setCount((count += 1)) : setCount((count -= 1))
    if (count >= traits.length) {
      setCount(0)
    }
    if (count < 0) {
      setCount(traits.length - 1)
    }
  }

  useEffect(() => {
    setTrait(traits[count])
  }, [count])

  return (
    <Container
      maxWidth='false'
      id={styles.beesTraits}
      sx={{
        display: 'flex',
        justifyContent: { xs: 'space-around', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: '25px',
        minHeight: { xs: '1700px', md: '700px', lg: '997px' },
        background: '#8A4A00',
      }}>
      <Box
        display='flex'
        flexDirection='column'
        sx={{
          marginBottom: { xs: '0px', md: '70px' },
          maxWidth: { xs: '340px', md: '220px', lg: '280px', xl: '340px' },
          marginRight: { md: '10px', xl: '30px' },
          marginLeft: { md: '10px' },
        }}>
        <Typography
          sx={{
            fontFamily: 'Clash Grotesk',
            fontWeight: '600',
            fontSize: {
              xs: '20px',
              sm: '16px',
              md: '16px',
              lg: '20px',
              xl: '24px',
            },
            color: '#FFC55E',
          }}>
          Lorem ipsum dolor sit amet
        </Typography>
        <Typography
          sx={{
            marginBottom: '40px',
            fontFamily: 'Clash Grotesk',
            fontWeight: '700',
            fontSize: {
              xs: '54px',
              sm: '64px',
              md: '42px',
              lg: '54px',
              xl: '64px',
            },
            lineHeight: '80px',
            color: '#FFFFFF',
          }}>
          Bees traits
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Montserrat',
            fontSize: {
              xs: '16px',
              sm: '20px',
              md: '16px',
              lg: '18px',
              xl: '20px',
            },
            lineHeight: '32px',
            letterSpacing: '0.01em',
            color: '#FFFFFF',
          }}>
          Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
          purus eget nisl efficitur, at porttitor ex accumsan.
        </Typography>
      </Box>
      <Box
        display='flex'
        flexDirection='column'
        alignItems='center'
        marginTop='-5px'>
        <Box marginTop='55px' marginLeft='40px' id={styles.beesTraitsBee}>
          <Image src={beesTraitsBee} />
        </Box>
        <Box
          marginTop='-75px'
          display='flex'
          alignItems='center'
          sx={{ marginLeft: { xs: '0', lg: '30px' } }}>
          <Box
            onClick={() => {
              handleChange('minus')
            }}
            minWidth='45px'
            minHeight='45px'>
            <Image src={ArrowIcon} />
          </Box>
          <Button
            sx={{
              height: '76px',
              marginX: '32px',
              padding: '25.5px 32px 28px 30.5px',
              borderRadius: '16px',
              backgroundColor: '#DB8216',
              transform: 'matrix(1, -0.03, 0.03, 1, 0, 0)',
            }}>
            <Typography
              sx={{
                fontFamily: 'Clash Grotesk',
                fontWeight: '700',
                fontSize: { xs: '13px', sm: '32px', md: '20px', lg: '32px' },
                lineHeight: '32px',
                color: 'white',
                transform: 'matrix(1, 0.03, -0.03, 1, 0, 0)',
                textTransform: 'none',
              }}>
              {trait} - lot of them!
            </Typography>
          </Button>
          <Box
            onClick={() => {
              handleChange('plus')
            }}
            minWidth='45px'
            minHeight='45px'
            sx={{ marginBottom: '10px', transform: 'rotate(180deg)' }}>
            <Image src={ArrowIcon} />
          </Box>
        </Box>
        <Typography
          sx={{
            marginLeft: '32px',
            marginTop: '17px',
            maxWidth: '493px',
            fontFamily: 'Montserrat',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '24px',
            letterSpacing: '0.01em',
            textAlign: 'center',
            color: 'white',
          }}>
          Duis egestas rutrum erat vel finibus. Lorem ipsum dolor. Donec dapibus
          purus eget nisl efficitur, at porttitor ex accumsan.
        </Typography>
      </Box>
      <Box
        display='grid'
        gridTemplateColumns='repeat(12, 1fr)'
        gridTemplateRows='repeat(3, 1fr)'
        marginTop='-5px'
        sx={{
          gridColumnGap: '5px',
          gridRowGap: '0px',
        }}>
        <Box className={styles.traitBg} gridArea='1 / 1 / 2 / 5'>
          <Image src={glasses} width={139} height={119} />
        </Box>
        <Box className={styles.traitBg} gridArea='1 / 5 / 2 / 9'>
          <Image src={hat} height={119} />
        </Box>
        <Box className={styles.traitBg} gridArea='1 / 9 / 2 / 13'>
          <Image src={wings} height={119} />
        </Box>
        <Box className={styles.traitBg} gridArea='2 / 3 / 3 / 7'>
          <Image src={hat} height={119} />
        </Box>
        <Box className={styles.traitBg} gridArea='2 / 7 / 3 / 11'>
          <Image src={gun} height={119} />
        </Box>
        <Box className={styles.traitBg} gridArea='3 / 5 / 4 / 9'>
          <Image src={hat} height={119} />
        </Box>
      </Box>
    </Container>
  )
}

export default BeesTraits
