export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col min-h-[calc(100vh-3.5rem-1px)]">
      {children}
    </main>
  );
}