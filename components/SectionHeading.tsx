interface SectionHeadingProps {
  children: React.ReactNode;
}

function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
}

export default SectionHeading;
