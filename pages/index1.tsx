import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';
import Webcam from 'react-webcam';

export default function Home() {
  const [processedImage, setProcessedImage] = useState(null);
  const webcamRef = useRef(null);
  const socketRef = useRef(null);

  useEffect(() => {
    socketRef.current = io('103.175.221.57:8000', {
      reconnection: true, // Enables auto reconnection
      reconnectionAttempts: 10, // Limits reconnection attempts
      reconnectionDelay: 1000, // Delay between reconnections
    });

    socketRef.current.on('processed_image', (data) => {
      setProcessedImage(data.image);
    });

    socketRef.current.on('connect_error', (err) => {
      console.error('Connection Error:', err);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const capture = () => {
    const imageSrc = webcamRef.current.getScreenshot();
    if (imageSrc) {
      const base64String = imageSrc.replace('data:image/jpeg;base64,', '');
      socketRef.current.emit('image', { image: base64String });
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      capture();
    }, 500);

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
