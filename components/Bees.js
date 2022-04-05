import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Image from 'next/image'
import BeesBg from '../images/Beesbg.svg'
import beeGlasses from '../images/beeglasses.png'
import beeMask from '../images/beemask.png'
import styles from '../styles/Bee.module.css'

const Bees = () => {
  return (
    <Container
      id={styles.beesbg}
      maxWidth='false'
      sx={{
        maxWidth: '1440px',
        display: 'grid',
        gridTemplateColumns: 'repeat(10, 1fr)',
        gridTemplateRows: 'repeat(2, 1fr)',
        gridColumnGap: '0px',
        gridRowGap: '0px',
        justifyItems: 'center',
        alignItems: 'center',
      }}>
      <Box marginTop='9%' paddingX='4%' gridArea='1 / 1 / 2 / 3'>
        <Image src={beeGlasses} />
      </Box>
      <Box marginTop='9%' paddingX='4%' gridArea='1 / 3 / 2 / 5'>
        <Image src={beeGlasses} />
      </Box>
      <Box marginTop='9%' paddingX='4%' gridArea='1 / 5 / 2 / 7'>
        <Image src={beeMask} />
      </Box>
      <Box marginTop='9%' paddingX='4%' gridArea='1 / 7 / 2 / 9'>
        <Image src={beeGlasses} />
      </Box>
      <Box marginTop='9%' paddingX='4%' gridArea='1 / 9 / 2 / 11'>
        <Image src={beeGlasses} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingX='4%'
        gridArea='2 / 2 / 3 / 4'
        sx={{
          marginTop: { xs: '-54%', sm: '-47%', md: '-43%', lg: '-41%' },
        }}>
        <Image src={beeGlasses} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingX='4%'
        gridArea='2 / 4 / 3 / 6'
        sx={{
          marginTop: { xs: '-54%', sm: '-47%', md: '-43%', lg: '-41%' },
        }}>
        <Image src={beeGlasses} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingX='4%'
        gridArea='2 / 6 / 3 / 8'
        sx={{
          marginTop: { xs: '-54%', sm: '-47%', md: '-43%', lg: '-41%' },
        }}>
        <Image src={beeMask} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingX='4%'
        gridArea='2 / 8 / 3 / 10'
        sx={{
          marginTop: { xs: '-54%', sm: '-47%', md: '-43%', lg: '-41%' },
        }}>
        <Image src={beeMask} />
      </Box>
    </Container>
  )
}

export default Bees
