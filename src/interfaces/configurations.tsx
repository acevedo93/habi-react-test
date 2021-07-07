export interface IConfigurations {
  name: string;
  order: number;
  icon: string | any;
  label: string;
  component: string;
  path: string;
  title: string;
  subtitle: string;
  options?: [{ id: string; name: string }];
}
