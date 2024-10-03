import styled from 'styled-components';

interface ButtonProps {
  color?: string;
  size?: 'small' | 'medium' | 'large';
}

const CustomButton = styled.button<ButtonProps>`
  background-color: ${({ color }) => color || '#007bff'};
  color: white;
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '12px';
      case 'medium':
        return '14px';
      case 'large':
        return '16px';
      default:
        return '14px';
    }
  }};
  padding: ${({ size }) => {
    switch (size) {
      case 'small':
        return '5px 10px';
      case 'medium':
        return '8px 16px';
      case 'large':
        return '10px 20px';
      default:
        return '8px 16px';
    }
  }};
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default CustomButton;
