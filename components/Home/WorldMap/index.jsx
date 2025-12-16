import Image from 'next/image'
import marker from '@/assets/images/marker.png'
import map from '@/assets/images/map.webp'

const locations = {
  africa: [
    { x: '54%', y: '62%', label: 'South Africa\nBotswana\nNamibia\nAngola\nMozambique' }
  ],
  asia: [
    { x: '68%', y: '45%', label: 'Jaipur\nMumbai' },
  ],
  australia: [
    { x: '84.5%', y: '69.5%', label: 'Sydney' }
  ],
  europe: [
    { x: '47%', y: '28%', label: 'Belgium\nSwitzerland' },
  ],
  northamerica: [
    { x: '18.7%', y: '32%', label: 'New York' }
  ],
  southamerica: [
    { x: '31.5%', y: '59%', label: 'Sao Paulo' }
  ]
}

export default function WorldMap({ selected, setSelected }) {
  return (
    <div className="relative w-full max-w-5xl mx-auto aspect-[16/9]">
      <Image src={map} alt="World Map" fill className="object-contain object-top" priority />

      {Object.entries(locations).map(([key, markers]) =>
        markers.map((loc, i) => (
          <div
            key={`${key}-${i}`}
            className="absolute z-10 cursor-pointer"
            style={{
              left: loc.x,
              top: loc.y,
              transform: 'translate(-50%, -100%)'
            }}
            onClick={() => setSelected(key)}
            onMouseEnter={() => setSelected(key)}
          >
            {selected === key ? (
              <div className="block sm:hidden">
                <svg width="14" height="14">
                  <circle
                    r="4"
                    cx="7"
                    cy="7"
                    fill="#F53"
                    stroke="#FFF"
                    strokeWidth="1"
                    className="pulse-dot"
                  />
                </svg>
              </div>
            ) : (
              <div className="block sm:hidden">
                <svg width="10" height="10">
                  <circle
                    r="3"
                    cx="5"
                    cy="5"
                    fill="#999"
                    stroke="#FFF"
                    strokeWidth="1"
                  />
                </svg>
              </div>
            )}

            <div className="hidden sm:block">
              {/* Desktop image marker */}
              <Image src={marker} alt="marker" width={24} height={24} className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>

            {selected === key && loc.label && (
              <div className="hidden sm:block absolute bottom-7 left-full -translate-x-1/2 bg-white text-black font-cardo font-normal text-xs px-2 py-1 rounded shadow whitespace-pre text-left">
                {loc.label}
              </div>
            )}
          </div>
        ))
      )}
    </div>
  )
}
