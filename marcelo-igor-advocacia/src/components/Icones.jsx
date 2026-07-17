// Ícones SVG usados nos cards e botões

const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  "aria-hidden": true,
};

const PATHS = {
  "casa-campo": (
    <>
      <path d="M3 21h18M4 21V10l8-6 8 6v11" />
      <path d="M9 21v-6h6v6" />
    </>
  ),
  documento: (
    <>
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M8 7h8M8 11h8M8 15h5" />
    </>
  ),
  coracao: (
    <path d="M12 21s-7-4.5-9-9a5.2 5.2 0 0 1 9-4 5.2 5.2 0 0 1 9 4c-2 4.5-9 9-9 9Z" />
  ),
  pessoa: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4 3.6-6.5 8-6.5s8 2.5 8 6.5" />
    </>
  ),
  familia: (
    <>
      <circle cx="9" cy="8" r="3.5" />
      <path d="M2.5 20c0-3.5 3-5.5 6.5-5.5s6.5 2 6.5 5.5" />
      <path d="M17 8h5M19.5 5.5v5" />
    </>
  ),
  losango: (
    <>
      <path d="M10.3 3.8 3.8 10.3a2.5 2.5 0 0 0 0 3.5l6.4 6.4a2.5 2.5 0 0 0 3.5 0l6.5-6.5a2.5 2.5 0 0 0 0-3.5l-6.4-6.4a2.5 2.5 0 0 0-3.5 0Z" />
      <path d="M12 8v4M12 15.5v.5" />
    </>
  ),
  saude: (
    <>
      <path d="M8 3v3a4 4 0 0 0 8 0V3" />
      <path d="M12 10v4" />
      <circle cx="12" cy="18" r="3.5" />
    </>
  ),
  maternidade: (
    <>
      <path d="M9 12a4 4 0 1 0 6.6 3" />
      <circle cx="15" cy="9" r="4" />
      <path d="M4 21c1-3 3.5-4.5 6-4.5" />
    </>
  ),
  maleta: (
    <>
      <path d="M9 6V4h6v2" />
      <rect x="3" y="6" width="18" height="14" rx="2" />
      <path d="M3 12h18" />
    </>
  ),
  sol: (
    <>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
      <circle cx="12" cy="12" r="3.5" />
    </>
  ),
  relogio: (
    <>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 9v4l3 2M12 2v3M9 2h6" />
    </>
  ),
  carteira: (
    <>
      <rect x="4" y="7" width="16" height="13" rx="2" />
      <path d="M9 7V5a3 3 0 0 1 6 0v2" />
      <path d="M9 13h6" />
    </>
  ),
  alerta: (
    <>
      <path d="M12 3 2.5 20h19L12 3Z" />
      <path d="M12 9.5v4M12 16.5v.5" />
    </>
  ),
  casa: (
    <>
      <path d="M3 21h18M5 21V9l7-5 7 5v12" />
      <path d="M9 21v-4h6v4M12 9v3" />
    </>
  ),
  recibo: (
    <>
      <path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" />
      <path d="M9 8h6M9 12h6" />
    </>
  ),
  banco: (
    <>
      <path d="M4 21h16M6 21V8h12v13" />
      <path d="M9 21v-4h6v4M2 8h20L12 3 2 8Z" />
    </>
  ),
  escudo: (
    <>
      <path d="M12 2 3 7v6c0 5 4 8 9 9 5-1 9-4 9-9V7l-9-5Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
  mais: (
    <>
      <path d="M8 12h8M12 8v8" />
      <circle cx="12" cy="12" r="9" />
    </>
  ),
  balao: (
    <path d="M21 11.5a8.4 8.4 0 0 1-8.4 8.4A8.3 8.3 0 0 1 8 18.9L3 20l1.1-4.9a8.4 8.4 0 1 1 16.9-3.6Z" />
  ),
  check: <path d="m5 13 4 4L19 7" strokeWidth="2.2" />,
};

export function Icone({ nome, tamanho = 24 }) {
  return (
    <svg {...base} width={tamanho} height={tamanho}>
      {PATHS[nome]}
    </svg>
  );
}

export function IconeWhatsApp({ tamanho = 22 }) {
  return (
    <svg
      width={tamanho}
      height={tamanho}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5.1-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.3-.4.7-1.3.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1.1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.2-.3-.2-.7-.4Z" />
    </svg>
  );
}
