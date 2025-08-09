'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { tools } from '../../lib/registry';

export default function ToolsClient() {
  const params = useSearchParams();
  const router = useRouter();

  const [q, setQ] = useState(params.get('q') || '');
  const [cat, setCat] = useState(params.get('cat') || 'all');

  useEffect(() => {
    setQ(params.get('q') || '');
    setCat(params.get('cat') || 'all');
  }, [params]);

  const list = useMemo(() => {
    const term = q.toLowerCase();
    return tools.filter(
      (t) =>
        (cat === 'all' || t.category === cat) &&
        (`${t.name} ${t.tagline} ${(t.keywords || []).join(' ')} ${t.seo.longDescription}`
          .toLowerCase()
          .includes(term))
    );
  }, [q, cat]);

  const apply = (nextQ: string, nextCat: string) => {
    const sp = new URLSearchParams();
    if (nextQ) sp.set('q', nextQ);
    if (nextCat !== 'all') sp.set('cat', nextCat);
    router.push(`/tools?${sp.toString()}`);
  };

  return (
    <>
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          onBlur={() => apply(q, cat)}
          placeholder="Search tools…"
          className="input md:w-96"
        />
        <select
          className="input md:w-56"
          value={cat}
          onChange={(e) => {
            setCat(e.target.value);
            apply(q, e.target.value);
          }}
        >
          <option value="all">All categories</option>
          <option value="text">AI Text</option>
          <option value="data">AI Data</option>
          <option value="images">AI Images</option>
          <option value="audio">AI Audio</option>
          <option value="utilities">Utilities</option>
        </select>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        {list.map((t) => (
          <Link key={t.slug} href={`/tools/${t.slug}`} className="card p-4 hover:bg-gray-50">
            <div className="text-base font-semibold">
              {t.name} <span className="badge ml-2">{t.badge || 'Local'}</span>
            </div>
            <div className="text-sm text-gray-600">{t.tagline}</div>
          </Link>
        ))}
        {list.length === 0 && <div className="text-sm text-gray-600">No tools found.</div>}
      </div>
    </>
  );
}
