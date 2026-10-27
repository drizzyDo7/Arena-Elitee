export interface ActionCard {
  id: number;
  title: string;
  subtitle: string;
  href?: string;
  onClick?: (e?: React.MouseEvent) => void;
  emoji: string;
  className: string;
}

const createActions = (openModal: () => void): ActionCard[] => [
  {
    id: 1,
    title: "Jogar",
    subtitle: "Faça seus palpites",
    onClick: (e) => {
      e?.preventDefault();
      openModal();
    },
    emoji: "⚽",
    className: "text-slate-800",
  },
  {
    id: 2,
    title: "Ranking",
    subtitle: "Classificação",
    href: "/ranking",
    emoji: "🏆",
    className: "text-slate-800",
  },
  {
    id: 3,
    title: "Comunidade",
    subtitle: "Grupo no WhatsApp",
    href: "https://chat.whatsapp.com/CW62ybFF9Zr7oEzfWOuprq",
    emoji: "💬",
    className: "text-slate-800",
  },
  {
    id: 4,
    title: "Regulamento",
    subtitle: "Regras do bolão",
    href: "/regulamento",
    emoji: "📜",
    className: "text-slate-800",
  },
  {
    id: 5,
    title: "Calendário",
    subtitle: "Temporada 2026",
    href: "/calendario",
    emoji: "📅",
    className: "text-slate-800",
  },
];

export function useUserActions(openModal: () => void) {
  const actions = createActions(openModal);

  return {
    actions,
  };
}
