import { ThemeProvider } from 'styled-components';
import './App.css';
import Calendar from '@components/calendar/Calendar';
import Header from '@components/header/Header'
import SearchBar from '@components/searchBar/SearchBar';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <SearchBar />
      <Calendar />
    </ThemeProvider>
  );
}

export default App;
