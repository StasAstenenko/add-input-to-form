'use client';

import { FIELD_TYPES } from '@/constants/fieldConstants';
import { Field, FieldType } from '@/types/fieldTypes';
import { useState } from 'react';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import InputComponent from '../InputComponent/InputComponent';
import CheckBoxComponent from '../CheckBoxComponent/CheckBoxComponent';
import PreviewField from '../PreviewFieldComponent/PreviewFieldComponent';

export default function FormBuilder() {
  const [fields, setFields] = useState<Field[]>([]);

  const addField = (type: FieldType) => {
    setFields((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        type,
        label: `${type} field`,
        required: false,
      },
    ]);
  };

  const updateField = <K extends keyof Field>(
    id: string,
    key: K,
    value: Field[K]
  ) => {
    setFields((prev) =>
      prev.map((form) => (form.id === id ? { ...form, [key]: value } : form))
    );
  };

  const exportJSON = () => {
    const json = JSON.stringify(fields, null, 2);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'form.json';
    link.click();
  };

  const reset = () => {
    setFields([]);
  };

  return (
    <div className='flex gap-10 p-6'>
      <div className='w-1/3 space-y-2'>
        <h2 className='text-xl font-bold'>Додати поле</h2>
        <ButtonComponent onClick={reset}>Скинути</ButtonComponent>
        <div className=' flex flex-col gap-2'>
          {FIELD_TYPES.map((type) => (
            <ButtonComponent key={type} onClick={() => addField(type)}>
              {type.toUpperCase()}
            </ButtonComponent>
          ))}
        </div>

        {fields.length > 0 && (
          <ButtonComponent onClick={exportJSON}>
            Експортувати JSON
          </ButtonComponent>
        )}
      </div>

      <div className='w-2/3'>
        <h2 className='text-xl font-bold mb-4'>Попередній перегляд</h2>
        <form className='space-y-4'>
          {fields.map((field) => (
            <div key={field.id} className='border p-4 rounded-lg space-y-2'>
              <InputComponent
                value={field.label}
                onChange={(e) => updateField(field.id, 'label', e.target.value)}
                placeholder='Назва поля'
              />
              <div className='flex items-center gap-2'>
                <CheckBoxComponent
                  checked={field.required}
                  onChange={(e) =>
                    updateField(field.id, 'required', e.target.checked)
                  }
                />
                <span>Обов’язкове</span>
              </div>
              <PreviewField field={field} />
            </div>
          ))}
        </form>
      </div>
    </div>
  );
}
