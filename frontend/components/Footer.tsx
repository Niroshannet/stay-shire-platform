import Link from 'next/link';
import InspirationFooter from './InspirationFooter';

export function Footer() {
    return (
        <footer className="bg-gray-50 border-t border-gray-200 mt-12">
            <div className="max-w-[1920px] mx-auto px-4 xl:px-12 py-12">
                <InspirationFooter />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
                    <div>
                        <h3 className="font-semibold mb-4 text-[#222222]">Support</h3>
                        <ul className="space-y-3 text-sm text-[#222222] font-light">
                            <li><Link href="/help" className="hover:underline">Help & Support</Link></li>
                            <li><Link href="/safety" className="hover:underline">Safety Concerns</Link></li>
                            <li><Link href="/cover" className="hover:underline">StayCover Protection</Link></li>
                            <li><Link href="/discrimination" className="hover:underline">Non-discrimination</Link></li>
                            <li><Link href="/accessibility" className="hover:underline">Accessibility Support</Link></li>
                            <li><Link href="/cancellation" className="hover:underline">Cancellation Policy</Link></li>
                            <li><Link href="/concerns" className="hover:underline">Report a Concern</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-[#222222]">Hosting</h3>
                        <ul className="space-y-3 text-sm text-[#222222] font-light">
                            <li><Link href="/host" className="hover:underline">List Your Property</Link></li>
                            <li><Link href="/experience" className="hover:underline">Host an Experience</Link></li>
                            <li><Link href="/cover-hosts" className="hover:underline">Host Protection</Link></li>
                            <li><Link href="/resources" className="hover:underline">Host Resources</Link></li>
                            <li><Link href="/community" className="hover:underline">Community Forum</Link></li>
                            <li><Link href="/responsible" className="hover:underline">Responsible Hosting</Link></li>
                            <li><Link href="/class" className="hover:underline">Free Hosting Class</Link></li>
                            <li><Link href="/co-host" className="hover:underline">Find a Co-host</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-semibold mb-4 text-[#222222]">Stay shire</h3>
                        <ul className="space-y-3 text-sm text-[#222222] font-light">
                            <li><Link href="/release" className="hover:underline">2025 Features</Link></li>
                            <li><Link href="/news" className="hover:underline">Press Room</Link></li>
                            <li><Link href="/careers" className="hover:underline">Join Our Team</Link></li>
                            <li><Link href="/investors" className="hover:underline">Investors</Link></li>
                            <li><Link href="/gift" className="hover:underline">Gift Cards</Link></li>
                            <li><Link href="/emergency" className="hover:underline">Emergency Stays</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
                    <p>© 2025 Stay Shire Platform. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:underline">Privacy</Link>
                        <Link href="/terms" className="hover:underline">Terms</Link>
                        <Link href="/sitemap" className="hover:underline">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
