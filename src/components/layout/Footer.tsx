

import Link from 'next/link';
import { BackgroundBeams } from '@/components/ui/background-beams';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t border-white/5 mt-32 glass relative overflow-hidden">
            <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-8 lg:px-12 py-12 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand & Newsletter */}
                    <div className="md:col-span-1 space-y-8">
                        <div>
                            <h3 className="text-xl font-bold font-heading text-gradient-blue mb-4">The Percentage Company</h3>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Premium e-commerce management and intelligent operations for fast-growing retail brands.
                            </p>
                        </div>

                        <div>
                            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Stay Updated</h4>
                            <div className="flex gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-brand-blue/50 transition-colors w-full"
                                />
                                <button className="bg-brand-blue hover:bg-brand-blue/80 text-white p-2 rounded-lg transition-colors">
                                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Services</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    Inventory Sync
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    Global Logistics
                                </Link>
                            </li>
                            <li>
                                <Link href="/services" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    AI Analytics
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Company</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/about" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/how-it-works" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    How It Works
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-wider">Legal</h4>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link href="/" className="text-sm text-gray-400 hover:text-brand-blue transition-colors duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-500 text-center md:text-left">
                        © {currentYear} The Percentage Company. All rights reserved.
                    </p>
                    <div className="flex gap-6">
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">LinkedIn</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </a>
                        <a href="#" className="text-gray-400 hover:text-white transition-colors">
                            <span className="sr-only">Instagram</span>
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772 4.902 4.902 0 011.772-1.153c.636-.247 1.363-.416 2.427-.465C9.673 2.013 10.03 2 12.315 2m0-2c-2.695 0-3.023.012-4.075.059-1.106.05-2.073.237-2.9.559a6.903 6.903 0 00-2.502 1.628 6.903 6.903 0 00-1.628 2.502c-.322.827-.51 1.794-.559 2.901C.635 8.956.623 9.284.623 12s.013 3.044.059 4.101c.049 1.106.237 2.073.559 2.9a6.903 6.903 0 001.628 2.502 6.903 6.903 0 002.502 1.628c.827.322 1.794.51 2.901.559 1.057.049 1.385.06 4.048.06 2.663 0 2.991-.013 4.048-.06 1.106-.05 2.073-.237 2.9-.559a6.903 6.903 0 002.502-1.628 6.903 6.903 0 001.628-2.502c.322-.827.51-1.794.559-2.901.049-1.057.06-1.385.06-4.048 0-2.663-.013-2.991-.06-4.048-.05-1.106-.237-2.073-.559-2.9a6.903 6.903 0 00-1.628-2.502 6.903 6.903 0 00-2.502-1.628c-.827-.322-1.794-.51-2.901-.559C15.338.013 15.01 0 12.315 0z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M12.315 5.824a6.176 6.176 0 100 12.352 6.176 6.176 0 000-12.352zm0 10.352a4.176 4.176 0 110-8.352 4.176 4.176 0 010 8.352z" clipRule="evenodd" />
                                <path fillRule="evenodd" d="M18.783 5.217a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
                <BackgroundBeams />
            </div>
        </footer>
    );
}


