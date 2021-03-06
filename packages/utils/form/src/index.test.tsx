import formUtils, { IFormConfig } from '.';

import functions from '@somo/pda-utils-functions/src';
import validation from '@somo/pda-utils-validation/src';
import store from '@somo/pda-www-state/store';

import Checkbox from '@somo/pda-components-checkbox/src';
import InputPassword from '@somo/pda-components-input-password/src';
import InputText from '@somo/pda-components-input-text/src';
import Radio from '@somo/pda-components-radio/src';

const fieldsMock = {
  name: '',
  password: 'test',
  error: false,
  passwordConfirm: 'test1',
  email: 'asd@asddasd.asd',
  name2: '',
};

const fieldsArrayMock = [fieldsMock, fieldsMock, fieldsMock];

const stateMock = {
  values: fieldsMock,
  errors: {},
  valid: {},
  showErrorMessage: false,
};

const mockCallback = jest.fn();

const configMock: IFormConfig[] = [
  {
    id: 'input-name',
    stateKey: 'name',
    component: InputText,
    label: 'Name',
    value: fieldsMock.name,
    onChange: jest.fn(),
  },
  {
    id: 'input-email',
    stateKey: 'email',
    component: InputText,
    label: 'Email',
    value: fieldsMock.email,
    validationFunction: ['validateEmail', 'validateRequired'],
  },
  {
    id: 'input-password',
    stateKey: 'password',
    component: InputPassword,
    label: 'Password',
    value: fieldsMock.password,
    validationFunction: 'validateRequired',
  },
  {
    id: 'input-passwordConfirm',
    stateKey: 'passwordConfirm',
    component: InputPassword,
    label: 'Confirm Password',
    value: fieldsMock.passwordConfirm,
    validationFunction: 'validateMatching',
    validationParam: fieldsMock.password,
  },
  {
    id: 'input-error',
    stateKey: 'error',
    component: Checkbox,
    label: 'Agree',
    onChange: jest.fn().mockReturnValue('hi'),
  },
  {
    id: 'input-passwordConfirm2',
    stateKey: 'passwordConfirm2',
    component: InputPassword,
    label: 'Confirm Password',
    value: fieldsMock.passwordConfirm,
    validationFunction: ['validateNotDuplicate', 'validateMatching'],
    validationParam: [['asdasd', 'asdasdasda'], fieldsMock.password],
  },
  {
    id: 'input-br',
    label: 'test',
    stateKey: 'test',
    component: 'br',
    hidden: true,
    onChange: jest.fn(),
  },
  {
    id: 'input-error',
    stateKey: 'error',
    component: Radio,
    items: [
      { label: 'yes', value: 'yes' },
      { label: 'no', value: 'no' },
    ],
    label: 'Agree',
    onChange: jest.fn().mockReturnValue('hi'),
  },
  {
    id: 'input-name2',
    stateKey: 'name2',
    component: InputText,
    label: 'Name',
    value: fieldsMock.name,
    onChange: jest.fn(),
    validationFunction: 'validateRequired',
  },
];

describe('Form', () => {
  beforeEach(() => {
    formUtils.initFormState(fieldsMock);
  });

  describe('clearFormState()', () => {
    test('clears form state', () => {
      formUtils.clearFormState();
      expect(store.getState().form.values).toEqual({});
    });
  });

  describe('setFieldError', () => {
    test('sets error correctly', () => {
      formUtils.setFieldError('password', 'invalid');
      expect(store.getState().form.errors.password).toBe('invalid');
    });
  });

  describe('setFormError', () => {
    test('sets error correctly', () => {
      formUtils.setFormError('test');
      expect(store.getState().form.errors.form).toBe('test');
    });
  });

  describe('updateValue()', () => {
    test('value is updated', () => {
      formUtils.updateValue('name', 'Spongebob', mockCallback);

      expect(store.getState().form.values.name).toBe('Spongebob');
      expect(mockCallback).toHaveBeenCalled();
    });

    test('value is updated without a validate or callback function', () => {
      formUtils.updateValue('name', 'Spongebob');

      expect(store.getState().form.values.name).toBe('Spongebob');
    });

    test('value is updated when arrayUpdate', () => {
      formUtils.updateValue('name', 'Spongebob', null, true);

      expect(store.getState().form.values.name).toBe('Spongebob');
    });
  });

  describe('renderForm()', () => {
    test('renders form', () => {
      const form = formUtils.renderForm(configMock);

      expect(form).toBeDefined();
    });
  });

  describe('renderFormFields()', () => {
    let form;

    beforeEach(() => {
      form = formUtils.renderFormFields(configMock);
    });

    test('renders form fields', () => {
      expect(form.length).toEqual(configMock.length);
    });

    test('uses onChange override', () => {
      expect(form[4].props.onChange()).toEqual('hi');
    });
  });

  describe('validateField()', () => {
    test('retrieves field', () => {
      const spy = jest.spyOn(functions, 'getByValue');

      formUtils.validateField(configMock, 'name');
      expect(spy).toHaveBeenCalledTimes(1);
    });

    test('validation called', () => {
      const spy = jest.spyOn(validation, 'validateRequired');
      formUtils.validateField(configMock, 'password');

      expect(spy).toHaveBeenCalled();
    });

    test('validation called with param', () => {
      const spy = jest.spyOn(validation, 'validateMatching');
      formUtils.initFormState(fieldsMock);
      formUtils.validateField(configMock, 'passwordConfirm');

      expect(spy).toHaveBeenCalledWith(fieldsMock.passwordConfirm, fieldsMock.password);
    });

    test('chained validation called', () => {
      const spy = jest.spyOn(validation, 'validateRequired');
      const spy2 = jest.spyOn(validation, 'validateEmail');
      formUtils.validateField(configMock, 'email');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
    });

    test('chained validation with params called', () => {
      const spy = jest.spyOn(validation, 'validateNotDuplicate');
      const spy2 = jest.spyOn(validation, 'validateMatching');
      formUtils.validateField(configMock, 'passwordConfirm2');

      expect(spy).toHaveBeenCalledTimes(1);
      expect(spy2).toHaveBeenCalledTimes(1);
    });

    test('error set if invalid field', () => {
      formUtils.validateField(configMock, 'passwordConfirm');
      const form = formUtils.renderFormFields(configMock);

      expect(store.getState().form.errors).toEqual(expect.objectContaining({ passwordConfirm: expect.any(String) }));
      expect(store.getState().form.valid).not.toEqual(expect.objectContaining({ passwordConfirm: true }));

      if (form[3]) {
        expect(form[3].props.error).toEqual(expect.any(String));
      }
    });

    test('error cleared when invalid field made valid ', () => {
      formUtils.updateValue('passwordConfirm', 'test');
      formUtils.updateValue('passwordConfirm2', 'test');
      formUtils.validateField(configMock, 'passwordConfirm');
      formUtils.validateField(configMock, 'passwordConfirm2');

      expect(store.getState().form.errors).not.toEqual(
        expect.objectContaining({ passwordConfirm: expect.any(String) }),
      );
      expect(store.getState().form.errors).not.toEqual(
        expect.objectContaining({ passwordConfirm2: expect.any(String) }),
      );
    });

    test('valid set & cleared', () => {
      formUtils.updateValue('name2', 'spongebob');
      formUtils.validateField(configMock, 'name2');

      expect(store.getState().form.valid).toEqual(expect.objectContaining({ name2: true }));
      expect(store.getState().form.errors).not.toEqual(expect.objectContaining({ name2: expect.any(String) }));
    });

    test('valid cleared when error', () => {
      formUtils.updateValue('name2', 'spongebob');
      formUtils.validateField(configMock, 'name2');
      formUtils.updateValue('name2', '');
      formUtils.validateField(configMock, 'name2');

      expect(store.getState().form.valid).not.toEqual(expect.objectContaining({ name2: true }));
      expect(store.getState().form.errors).toEqual(expect.objectContaining({ name2: expect.any(String) }));
    });

    afterEach(() => {
      formUtils.clearFormState();
    });
  });

  describe('validateForm()', () => {
    let spy;

    beforeEach(() => {
      spy = jest.spyOn(formUtils, 'validateField');
    });

    test('validates each field', () => {
      formUtils.validateForm(configMock);

      expect(spy).toHaveBeenCalledTimes(5);
      expect(spy).toHaveBeenCalledWith(expect.any(Object), 'password', undefined);
      expect(spy).toHaveBeenCalledWith(expect.any(Object), 'passwordConfirm', undefined);
    });

    test('sets errors in state', () => {
      formUtils.initFormState(fieldsMock);
      formUtils.validateForm(configMock);

      expect(store.getState().form.errors).toEqual(expect.objectContaining({ passwordConfirm: expect.any(String) }));
    });

    test('passes validation', () => {
      formUtils.initFormState(fieldsMock);
      formUtils.updateValue('password', 'test');
      formUtils.updateValue('passwordConfirm', 'test');
      formUtils.updateValue('passwordConfirm2', 'test');
      formUtils.updateValue('name2', 'test');

      const validForm = formUtils.validateForm(configMock);

      expect(validForm).toBe(true);
    });
  });

  describe('values array state', () => {
    beforeEach(() => {
      formUtils.initFormState(fieldsArrayMock);
    });

    describe('validateField', () => {
      beforeEach(() => {
        formUtils.validateField(configMock, 'name', 0);
        formUtils.validateField(configMock, 'passwordConfirm', 0);
      });

      test('sets error in state', () => {
        expect(store.getState().form.errors.fields).toEqual(
          expect.arrayContaining([expect.objectContaining({ passwordConfirm: expect.any(String) })]),
        );
        const form = formUtils.renderFormFields(configMock, 0);

        if (form[3]) {
          expect(form[3].props.error).toEqual(expect.any(String));
        }
      });

      test('clears error from state', () => {
        formUtils.updateValue('0', {
          ...fieldsMock,
          passwordConfirm: 'test',
        });
        formUtils.validateField(configMock, 'passwordConfirm', 0);
        const form = formUtils.renderFormFields(configMock, 0);

        expect(store.getState().form.errors.fields).toEqual([{}, {}, {}]);
        if (form[2]) {
          expect(form[2].props.error).toBe(undefined);
        }
      });
    });

    test('renderForm', () => {
      const arrayForm = formUtils.renderFormFields(configMock, 2);
      expect(arrayForm.length).toEqual(configMock.length);

      const arrayForm2 = formUtils.renderFormFields(configMock);
      expect(arrayForm2.length).toEqual(configMock.length);
    });

    describe('validateForm', () => {
      test('checks errors', () => {
        formUtils.validateForm(configMock, 1);
      });
    });
  });

  describe('initFormState()', () => {
    test('returns correct form state', () => {
      const formState = formUtils.initFormState(fieldsMock);
      expect(formState.payload).toEqual(stateMock);
    });

    test('returns correct form state with override values', () => {
      const formState = formUtils.initFormState(fieldsMock, { name: 'Spongebob' });
      expect(formState.payload).toEqual({
        ...stateMock,
        values: {
          ...stateMock.values,
          name: 'Spongebob',
        },
      });
    });
  });

  afterEach(() => {
    formUtils.clearFormState();
    jest.clearAllMocks();
  });
});
