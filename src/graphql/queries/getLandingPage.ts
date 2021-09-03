export const GET_LANDING_PAGE = `
fragment imageData on UploadFile {
  alternativeText
  url
}

fragment logo on LandingPage {
  logo {
    ...imageData
  }
}

fragment header on LandingPage {
  header {
    title
    description
    button {
      label
      url
    }
    image {
      ...imageData
    }
  }
}

fragment sectionAboutProject on LandingPage {
  sectionAboutProject {
    title
    description
    image {
      ...imageData
    }
  }
}

fragment sectionTech on LandingPage {
  sectionTech {
    title
    techIcons {
      title
      icon {
        url
      }
    }
  }
}

fragment sectionConcepts on LandingPage {
  sectionConcepts {
    title
    concepts {
      title
    }
  }
}

fragment sectionModules on LandingPage {
  sectionModules {
    title
    modules {
      title
      subtitle
      description
    }
  }
}

fragment sectionAgenda on LandingPage {
  sectionAgenda {
    title
    description
  }
}

fragment sectionPricingBox on LandingPage {
  pricingBox {
   	totalPrice
    numberInstallments
    priceInstallment
    benefits
    button {
      label
      url
    }
  }
}

fragment sectionAboutUss on LandingPage {
  sectionAboutUs {
    title
    authors {
      photo {
        ...imageData
      }
      name
      role
      socialLinks {
        url
      }
      description
    }
  }
}

fragment sectionReview on LandingPage {
  sectionReviews {
    title
    reviews {
      name
      text
      photo {
        ...imageData
      }
    }
  }
}

fragment sectionFaq on LandingPage {
  sectionFaq {
    title
    questions {
      question
      answer
    }
  }
}

query GET_LANDING_PAGE {
  landingPage {
    ...logo
    ...header
    ...sectionAboutProject
    ...sectionTech
    ...sectionConcepts
    ...sectionModules
    ...sectionAgenda
    ...sectionPricingBox
    ...sectionAboutUss
    ...sectionReview
    ...sectionFaq
  }
}
  `
