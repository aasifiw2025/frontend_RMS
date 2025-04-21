export interface FormLink {
  instagram: string;
  facebook: string;
  youtube: string;
  twitter: string;
  linkedin: string;
  link: string;
  resume?: string;
}

export interface formLinkProps {
  socials: FormLink;
  setSocials: (data: FormLink) => void;
}
