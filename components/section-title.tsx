type SectionTitleProps = {
  title: string;
  subtitle: string;
};

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="text-center">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-white">{title}</h2>
      <p className="text-xl text-gray-600 mt-2 dark:text-gray-300">{subtitle}</p>
    </div>
  );
}
