// tslint:disable-next-line:no-namespace
declare namespace EON {
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
  }

  interface IAccountPayment {
    title: string;
    subtitle: string;
    dateLabel: string;
    noPaymentDate: string;
    nameLabel: string;
    accountNumberLabel: string;
    sortCodeLabel: string;
  }

  interface IHeroTranslations {
    title: string;
    subTitle?: string;
    cta?: string;
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
      account: {
        title: string;
        loadingGenericMessage: string;
        errorGenericMessage: string;
        personal: IAccountPersonal;
        payment: IAccountPayment;
      };
    };
    validation: {
      [key: string]: string;
    };
  }
}
