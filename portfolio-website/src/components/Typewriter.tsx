import { useState, useEffect } from "react";

interface Props {
  text: string;
  delay: number;
}

function Typewriter({ text, delay }: Props) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    if  (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        

        setCurrentText(currentText + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);

        setCounter(counter + 1);

      }, delay);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, delay, text]);

  if (counter % 3 == 0 || currentIndex >= text.length) {
    return <span>{currentText}</span>;
  } else {
    return <span>{currentText + "|"}</span>;
  }
}

export default Typewriter;
