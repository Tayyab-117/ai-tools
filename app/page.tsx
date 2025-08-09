// app/tools/page.tsx  (server component)
import dynamic from 'next/dynamic';

export const dynamic = 'force-static'; // safe for static export

const ToolsClient = dynamic(() => import('./tools-client'), { ssr: false });

export default function ToolsDirectoryPage() {
  return (
    <div className="container py-10">
      <h1 className="text-2xl font-semibold mb-2">All Tools</h1>
      {/* Client-only search & filters */}
      <ToolsClient />
    </div>
  );
}
