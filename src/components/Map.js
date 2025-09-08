
const Map = () => {
  return (
      <div className="rounded-lg overflow-hidden shadow border border-[#e5e7eb] w-full h-64 md:h-full">
        <iframe
          title="tecGrw Location"
          src="https://www.google.com/maps?q=KG+317,+Kibagabaga,+Kigali,+Rwanda&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '220px' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    );
}

export default Map;
