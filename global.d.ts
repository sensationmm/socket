// tslint:disable-next-line:no-namespace
declare namespace EON {
  interface IPersonalDetails {
    __typename?: string;
    name?: string;
    email?: string;
    phone?: string;
    accountNumber?: string;
    correspondenceAddress?: string;
    detailedCorrespondenceAddress?: {
      __typename?: string;
      address1: string;
      address2?: string;
      address4?: string;
      address5?: string;
      postcode: string;
    };
    supplyAddress?: string;
  }

  interface IPaymentDetails {
    __typename?: string;
    accountName: string;
    accountNumber: string;
    sortCode: string;
    monthlyPaymentDate: string;
  }

  interface IProductTilItem {
    __typename?: string;
    itemValue: string;
    inclVAT: string;
  }

  interface IProductTilInformation {
    __typename?: string;
    tariff: IProductTilItem;
    contractType: IProductTilItem;
    paymentMethod: IProductTilItem;
    unitRate: IProductTilItem;
    standingChargeDd: IProductTilItem;
    billingFrequency: IProductTilItem;
  }

  interface IProductDetails {
    __typename?: string;
    electricity?: {
      __typename?: string;
      name: string;
      endDate: string;
      TIL: IProductTilInformation;
    };
    gas?: {
      __typename?: string;
      name: string;
      endDate: string;
      TIL: IProductTilInformation;
    };
  }

  interface IContactPreferences {
    __typename?: string;
    contactId?: string;
    email?: boolean;
    phone?: boolean;
    sms?: boolean;
    post?: boolean;
    carrierpigeon?: boolean;
  }

  interface IUserData {
    __typename?: string;
    id: string;
    personalDetails?: IPersonalDetails;
    paymentDetails?: IPaymentDetails;
    productDetails?: IProductDetails;
    contactPreferences?: IContactPreferences;
  }

  interface IUserResponse {
    user: IUserData;
  }

  interface IHomepageFeatures {
    icon: string;
    header: string;
    body: string;
  }

  interface IHomepageSwitchingStep {
    header?: string;
    body?: string;
    cta?: string;
  }

  interface IAboutGoodBunch {
    text: string;
    list?: string[];
  }

  interface IRealPeople {
    image: string;
    text: string;
  }

  interface ISwitchingInfo {
    icon: string;
    title: string;
    text: string;
  }

  interface IAccountPersonal {
    title: string;
    subtitle: string;
    nameLabel: string;
    accountNumberLabel: string;
    supplyAddressLabel: string;
    emailLabel: string;
    phoneLabel: string;
    passwordLabel: string;
    correspondenceAddressLabel: string;
    correspondenceAddressEditText: string;
  }

  interface IAccountProducts {
    title: string;
    subtitle: string;
    tabs: {
      electricity: string;
      gas: string;
    };
    product: {
      nameLabel: string;
      endDateLabel: string;
      supplierLabel: string;
      tariffLabel: string;
      paymentMethodLabel: string;
      unitRateLabel: string;
      standingChargeLabel: string;
      exitFeesLabel: string;
      discountsLabel: string;
      additionalLabel: string;
    };
    notApplicable: string;
    noEndDate: string;
    supplierName: string;
  }

  interface IAccountPayment {
    title: string;
    subtitle: string;
    dateLabel: string;
    noPaymentDate: string;
    dateValueSuffix: string;
    nameLabel: string;
    accountNumberLabel: string;
    sortCodeLabel: string;
    noDirectDebit: {
      text: string;
      cta: {
        text: string;
        link: string;
      };
    };
  }

  interface IAccountContactPreferences {
    title: string;
    initial: {
      heading: string;
      text: string;
      label: string;
    };
    confirm: {
      heading: string;
    };
    saved: {
      heading: string;
      text: string;
    };
  }

  interface IHeroTranslations {
    title: string;
    subTitle?: string;
    cta?: string;
  }

  interface IAccountGoal {
    title: string;
    subTitle: string;
    content: string;
  }

  interface IAccountEditAddress {
    title: string;
    addressLineOneLabel: string;
    addressLineTwoLabel: string;
    cityLabel: string;
    countyLabel: string;
    postcodeLabel: string;
    cta: {
      saveText: string;
      cancelText: string;
    };
  }

  interface IForm {
    [key: string]: {
      label: string;
      note?: string;
    }
  }

  interface IWebAppTranslations {
    site: {
      blog: {
        hero: IHeroTranslations;
        buttonRead: string;
        filter: {
          start: string;
          end: string;
          latest: string;
          earliest: string;
        };
      };
      footer: {
        title: string;
        subTitle: string;
        copyright: {
          firstLine: string;
          secondLine: string;
        };
      };
      notification: {
        cta: string;
      };
      cookieNotice: {
        title: string;
        text: string;
        link: {
          text: string;
          address: string;
        };
        cta: {
          agree: string;
          disagree: string;
        };
      };
      fourOhFour: {
        hero: IHeroTranslations;
        body: string;
      };
      register: {
        hero: IHeroTranslations;
        body: string;
        form: IForm;
      };
      login: {
        hero: IHeroTranslations;
        form: {
          username: string;
          password: string;
        };
      };
      homepage: {
        hero: IHeroTranslations;
        mainFeatures: {
          content: IHomepageFeatures[];
        };
        switchingSteps: {
          header: string;
          content: {
            step1: IHomepageSwitchingStep;
            step2: IHomepageSwitchingStep;
            step3: IHomepageSwitchingStep;
          };
        };
        understandEnergy: {
          title: string;
          subTitle: string;
          list: string[];
        };
        companyFeatures: {
          thingsWeDontDo: {
            header: string;
            content: IHomepageFeatures[];
          };
          thingsWeDoDo: {
            header: string;
            content: IHomepageFeatures[];
          };
        };
        goodBunch: {
          title: string;
          body: string;
          cta: string;
        };
      };
      blogArticle: {
        sharePostHeader: string;
      };
      about: {
        hero: IHeroTranslations;
        energyMarket: {
          title: string;
          content: string[];
        };
        goodBunch: {
          title: string;
          content: IAboutGoodBunch[];
          cta: string;
        };
        realPeople: {
          title: string;
          content: IRealPeople[];
          cta: string;
        };
      };
      energy: {
        hero: IHeroTranslations;
        renewable: {
          title: string;
          content: string[];
        };
        whereEnergyComesFrom: {
          title: string;
          content: string[];
        };
        scoop: {
          title: string;
          content: string[];
        };
        realPeople: {
          title: string;
          content: IRealPeople[];
          cta: string;
        };
      };
      smartTariff: {
        hero: IHeroTranslations;
        plusPoints: {
          title: string;
          list: string[];
          image: string;
          cta: string;
        };
        switching: {
          title: string;
          subtitle: string;
          content: ISwitchingInfo[];
        };
      };
      movingIn: {
        hero: IHeroTranslations;
        getInTouch: {
          header: string;
          content: string;
          cta: string;
        };
        ohFriends: {
          title: string;
          content: string;
          imageAlt: string;
          cta: string;
        };
        movingOut: {
          header: string;
          content: string;
          cta: string;
        };
      };
      account: {
        title: string;
        loadingGenericMessage: string;
        errorGenericMessage: string;
        personal: IAccountPersonal;
        payment: IAccountPayment;
        product: IAccountProducts;
        goal: IAccountGoal;
        editAddress: IAccountEditAddress;
        editPhone: {
          title: string;
        };
        contactPreferences: IAccountContactPreferences;
      };
    };
    validation: {
      [key: string]: string;
    };
    actions: {
      [key: string]: string;
    };
    errors: {
      httpGenericTitle: string;
      httpGenericContent: string;
    };
  }
}
