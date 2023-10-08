import { styled } from '@mui/material/styles';
import Switch from '@mui/material/Switch';

const MySVG = {
  plus: `
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
      <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 1v16M1 9h16"/>
    </svg>
      </svg>
    `,
  minus: `
      <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20">
      <svg className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
      <path stroke="#fff" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h16"/>
    </svg>      </svg>
    `,
};

const IncExpBtn = styled(Switch)(({ theme }) => ({
  width: 90,
  height: 48,
  padding: 4,
  '& .MuiSwitch-switchBase': {
    margin: 2,
    padding: 0,
    transform: 'translateX(0px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(44px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(MySVG.minus)}')`,
      },
      '& + .MuiSwitch-track': {
        border: '1px solid #E0E0E0',
        background: 'transparent',
        opacity: 1,
      },
      '& .MuiSwitch-thumb': {
        backgroundColor: '#FF6596',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: '#24CCA7',
    width: 44,
    height: 44,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,${encodeURIComponent(MySVG.plus)}')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    border: '1px solid #E0E0E0',
    background: 'transparent',
    borderRadius: 50,
  },
}));

export default IncExpBtn;
