import { render } from '@testing-library/react-native';
import App from './App'

test('Text renders', () => {
        const { getByPlaceholderText } = render(<App />);
    const element = getByPlaceholderText('Local Businesses Search');
})