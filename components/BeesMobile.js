import Box from '@mui/material/Box'
import Image from 'next/image'
import beeGlasses from '../images/beeglasses.png'
import beeMask from '../images/beemask.png'
import styles from '../styles/Bee.module.css'

const BeesMobile = () => {
  return (
    <Box
      display='grid'
      gridTemplateColumns='repeat(9, 1fr)'
      gridTemplateRows='1fr'
      gridColumnGap='0px'
      gridRowGap='0px'
      width='95%'
      height='360px'
      sx={{
        overflowX: ' scroll',
        overflowY: 'hidden',
        scrollbarWidth: 'thin',
      }}>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeMask} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeGlasses} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeMask} />
      </Box>
      <Box className={styles.beebg} width='268px' height='310px'>
        <Image src={beeMask} />
      </Box>
    </Box>
  )
}

export default BeesMobile
