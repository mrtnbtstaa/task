import { FaMapMarkerAlt } from 'react-icons/fa';
import { FaLocationArrow } from 'react-icons/fa6';

export default function OfficeLocation() {
  return (
    <section className="relative w-full h-112 bg-[#e5e5e5] border-t border-b border-gray-300 overflow-hidden">
      
      {/* Interactive Google Maps iframe Background */}
      <div className="absolute inset-0">
        <iframe
          title="The Ridge Realty Group Office Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3235.151746205844!2d-115.99268!3d36.1956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6ed9a11111111%3A0x1111111111111111!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048!5e0!3m2!1sen!2sus!4v1650000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>

      {/* Floating Info Card */}
      <div className="absolute top-8 left-8 z-10 bg-white shadow-xl border border-gray-200 p-4 max-w-xs rounded-sm pointer-events-auto">
        <div className="flex items-start space-x-2 mb-3">
          <span className="text-red-600 text-base mt-0.5">
            <FaMapMarkerAlt />
          </span>
          <div>
            <h4 className="font-serif font-bold text-xs tracking-wider text-gray-900 uppercase">
              THE RIDGE REALTY GROUP
            </h4>
            <p className="text-[11px] text-gray-600 mt-0.5">
              3190 HW-160 Suite F, Pahrump NV
            </p>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=3190+HW-160+Suite+F,+Pahrump+NV+89048"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center space-x-2 w-full bg-[#0b132b] text-white text-[10px] font-bold uppercase tracking-widest py-2 px-3 rounded-sm hover:bg-[#c5a059] transition-colors"
        >
          <span>
            <FaLocationArrow />
          </span>
          <span>Get Directions</span>
        </a>
      </div>

    </section>
  );
}