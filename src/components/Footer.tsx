import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white border-2 border-gray-400 py-12 w-full">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 text-xs mb-6">
          <div>
            <div className="font-semibold mb-3 text-base">Contact</div>
            <div className="space-y-1">
              <div className="hover:text-green-400 cursor-pointer transition-colors">Noida, UP</div>
              <div className="hover:text-green-400 cursor-pointer transition-colors">Mumbai</div>
              <div className="hover:text-green-400 cursor-pointer transition-colors">Dubai, UAE</div>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-base">Quick Links</div>
            <div className="space-y-1">
              <Link href="/about" className="hover:text-green-400 cursor-pointer transition-colors block">
                About Us
              </Link>
              <Link href="/services" className="hover:text-green-400 cursor-pointer transition-colors block">
                Services
              </Link>
              <Link href="/products" className="hover:text-green-400 cursor-pointer transition-colors block">
                Products
              </Link>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-base">Email</div>
            <div className="space-y-1">
              <a
                href="mailto:info@nexgenenergia.com"
                className="hover:text-green-400 cursor-pointer transition-colors block"
              >
                info@nexgenenergia.com
              </a>
              <a
                href="mailto:business@nexgenenergia.com"
                className="hover:text-green-400 cursor-pointer transition-colors block"
              >
                business@nexgenenergia.com
              </a>
            </div>
          </div>
          <div>
            <div className="font-semibold mb-3 text-base">Phone</div>
            <div className="space-y-1">
              <a
                href="tel:+918800599662"
                className="hover:text-green-400 cursor-pointer transition-colors block"
              >
                +91 8800599662
              </a>
              <a
                href="tel:+918527561018"
                className="hover:text-green-400 cursor-pointer transition-colors block"
              >
                +91 8527561018
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-center gap-6 text-sm mb-4">
          <a
            href="https://www.facebook.com/nexgenenergia.official/?ref=embed_page#"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            Facebook
          </a>
          <a
            href="https://www.linkedin.com/company/nexgen-energia/?originalSubdomain=in"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition-colors"
          >
            LinkedIn
          </a>
        </div>
        <div className="text-center text-xs border-t border-gray-600 pt-6">
          © Nexgen Energia Ltd. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

