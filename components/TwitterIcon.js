import * as React from 'react'
import IconButton from '@mui/material/IconButton'

const TwitterIcon = (props) => (
  <IconButton
    disableTouchRipple
    sx={{
      ':hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.00)',
        opacity: '0.75',
      },
    }}
    href='https://twitter.com'>
    <svg
      width={67}
      height={77}
      viewBox='0 0 67 77'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}>
      <path
        d='M0 55.3211V21.2921L33.1883 0L66.3887 21.2921V55.3211L33.1883 76.6253L0 55.3211Z'
        fill='#F7BC24'
      />
      <path
        d='M34.1484 17.7636L49.634 26.7042C50.6541 27.2932 51.2824 28.3815 51.2824 29.5594V47.4406C51.2824 48.6185 50.6541 49.7068 49.634 50.2958L34.1484 59.2364C33.1284 59.8253 31.8716 59.8253 30.8516 59.2364L15.366 50.2958C14.3459 49.7068 13.7176 48.6185 13.7176 47.4406V29.5594C13.7176 28.3815 14.3459 27.2932 15.366 26.7042L30.8516 17.7636C31.8716 17.1747 33.1284 17.1747 34.1484 17.7636Z'
        stroke='#6C3900'
        strokeWidth={1.40625}
      />
      <path
        d='M42.3437 32.0601C41.6194 32.3989 40.8409 32.6279 40.024 32.7309C40.8578 32.2037 41.4984 31.3688 41.7999 30.374C41.0194 30.8623 40.155 31.2167 39.2349 31.4077C38.4982 30.5797 37.4484 30.0625 36.2867 30.0625C34.0561 30.0625 32.2475 31.9698 32.2475 34.3225C32.2475 34.6564 32.2832 34.9816 32.3521 35.2934C28.9952 35.1157 26.019 33.4196 24.0269 30.8422C23.6792 31.4714 23.4799 32.2031 23.4799 32.9839C23.4799 34.4619 24.193 35.7659 25.2768 36.5298C24.6147 36.5077 23.9919 36.316 23.4474 35.997C23.4469 36.0147 23.4469 36.0326 23.4469 36.0505C23.4469 38.1146 24.8392 39.8363 26.687 40.2279C26.3481 40.3253 25.9912 40.3773 25.6229 40.3773C25.3626 40.3773 25.1096 40.3505 24.8629 40.3009C25.377 41.9933 26.8686 43.225 28.6361 43.2592C27.2538 44.4019 25.5122 45.083 23.6198 45.083C23.2937 45.083 22.9722 45.0628 22.6562 45.0234C24.4438 46.2322 26.5669 46.9375 28.8479 46.9375C36.2773 46.9375 40.3401 40.4461 40.3401 34.8164C40.3401 34.6317 40.3361 34.448 40.3284 34.2652C41.1174 33.6647 41.8022 32.9144 42.3437 32.0601H42.3437Z'
        fill='#6C3900'
      />
    </svg>
  </IconButton>
)

export default TwitterIcon
