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

  interface IWebAppTranslations {
    site: {
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
    };
  }
}
