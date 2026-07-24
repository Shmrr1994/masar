import Container from "./Container";

interface Props {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export default function Section({
  children,
  className = "",
  id,
}: Props) {
  return (
    <section
      id={id}
      className={`
        relative
        overflow-hidden
        py-24
        lg:py-32
        ${className}
      `}
    >
      <Container>{children}</Container>
    </section>
  );
}