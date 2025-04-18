import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { PaletteIcon } from 'lucide-react';
import { useState } from 'react';
import { Color, ColorChangeHandler, TwitterPicker } from 'react-color'

interface ColorPickerProps {
  color: Color | undefined;
  onChange: ColorChangeHandler
}

export default function ColorPicker({ color, onChange }: ColorPickerProps) {
  const [showPopover, setShowPopover] = useState(false);
  return <Popover open={showPopover} onOpenChange={setShowPopover}>
    <PopoverTrigger asChild>
      <Button variant="outline" size="icon" title="Change resume color" onClick={() => setShowPopover(true)}>
        <PaletteIcon className='size-5' />
      </Button>
    </PopoverTrigger>
    <PopoverContent
      align="end"
      className='border-none bg-transparent shadow-none'
    >
      <TwitterPicker triangle='top-right' color={color} onChange={onChange} />
    </PopoverContent>
  </Popover>;
}
