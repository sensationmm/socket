// tslint:disable-next-line:no-namespace
declare namespace EON {
  interface IPersonalDetails {
    name: string;
    email: string;
    phone: string;
    accountNumber: string;
    correspondenceAddress: string;
    supplyAddress: string;
  }

  interface IPaymentDetails {
    accountName: string;
    accountNumber: string;
    sortCode: string;
    monthlyPaymentDate: string;
  }

  interface IProductTilItem {
    itemValue: string;
    inclVAT: string;
  }

  interface IProductTilInformation {
    tariff: IProductTilItem;
    contractType: IProductTilItem;
    paymentMethod: IProductTilItem;
    unitRate: IProductTilItem;
    standingChargeDd: IProductTilItem;
    billingFrequency: IProductTilItem;
  }

  interface IProductDetails {
    electricity?: {
      name: string;
      endDate: string;
      TIL: IProductTilInformation;
    };
    gas?: {
      name: string;
      endDate: string;
      TIL: IProductTilInformation;
    };
  }

  interface IUserData {
    id: string;
    personalDetails: IPersonalDetails;
    paymentDetails: IPaymentDetails;
    productDetails: IProductDetails;
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
    addressLineOneLabel: string;
    addressLineTwoLabel: string;
    cityLabel: string;
    countyLabel: string;
    postcodeLabel: string;
    cta: {
      saveText: string;
    };
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
        copyright: string;
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
          cta: string;
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
      account: {
        title: string;
        loadingGenericMessage: string;
        errorGenericMessage: string;
        personal: IAccountPersonal;
        payment: IAccountPayment;
        product: IAccountProducts;
        goal: IAccountGoal;
        editAddress: IAccountEditAddress;
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
    }
  }
}
