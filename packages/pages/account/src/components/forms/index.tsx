import * as React from 'react';

import EditTray from '@somo/pda-components-edit-tray/src';
import EditAddress, {
  IFormValues as IEditAddressFormValues,
  pageTitle as EditAddressPageTitle,
} from './edit-address/edit-address.component';

enum FormType {
  address = 'address',
  phone = 'phone',
}

interface IFormProps {
  formType: FormType;
  formValues: { [key: string]: any };
  onClose: () => void;
}

const PageTitles = {
  [FormType.address]: EditAddressPageTitle,
};

const EditForm: React.FC<IFormProps> = ({ formType = FormType.address, formValues, onClose }) => (
  <EditTray title={PageTitles[FormType.address]} onClose={onClose}>
    {formType === FormType.address && (
      <EditAddress initialValues={formValues as IEditAddressFormValues} onClose={onClose} />
    )}
  </EditTray>
);

export default EditForm;
