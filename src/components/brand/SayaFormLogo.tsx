import React, { useState } from 'react';

interface SayaFormLogoProps {
  className?: string;
  size?: number | string;
  id?: string;
  variant?: string;
  onDark?: boolean;
  monogramOnly?: boolean;
  showWordmark?: boolean;
}

/**
 * Official SAYA FORM Logo
 * Loaded strictly as the official untouched asset:
 * https://image.noelshack.com/fichiers/2026/37/2/1788878147-a8a854ec-0b03-48b4-bb4d-73a7c67c1381.jpg
 * Never recolored, never redrawn, never altered in proportions.
 */
export const SayaFormLogo: React.FC<SayaFormLogoProps> = ({
  className = '',
  size = 52,
  id = 'saya-form-logo',
}) => {
  const [imgError, setImgError] = useState(false);
  const numericSize = typeof size === 'number' ? size : parseInt(size as string, 10) || 52;

  const officialRemoteUrl = "https://image.noelshack.com/fichiers/2026/37/2/1788878147-a8a854ec-0b03-48b4-bb4d-73a7c67c1381.jpg";
  const officialLocalUrl = "/saya-form-official-logo.png";

  const src = imgError ? officialRemoteUrl : officialLocalUrl;

  return (
    <div
      id={id}
      className={`inline-flex items-center justify-center shrink-0 select-none overflow-hidden ${className}`}
      style={{
        width: numericSize,
        height: numericSize,
      }}
    >
      <img
        src={src}
        onError={() => {
          if (!imgError) setImgError(true);
        }}
        alt="SAYA FORM"
        style={{
          width: '100%',
          height: '100%',
        }}
        className="w-full h-full object-cover block"
        loading="eager"
        referrerPolicy="no-referrer"
      />
    </div>
  );
};

