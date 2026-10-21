export default function Home() {
  return (
    <main style={{ position: 'fixed', inset: 0, overflow: 'hidden', background: '#080a0d' }}>
      <iframe
        title="SENTINEL — Team 7 Physics Project"
        src="/sentinel.html"
        style={{ position: 'absolute', inset: 0, display: 'block', width: '100%', height: '100%', border: 0, background: '#080a0d' }}
        allow="fullscreen"
      />
    </main>
  );
}
