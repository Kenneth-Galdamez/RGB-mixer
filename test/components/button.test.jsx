import CounterButton from "../../components/CounterButton";
import { render, fireEvent } from '@testing-library/react-native';

describe('Boton para control de valores individuales de rgb', () => {

    const testClick = jest.fn();

    test('El boton fue clickeado', () => {

        const { getByText } = render(<CounterButton  onPress={testClick} />);

        fireEvent.press(getByText(""));
  
        expect(testClick).toHaveBeenCalled();
    });


    test('El boton se renderiza', () => {

        const { getByText } = render(<CounterButton  onPress={testClick} />);
  
        expect(getByText("")).toBeTruthy();
    });
  });