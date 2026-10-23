import images from "@/data/image-manifest.json";

export default function ResponsiveImage({ src, alt, sizes = "(max-width: 760px) calc(100vw - 28px), (max-width: 1000px) 50vw, 600px", loading = "lazy", ...props }) {
  const image = images[src];
  return (
    <img
      {...props}
      src={image?.src || src}
      srcSet={image?.srcSet}
      sizes={image ? sizes : undefined}
      width={image?.width}
      height={image?.height}
      alt={alt}
      loading={loading}
      decoding="async"
    />
  );
}
