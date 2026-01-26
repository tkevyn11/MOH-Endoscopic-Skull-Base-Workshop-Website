export interface FacultyMember {
  name: string;
  country: string;
  isInternational: boolean;
  photo?: string;
  photoPosition?: string;
  photoScale?: number;
}

export const FACULTY: FacultyMember[] = [
  // International
  { name: "Prof Takeo Goto", country: "Japan", isInternational: true, photo: "/faculty/takeo-goto.webp" },
  { name: "Prof Tadashi Watanabe", country: "Japan", isInternational: true, photo: "/faculty/tadashi-watanabe.png" },
  { name: "Prof Doo Sik Kong", country: "Korea", isInternational: true, photo: "/faculty/doo-sik-kong.png" },
  { name: "Prof Chang Ki Hong", country: "Korea", isInternational: true, photo: "/faculty/chang-ki-hong.png" },
  { name: "Prof Calvin Mak", country: "Hong Kong", isInternational: true, photo: "/faculty/calvin-mak.png" },
  // Local
  { name: "Dr Azmi Alias", country: "Malaysia", isInternational: false, photo: "/faculty/azmi-alias.png" },
  { name: "Dr Ng Wei Ping", country: "Malaysia", isInternational: false, photo: "/faculty/ng-wei-ping.jpeg" },
  { name: "Dr R Komathi S Ramachandran", country: "Malaysia", isInternational: false, photo: "/faculty/r-komathi-s-ramachandran.jpeg", photoPosition: "50% 20%", photoScale: 1.1 },
  { name: "Dr Maithrea Suresh Narayanan", country: "Malaysia", isInternational: false, photo: "/faculty/maithrea-suresh-narayanan.jpeg" },
];