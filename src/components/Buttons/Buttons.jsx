import { Button } from '@mui/material';
import css from './Buttons.module.css';

// props for green button
// variant="contained"
// className="filledBtn"

// props for empty button
// variant="outlined"
// className="emptyBtn"

const Buttons = ({ variant, className, text, type = 'submit' }) => {
  const filledBtn = `${css.button} ${css.filled}`;
  const emptyBtn = `${css.button} ${css.outlined}`;

  if (className === 'filledBtn') className = filledBtn;
  if (className === 'emptyBtn') className = emptyBtn;

  return (
    <Button variant={variant} className={className} type={type}>
      {text}
    </Button>
  );
};

export default Buttons;
