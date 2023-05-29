import { render, screen } from '@testing-library/react';
import App from './App';
import Calendar from './components/Calendar/Calendar';

test('renders learn react link', () => {
  render(<App />);

});

test('check Month', ()=> {
  const { getByText } = render(<Calendar date={new Date('2022-05-10')} />);
  const header = getByText('May 2022');
  expect(header).toBeInTheDocument()
});


test('check Month', ()=> {
  const { getByText } = render(<Calendar date={new Date('2022-07-23')} />);
  const header = getByText('July 2022');
  expect(header).toBeInTheDocument()
});
