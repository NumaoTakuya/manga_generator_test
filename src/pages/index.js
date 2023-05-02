import React, { useRef, useState } from 'react';
import * as faceapi from 'face-api.js';
import Image from 'next/image';

const Playground = () => {
  const [detections, setDetections] = useState([]);
  const imgRef = useRef(null);

  const loadModels = async () => {
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models');
  };

  const handleDetect = async () => {
    if (!imgRef.current) return;

    const detections = await faceapi.detectAllFaces(
      imgRef.current,
      new faceapi.SsdMobilenetv1Options()
    );

    setDetections(detections);
  };

  const drawDetections = () => {
    if (!imgRef.current) return;

    const svg = (
      <svg width={imgRef.current.width} height={imgRef.current.height}>
        {detections.map((detection, i) => {
          const { x, y, width, height } = detection.box;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={width}
              height={height}
              stroke="red"
              strokeWidth="2"
              fill="none"
            />
          );
        })}
      </svg>
    );

    return svg;
  };

  loadModels();

  return (
    <div>
      <h1>Face Detection with SVG</h1>
      <div style={{ position: 'relative' }}>
        <div ref={imgRef} style={{ display: 'inline-block' }}>
          <Image
            src="https://media.discordapp.net/ephemeral-attachments/1092683500743831652/1102796655708864543/Screenshot_2023-05-02_at_12-19-44_Down_To_Earth_-_Episode_1.png?width=802&height=1060"
            alt="face"
            layout="responsive"
            width={640}
            height={480}
          />
        </div>
        {drawDetections()}
      </div>
      <button onClick={handleDetect}>Detect Faces</button>
    </div>
  );
};

export default Playground;
