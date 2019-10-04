// tslint:disable-next-line:no-namespace
declare namespace EON {
  interface IHomepageFeatures {
    icon: string;
    header: string;
    body: string;
  }

  interface IWebAppTranslations {
    homepage: {
      hero: {
        title: string;
        subTitle: string;
        cta: string;
      };
      mainFeatures: {
        content: IHomepageFeatures[];
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
      };
      footer: {
        title: string;
        subTitle: string;
        copyright: string;
      };
    };
  }
}
