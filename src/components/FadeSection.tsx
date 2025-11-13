import useInView from "../hooks/useInView";

export default function FadeSection({ id, className, children }: { id?: string; className?: string, children: React.ReactNode }) {
  const { ref, inView } = useInView(0.2);

  return (
    <section
      id={id}
      ref={ref}
      className={`h-svh flex flex-col items-center justify-between transition-opacity ease-in duration-700 snap-start snap-always py-10 ${inView ? "opacity-100" : "opacity-0"} ${className ?? ""}`}
    >
      {children}
    </section>
  );
}
