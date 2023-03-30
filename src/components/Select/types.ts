export enum SelectEnum {
    Option0 = '0',
    Option1 = '1'
  }

export interface ISelectProps {
    label: string;
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    chequeType: string;
}
  