export function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/256778370959?text=Hello%20Crestline%2C%20I%27d%20like%20a%20quote."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-[60] group"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_10px_30px_-6px_rgba(37,211,102,0.6)] hover:scale-110 transition-transform duration-300">
        <svg viewBox="0 0 32 32" className="w-7 h-7 fill-white" aria-hidden="true">
          <path d="M19.11 17.27c-.3-.15-1.78-.88-2.06-.98-.28-.1-.48-.15-.68.15s-.78.98-.96 1.18c-.18.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.79-1.67-2.09-.18-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.03-.53-.08-.15-.68-1.63-.93-2.23-.24-.58-.5-.5-.68-.51l-.58-.01c-.2 0-.53.08-.8.38-.28.3-1.05 1.02-1.05 2.5s1.08 2.9 1.23 3.1c.15.2 2.12 3.24 5.13 4.55.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.78-.73 2.03-1.43.25-.7.25-1.3.18-1.43-.07-.13-.27-.2-.57-.35zM16.03 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.43 5.33L5.3 26.67l5.46-1.43c1.55.85 3.3 1.3 5.07 1.3h.01c5.9 0 10.7-4.8 10.7-10.7 0-2.86-1.11-5.55-3.13-7.57a10.62 10.62 0 0 0-7.58-3.13zm6.23 16.93a8.84 8.84 0 0 1-6.23 2.58h-.01c-1.58 0-3.14-.43-4.49-1.23l-.32-.19-3.24.85.87-3.16-.21-.33a8.86 8.86 0 0 1-1.36-4.75c0-4.9 4-8.89 8.9-8.89 2.37 0 4.6.93 6.28 2.6a8.83 8.83 0 0 1 2.6 6.29c0 4.9-4 8.9-8.9 8.9z" />
        </svg>
      </span>
    </a>
  );
}
