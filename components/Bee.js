import Box from '@mui/material/Box'
import Image from 'next/image'
import beeGlasses from '../images/beeglasses.png'
import styles from '../styles/Bee.module.css'

const Bee = () => {
  return (
    <Box
      id={styles.beesbg}
      display='flex'
      flexDirection='column'
      maxWidth='1440px'
      width='100%'
      height='100%'
      justifyContent='space-between'>
      <Box display='flex' justifyContent='center' marginTop='25px'>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
      </Box>
      <Box
        display='flex'
        alignSelf='center'
        marginTop='-33px'
        marginBottom='30px'>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
        <Box maxWidth='265.5px' maxHeight='277.5px' marginX='11px'>
          <Image src={beeGlasses} />
        </Box>
      </Box>
    </Box>
  )
}

export default Bee
