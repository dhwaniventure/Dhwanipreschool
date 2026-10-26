
import Programs from '@/components/SmallProgram';
import SmallAbout from '@/components/SmallAbout';
import HeroNEW from '@/components/HeroNew';
import Welcome from '@/components/Welcome';
import ProgramsSection from '@/components/ProgramsNew';
import BlogSection from '@/components/BlogComponents';
import Homecta from '@/components/HomeCta';
import Daycare from '@/components/Daycare';
import DetailedInfo from '@/components/DetailedInfo';
import Faqsection from '@/components/Faqsection';
import OurOffices from '@/components/OurOffices';
import GallerySection from '@/components/Gallery';
import Rewards from '@/components/Reward';
import supabase from '@/utils/supabase/supabase';

// Force dynamic rendering on each request so Supabase query runs and keeps database awake
export const dynamic = 'force-dynamic';
export const revalidate = 0;

export default async function Page() {
  // Query health table from Supabase to prevent inactivity pause
  try {
    if (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      const { data: healthData, error: healthError } = await supabase
        .from('health')
        .select('*');

      if (healthError) {
        console.warn('Supabase health query warning:', healthError.message);
      } else {
        console.log('Supabase health ping success:', healthData);
      }
    }
  } catch (err) {
    console.error('Failed to query Supabase health table:', err);
  }

  return (
    <div className="w-full bg-white overflow-x-hidden relative">
      <HeroNEW />
      <Welcome />
      <ProgramsSection />
      <Daycare />
      <DetailedInfo />
      <Faqsection />
    </div>
  );
}
