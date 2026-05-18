type PhoneMockupProps = {
  src: string;
  alt: string;
};

export function PhoneMockup({ src, alt }: PhoneMockupProps) {
  return (
    <div className="phone-mock">
      <div className="phone-mock__halo" />
      <img src={src} alt={alt} />
    </div>
  );
}
