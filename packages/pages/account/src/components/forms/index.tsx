import * as React from 'react';

import EditTray from '@somo/pda-components-edit-tray/src';
import EditAddress, {
  IFormValues as IEditAddressFormValues,
  pageTitle as EditAddressPageTitle,
} from './edit-address/edit-address.component';

import EditPhoneNumber, {
  IFormValues as IEditPhoneFormValues,
  pageTitle as EditPhonePageTitle,
} from './edit-phone-number/edit-phone-number.component';

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
  [FormType.phone]: EditPhonePageTitle,
};

const EditForm: React.FC<IFormProps> = ({ formType, formValues, onClose }) => (
  <EditTray isOpen={!!formType} title={PageTitles[formType]} onClose={onClose}>
    {formType === FormType.address && (
      <EditAddress initialValues={formValues as IEditAddressFormValues} onClose={onClose} />
    )}
    {formType === FormType.phone && (
      <EditPhoneNumber initialValues={formValues as IEditPhoneFormValues} onClose={onClose} />
    )}
  </EditTray>
);

export default EditForm;
