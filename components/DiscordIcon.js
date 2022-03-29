import * as React from 'react'
import IconButton from '@mui/material/IconButton'

const DiscordIcon = (props) => (
  <IconButton
    sx={{
      padding: '11px',
      '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.07)',
      },
    }}
    href='https://discord.com'>
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
        d='M35.1484 17.7636L50.634 26.7042C51.6541 27.2932 52.2824 28.3815 52.2824 29.5594V47.4406C52.2824 48.6185 51.6541 49.7068 50.634 50.2958L35.1484 59.2364C34.1284 59.8253 32.8716 59.8253 31.8516 59.2364L16.366 50.2958C15.3459 49.7068 14.7176 48.6185 14.7176 47.4406V29.5594C14.7176 28.3815 15.3459 27.2932 16.366 26.7042L31.8516 17.7636C32.8716 17.1747 34.1284 17.1747 35.1484 17.7636Z'
        stroke='#6C3900'
        strokeWidth={1.40625}
      />
      <path
        d='M41.3039 31.4637C39.8187 30.8032 38.2723 30.3227 36.665 30.0625C36.4615 30.4228 36.2377 30.8832 36.0749 31.2636C34.3658 31.0033 32.6364 31.0033 30.9273 31.2636C30.7442 30.8432 30.5407 30.4428 30.3169 30.0625C28.7096 30.3227 27.1429 30.8032 25.6779 31.4838C22.7481 35.7876 21.9546 39.9713 22.3411 44.115C24.0706 45.3761 25.9831 46.337 28.0381 46.9375C28.5061 46.3169 28.913 45.6764 29.2589 44.9958C28.5875 44.7556 27.9567 44.4553 27.3463 44.095C27.5091 43.9749 27.6515 43.8548 27.8143 43.7347C31.4156 45.4161 35.607 45.4161 39.2083 43.7347C39.371 43.8548 39.5135 43.9749 39.6762 44.095C39.0658 44.4553 38.4148 44.7556 37.7433 44.9958C38.0892 45.6764 38.4961 46.3169 38.9641 46.9375C41.0191 46.3169 42.952 45.3761 44.6611 44.115C45.1087 39.3107 43.8472 35.147 41.3039 31.4637ZM29.7472 41.5527C28.6282 41.5527 27.7329 40.5518 27.7329 39.3307C27.7329 38.1097 28.6282 37.0887 29.7472 37.0887C30.8866 37.0887 31.7819 38.0896 31.7819 39.3307C31.7615 40.5518 30.8866 41.5527 29.7472 41.5527ZM37.2347 41.5527C36.1156 41.5527 35.2204 40.5518 35.2204 39.3307C35.2204 38.1097 36.1156 37.0887 37.2347 37.0887C38.3741 37.0887 39.2693 38.0896 39.249 39.3307C39.2286 40.5718 38.3537 41.5527 37.2347 41.5527Z'
        fill='#6C3900'
      />
    </svg>
  </IconButton>
)

export default DiscordIcon
