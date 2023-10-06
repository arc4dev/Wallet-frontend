import { TailSpin } from 'react-loader-spinner';

const Loader = () => {
  return (
    <TailSpin
      height="80"
      width="80"
      ariaLabel="tail-spin-loading"
      color="var(--color-brand)"
      radius="1"
      visible={true}
    />
  );
};

export default Loader;
