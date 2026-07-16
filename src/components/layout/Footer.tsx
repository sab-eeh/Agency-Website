export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 px-6 py-8 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Agency Studio. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="/about" className="hover:text-slate-900">About</a>
          <a href="/contact" className="hover:text-slate-900">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
