import React, { useEffect, useRef } from 'react'
import type { FC } from 'react'
import { BrowserQRCodeReader } from '@zxing/browser'
import type { IScannerControls } from '@zxing/browser'
import type { Result } from '@zxing/library'

const QRCodeReader: FC<{ onReadQRCode: (text: Result) => void }> = ({
  onReadQRCode,
}) => {
  const controlsRef = useRef<IScannerControls | null>()
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!videoRef.current) {
      return
    }
    const codeReader = new BrowserQRCodeReader()
    codeReader.decodeFromVideoDevice(
      undefined,
      videoRef.current,
      (result, error, controls) => {
        if (error) {
          return
        }
        if (result) {
          onReadQRCode(result)
        }
        controlsRef.current = controls
      },
    )
    // eslint-disable-next-line consistent-return
    return () => {
      if (!controlsRef.current) {
        return
      }

      controlsRef.current.stop()
      controlsRef.current = null
    }
  }, [onReadQRCode])

  return (
    <video
      style={{ maxWidth: '100%', maxHeight: '100%', height: '100%' }}
      ref={videoRef}
    >
      <track kind="captions" />
    </video>
  )
}

export { QRCodeReader }
