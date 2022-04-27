import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import ArrowIcon from './ArrowIcon'
import Image from 'next/image'
import BeesTraitsBg from '../images/BeesTraitsBg.svg'
import Beebackground from '../images/beesTraitsbeebg.svg'
import TraitGlasses from '../images/TraitGlasses.png'
import TraitHat from '../images/TraitHat.png'
import TraitClothes from '../images/TraitClothes.png'
import TraitMouth from '../images/TraitMouth.png'
import TraitHand from '../images/TraitHand.png'
import TraitWings from '../images/TraitWings.png'
import BeeHat from '../images/BeeHat.png'
import BeeHand from '../images/BeeHand.png'
import BeeFace from '../images/BeeFace.png'
import BeeWings from '../images/BeeWings.png'
import BeeClothes from '../images/BeeClothes.png'
import BeeGlasses from '../images/BeeGlasses.png'
import styles from '../styles/BeesTraits.module.css'
import { useState } from 'react'

const BeesTraits = () => {
  const traits = {
    1: { image: BeeGlasses, name: 'Glasses' },
    2: { image: BeeHat, name: 'Hats' },
    3: { image: BeeFace, name: 'Mouths' },
    4: { image: BeeClothes, name: 'Clothes' },
    5: { image: BeeHand, name: 'Hands' },
    6: { image: BeeWings, name: 'Wings' },
  }

  const [count, setCount] = useState(1)

  const handleChange = (direction) => {
    direction === 'plus' ? setCount((count += 1)) : setCount((count -= 1))
    if (count > Object.keys(traits).length) {
      setCount(1)
    }
    if (count < 1) {
      setCount(Object.keys(traits).length)
    }
  }

  return (
    <Container
      maxWidth='false'
      sx={{
        display: 'flex',
        justifyContent: { xs: 'space-around', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: '50px', md: '0px' },
        minHeight: { xs: 'false', md: '700px', lg: '997px' },
        paddingY: { xs: '50px', md: '0px' },
        background: '#8A4A00',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `url(${BeesTraitsBg.src})`,
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
        <Box
          maxHeight='590px'
          maxWidth='570px'
          marginTop='55px'
          sx={{
            backgroundImage: `url(${Beebackground.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '87%',
            backgroundPosition: 'center',
          }}>
          <Box
            sx={{
              clipPath: 'polygon(0 0, 100% 0, 100% 68%, 50% 100%, 0 68%)',
            }}>
            <Image
              src={`${traits[count].image.src}`}
              height={570}
              width={580}
            />
          </Box>
        </Box>
        <Box
          width='100%'
          marginTop='-75px'
          display='flex'
          justifyContent='space-between'
          alignItems='center'
          gap='10px'>
          <IconButton
            disableTouchRipple
            onClick={() => {
              handleChange('minus')
            }}
            sx={{
              minWidth: '45px',
              minHeight: '45px',
              transform: 'rotate(90deg)',
              ':hover': {
                opacity: '0.75',
                backgroundColor: 'rgba(0, 0, 0, 0.00)',
              },
            }}>
            <ArrowIcon arrow='#FFFFFF' border='#DB8116' />
          </IconButton>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='center'
            width='100%'
            height='76px'
            borderRadius='16px'
            sx={{
              paddingX: { xs: '15px', sm: '20px', md: '20px', lg: '30px' },
              backgroundColor: '#DB8216',
              transform: 'matrix(1, -0.03, 0.03, 1, 0, 0)',
            }}>
            <Typography
              sx={{
                textAlign: 'center',
                fontFamily: 'Clash Grotesk',
                fontWeight: '700',
                fontSize: {
                  xs: '6vw',
                  sm: '32px',
                  md: '16px',
                  lg: '26px',
                  xl: '32px',
                },
                lineHeight: '32px',
                color: 'white',
                transform: 'matrix(1, 0.03, -0.03, 1, 0, 0)',
              }}>
              {traits[count].name} - lot of them!
            </Typography>
          </Box>
          <IconButton
            disableTouchRipple
            onClick={() => {
              handleChange('plus')
            }}
            sx={{
              minWidth: '45px',
              minHeight: '45px',
              transform: 'rotate(270deg)',
              ':hover': {
                opacity: '0.75',
                backgroundColor: 'rgba(0, 0, 0, 0.00)',
              },
            }}>
            <ArrowIcon arrow='#FFFFFF' border='#DB8116' />
          </IconButton>
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
        gridColumnGap='5px'
        gridRowGap='0px'>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 1 ? styles.active : ''}`}
          gridArea='1 / 1 / 2 / 5'>
          <Box
            onClick={() => {
              setCount(1)
            }}
            className={styles.traitBg}>
            <Image src={TraitGlasses} width={139} height={119} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 2 ? styles.active : ''}`}
          gridArea='1 / 5 / 2 / 9'>
          <Box
            onClick={() => {
              setCount(2)
            }}
            className={styles.traitBg}>
            <Image src={TraitHat} height={119} width={139} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 3 ? styles.active : ''}`}
          gridArea='1 / 9 / 2 / 13'>
          <Box
            onClick={() => {
              setCount(3)
            }}
            className={styles.traitBg}>
            <Image src={TraitMouth} height={119} width={139} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 4 ? styles.active : ''}`}
          gridArea='2 / 3 / 3 / 7'>
          <Box
            onClick={() => {
              setCount(4)
            }}
            className={styles.traitBg}>
            <Image src={TraitClothes} height={119} width={139} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 5 ? styles.active : ''}`}
          gridArea='2 / 7 / 3 / 11'>
          <Box
            onClick={() => {
              setCount(5)
            }}
            className={styles.traitBg}>
            <Image src={TraitHand} height={119} width={139} />
          </Box>
        </Box>
        <Box
          sx={{
            paddingY: { xs: '10px', md: '13px', lg: '15px' },
          }}
          id={`${count === 6 ? styles.active : ''}`}
          gridArea='3 / 5 / 4 / 9'>
          <Box
            onClick={() => {
              setCount(6)
            }}
            className={styles.traitBg}>
            <Image src={TraitWings} height={119} width={139} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default BeesTraits
