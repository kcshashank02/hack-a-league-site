import { siteConfig } from "../config/siteConfig"

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/images/logo/logo.png" alt={siteConfig.brandName} className="h-8" />
              <span className="text-white font-bold tracking-wider">{siteConfig.brandName}</span>
            </div>
            <p className="text-gray-400 text-sm">
              {siteConfig.brandName} — Building the future, one hack at a time.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-slate-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#legacy" className="text-gray-400 hover:text-slate-400 transition-colors">
                  History & Roadmap
                </a>
              </li>
              <li>
                <a href="#feedback" className="text-gray-400 hover:text-slate-400 transition-colors">
                  Feedback
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.registerLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-slate-400 transition-colors"
                >
                  Register
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{siteConfig.eventLocation}</li>
              <li>
                <a href="mailto:hello@halhack.dev" className="hover:text-slate-400 transition-colors">
                  hello@halhack.dev
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} {siteConfig.brandName}. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-400 transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
