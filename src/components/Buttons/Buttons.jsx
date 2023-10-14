import { Button } from '@mui/material';
import css from './Buttons.module.css';

// props for green button
// variant="contained"

// props for empty button

const Buttons = ({ children, variant, type = 'submit', onClick }) => {
  const filledBtn = `${css.button} ${css.filled}`;
  const emptyBtn = `${css.button} ${css.outlined}`;

  return (
    <Button
      onClick={onClick}
      variant={variant}
      className={variant === 'contained' ? filledBtn : emptyBtn}
      type={type}
    >
      {children}
    </Button>
  );
};

export default Buttons;
