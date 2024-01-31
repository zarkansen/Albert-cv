import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import { RocketLaunchIcon } from '@heroicons/react/20/solid';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <RocketLaunchIcon className="h-14 w-12 rotate-[14deg] animate-spin animate-pulse-rocket active: opacity-50" />
      <p className="text-[44px]"></p>
    </div>

  );
}
