import { renderHook, act } from '@testing-library/react-native';
import {useColor} from '../../constants/hooks/useColor'

describe('useColor hook', () => {
    test('incrementar o reducir rojo por 1', () => {
      const { result } = renderHook(() => useColor());

        expect(result.current.red).toBe(255);
  
        act(() => {
            result.current.evalRed("+");
         });
  
        expect(result.current.red).toBe(255); 
  
        act(() => {
            result.current.evalRed("-");
        });
  
        expect(result.current.red).toBe(254); 
    });
  
    test('cambiar rojo manualmente', () => {
        
      const { result } = renderHook(() => useColor());

      expect(result.current.red).toBe(255);
  
      act(() => {
        result.current.manualRed(200);
      });
  
      expect(result.current.red).toBe(200); 

      act(() => {
        result.current.manualRed(100);
      });
  
      expect(result.current.red).toBe(100); 
    });
  });