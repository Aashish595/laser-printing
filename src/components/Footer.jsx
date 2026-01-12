export default function Footer() {
  return (
    <footer className="py-8 bg-white border-t">
      <div className="max-w-7xl mx-auto px-6 flex justify-between text-sm text-gray-600">
        <span>© {new Date().getFullYear()} LaserPrint Co.</span>
        <span>Precision Industrial Printing</span>
      </div>
    </footer>
  );
}
