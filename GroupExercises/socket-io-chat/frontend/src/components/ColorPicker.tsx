import { useState } from 'react';
import { SketchPicker } from 'react-color';

export const ColorPicker = ({ onColorChange, onClose }: { onColorChange: (color: string) => void, onClose: () => void }) => {
  const [selectedColor, setSelectedColor] = useState<string>('#000');

  const handleChange = (newColor: any) => { 
    setSelectedColor(newColor.hex);
  };

  const handleSave = () => {
    onColorChange(selectedColor);
    onClose();
  };

  return (
    <div style={{ display: 'inline-block' }}>
      <SketchPicker color={selectedColor} onChange={handleChange} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};