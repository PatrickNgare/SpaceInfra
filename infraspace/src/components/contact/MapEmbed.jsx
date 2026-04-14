export default function MapEmbed() {
  return (
    <div className="rounded-xl overflow-hidden border border-neutral-200 shadow-sm h-64 bg-neutral-100 flex items-center justify-center">
      <div className="text-center text-neutral-400">
        <p className="font-medium text-sm">Google Maps</p>
        <p className="text-xs mt-1">Add your Google Maps embed here</p>
        <p className="text-xs text-neutral-300 mt-1">VITE_GOOGLE_MAPS_EMBED_KEY in .env</p>
      </div>
    </div>
  )
}
