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

  interface IWebAppTranslations {
    site: {
      blog: {
        hero: {
          title: string;
          subTitle: string;
        };
        buttonRead: string;
        filter: {
          start: string;
          end: string;
        };
      };
      footer: {
        title: string;
        subTitle: string;
        copyright: string;
      };
      fourOhFour: {
        hero: {
          title: string;
        };
        body: string;
      };
      homepage: {
        hero: {
          title: string;
          subTitle: string;
          cta: string;
        };
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
          image: string;
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
        hero: {
          title: string;
        };
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
        personal: {
          title: string;
          subtitle: string;
          nameLabel: string;
          accountNumberLabel: string;
          supplyAddressLabel: string;
          emailLabel: string;
          phoneLabel: string;
          passwordLabel: string;
          correspondenceAddressLabel: string;
        };
      };
    };
  }
}
