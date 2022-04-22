import Box from '@mui/material/Box'
import Image from 'next/image'
import Bee1 from '../images/BP_test_1.png'
import Bee3 from '../images/BP_test_3.png'
import Bee4 from '../images/BP_test_4.png'
import Bee5 from '../images/BP_test_5.png'
import Bee6 from '../images/BP_test_6.png'
import Bee7 from '../images/BP_test_7.png'
import Bee8 from '../images/BP_test_8.png'
import Bee9 from '../images/BP_test_9.png'
import Bee10 from '../images/BP_test_10.png'
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
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee1} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee3} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee4} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee5} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee6} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee7} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee8} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee9} width={240} height={240} />
      </Box>
      <Box
        className={styles.beebg}
        width='268px'
        height='305px'
        display='flex'
        justifyContent='center'
        alignItems='center'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 90%, 0 63%)',
        }}>
        <Image src={Bee10} width={240} height={240} />
      </Box>
    </Box>
  )
}

export default BeesMobile
