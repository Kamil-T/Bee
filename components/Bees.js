import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Image from 'next/image'
import Bee1 from '../images/BP_test_1.png'
import Bee10 from '../images/BP_test_10.png'
import Bee3 from '../images/BP_test_3.png'
import Bee4 from '../images/BP_test_4.png'
import Bee5 from '../images/BP_test_5.png'
import Bee6 from '../images/BP_test_6.png'
import Bee7 from '../images/BP_test_7.png'
import Bee8 from '../images/BP_test_8.png'
import Bee9 from '../images/BP_test_9.png'
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
      <Box
        marginTop='8%'
        paddingLeft='5%'
        gridArea='1 / 1 / 2 / 3'
        sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)' }}>
        <Image src={Bee1} />
      </Box>
      <Box
        marginTop='8%'
        paddingLeft='5%'
        gridArea='1 / 3 / 2 / 5'
        sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)' }}>
        <Image src={Bee10} />
      </Box>
      <Box
        marginTop='8%'
        paddingLeft='5%'
        gridArea='1 / 5 / 2 / 7'
        sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)' }}>
        <Image src={Bee3} />
      </Box>
      <Box
        marginTop='8%'
        paddingLeft='5%'
        gridArea='1 / 7 / 2 / 9'
        sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)' }}>
        <Image src={Bee4} />
      </Box>
      <Box
        marginTop='8%'
        paddingLeft='5%'
        gridArea='1 / 9 / 2 / 11'
        sx={{ clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)' }}>
        <Image src={Bee5} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingLeft='5%'
        gridArea='2 / 2 / 3 / 4'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
          marginTop: { md: '-38%', lg: '-37%' },
        }}>
        <Image src={Bee6} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingLeft='5%'
        gridArea='2 / 4 / 3 / 6'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
          marginTop: { md: '-38%', lg: '-37%' },
        }}>
        <Image src={Bee7} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingLeft='5%'
        gridArea='2 / 6 / 3 / 8'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
          marginTop: { md: '-38%', lg: '-37%' },
        }}>
        <Image src={Bee8} />
      </Box>
      <Box
        marginLeft='-1%'
        paddingLeft='5%'
        gridArea='2 / 8 / 3 / 10'
        sx={{
          clipPath: 'polygon(0 0, 100% 0, 100% 65%, 50% 100%, 0 65%)',
          marginTop: { md: '-38%', lg: '-37%' },
        }}>
        <Image src={Bee9} />
      </Box>
    </Container>
  )
}

export default Bees
