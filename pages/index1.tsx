// pages/index.tsx
import { useEffect, useRef, useState } from 'react';
import io, { Socket } from 'socket.io-client';
import Webcam from 'react-webcam';

const socketURL = 'http://localhost:8000';

export default function Home() {
  const [processedImage, setProcessedImage] = useState<string | null>(null);
  
  // Properly type socketRef to be either a Socket instance or null
  const socketRef = useRef<Socket | null>(null);
  const webcamRef = useRef<Webcam>(null);

  useEffect(() => {
    // Initialize the socket connection
    socketRef.current = io(socketURL, {
      reconnection: true, // Enables auto reconnection
      reconnectionAttempts: 10, // Limits reconnection attempts
      reconnectionDelay: 1000, // Delay between reconnections
    });

    socketRef.current.on('processed_image', (data: { image: string }) => {
      setProcessedImage(data.image);
    });

    socketRef.current.on('connect_error', (err) => {
      console.error('Connection Error:', err);
    });

    return () => {
      // Clean up the socket connection on component unmount
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current?.getScreenshot();
    if (imageSrc) {
      const base64String = imageSrc.replace('data:image/jpeg;base64,', '');
      socketRef.current?.emit('image', { image: base64String });
    } else {
      console.error('Failed to capture image from webcam.');
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 500); // Capture a frame every 500ms

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>WebSocket Real-time Image Processing Client</h1>
      <Webcam audio={false} ref={webcamRef} screenshotFormat="image/jpeg" />
      {processedImage && (
        <div>
          <h2>Processed Image:</h2>
          <img src={`data:image/jpeg;base64,${processedImage}`} alt="Processed" />
        </div>
      )}
    </div>
  );
}
