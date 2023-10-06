import React from 'react';
import css from './PasswordStrengthMeter.module.css';
import zxcvbn from 'zxcvbn';

const PasswordStrengthMeter = props => {
  const { password } = props;
  const testedResult = zxcvbn(password);

  const createPasswordLabel = result => {
    switch (result.score) {
      case 0:
        return 'Weak';
      case 1:
        return 'Weak';
      case 2:
        return 'Fair';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return 'Weak';
    }
  };

  return (
    <div className={css.passwordStrengthMeter}>
      {password && (
        <progress
          className={`${css.passwordStrengthMeterProgress} ${
            css[createPasswordLabel(testedResult)]
          }`}
          value={testedResult.score}
          max="4"
        />
      )}
    </div>
  );
};

export default PasswordStrengthMeter;
