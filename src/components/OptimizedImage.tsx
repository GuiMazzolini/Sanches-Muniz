interface OptimizedImageProps {
  src: string;
  webpSrc?: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
}

/** JPEG/PNG with optional WebP from `npm run optimize-images`. */
const OptimizedImage = ({
  src,
  webpSrc,
  alt,
  className,
  width,
  height,
  loading = 'lazy',
}: OptimizedImageProps) => {
  if (webpSrc) {
    return (
      <picture>
        <source srcSet={webpSrc} type="image/webp" />
        <img src={src} alt={alt} className={className} width={width} height={height} loading={loading} />
      </picture>
    );
  }

  return (
    <img src={src} alt={alt} className={className} width={width} height={height} loading={loading} />
  );
};

export default OptimizedImage;
