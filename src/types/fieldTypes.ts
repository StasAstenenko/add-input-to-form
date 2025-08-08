import { FIELD_TYPES } from '@/constants/fieldConstants';

export type FieldType = (typeof FIELD_TYPES)[number];

export interface Field {
  id: string;
  type: FieldType;
  label: string;
  required: boolean;
}
