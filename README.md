Ten projekt został stworzony przy pomocy
[Create React App](https://github.com/facebook/create-react-app). W celu
zapoznania się z konfiguracją dodatkowych opcji
[zobacz dokumentację](https://facebook.github.io/create-react-app/docs/getting-started).
### Trasowanie

Jeżeli aplikacja wykorzystuje bibliotekę `react-router-dom` dla trasowania,
należy uzupełniająco skonfigurować komponent `<BrowserRouter>`, przekazując w
propsie `basename` dokładną nazwę twojego repozytorium. Slash na początku i na
końcu łańcucha jest obowiązkowy.

```jsx
<BrowserRouter basename="/your_repo_name/">
  <App />
</BrowserRouter>
```
