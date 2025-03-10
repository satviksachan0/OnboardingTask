export class UpdateSettingDto {
  id: number;
  data: {
    name?: string;
    data_type?: string;
    account_id?: number;
    value?: string | boolean | number | object | JSON;
  };
}
