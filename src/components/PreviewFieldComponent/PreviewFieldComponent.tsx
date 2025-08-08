import { Field } from '@/types/fieldTypes';
import InputComponent from '../InputComponent/InputComponent';

const PreviewField = ({ field }: { field: Field }) => {
  const commonProps = {
    required: field.required,
    placeholder: field.label,
    className: 'w-full',
  };
  switch (field.type) {
    case 'text':
    case 'email':
    case 'number':
    case 'date':
      return <InputComponent type={field.type} {...commonProps} />;
    case 'checkbox':
      return (
        <div className='flex items-center gap-2'>
          <input type='checkbox' {...commonProps} />
          <label>{field.label}</label>
        </div>
      );
    default:
      return null;
  }
};

export default PreviewField;
