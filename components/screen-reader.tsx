
'use client'
import { useEffect, useState } from 'react';
import { marked } from 'marked';

const ScreenReader = ({ markdownContent }: { markdownContent: string }) => {
  const [plainText, setPlainText] = useState<string>('');
  const [playStatus, setPlayStatus] = useState<string>('stop');

  useEffect(() => {

    convertMarkdownToHtml();
    return () => {
      window.speechSynthesis.cancel();
      setPlayStatus('stop')
    };

  }, [markdownContent]);


  const convertMarkdownToHtml = async () => {
    // Convert markdown to HTML
    const htmlContent = await marked(markdownContent);
    // Create a temporary DOM element to extract the readable text content
    const doc = new DOMParser().parseFromString(htmlContent, 'text/html');
    const textContent = doc.body.textContent || '';

    setPlainText(textContent);
  };

  const handleReadAloud = () => {
    if (plainText) {
      if (playStatus == 'stop') {
        const utterance = new SpeechSynthesisUtterance(plainText);
        window.speechSynthesis.speak(utterance);
      }
      else {
        window.speechSynthesis.resume();
        setPlayStatus('playing')
      }
      setPlayStatus('playing')
    }
  };

  const handlePause = () => {
    window.speechSynthesis.pause();
    setPlayStatus('pause')
  };

  const handleStop = () => {
    window.speechSynthesis.cancel();
    setPlayStatus('stop')
  };


  return (
    <div className="flex space-x-2 mt-2 float-end">
      {(playStatus == 'stop' || playStatus == 'pause') && <button
        onClick={handleReadAloud}
        className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
      >
        {playStatus == 'stop' ? `Read Aloud` : `Resume`}
      </button>}
      {playStatus == 'playing' &&
        <button
          onClick={handlePause}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-300"
        >
          Pause
        </button>
      }
      {playStatus == 'playing' &&
        <button
          onClick={handleStop}
          className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-300"
        >
          Stop
        </button>
      }
    </div>
  );
};

export default ScreenReader;
