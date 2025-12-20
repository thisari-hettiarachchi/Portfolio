 import React, { useState, useEffect } from "react";

const TypingText = () => {
  const roles = ["Full-Stack Developer", "UI/UX Designer"];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const currentRole = roles[index];
    if (charIndex < currentRole.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentRole.charAt(charIndex));
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText("");
        setCharIndex(0);
        setIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, index]);

  return (
    <span className="typing-text-effect">
      {text}
      <span className="cursor">|</span>
    </span>
  );
};

export default TypingText; 
