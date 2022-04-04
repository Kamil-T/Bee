import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import ArrowIcon from './ArrowIcon'
import Image from 'next/image'
import Beebackground from '../images/beesTraitsbeebg.svg'
import glass from '../images/glassestrait.png'
import gun from '../images/gun.png'
import wing from '../images/wingstrait.png'
import hat from '../images/hat.png'
import Hats from '../images/Hats.png'
import Guns from '../images/Guns.png'
import Masks from '../images/Masks.png'
import Wings from '../images/Wings.png'
import Bowtie from '../images/Bowtie.png'
import Glasses from '../images/Glasses.png'
import styles from '../styles/BeesTraits.module.css'
import { useState } from 'react'

const BeesTraits = () => {
  const traits = {
    1: { image: Glasses, name: 'Glasses' },
    2: { image: Hats, name: 'Hats' },
    3: { image: Wings, name: 'Wings' },
    4: { image: Hats, name: 'Hats' },
    5: { image: Guns, name: 'Guns' },
    6: { image: Hats, name: 'Hats' },
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
      id={styles.beesTraits}
      sx={{
        display: 'flex',
        justifyContent: { xs: 'space-around', md: 'center' },
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        gap: { xs: '50px', md: '0px' },
        minHeight: { xs: 'false', md: '700px', lg: '997px' },
        paddingY: { xs: '50px', md: '0px' },
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
        <Box
          marginTop='55px'
          sx={{
            backgroundImage: `url(${Beebackground.src})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '87%',
            backgroundPosition: 'center',
          }}>
          <Box
            marginTop='-70px'
            sx={{
              clipPath: 'polygon(0 0, 100% 0, 100% 71%, 50% 99%, 0 71%)',
            }}>
            <Image
              src={`${traits[count].image.src}`}
              height={569}
              width={493}
            />
          </Box>
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
            minHeight='45px'
            sx={{ transform: 'rotate(90deg)' }}>
            <ArrowIcon arrow='#FFFFFF' border='#DB8116' />
          </Box>
          <Box
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
              {traits[count].name}- lot of them!
            </Typography>
          </Box>
          <Box
            onClick={() => {
              handleChange('plus')
            }}
            minWidth='45px'
            minHeight='45px'
            sx={{ transform: 'rotate(270deg)' }}>
            <ArrowIcon arrow='#FFFFFF' border='#DB8116' />
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
            <Image src={glass} width={139} height={119} />
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
            <Image src={hat} height={119} />
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
            <Image src={wing} height={119} />
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
            <Image src={hat} height={119} />
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
            <Image src={gun} height={119} />
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
            <Image src={hat} height={119} />
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default BeesTraits
