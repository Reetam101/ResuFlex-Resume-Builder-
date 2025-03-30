import { useState, useEffect } from "react";
import { Combobox } from "@/components/ui/combobox";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface FontPickerProps {
  fontStyle: string | undefined; 
  onChange: (font: string) => void;
}

const googleFonts: string[] = [
  "Roboto", "Poppins", "Lora", "Montserrat", "Playfair Display", "Open Sans",
  "Source Sans Pro", "Raleway", "Merriweather", "Nunito", "Quicksand"
];

export default function FontPicker({ fontStyle, onChange }: FontPickerProps) {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const link = document.createElement("link");
    link.href = `https://fonts.googleapis.com/css2?family=${fontStyle?.replace(/, /g, "+")}:wght@400;700&display=swap`;
    link.rel = "stylesheet";
    document.head.appendChild(link);
  }, [fontStyle]);

  return (
    <div className="flex flex-col items-center gap-4 p-6">
      <Combobox
        options={googleFonts.map(font => ({ label: font, value: font }))}
        value={fontStyle || "Monteserrat"}
        onChange={(val: string) => {
          setLoading(true);
          setTimeout(() => {
            onChange(val);
            setLoading(false);
          }, 500);
        }}
        placeholder="Select a font"
      />
      {/* <Card className="w-full max-w-md text-center p-4">
        <CardContent>
          {loading ? (
            <Loader2 className="animate-spin mx-auto" size={24} />
          ) : (
            <p className="text-xl" style={{ fontFamily: fontStyle }}>
              The quick brown fox jumps over the lazy dog.
            </p>
          )}
        </CardContent>
      </Card>
      <Button variant="outline">Apply Font</Button> */}
    </div>
  );
}