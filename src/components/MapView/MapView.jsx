import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix for default marker icon issue in react-leaflet
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/images/marker-shadow.png',
})

// MapView component - reusable map component with OpenStreetMap
function MapView() {
  const [isClient, setIsClient] = useState(false)
  
  // Map center coordinates
  const center = [30.358415776278527, 78.08780844840038]
  const zoom = 13

  // Function to open Google Maps with coordinates
  const openGoogleMaps = () => {
    const googleMapsUrl = `https://www.google.com/maps?q=${center[0]},${center[1]}`
    window.open(googleMapsUrl, '_blank', 'noopener,noreferrer')
  }

  useEffect(() => {
    // Ensure component only renders on client side
    setIsClient(true)
  }, [])

  // Don't render map on server side
  if (!isClient) {
    return (
      <div className="w-full h-[300px] rounded-lg bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">Loading map...</p>
      </div>
    )
  }

  return (
    <div className="w-full h-[300px] rounded-lg overflow-hidden">
      <MapContainer
        center={center}
        zoom={zoom}
        scrollWheelZoom={true}
        style={{ height: '100%', width: '100%', zIndex: 0 }}
        className="z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker 
          position={center}
          eventHandlers={{
            click: () => {
              openGoogleMaps()
            }
          }}
        >
          <Popup>
            <div>
              <p className="font-semibold mb-2">State Project Management Unit, Rural Development Department, Near IT Park, Dehradun, Uttarakhand</p>
              <button
                onClick={openGoogleMaps}
                className="text-primary hover:text-primary-dark underline text-sm mt-2"
              >
                Open in Google Maps →
              </button>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapView

