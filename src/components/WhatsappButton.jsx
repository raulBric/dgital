import Link from "next/link";

const WhatsAppButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="https://wa.me/34610019952?text=¡Hola! Quiero más información."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition transform hover:rotate-45 duration-300"
        aria-label="WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .34 5.07.34 11.6c0 2.04.53 4.03 1.56 5.8L0 24l6.75-1.72a12 12 0 005.24 1.27c6.63 0 11.66-5.07 11.66-11.6 0-3.1-1.22-6.02-3.43-8.2zm-8.52 18.1a9.66 9.66 0 01-5.2-1.42l-.37-.23L4.6 21l1.34-2.83-.19-.37A9.82 9.82 0 012.26 11.6c0-5.23 4.35-9.5 9.74-9.5 2.6 0 5.04 1.02 6.88 2.88a9.45 9.45 0 012.85 6.62c0 5.23-4.35 9.5-9.74 9.5z" />
          <path d="M16.63 13.1c-.26-.13-1.54-.76-1.78-.84-.23-.1-.4-.13-.56.12-.17.24-.64.84-.79 1-.15.16-.3.17-.56.06-.26-.12-1.1-.4-2.1-1.27-.78-.7-1.3-1.56-1.45-1.82-.15-.26-.02-.4.11-.53l.39-.45c.14-.15.17-.26.26-.43.09-.17.04-.31-.02-.43-.06-.12-.56-1.34-.78-1.86-.2-.48-.4-.42-.56-.43h-.47c-.16 0-.43.06-.66.3-.23.24-.88.86-.88 2.1 0 1.24.91 2.43 1.04 2.6.13.16 1.78 2.68 4.32 3.75 1.57.68 2.17.73 2.94.62.47-.07 1.54-.63 1.76-1.24.22-.6.22-1.12.15-1.24-.06-.12-.23-.2-.48-.32z" />
        </svg>
      </Link>
    </div>
  );
};

export default WhatsAppButton;


