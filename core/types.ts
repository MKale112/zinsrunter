export interface IconProps {
  height: number;
  width: number;
  text?: boolean;
}

export interface ZipcodeEntry {
  startsAt: string;
  endsAt: string;
  region: string;
  grunderwerbsteuer: number;
  makler: number;
}

export interface AutocompleteMapEntry {
  entry: ZipcodeEntry;
  value: string;
  label: string;
}

export interface MetaTags {
  title: string;
  desc: string;
  image: string;
}
