import ColorBar from "../../components/ColorBar";
import { render, fireEvent } from '@testing-library/react-native';
import React, { useEffect, useState } from 'react'


describe('Barra para ingresar manualmente valores...', () => {

    const testClick = jest.fn();

    test('La barra cambio', () => {

        const { getByTestId} = render(<ColorBar  label={"0"} onChangeText={testClick}  />);

        fireEvent.changeText(getByTestId("color-bar-input"));
  
        expect(testClick).toHaveBeenCalled();
    });


    test('El boton se renderiza', () => {

        const { getByTestId } = render(<ColorBar  onChangeText={testClick} />);
  
        expect(getByTestId("color-bar-input")).toBeTruthy();
    });
  });