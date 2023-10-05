import RegistrationPage from 'pages/RegistrationPage/RegistrationPage';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <RegistrationPage />
    </div>
  );
};
