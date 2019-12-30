import * as React from 'react';

export interface IHookEditTray {
  formType: any;
  formValues: any;
}

const initialState = {
  formType: null,
  formValues: null,
};

export const useEditTray = () => {
  const [editForm, setEditForm] = React.useState<IHookEditTray>(initialState);
  const clearEditForm = () => setEditForm(initialState);

  const handleEditTray = (formType, formValues) => {
    setEditForm({ formType, formValues });
  };

  return {
    handleEditTray,
    editForm,
    clearEditForm,
  };
};
