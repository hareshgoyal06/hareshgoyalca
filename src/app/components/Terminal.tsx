import React, { useEffect, useRef, useState } from 'react';

const Terminal = () => {
  const terminalLines: string[] = [
    "-$ npm install hareshgoyalca",
    "Installing hareshgoyalca...",
    "✔ Installation complete.",
    "...",
    "Hey I'm Haresh 👋🏽",
    "I'm a first-year computer engineer at the University of Waterloo 🪿",
    "I like to build stuff :)",
  ];

  // Calculate total height needed for all lines
  const lineHeight = 24; // approximate height in pixels for each line
  const totalHeight = lineHeight * terminalLines.length;

  // Refs & State
  const containerRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  
  // We'll use a single array with the current state of each line
  const [displayLines, setDisplayLines] = useState<string[]>(
    Array(terminalLines.length).fill("")
  );
  
  // Track which line we're currently typing
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !typingStarted) {
            setInView(true);
            setTypingStarted(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, [typingStarted]);

  // Typewriter Effect
  useEffect(() => {
    if (!inView || currentLineIndex >= terminalLines.length) return;

    const currentLine = terminalLines[currentLineIndex];
    let typedChars = displayLines[currentLineIndex].length;
    
    const interval = setInterval(() => {
      if (typedChars < currentLine.length) {
        // Update the current line by adding the next character
        setDisplayLines(prev => {
          const newLines = [...prev];
          newLines[currentLineIndex] = currentLine.substring(0, typedChars + 1);
          return newLines;
        });
        typedChars++;
      } else {
        // Move to the next line
        clearInterval(interval);
        setCurrentLineIndex(prev => prev + 1);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [inView, currentLineIndex, displayLines, terminalLines]);

  return (
    <aside
      ref={containerRef}
      className="bg-black text-white p-6 rounded-lg w-full max-w-lg font-mono"
    >
      <div className="flex justify-between items-center">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <p className="text-sm">bash</p>
      </div>
      
      {/* Terminal content with pre-allocated space */}
      <div className="mt-4" style={{ minHeight: `${totalHeight}px` }}>
        {displayLines.map((line, index) => (
          <p
            key={index}
            className={
              terminalLines[index]?.startsWith("-$") || terminalLines[index]?.startsWith("$")
                ? "text-green-400"
                : "text-white"
            }
          >
            {line}
            {/* Only show cursor on current line being typed */}
            {index === currentLineIndex && line.length > 0 && line.length < terminalLines[index].length && (
              <span className="animate-blink">|</span>
            )}
          </p>
        ))}
      </div>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
      `}</style>
    </aside>
  );
};

export default Terminal;