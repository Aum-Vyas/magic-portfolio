'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';

type Props = {
  src: string;
  cols?: number; // number of characters per row
  invert?: boolean; // invert brightness mapping
  charset?: string; // darkest -> lightest
};

function toAscii(
  imageData: ImageData,
  cols: number,
  invert: boolean,
  charset: string
) {
  const { width, height, data } = imageData;
  const aspect = 2; // compensate for typical character aspect ratio
  const rows = Math.max(1, Math.round((height / width) * cols / aspect));

  const cellW = width / cols;
  const cellH = height / rows;
  const ramp = invert ? charset.split('').reverse().join('') : charset;
  const rampLen = ramp.length - 1;

  let out = '';

  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      // sample center of cell
      const x = Math.min(width - 1, Math.floor((c + 0.5) * cellW));
      const y = Math.min(height - 1, Math.floor((r + 0.5) * cellH));
      const idx = (y * width + x) * 4;
      const R = data[idx];
      const G = data[idx + 1];
      const B = data[idx + 2];
      // luminance
      const lum = 0.2126 * R + 0.7152 * G + 0.0722 * B; // 0..255
      const n = Math.max(0, Math.min(rampLen, Math.round((lum / 255) * rampLen)));
      out += ramp[n];
    }
    out += '\n';
  }

  return out;
}

export function AsciiBeforeAfter({
  src,
  cols = 90,
  invert = false,
  charset = "@%#*+=-:. "
}: Props) {
  const [ascii, setAscii] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    setLoading(true);
    setError('');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    img.onload = () => {
      try {
        // draw to canvas and downscale for sampling
        const maxW = 900; // keep reasonable size for performance
        const scale = Math.min(1, maxW / img.width);
        const dw = Math.max(1, Math.floor(img.width * scale));
        const dh = Math.max(1, Math.floor(img.height * scale));

        const canvas = canvasRef.current || document.createElement('canvas');
        canvas.width = dw;
        canvas.height = dh;
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('Canvas 2D context not available');
        ctx.drawImage(img, 0, 0, dw, dh);
        const imgData = ctx.getImageData(0, 0, dw, dh);
        const result = toAscii(imgData, cols, invert, charset);
        setAscii(result);
        setLoading(false);
      } catch (e: any) {
        setError(e?.message || 'Failed to convert image');
        setLoading(false);
      }
    };
    img.onerror = () => {
      setError('Failed to load image');
      setLoading(false);
    };
    img.src = src;
  }, [src, cols, invert, charset]);

  const preStyle: React.CSSProperties = useMemo(
    () => ({
      whiteSpace: 'pre',
      fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
      lineHeight: '10px',
      fontSize: '10px',
      margin: 0,
      overflowX: 'auto',
      color: 'var(--once-c-neutral-strong)',
    }),
    []
  );

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: 16 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
        <div>
          <img src={src} alt="Original" style={{ width: '100%', borderRadius: 12 }} />
        </div>
        <div style={{ background: 'var(--once-c-neutral-alpha-weak)', borderRadius: 12, padding: 12 }}>
          {loading ? (
            <div>Generating ASCII…</div>
          ) : error ? (
            <div style={{ color: 'var(--once-c-danger-strong)' }}>{error}</div>
          ) : (
            <pre style={preStyle} aria-label="ASCII output">
              {ascii}
            </pre>
          )}
        </div>
      </div>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
    </div>
  );
}

export default AsciiBeforeAfter;

