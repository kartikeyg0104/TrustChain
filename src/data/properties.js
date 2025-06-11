import { getPropertyImageById } from '../utils/imageUtils';

export const featuredProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    price: "$425,000",
    location: "123 Main St, New York, NY",
    image: getPropertyImageById(1),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,200 ft²"
    }
  },
  {
    id: 2,
    title: "Suburban Family Home",
    price: "$675,000",
    location: "456 Oak St, Los Angeles, CA",
    image: getPropertyImageById(2),
    badge: "Enhanced",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "2,400 ft²"
    }
  },
  {
    id: 3,
    title: "Mountain View Cottage",
    price: "$320,000",
    location: "789 Pine Rd, Denver, CO",
    image: getPropertyImageById(3),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "1,800 ft²"
    }
  },
  {
    id: 4,
    title: "Waterfront Luxury Villa",
    price: "$1,250,000",
    location: "101 Harbor Dr, Miami, FL",
    image: getPropertyImageById(4),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "3,600 ft²"
    }
  },
  {
    id: 5,
    title: "Urban Loft with City Views",
    price: "$550,000",
    location: "202 Skyline Blvd, San Francisco, CA",
    image: getPropertyImageById(5),
    badge: "Enhanced",
    details: {
      beds: "1 Bed",
      baths: "1 Bath",
      area: "900 ft²"
    }
  },
  {
    id: 6,
    title: "Charming Country House",
    price: "$400,000",
    location: "303 Greenfield Ln, Austin, TX",
    image: getPropertyImageById(6),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "1,500 ft²"
    }
  }
  , 
  {
    id: 7,
    title: "Luxury Penthouse Suite",
    price: "$2,000,000",
    location: "404 Skyline Dr, New York, NY",
    image: getPropertyImageById(7),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "5 Baths",
      area: "4,500 ft²"
    }
  }
  , 
  {
    id: 8,
    title: "Cozy Beachfront Bungalow",
    price: "$750,000",
    location: "505 Ocean View Rd, Malibu, CA",
    image: getPropertyImageById(8),
    badge: "Enhanced",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,100 ft²"
    }
  }
  , 
  {
    id: 9,
    title: "Spacious Suburban Retreat",
    price: "$850,000",
    location: "606 Maple St, Seattle, WA",
    image: getPropertyImageById(9),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "3,200 ft²"
    }
  }
  , 
  {
    id: 10,
    title: "Elegant City Center Condo",
    price: "$600,000",
    location: "707 City Plaza, Chicago, IL",
    image: getPropertyImageById(10),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,400 ft²"
    }
  }
  , 
  {
    id: 11,
    title: "Rustic Mountain Lodge",
    price: "$1,100,000",
    location: "808 Alpine Way, Aspen, CO",
    image: getPropertyImageById(11),
    badge: "Enhanced",
    details: {
      beds: "6 Beds",
      baths: "5 Baths",
      area: "4,000 ft²"
    }
  },
  {
    id: 12,
    title: "Contemporary Urban Apartment",
    price: "$500,000",
    location: "909 Urban St, Boston, MA",
    image: getPropertyImageById(12),
    badge: "Basic",
    details: {
      beds: "1 Bed",
      baths: "1 Bath",
      area: "800 ft²"
    }
  },
  {
    id: 13,
    title: "Luxury Waterfront Estate",
    price: "$3,500,000",
    location: "1010 Bayfront Ave, San Diego, CA",
    image: getPropertyImageById(13),
    badge: "Premium",
    details: {
      beds: "7 Beds",
      baths: "6 Baths",
      area: "5,000 ft²"
    }
  }, 
  {
    id: 14,
    title: "Chic Downtown Loft",
    price: "$650,000",
    location: "1111 Cityscape Blvd, Miami, FL",
    image: getPropertyImageById(14),
    badge: "Enhanced",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,300 ft²"
    }
  }, 
  {
    id: 15,
    title: "Spacious Family Home",
    price: "$900,000",
    location: "1212 Family Lane, Dallas, TX",
    image: getPropertyImageById(15),
    badge: "Basic",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "2,800 ft²"
    }
  }, 
  {
    id: 16,
    title: "Modern Eco-Friendly House",
    price: "$720,000",
    location: "1313 Greenway Dr, Portland, OR",
    image: getPropertyImageById(16),
    badge: "Premium",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "1,900 ft²"
    }
  }, 
  {
    id: 17,
    title: "Stylish City Apartment",
    price: "$480,000",
    location: "1414 Urban Ave, Atlanta, GA",
    image: getPropertyImageById(17),
    badge: "Enhanced",
    details: {
      beds: "1 Bed",
      baths: "1 Bath",
      area: "750 ft²"
    }
  }, 
  {
    id: 18,
    title: "Luxury Mountain Retreat",
    price: "$2,200,000",
    location: "1515 Summit Rd, Lake Tahoe, NV",
    image: getPropertyImageById(18),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "3,800 ft²"
    }
  }, 
  {
    id: 19,
    title: "Charming Coastal Cottage",
    price: "$600,000",
    location: "1616 Seaside Blvd, Cape Cod, MA",
    image: getPropertyImageById(19),
    badge: "Enhanced",
    details: {
      beds: "2 Beds",
      baths: "1 Bath",
      area: "1,000 ft²"
    }
  }, 
  {
    id: 20,
    title: "Elegant Urban Townhouse",
    price: "$1,000,000",
    location: "1717 City View St, Philadelphia, PA",
    image: getPropertyImageById(20),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "3 Baths",
      area: "2,500 ft²"
    }
  }, 
  {
    id: 21,
    title: "Modern High-Rise Apartment",
    price: "$800,000",
    location: "1818 Skyline Blvd, Houston, TX",
    image: getPropertyImageById(21),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,600 ft²"
    }
  }, 
  {
    id: 22,
    title: "Spacious Suburban Villa",
    price: "$1,500,000",
    location: "1919 Villa Rd, Orlando, FL",
    image: getPropertyImageById(22),
    badge: "Enhanced",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "3,200 ft²"
    }
  }, 
  {
    id: 23,
    title: "Rustic Mountain Cabin",
    price: "$350,000",
    location: "2020 Pine Cone Rd, Asheville, NC",
    image: getPropertyImageById(23),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "1 Bath",
      area: "1,200 ft²"
    }
  }, 
  {
    id: 24,
    title: "Luxury Beachfront Villa",
    price: "$2,800,000",
    location: "2121 Ocean Breeze Dr, Malibu, CA",
    image: getPropertyImageById(24),
    badge: "Premium",
    details: {
      beds: "6 Beds",
      baths: "5 Baths",
      area: "4,500 ft²"
    }
  }, 
  {
    id: 25,
    title: "Contemporary City Loft",
    price: "$550,000",
    location: "2222 Urban Way, Chicago, IL",
    image: getPropertyImageById(25),
    badge: "Enhanced",
    details: {
      beds: "1 Bed",
      baths: "1 Bath",
      area: "900 ft²"
    }
  }, 
  {
    id: 26,
    title: "Elegant Suburban Home",
    price: "$1,200,000",
    location: "2323 Maple Ave, San Francisco, CA",
    image: getPropertyImageById(26),
    badge: "Basic",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "2,800 ft²"
    }
  }, 
  {
    id: 27,
    title: "Stylish Urban Apartment",
    price: "$700,000",
    location: "2424 City Center, New York, NY",
    image: getPropertyImageById(27),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,500 ft²"
    }
  }, 
  {
    id: 28,
    title: "Charming Country Cottage",
    price: "$400,000",
    location: "2525 Greenfield Rd, Austin, TX",
    image: getPropertyImageById(28),
    badge: "Enhanced",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "1,600 ft²"
    }
  }, 
  {
    id: 29,
    title: "Luxury Urban Penthouse",
    price: "$3,000,000",
    location: "2626 Skyline Ave, Los Angeles, CA",
    image: getPropertyImageById(29),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "5 Baths",
      area: "4,200 ft²"
    }
  },
  {
    id: 30,
    title: "Spacious Family Retreat",
    price: "$950,000",
    location: "2727 Family Lane, Seattle, WA",
    image: getPropertyImageById(30),
    badge: "Enhanced",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "3,000 ft²"
    }
  },
  {
    id: 31,
    title: "Modern Eco-Friendly Home",
    price: "$780,000",
    location: "2828 Greenway Dr, Portland, OR",
    image: getPropertyImageById(31),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "1,900 ft²"
    }
  },
  {
    id: 32,
    title: "Stylish City Center Condo",
    price: "$600,000",
    location: "2929 City Plaza, Boston, MA",
    image: getPropertyImageById(32),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1,400 ft²"
    }
  },
  {
    id: 33,
    title: "Waterfront Luxury Villa",
    price: "$972,000",
    location: "989 Waterfront St, Seattle, WA",
    image: getPropertyImageById(33),
    badge: "Enhanced",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "2545 ft\u00b2"
    }
  },
  {
    id: 34,
    title: "Waterfront Luxury Villa",
    price: "$534,000",
    location: "287 Waterfront St, Austin, TX",
    image: getPropertyImageById(34),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "3 Baths",
      area: "1652 ft\u00b2"
    }
  },
  {
    id: 35,
    title: "Luxury Penthouse Suite",
    price: "$849,000",
    location: "339 Luxury St, Los Angeles, CA",
    image: getPropertyImageById(35),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "3828 ft\u00b2"
    }
  },
  {
    id: 36,
    title: "Mountain View Cottage",
    price: "$1,027,000",
    location: "762 Mountain St, Boston, MA",
    image: getPropertyImageById(36),
    badge: "Enhanced",
    details: {
      beds: "1 Beds",
      baths: "4 Baths",
      area: "2137 ft\u00b2"
    }
  },
  {
    id: 37,
    title: "Suburban Family Home",
    price: "$776,000",
    location: "792 Suburban St, New York, NY",
    image: getPropertyImageById(37),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "4 Baths",
      area: "3745 ft\u00b2"
    }
  },
  {
    id: 38,
    title: "Suburban Family Home",
    price: "$352,000",
    location: "488 Suburban St, Denver, CO",
    image: getPropertyImageById(38),
    badge: "Basic",
    details: {
      beds: "1 Beds",
      baths: "2 Baths",
      area: "1717 ft\u00b2"
    }
  },
  {
    id: 39,
    title: "Beachside Bungalow",
    price: "$226,000",
    location: "404 Beachside St, Boston, MA",
    image: getPropertyImageById(39),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "3 Baths",
      area: "1391 ft\u00b2"
    }
  },
  {
    id: 40,
    title: "Mountain View Cottage",
    price: "$770,000",
    location: "905 Mountain St, Denver, CO",
    image: getPropertyImageById(40),
    badge: "Basic",
    details: {
      beds: "4 Beds",
      baths: "4 Baths",
      area: "3535 ft\u00b2"
    }
  },
  {
    id: 41,
    title: "Suburban Family Home",
    price: "$677,000",
    location: "781 Suburban St, Boston, MA",
    image: getPropertyImageById(41),
    badge: "Enhanced",
    details: {
      beds: "4 Beds",
      baths: "1 Baths",
      area: "1676 ft\u00b2"
    }
  },
  {
    id: 42,
    title: "Suburban Family Home",
    price: "$502,000",
    location: "774 Suburban St, Boston, MA",
    image: getPropertyImageById(42),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "2 Baths",
      area: "989 ft\u00b2"
    }
  },
  {
    id: 43,
    title: "Modern Downtown Apartment",
    price: "$414,000",
    location: "573 Modern St, Denver, CO",
    image: getPropertyImageById(43),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "3 Baths",
      area: "3869 ft\u00b2"
    }
  },
  {
    id: 44,
    title: "Mountain View Cottage",
    price: "$237,000",
    location: "753 Mountain St, Miami, FL",
    image: getPropertyImageById(44),
    badge: "Basic",
    details: {
      beds: "4 Beds",
      baths: "3 Baths",
      area: "2773 ft\u00b2"
    }
  },
  {
    id: 45,
    title: "Luxury Penthouse Suite",
    price: "$520,000",
    location: "647 Luxury St, Denver, CO",
    image: getPropertyImageById(45),
    badge: "Enhanced",
    details: {
      beds: "5 Beds",
      baths: "2 Baths",
      area: "1243 ft\u00b2"
    }
  },
  {
    id: 46,
    title: "Urban Studio Flat",
    price: "$684,000",
    location: "214 Urban St, Austin, TX",
    image: getPropertyImageById(46),
    badge: "Basic",
    details: {
      beds: "1 Beds",
      baths: "1 Baths",
      area: "3690 ft\u00b2"
    }
  },
  {
    id: 47,
    title: "Suburban Family Home",
    price: "$1,131,000",
    location: "933 Suburban St, Los Angeles, CA",
    image: getPropertyImageById(47),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "2 Baths",
      area: "3985 ft\u00b2"
    }
  },
  {
    id: 48,
    title: "Beachside Bungalow",
    price: "$1,047,000",
    location: "173 Beachside St, Boston, MA",
    image: getPropertyImageById(48),
    badge: "Enhanced",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "2898 ft\u00b2"
    }
  },
  {
    id: 49,
    title: "Suburban Family Home",
    price: "$962,000",
    location: "819 Suburban St, Austin, TX",
    image: getPropertyImageById(49),
    badge: "Enhanced",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "3362 ft\u00b2"
    }
  },
  {
    id: 50,
    title: "Modern Downtown Apartment",
    price: "$1,230,000",
    location: "316 Modern St, Miami, FL",
    image: getPropertyImageById(50),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "2 Baths",
      area: "1474 ft\u00b2"
    }
  },
  {
    id: 51,
    title: "Luxury Penthouse Suite",
    price: "$272,000",
    location: "368 Luxury St, Chicago, IL",
    image: getPropertyImageById(51),
    badge: "Premium",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "3630 ft\u00b2"
    }
  },
  {
    id: 52,
    title: "Mountain View Cottage",
    price: "$206,000",
    location: "932 Mountain St, Miami, FL",
    image: getPropertyImageById(52),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "2 Baths",
      area: "1110 ft\u00b2"
    }
  },
  {
    id: 53,
    title: "Waterfront Luxury Villa",
    price: "$865,000",
    location: "423 Waterfront St, Chicago, IL",
    image: getPropertyImageById(53),
    badge: "Basic",
    details: {
      beds: "1 Beds",
      baths: "3 Baths",
      area: "3947 ft\u00b2"
    }
  },
  {
    id: 54,
    title: "Modern Downtown Apartment",
    price: "$427,000",
    location: "964 Modern St, Miami, FL",
    image: getPropertyImageById(54),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "4 Baths",
      area: "1320 ft\u00b2"
    }
  },
  {
    id: 55,
    title: "Beachside Bungalow",
    price: "$1,026,000",
    location: "665 Beachside St, Denver, CO",
    image: getPropertyImageById(55),
    badge: "Premium",
    details: {
      beds: "3 Beds",
      baths: "3 Baths",
      area: "1291 ft\u00b2"
    }
  },
  {
    id: 56,
    title: "Rustic Ranch House",
    price: "$327,000",
    location: "905 Rustic St, Denver, CO",
    image: getPropertyImageById(56),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "4 Baths",
      area: "1252 ft\u00b2"
    }
  },
  {
    id: 57,
    title: "Suburban Family Home",
    price: "$717,000",
    location: "394 Suburban St, Denver, CO",
    image: getPropertyImageById(57),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "1 Baths",
      area: "3720 ft\u00b2"
    }
  },
  {
    id: 58,
    title: "Beachside Bungalow",
    price: "$807,000",
    location: "888 Beachside St, Denver, CO",
    image: getPropertyImageById(58),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "1 Baths",
      area: "2191 ft\u00b2"
    }
  },
  {
    id: 59,
    title: "Urban Studio Flat",
    price: "$297,000",
    location: "719 Urban St, Los Angeles, CA",
    image: getPropertyImageById(59),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "2 Baths",
      area: "1259 ft\u00b2"
    }
  },
  {
    id: 60,
    title: "Mountain View Cottage",
    price: "$420,000",
    location: "219 Mountain St, Chicago, IL",
    image: getPropertyImageById(60),
    badge: "Basic",
    details: {
      beds: "5 Beds",
      baths: "1 Baths",
      area: "3678 ft\u00b2"
    }
  },
  {
    id: 61,
    title: "Luxury Penthouse Suite",
    price: "$291,000",
    location: "134 Luxury St, Austin, TX",
    image: getPropertyImageById(61),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "2 Baths",
      area: "3860 ft\u00b2"
    }
  },
  {
    id: 62,
    title: "Modern Downtown Apartment",
    price: "$1,173,000",
    location: "390 Modern St, Boston, MA",
    image: getPropertyImageById(62),
    badge: "Basic",
    details: {
      beds: "3 Beds",
      baths: "1 Baths",
      area: "975 ft\u00b2"
    }
  },
  {
    id: 63,
    title: "Urban Studio Flat",
    price: "$198,000",
    location: "955 Urban St, Chicago, IL",
    image: getPropertyImageById(63),
    badge: "Premium",
    details: {
      beds: "3 Beds",
      baths: "2 Baths",
      area: "2808 ft\u00b2"
    }
  },
  {
    id: 64,
    title: "Beachside Bungalow",
    price: "$344,000",
    location: "179 Beachside St, Chicago, IL",
    image: getPropertyImageById(64),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "4 Baths",
      area: "3729 ft\u00b2"
    }
  },
  {
    id: 65,
    title: "Mountain View Cottage",
    price: "$227,000",
    location: "622 Mountain St, Denver, CO",
    image: getPropertyImageById(65),
    badge: "Premium",
    details: {
      beds: "4 Beds",
      baths: "2 Baths",
      area: "2582 ft\u00b2"
    }
  },
  {
    id: 66,
    title: "Urban Studio Flat",
    price: "$928,000",
    location: "428 Urban St, Miami, FL",
    image: getPropertyImageById(66),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "3 Baths",
      area: "3636 ft\u00b2"
    }
  },
  {
    id: 67,
    title: "Modern Downtown Apartment",
    price: "$811,000",
    location: "200 Modern St, Austin, TX",
    image: getPropertyImageById(67),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "4 Baths",
      area: "3283 ft\u00b2"
    }
  },
  {
    id: 68,
    title: "Urban Studio Flat",
    price: "$1,058,000",
    location: "195 Urban St, Miami, FL",
    image: getPropertyImageById(68),
    badge: "Enhanced",
    details: {
      beds: "2 Beds",
      baths: "3 Baths",
      area: "1265 ft\u00b2"
    }
  },
  {
    id: 69,
    title: "Luxury Penthouse Suite",
    price: "$245,000",
    location: "398 Luxury St, Los Angeles, CA",
    image: getPropertyImageById(69),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "4 Baths",
      area: "2700 ft\u00b2"
    }
  },
  {
    id: 70,
    title: "Rustic Ranch House",
    price: "$241,000",
    location: "691 Rustic St, Miami, FL",
    image: getPropertyImageById(70),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "4 Baths",
      area: "1609 ft\u00b2"
    }
  },
  {
    id: 71,
    title: "Urban Studio Flat",
    price: "$864,000",
    location: "402 Urban St, New York, NY",
    image: getPropertyImageById(71),
    badge: "Enhanced",
    details: {
      beds: "2 Beds",
      baths: "4 Baths",
      area: "2269 ft\u00b2"
    }
  },
  {
    id: 72,
    title: "Waterfront Luxury Villa",
    price: "$271,000",
    location: "594 Waterfront St, Austin, TX",
    image: getPropertyImageById(72),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "2 Baths",
      area: "3127 ft\u00b2"
    }
  },
  {
    id: 73,
    title: "Modern Downtown Apartment",
    price: "$597,000",
    location: "879 Modern St, Miami, FL",
    image: getPropertyImageById(73),
    badge: "Premium",
    details: {
      beds: "5 Beds",
      baths: "3 Baths",
      area: "3179 ft\u00b2"
    }
  },
  {
    id: 74,
    title: "Suburban Family Home",
    price: "$894,000",
    location: "975 Suburban St, New York, NY",
    image: getPropertyImageById(74),
    badge: "Premium",
    details: {
      beds: "1 Beds",
      baths: "4 Baths",
      area: "3652 ft\u00b2"
    }
  },
  {
    id: 75,
    title: "Suburban Family Home",
    price: "$776,000",
    location: "909 Suburban St, New York, NY",
    image: getPropertyImageById(75),
    badge: "Basic",
    details: {
      beds: "1 Beds",
      baths: "3 Baths",
      area: "917 ft\u00b2"
    }
  },
  {
    id: 76,
    title: "Suburban Family Home",
    price: "$223,000",
    location: "404 Suburban St, Chicago, IL",
    image: getPropertyImageById(76),
    badge: "Premium",
    details: {
      beds: "2 Beds",
      baths: "1 Baths",
      area: "3502 ft\u00b2"
    }
  },
  {
    id: 77,
    title: "Modern Downtown Apartment",
    price: "$1,030,000",
    location: "107 Modern St, New York, NY",
    image: getPropertyImageById(77),
    badge: "Premium",
    details: {
      beds: "3 Beds",
      baths: "1 Baths",
      area: "2110 ft\u00b2"
    }
  },
  {
    id: 78,
    title: "Modern Downtown Apartment",
    price: "$502,000",
    location: "193 Modern St, Los Angeles, CA",
    image: getPropertyImageById(78),
    badge: "Basic",
    details: {
      beds: "2 Beds",
      baths: "3 Baths",
      area: "3271 ft\u00b2"
    }
  },
  {
    id: 79,
    title: "Modern Downtown Apartment",
    price: "$804,000",
    location: "962 Modern St, New York, NY",
    image: getPropertyImageById(79),
    badge: "Enhanced",
    details: {
      beds: "1 Beds",
      baths: "4 Baths",
      area: "918 ft\u00b2"
    }
  },
  {
    id: 80,
    title: "Beachside Bungalow",
    area: "2020 sq ft",
    image: getPropertyImageById(80),
    badge: "Premium"
  },
  {
    id: 95,
    title: "Luxury Penthouse Suite",
    location: "449 Luxury St, New York, NY",
    price: "$819,000",
    beds: "1",
    baths: "2",
    area: "1416 sq ft",
    image: getPropertyImageById(95),
    badge: "Premium"
  },
  {
    id: 96,
    title: "Mountain View Cottage",
    location: "295 Mountain St, Los Angeles, CA",
    price: "$791,000",
    beds: "3",
    baths: "4",
    area: "3184 sq ft",
    image: getPropertyImageById(96),
    badge: "Enhanced"
  },
  {
    id: 97,
    title: "Modern Downtown Apartment",
    location: "998 Modern St, Miami, FL",
    price: "$1,028,000",
    beds: "3",
    baths: "1",
    area: "1577 sq ft",
    image: getPropertyImageById(97),
    badge: "Premium"
  },
  {
    id: 98,
    title: "Urban Studio Flat",
    location: "593 Urban St, Seattle, WA",
    price: "$591,000",
    beds: "4",
    baths: "1",
    area: "3374 sq ft",
    image: getPropertyImageById(98),
    badge: "Basic"
  },
  {
    id: 99,
    title: "Waterfront Luxury Villa",
    location: "543 Waterfront St, Miami, FL",
    price: "$1,201,000",
    beds: "3",
    baths: "4",
    area: "3888 sq ft",
    image: getPropertyImageById(99),
    badge: "Premium"
  },
  {
    id: 100,
    title: "Beachside Bungalow",
    location: "208 Beachside St, New York, NY",
    price: "$630,000",
    beds: "5",
    baths: "3",
    area: "1272 sq ft",
    image: getPropertyImageById(100),
    badge: "Premium"
  },
  {
    id: 101,
    title: "Luxury Penthouse Suite",
    location: "323 Luxury St, Boston, MA",
    price: "$950,000",
    beds: "3",
    baths: "2",
    area: "2054 sq ft",
    image: getPropertyImageById(101),
    badge: "Premium"
  },
  {
    id: 102,
    title: "Modern Downtown Apartment",
    location: "461 Modern St, Seattle, WA",
    price: "$589,000",
    beds: "2",
    baths: "1",
    area: "3200 sq ft",
    image: getPropertyImageById(102),
    badge: "Basic"
  },
  {
    id: 103,
    title: "Modern Downtown Apartment",
    location: "534 Modern St, Austin, TX",
    price: "$1,037,000",
    beds: "3",
    baths: "4",
    area: "2188 sq ft",
    image: getPropertyImageById(103),
    badge: "Premium"
  },
  {
    id: 104,
    title: "Beachside Bungalow",
    location: "308 Beachside St, Chicago, IL",
    price: "$614,000",
    beds: "3",
    baths: "4",
    area: "1809 sq ft",
    image: getPropertyImageById(104),
    badge: "Enhanced"
  },
  {
    id: 105,
    title: "Mountain View Cottage",
    location: "367 Mountain St, Chicago, IL",
    price: "$155,000",
    beds: "2",
    baths: "1",
    area: "3774 sq ft",
    image: getPropertyImageById(105),
    badge: "Basic"
  },
  {
    id: 106,
    title: "Suburban Family Home",
    location: "211 Suburban St, Seattle, WA",
    price: "$1,045,000",
    beds: "1",
    baths: "4",
    area: "1078 sq ft",
    image: getPropertyImageById(106),
    badge: "Basic"
  },
  {
    id: 107,
    title: "Modern Downtown Apartment",
    location: "887 Modern St, Los Angeles, CA",
    price: "$872,000",
    beds: "5",
    baths: "4",
    area: "2808 sq ft",
    image: getPropertyImageById(107),
    badge: "Premium"
  },
  {
    id: 108,
    title: "Rustic Ranch House",
    location: "841 Rustic St, Boston, MA",
    price: "$1,094,000",
    beds: "3",
    baths: "2",
    area: "3337 sq ft",
    image: getPropertyImageById(108),
    badge: "Enhanced"
  },
  {
    id: 109,
    title: "Modern Downtown Apartment",
    location: "210 Modern St, Boston, MA",
    price: "$799,000",
    beds: "2",
    baths: "2",
    area: "2023 sq ft",
    image: getPropertyImageById(109),
    badge: "Enhanced"
  },
  {
    id: 110,
    title: "Suburban Family Home",
    location: "908 Suburban St, Denver, CO",
    price: "$1,244,000",
    beds: "2",
    baths: "2",
    area: "2200 sq ft",
    image: getPropertyImageById(110),
    badge: "Premium"
  },
  {
    id: 111,
    title: "Waterfront Luxury Villa",
    location: "773 Waterfront St, Los Angeles, CA",
    price: "$836,000",
    beds: "4",
    baths: "2",
    area: "1796 sq ft",
    image: getPropertyImageById(111),
    badge: "Basic"
  },
  {
    id: 112,
    title: "Waterfront Luxury Villa",
    location: "757 Waterfront St, New York, NY",
    price: "$1,029,000",
    beds: "3",
    baths: "2",
    area: "3381 sq ft",
    image: getPropertyImageById(112),
    badge: "Basic"
  },
  {
    id: 113,
    title: "Waterfront Luxury Villa",
    location: "457 Waterfront St, Chicago, IL",
    price: "$1,072,000",
    beds: "2",
    baths: "3",
    area: "2787 sq ft",
    image: getPropertyImageById(113),
    badge: "Enhanced"
  },
  {
    id: 114,
    title: "Modern Downtown Apartment",
    location: "397 Modern St, Seattle, WA",
    price: "$201,000",
    beds: "5",
    baths: "1",
    area: "1759 sq ft",
    image: getPropertyImageById(114),
    badge: "Enhanced"
  },
  {
    id: 115,
    title: "Suburban Family Home",
    location: "493 Suburban St, Boston, MA",
    price: "$384,000",
    beds: "5",
    baths: "2",
    area: "1826 sq ft",
    image: getPropertyImageById(115),
    badge: "Basic"
  },
  {
    id: 116,
    title: "Rustic Ranch House",
    location: "152 Rustic St, New York, NY",
    price: "$512,000",
    beds: "4",
    baths: "4",
    area: "1301 sq ft",
    image: getPropertyImageById(116),
    badge: "Enhanced"
  },
  {
    id: 117,
    title: "Beachside Bungalow",
    location: "589 Beachside St, Los Angeles, CA",
    price: "$1,116,000",
    beds: "2",
    baths: "2",
    area: "1952 sq ft",
    image: getPropertyImageById(117),
    badge: "Enhanced"
  },
  {
    id: 118,
    title: "Beachside Bungalow",
    location: "292 Beachside St, New York, NY",
    price: "$803,000",
    beds: "1",
    baths: "3",
    area: "2006 sq ft",
    image: getPropertyImageById(118),
    badge: "Premium"
  },
  {
    id: 119,
    title: "Beachside Bungalow",
    location: "449 Beachside St, Austin, TX",
    price: "$753,000",
    beds: "1",
    baths: "4",
    area: "2166 sq ft",
    image: getPropertyImageById(119),
    badge: "Enhanced"
  },
  {
    id: 120,
    title: "Rustic Ranch House",
    location: "395 Rustic St, Miami, FL",
    price: "$979,000",
    beds: "5",
    baths: "1",
    area: "1190 sq ft",
    image: getPropertyImageById(120),
    badge: "Enhanced"
  },
  {
    id: 121,
    title: "Beachside Bungalow",
    location: "686 Beachside St, Miami, FL",
    price: "$641,000",
    beds: "3",
    baths: "2",
    area: "3957 sq ft",
    image: getPropertyImageById(121),
    badge: "Enhanced"
  },
  {
    id: 122,
    title: "Luxury Penthouse Suite",
    location: "943 Luxury St, Boston, MA",
    price: "$356,000",
    beds: "2",
    baths: "4",
    area: "3000 sq ft",
    image: getPropertyImageById(122),
    badge: "Premium"
  },
  {
    id: 123,
    title: "Waterfront Luxury Villa",
    location: "663 Waterfront St, Austin, TX",
    price: "$1,034,000",
    beds: "3",
    baths: "1",
    area: "1755 sq ft",
    image: getPropertyImageById(123),
    badge: "Premium"
  },
  {
    id: 124,
    title: "Beachside Bungalow",
    location: "838 Beachside St, Boston, MA",
    price: "$749,000",
    beds: "2",
    baths: "4",
    area: "3278 sq ft",
    image: getPropertyImageById(124),
    badge: "Basic"
  },
  {
    id: 125,
    title: "Rustic Ranch House",
    location: "152 Rustic St, Miami, FL",
    price: "$630,000",
    beds: "2",
    baths: "1",
    area: "3773 sq ft",
    image: getPropertyImageById(125),
    badge: "Enhanced"
  },
  {
    id: 126,
    title: "Suburban Family Home",
    location: "684 Suburban St, Miami, FL",
    price: "$909,000",
    beds: "2",
    baths: "2",
    area: "2697 sq ft",
    image: getPropertyImageById(126),
    badge: "Basic"
  },
  {
    id: 127,
    title: "Mountain View Cottage",
    location: "741 Mountain St, Los Angeles, CA",
    price: "$828,000",
    beds: "1",
    baths: "4",
    area: "3316 sq ft",
    image: getPropertyImageById(127),
    badge: "Enhanced"
  },
  {
    id: 128,
    title: "Suburban Family Home",
    location: "181 Suburban St, Denver, CO",
    price: "$445,000",
    beds: "5",
    baths: "3",
    area: "2873 sq ft",
    image: getPropertyImageById(128),
    badge: "Enhanced"
  },
  {
    id: 129,
    title: "Urban Studio Flat",
    location: "358 Urban St, Miami, FL",
    price: "$255,000",
    beds: "5",
    baths: "3",
    area: "1347 sq ft",
    image: getPropertyImageById(129),
    badge: "Premium"
  },
  {
    id: 130,
    title: "Beachside Bungalow",
    location: "885 Beachside St, Denver, CO",
    price: "$408,000",
    beds: "2",
    baths: "4",
    area: "1270 sq ft",
    image: getPropertyImageById(130),
    badge: "Premium"
  },
  {
    id: 131,
    title: "Luxury Penthouse Suite",
    location: "238 Luxury St, Seattle, WA",
    price: "$186,000",
    beds: "1",
    baths: "3",
    area: "2382 sq ft",
    image: getPropertyImageById(131),
    badge: "Basic"
  },
  {
    id: 132,
    title: "Rustic Ranch House",
    location: "565 Rustic St, Miami, FL",
    price: "$751,000",
    beds: "3",
    baths: "3",
    area: "2200 sq ft",
    image: getPropertyImageById(132),
    badge: "Basic"
  },
  {
    id: 133,
    title: "Urban Studio Flat",
    location: "762 Urban St, New York, NY",
    price: "$340,000",
    beds: "2",
    baths: "3",
    area: "2355 sq ft",
    image: getPropertyImageById(133),
    badge: "Enhanced"
  },
  {
    id: 134,
    title: "Luxury Penthouse Suite",
    location: "536 Luxury St, Boston, MA",
    price: "$285,000",
    beds: "2",
    baths: "1",
    area: "2152 sq ft",
    image: getPropertyImageById(134),
    badge: "Basic"
  },
  {
    id: 135,
    title: "Modern Downtown Apartment",
    location: "765 Modern St, New York, NY",
    price: "$883,000",
    beds: "1",
    baths: "2",
    area: "2258 sq ft",
    image: getPropertyImageById(135),
    badge: "Premium"
  },
  {
    id: 136,
    title: "Suburban Family Home",
    location: "448 Suburban St, Austin, TX",
    price: "$530,000",
    beds: "5",
    baths: "3",
    area: "2493 sq ft",
    image: getPropertyImageById(136),
    badge: "Enhanced"
  },
  {
    id: 137,
    title: "Urban Studio Flat",
    location: "665 Urban St, Austin, TX",
    price: "$784,000",
    beds: "3",
    baths: "4",
    area: "3097 sq ft",
    image: getPropertyImageById(137),
    badge: "Enhanced"
  },
  {
    id: 138,
    title: "Suburban Family Home",
    location: "663 Suburban St, Chicago, IL",
    price: "$161,000",
    beds: "4",
    baths: "1",
    area: "2380 sq ft",
    image: getPropertyImageById(138),
    badge: "Enhanced"
  },
  {
    id: 139,
    title: "Waterfront Luxury Villa",
    location: "845 Waterfront St, New York, NY",
    price: "$398,000",
    beds: "1",
    baths: "2",
    area: "1895 sq ft",
    image: getPropertyImageById(139),
    badge: "Basic"
  },
  {
    id: 140,
    title: "Waterfront Luxury Villa",
    location: "520 Waterfront St, Miami, FL",
    price: "$443,000",
    beds: "3",
    baths: "1",
    area: "2792 sq ft",
    image: getPropertyImageById(140),
    badge: "Premium"
  },
  {
    id: 141,
    title: "Beachside Bungalow",
    location: "856 Beachside St, Seattle, WA",
    price: "$549,000",
    beds: "3",
    baths: "4",
    area: "2062 sq ft",
    image: getPropertyImageById(141),
    badge: "Basic"
  },
  {
    id: 142,
    title: "Beachside Bungalow",
    location: "808 Beachside St, Miami, FL",
    price: "$180,000",
    beds: "2",
    baths: "1",
    area: "2923 sq ft",
    image: getPropertyImageById(142),
    badge: "Basic"
  },
  {
    id: 143,
    title: "Mountain View Cottage",
    location: "618 Mountain St, New York, NY",
    price: "$355,000",
    beds: "2",
    baths: "3",
    area: "1332 sq ft",
    image: getPropertyImageById(143),
    badge: "Premium"
  },
  {
    id: 144,
    title: "Rustic Ranch House",
    location: "212 Rustic St, Austin, TX",
    price: "$1,041,000",
    beds: "1",
    baths: "4",
    area: "1709 sq ft",
    image: getPropertyImageById(144),
    badge: "Premium"
  },
  {
    id: 145,
    title: "Modern Downtown Apartment",
    location: "263 Modern St, Denver, CO",
    price: "$1,112,000",
    beds: "5",
    baths: "2",
    area: "2310 sq ft",
    image: getPropertyImageById(145),
    badge: "Enhanced"
  },
  {
    id: 146,
    title: "Waterfront Luxury Villa",
    location: "913 Waterfront St, Austin, TX",
    price: "$484,000",
    beds: "3",
    baths: "3",
    area: "3909 sq ft",
    image: getPropertyImageById(146),
    badge: "Basic"
  },
  {
    id: 147,
    title: "Mountain View Cottage",
    location: "227 Mountain St, Chicago, IL",
    price: "$893,000",
    beds: "3",
    baths: "3",
    area: "3058 sq ft",
    image: getPropertyImageById(147),
    badge: "Basic"
  },
  {
    id: 148,
    title: "Beachside Bungalow",
    location: "604 Beachside St, Boston, MA",
    price: "$752,000",
    beds: "2",
    baths: "3",
    area: "912 sq ft",
    image: getPropertyImageById(148),
    badge: "Basic"
  },
  {
    id: 149,
    title: "Luxury Penthouse Suite",
    location: "120 Luxury St, Chicago, IL",
    price: "$1,217,000",
    beds: "3",
    baths: "4",
    area: "1239 sq ft",
    image: getPropertyImageById(149),
    badge: "Premium"
  },
  {
    id: 150,
    title: "Suburban Family Home",
    location: "627 Suburban St, Seattle, WA",
    price: "$960,000",
    beds: "5",
    baths: "2",
    area: "1600 sq ft",
    image: getPropertyImageById(150),
    badge: "Enhanced"
  },
  {
    id: 151,
    title: "Modern Downtown Apartment",
    location: "664 Modern St, Austin, TX",
    price: "$731,000",
    beds: "1",
    baths: "2",
    area: "3914 sq ft",
    image: getPropertyImageById(151),
    badge: "Enhanced"
  },
  {
    id: 152,
    title: "Modern Downtown Apartment",
    location: "842 Modern St, Boston, MA",
    price: "$732,000",
    beds: "4",
    baths: "3",
    area: "849 sq ft",
    image: getPropertyImageById(152),
    badge: "Premium"
  },
  {
    id: 153,
    title: "Urban Studio Flat",
    location: "504 Urban St, Miami, FL",
    price: "$944,000",
    beds: "1",
    baths: "4",
    area: "2289 sq ft",
    image: getPropertyImageById(153),
    badge: "Basic"
  },
  {
    id: 154,
    title: "Modern Downtown Apartment",
    location: "408 Modern St, Boston, MA",
    price: "$875,000",
    beds: "1",
    baths: "1",
    area: "1604 sq ft",
    image: getPropertyImageById(154),
    badge: "Enhanced"
  },
  {
    id: 155,
    title: "Rustic Ranch House",
    location: "359 Rustic St, Denver, CO",
    price: "$894,000",
    beds: "2",
    baths: "3",
    area: "3802 sq ft",
    image: getPropertyImageById(155),
    badge: "Premium"
  },
  {
    id: 156,
    title: "Beachside Bungalow",
    location: "107 Beachside St, Boston, MA",
    price: "$229,000",
    beds: "2",
    baths: "1",
    area: "1987 sq ft",
    image: getPropertyImageById(156),
    badge: "Premium"
  },
  {
    id: 157,
    title: "Luxury Penthouse Suite",
    location: "840 Luxury St, Los Angeles, CA",
    price: "$567,000",
    beds: "1",
    baths: "2",
    area: "2516 sq ft",
    image: getPropertyImageById(157),
    badge: "Enhanced"
  },
  {
    id: 158,
    title: "Urban Studio Flat",
    location: "281 Urban St, Seattle, WA",
    price: "$576,000",
    beds: "1",
    baths: "3",
    area: "1401 sq ft",
    image: getPropertyImageById(158),
    badge: "Basic"
  },
  {
    id: 159,
    title: "Beachside Bungalow",
    location: "166 Beachside St, Austin, TX",
    price: "$290,000",
    beds: "1",
    baths: "3",
    area: "3556 sq ft",
    image: getPropertyImageById(159),
    badge: "Premium"
  },
  {
    id: 160,
    title: "Beachside Bungalow",
    location: "746 Beachside St, Los Angeles, CA",
    price: "$181,000",
    beds: "1",
    baths: "2",
    area: "3272 sq ft",
    image: getPropertyImageById(160),
    badge: "Premium"
  },
  {
    id: 161,
    title: "Mountain View Cottage",
    location: "465 Mountain St, New York, NY",
    price: "$354,000",
    beds: "3",
    baths: "3",
    area: "1669 sq ft",
    image: getPropertyImageById(161),
    badge: "Basic"
  },
  {
    id: 162,
    title: "Mountain View Cottage",
    location: "616 Mountain St, Seattle, WA",
    price: "$1,039,000",
    beds: "1",
    baths: "1",
    area: "3929 sq ft",
    image: getPropertyImageById(162),
    badge: "Basic"
  },
  {
    id: 163,
    title: "Mountain View Cottage",
    location: "499 Mountain St, Boston, MA",
    price: "$371,000",
    beds: "2",
    baths: "4",
    area: "3316 sq ft",
    image: getPropertyImageById(163),
    badge: "Basic"
  },
  {
    id: 164,
    title: "Modern Downtown Apartment",
    location: "904 Modern St, Miami, FL",
    price: "$403,000",
    beds: "4",
    baths: "4",
    area: "3557 ft",
    image: getPropertyImageById(164),
    badge: "Premium"
  },
  {
    id: 165,
    title: "Beachside Bungalow",
    location: "568 Beachside St, New York, NY",
    price: "$639,000",
    beds: "1",
    baths: "2",
    area: "3234 sq ft",
    image: getPropertyImageById(165),
    badge: "Enhanced"
  },
  {
    id: 166,
    title: "Rustic Ranch House",
    location: "359 Rustic St, Denver, CO",
    price: "$339,000",
    beds: "2",
    baths: "3",
    area: "3979 sq ft",
    image: getPropertyImageById(166),
    badge: "Enhanced"
  },
  {
    id: 167,
    title: "Beachside Bungalow",
    location: "406 Beachside St, Chicago, IL",
    price: "$507,000",
    beds: "4",
    baths: "1",
    area: "850 sq ft",
    image: getPropertyImageById(167),
    badge: "Premium"
  },
  {
    id: 168,
    title: "Rustic Ranch House",
    location: "136 Rustic St, New York, NY",
    price: "$496,000",
    beds: "1",
    baths: "1",
    area: "3140 sq ft",
    image: getPropertyImageById(168),
    badge: "Premium"
  },
  {
    id: 169,
    title: "Rustic Ranch House",
    location: "759 Rustic St, Miami, FL",
    price: "$594,000",
    beds: "2",
    baths: "1",
    area: "3468 sq ft",
    image: getPropertyImageById(169),
    badge: "Basic"
  },
  {
    id: 170,
    title: "Beachside Bungalow",
    location: "146 Beachside St, Seattle, WA",
    price: "$249,000",
    beds: "1",
    baths: "2",
    area: "2871 sq ft",
    image: getPropertyImageById(170),
    badge: "Premium"
  },
  {
    id: 171,
    title: "Mountain View Cottage",
    location: "279 Mountain St, Los Angeles, CA",
    price: "$237,000",
    beds: "2",
    baths: "4",
    area: "3106 sq ft",
    image: getPropertyImageById(171),
    badge: "Basic"
  },
  {
    id: 172,
    title: "Luxury Penthouse Suite",
    location: "652 Luxury St, Chicago, IL",
    price: "$581,000",
    beds: "4",
    baths: "4",
    area: "2087 sq ft",
    image: getPropertyImageById(172),
    badge: "Premium"
  },
  {
    id: 173,
    title: "Urban Studio Flat",
    location: "104 Urban St, New York, NY",
    price: "$629,000",
    beds: "5",
    baths: "1",
    area: "1041 sq ft",
    image: getPropertyImageById(173),
    badge: "Basic"
  },
  {
    id: 174,
    title: "Urban Studio Flat",
    location: "292 Urban St, Los Angeles, CA",
    price: "$534,000",
    beds: "2",
    baths: "1",
    area: "864 sq ft",
    image: getPropertyImageById(174),
    badge: "Premium"
  },
  {
    id: 175,
    title: "Rustic Ranch House",
    location: "885 Rustic St, Austin, TX",
    price: "$1,072,000",
    beds: "1",
    baths: "3",
    area: "1499 sq ft",
    image: getPropertyImageById(175),
    badge: "Premium"
  },
  {
    id: 176,
    title: "Mountain View Cottage",
    location: "204 Mountain St, Denver, CO",
    price: "$946,000",
    beds: "3",
    baths: "3",
    area: "3129 sq ft",
    image: getPropertyImageById(176),
    badge: "Basic"
  },
  {
    id: 177,
    title: "Urban Studio Flat",
    location: "766 Urban St, New York, NY",
    price: "$200,000",
    beds: "2",
    baths: "4",
    area: "3157 sq ft",
    image: getPropertyImageById(177),
    badge: "Enhanced"
  },
  {
    id: 178,
    title: "Rustic Ranch House",
    location: "842 Rustic St, Denver, CO",
    price: "$521,000",
    beds: "2",
    baths: "4",
    area: "2655 sq ft",
    image: getPropertyImageById(178),
    badge: "Enhanced"
  },
  {
    id: 179,
    title: "Mountain View Cottage",
    location: "438 Mountain St, Miami, FL",
    price: "$531,000",
    beds: "2",
    baths: "2",
    area: "2939 sq ft",
    image: getPropertyImageById(179),
    badge: "Premium"
  },
  {
    id: 180,
    title: "Mountain View Cottage",
    location: "986 Mountain St, Austin, TX",
    price: "$1,230,000",
    beds: "3",
    baths: "2",
    area: "1426 sq ft",
    image: getPropertyImageById(180),
    badge: "Basic"
  },
  {
    id: 181,
    title: "Urban Studio Flat",
    location: "402 Urban St, Austin, TX",
    price: "$645,000",
    beds: "3",
    baths: "4",
    area: "1491 sq ft",
    image: getPropertyImageById(181),
    badge: "Premium"
  },
  {
    id: 182,
    title: "Rustic Ranch House",
    location: "638 Rustic St, Austin, TX",
    price: "$364,000",
    beds: "3",
    baths: "1",
    area: "995 sq ft",
    image: getPropertyImageById(182),
    badge: "Enhanced"
  },
  {
    id: 183,
    title: "Rustic Ranch House",
    location: "981 Rustic St, Austin, TX",
    price: "$1,107,000",
    beds: "1",
    baths: "1",
    area: "2737 sq ft",
    image: getPropertyImageById(183),
    badge: "Premium"
  },
  {
    id: 184,
    title: "Modern Downtown Apartment",
    location: "791 Modern St, Los Angeles, CA",
    price: "$210,000",
    beds: "3",
    baths: "3",
    area: "3036 sq ft",
    image: getPropertyImageById(184),
    badge: "Enhanced"
  },
  {
    id: 185,
    title: "Rustic Ranch House",
    location: "368 Rustic St, Denver, CO",
    price: "$837,000",
    beds: "4",
    baths: "4",
    area: "2481 sq ft",
    image: getPropertyImageById(185),
    badge: "Basic"
  },
  {
    id: 186,
    title: "Modern Downtown Apartment",
    location: "127 Modern St, Boston, MA",
    price: "$693,000",
    beds: "2",
    baths: "2",
    area: "3647 sq ft",
    image: getPropertyImageById(186),
    badge: "Basic"
  },
  {
    id: 187,
    title: "Rustic Ranch House",
    location: "200 Rustic St, Chicago, IL",
    price: "$1,126,000",
    beds: "1",
    baths: "1",
    area: "2507 sq ft",
    image: getPropertyImageById(187),
    badge: "Basic"
  },
  {
    id: 188,
    title: "Beachside Bungalow",
    location: "447 Beachside St, Seattle, WA",
    price: "$823,000",
    beds: "5",
    baths: "4",
    area: "3861 sq ft",
    image: getPropertyImageById(188),
    badge: "Basic"
  },
  {
    id: 189,
    title: "Beachside Bungalow",
    location: "421 Beachside St, Boston, MA",
    price: "$889,000",
    beds: "3",
    baths: "1",
    area: "3058 sq ft",
    image: getPropertyImageById(189),
    badge: "Enhanced"
  },
  {
    id: 190,
    title: "Luxury Penthouse Suite",
    location: "982 Luxury St, Chicago, IL",
    price: "$964,000",
    beds: "2",
    baths: "3",
    area: "2896 sq ft",
    image: getPropertyImageById(190),
    badge: "Premium"
  },
  {
    id: 191,
    title: "Luxury Penthouse Suite",
    location: "344 Luxury St, Los Angeles, CA",
    price: "$858,000",
    beds: "3",
    baths: "2",
    area: "3900 sq ft",
    image: getPropertyImageById(191),
    badge: "Premium"
  },
  {
    id: 192,
    title: "Beachside Bungalow",
    location: "410 Beachside St, Denver, CO",
    price: "$158,000",
    beds: "5",
    baths: "1",
    area: "3262 sq ft",
    image: getPropertyImageById(192),
    badge: "Enhanced"
  },
  {
    id: 193,
    title: "Luxury Penthouse Suite",
    location: "221 Luxury St, Boston, MA",
    price: "$422,000",
    beds: "4",
    baths: "4",
    area: "1384 sq ft",
    image: getPropertyImageById(193),
    badge: "Basic"
  },
  {
    id: 194,
    title: "Beachside Bungalow",
    location: "227 Beachside St, Miami, FL",
    price: "$877,000",
    beds: "1",
    baths: "4",
    area: "1082 sq ft",
    image: getPropertyImageById(194),
    badge: "Enhanced"
  },
  {
    id: 195,
    title: "Rustic Ranch House",
    location: "247 Rustic St, Miami, FL",
    price: "$601,000",
    beds: "1",
    baths: "4",
    area: "3336 sq ft",
    image: getPropertyImageById(195),
    badge: "Basic"
  },
  {
    id: 196,
    title: "Rustic Ranch House",
    location: "562 Rustic St, Los Angeles, CA",
    price: "$781,000",
    beds: "2",
    baths: "3",
    area: "3346 sq ft",
    image: getPropertyImageById(196),
    badge: "Premium"
  },
  {
    id: 197,
    title: "Urban Studio Flat",
    location: "479 Urban St, Denver, CO",
    price: "$483,000",
    beds: "2",
    baths: "4",
    area: "2833 sq ft",
    image: getPropertyImageById(197),
    badge: "Enhanced"
  },
  {
    id: 198,
    title: "Suburban Family Home",
    location: "745 Suburban St, Chicago, IL",
    price: "$277,000",
    beds: "1",
    baths: "4",
    area: "1011 sq ft",
    image: getPropertyImageById(198),
    badge: "Basic"
  },
  {
    id: 199,
    title: "Waterfront Luxury Villa",
    location: "600 Waterfront St, Seattle, WA",
    price: "$632,000",
    beds: "4",
    baths: "3",
    area: "1773 sq ft",
    image: getPropertyImageById(199),
    badge: "Premium"
  },
  {
    id: 200,
    title: "Suburban Family Home",
    location: "702 Suburban St, Miami, FL",
    price: "$624,000",
    beds: "3",
    baths: "3",
    area: "1350 sq ft",
    image: getPropertyImageById(200),
    badge: "Basic"
  },
  {
    id: 201,
    title: "Urban Studio Flat",
    location: "705 Urban St, Seattle, WA",
    price: "$1,033,000",
    beds: "1",
    baths: "3",
    area: "2494 sq ft",
    image: getPropertyImageById(201),
    badge: "Enhanced"
  },
  {
    id: 202,
    title: "Waterfront Luxury Villa",
    location: "672 Waterfront St, Miami, FL",
    price: "$591,000",
    beds: "4",
    baths: "2",
    area: "1874 sq ft",
    image: getPropertyImageById(202),
    badge: "Premium"
  },
  {
    id: 203,
    title: "Beachside Bungalow",
    location: "504 Beachside St, New York, NY",
    price: "$1,226,000",
    beds: "3",
    baths: "4",
    area: "3729 sq ft",
    image: getPropertyImageById(203),
    badge: "Enhanced"
  },
  {
    id: 204,
    title: "Rustic Ranch House",
    location: "239 Rustic St, Chicago, IL",
    price: "$358,000",
    beds: "4",
    baths: "1",
    area: "2465 sq ft",
    image: getPropertyImageById(204),
    badge: "Basic"
  },
  {
    id: 205,
    title: "Rustic Ranch House",
    location: "129 Rustic St, Seattle, WA",
    price: "$1,046,000",
    beds: "4",
    baths: "1",
    area: "3429 sq ft",
    image: getPropertyImageById(205),
    badge: "Enhanced"
  },
  {
    id: 206,
    title: "Mountain View Cottage",
    location: "566 Mountain St, Austin, TX",
    price: "$717,000",
    beds: "5",
    baths: "4",
    area: "1431 sq ft",
    image: getPropertyImageById(206),
    badge: "Enhanced"
  },
  {
    id: 207,
    title: "Rustic Ranch House",
    location: "111 Rustic St, New York, NY",
    price: "$404,000",
    beds: "2",
    baths: "4",
    area: "2181 sq ft",
    image: getPropertyImageById(207),
    badge: "Enhanced"
  },
  {
    id: 208,
    title: "Rustic Ranch House",
    location: "165 Rustic St, Boston, MA",
    price: "$1,051,000",
    beds: "5",
    baths: "3",
    area: "3367 sq ft",
    image: getPropertyImageById(208),
    badge: "Basic"
  },
  {
    id: 209,
    title: "Beachside Bungalow",
    location: "514 Beachside St, Seattle, WA",
    price: "$757,000",
    beds: "5",
    baths: "2",
    area: "2634 sq ft",
    image: getPropertyImageById(209),
    badge: "Basic"
  },
  {
    id: 210,
    title: "Luxury Penthouse Suite",
    location: "245 Luxury St, Denver, CO",
    price: "$917,000",
    beds: "1",
    baths: "2",
    area: "3031 sq ft",
    image: getPropertyImageById(210),
    badge: "Premium"
  },
  {
    id: 211,
    title: "Mountain View Cottage",
    location: "139 Mountain St, Los Angeles, CA",
    price: "$1,165,000",
    beds: "2",
    baths: "3",
    area: "1817 sq ft",
    image: getPropertyImageById(211),
    badge: "Basic"
  },
  {
    id: 212,
    title: "Mountain View Cottage",
    location: "164 Mountain St, Boston, MA",
    price: "$347,000",
    beds: "4",
    baths: "4",
    area: "2929 sq ft",
    image: getPropertyImageById(212),
    badge: "Enhanced"
  },
  {
    id: 213,
    title: "Suburban Family Home",
    location: "846 Suburban St, Los Angeles, CA",
    price: "$880,000",
    beds: "1",
    baths: "4",
    area: "3435 sq ft",
    image: getPropertyImageById(213),
    badge: "Premium"
  },
  {
    id: 214,
    title: "Luxury Penthouse Suite",
    location: "556 Luxury St, Chicago, IL",
    price: "$354,000",
    beds: "5",
    baths: "3",
    area: "1192 sq ft",
    image: getPropertyImageById(214),
    badge: "Premium"
  },
  {
    id: 215,
    title: "Mountain View Cottage",
    location: "598 Mountain St, Austin, TX",
    price: "$394,000",
    beds: "2",
    baths: "4",
    area: "2428 sq ft",
    image: getPropertyImageById(215),
    badge: "Basic"
  },
  {
    id: 216,
    title: "Mountain View Cottage",
    location: "858 Mountain St, Denver, CO",
    price: "$224,000",
    beds: "5",
    baths: "1",
    area: "1847 sq ft",
    image: getPropertyImageById(216),
    badge: "Premium"
  },
  {
    id: 217,
    title: "Modern Downtown Apartment",
    location: "700 Modern St, Seattle, WA",
    price: "$1,243,000",
    beds: "3",
    baths: "2",
    area: "3825 sq ft",
    image: getPropertyImageById(217),
    badge: "Basic"
  },
  {
    id: 218,
    title: "Suburban Family Home",
    location: "456 Suburban St, Los Angeles, CA",
    price: "$195,000",
    beds: "3",
    baths: "3",
    area: "2170 sq ft",
    image: getPropertyImageById(218),
    badge: "Enhanced"
  },
  {
    id: 219,
    title: "Luxury Penthouse Suite",
    location: "281 Luxury St, Austin, TX",
    price: "$1,119,000",
    beds: "1",
    baths: "2",
    area: "2797 sq ft",
    image: getPropertyImageById(219),
    badge: "Premium"
  },
  {
    id: 220,
    title: "Rustic Ranch House",
    location: "464 Rustic St, Seattle, WA",
    price: "$980,000",
    beds: "5",
    baths: "1",
    area: "1489 sq ft",
    image: getPropertyImageById(220),
    badge: "Premium"
  },
  {
    id: 221,
    title: "Mountain View Cottage",
    location: "450 Mountain St, Los Angeles, CA",
    price: "$561,000",
    beds: "1",
    baths: "2",
    area: "2255 sq ft",
    image: getPropertyImageById(221),
    badge: "Enhanced"
  },
  {
    id: 222,
    title: "Rustic Ranch House",
    location: "868 Rustic St, Los Angeles, CA",
    price: "$476,000",
    beds: "5",
    baths: "1",
    area: "1303 sq ft",
    image: getPropertyImageById(222),
    badge: "Basic"
  },
  {
    id: 223,
    title: "Modern Downtown Apartment",
    location: "286 Modern St, Chicago, IL",
    price: "$808,000",
    beds: "1",
    baths: "4",
    area: "1915 sq ft",
    image: getPropertyImageById(223),
    badge: "Enhanced"
  },
  {
    id: 224,
    title: "Waterfront Luxury Villa",
    location: "934 Waterfront St, Miami, FL",
    price: "$651,000",
    beds: "1",
    baths: "2",
    area: "2865 sq ft",
    image: getPropertyImageById(224),
    badge: "Basic"
  },
  {
    id: 225,
    title: "Rustic Ranch House",
    location: "925 Rustic St, Los Angeles, CA",
    price: "$1,013,000",
    beds: "2",
    baths: "4",
    area: "1468 sq ft",
    image: getPropertyImageById(225),
    badge: "Premium"
  },
  {
    id: 226,
    title: "Waterfront Luxury Villa",
    location: "784 Waterfront St, Austin, TX",
    price: "$1,200,000",
    beds: "4",
    baths: "1",
    area: "1734 sq ft",
    image: getPropertyImageById(226),
    badge: "Basic"
  },
  {
    id: 227,
    title: "Rustic Ranch House",
    location: "190 Rustic St, New York, NY",
    price: "$721,000",
    beds: "2",
    baths: "1",
    area: "3943 sq ft",
    image: getPropertyImageById(227),
    badge: "Enhanced"
  },
  {
    id: 228,
    title: "Waterfront Luxury Villa",
    location: "475 Waterfront St, Chicago, IL",
    price: "$779,000",
    beds: "5",
    baths: "2",
    area: "1134 sq ft",
    image: getPropertyImageById(228),
    badge: "Basic"
  },
  {
    id: 229,
    title: "Modern Downtown Apartment",
    location: "773 Modern St, Los Angeles, CA",
    price: "$418,000",
    beds: "3",
    baths: "2",
    area: "991 sq ft",
    image: getPropertyImageById(229),
    badge: "Basic"
  },
  {
    id: 230,
    title: "Mountain View Cottage",
    location: "296 Mountain St, Boston, MA",
    price: "$214,000",
    beds: "5",
    baths: "4",
    area: "2832 sq ft",
    image: getPropertyImageById(230),
    badge: "Enhanced"
  },
  {
    id: 231,
    title: "Suburban Family Home",
    location: "340 Suburban St, Miami, FL",
    price: "$593,000",
    beds: "2",
    baths: "3",
    area: "3953 sq ft",
    image: getPropertyImageById(231),
    badge: "Enhanced"
  },
  {
    id: 232,
    title: "Modern Downtown Apartment",
    location: "994 Modern St, Boston, MA",
    price: "$601,000",
    beds: "3",
    baths: "1",
    area: "3695 sq ft",
    image: getPropertyImageById(232),
    badge: "Enhanced"
  },
  {
    id: 233,
    title: "Suburban Family Home",
    location: "122 Suburban St, Los Angeles, CA",
    price: "$613,000",
    beds: "5",
    baths: "3",
    area: "3962 sq ft",
    image: getPropertyImageById(233),
    badge: "Enhanced"
  },
  {
    id: 234,
    title: "Rustic Ranch House",
    location: "477 Rustic St, Los Angeles, CA",
    price: "$300,000",
    beds: "1",
    baths: "4",
    area: "3053 sq ft",
    image: getPropertyImageById(234),
    badge: "Basic"
  },
  {
    id: 235,
    title: "Suburban Family Home",
    location: "241 Suburban St, Seattle, WA",
    price: "$263,000",
    beds: "3",
    baths: "1",
    area: "2478 sq ft",
    image: getPropertyImageById(235),
    badge: "Basic"
  },
  {
    id: 236,
    title: "Suburban Family Home",
    location: "629 Suburban St, Austin, TX",
    price: "$521,000",
    beds: "3",
    baths: "2",
    area: "3130 sq ft",
    image: getPropertyImageById(236),
    badge: "Basic"
  },
  {
    id: 237,
    title: "Rustic Ranch House",
    location: "899 Rustic St, Los Angeles, CA",
    price: "$179,000",
    beds: "4",
    baths: "1",
    area: "2163 sq ft",
    image: getPropertyImageById(237),
    badge: "Basic"
  },
  {
    id: 238,
    title: "Waterfront Luxury Villa",
    location: "239 Waterfront St, Miami, FL",
    price: "$470,000",
    beds: "5",
    baths: "2",
    area: "3782 sq ft",
    image: getPropertyImageById(238),
    badge: "Premium"
  },
  {
    id: 239,
    title: "Mountain View Cottage",
    location: "518 Mountain St, Boston, MA",
    price: "$397,000",
    beds: "5",
    baths: "1",
    area: "1750 sq ft",
    image: getPropertyImageById(239),
    badge: "Enhanced"
  },
  {
    id: 240,
    title: "Suburban Family Home",
    location: "372 Suburban St, Seattle, WA",
    price: "$406,000",
    beds: "5",
    baths: "4",
    area: "3111 ft",
    image: getPropertyImageById(240),
    badge: "Premium"
  },
  {
    id: 241,
    title: "Beachside Bungalow",
    location: "943 Beachside St, Austin, TX",
    price: "$817,000",
    beds: "1",
    baths: "3",
    area: "2393 sq ft",
    image: getPropertyImageById(241),
    badge: "Basic"
  },
  {
    id: 242,
    title: "Modern Downtown Apartment",
    location: "520 Modern St, Boston, MA",
    price: "$994,000",
    beds: "2",
    baths: "4",
    area: "3372 sq ft",
    image: getPropertyImageById(242),
    badge: "Basic"
  },
  {
    id: 243,
    title: "Urban Studio Flat",
    location: "890 Urban St, Seattle, WA",
    price: "$658,000",
    beds: "4",
    baths: "1",
    area: "3216 sq ft",
    image: getPropertyImageById(243),
    badge: "Premium"
  },
  {
    id: 244,
    title: "Waterfront Luxury Villa",
    location: "795 Waterfront St, Seattle, WA",
    price: "$386,000",
    beds: "2",
    baths: "2",
    area: "3605 sq ft",
    image: getPropertyImageById(244),
    badge: "Enhanced"
  },
  {
    id: 245,
    title: "Mountain View Cottage",
    location: "360 Mountain St, Denver, CO",
    price: "$1,170,000",
    beds: "2",
    baths: "1",
    area: "3119 sq ft",
    image: getPropertyImageById(245),
    badge: "Basic"
  },
  {
    id: 246,
    title: "Urban Studio Flat",
    location: "359 Urban St, New York, NY",
    price: "$611,000",
    beds: "5",
    baths: "3",
    area: "1359 sq ft",
    image: getPropertyImageById(246),
    badge: "Premium"
  },
  {
    id: 247,
    title: "Waterfront Luxury Villa",
    location: "855 Waterfront St, Denver, CO",
    price: "$1,135,000",
    beds: "5",
    baths: "4",
    area: "822 sq ft",
    image: getPropertyImageById(247),
    badge: "Enhanced"
  },
  {
    id: 248,
    title: "Beachside Bungalow",
    location: "747 Beachside St, Miami, FL",
    price: "$717,000",
    beds: "2",
    baths: "3",
    area: "2589 sq ft",
    image: getPropertyImageById(248),
    badge: "Basic"
  },
  {
    id: 249,
    title: "Luxury Penthouse Suite",
    location: "989 Luxury St, Los Angeles, CA",
    price: "$749,000",
    beds: "4",
    baths: "4",
    area: "2073 sq ft",
    image: getPropertyImageById(249),
    badge: "Basic"
  },
  {
    id: 250,
    title: "Urban Studio Flat",
    location: "856 Urban St, Denver, CO",
    price: "$564,000",
    beds: "2",
    baths: "3",
    area: "1545 sq ft",
    image: getPropertyImageById(250),
    badge: "Premium"
  },
  {
    id: 251,
    title: "Rustic Ranch House",
    location: "677 Rustic St, New York, NY",
    price: "$343,000",
    beds: "4",
    baths: "4",
    area: "2344 sq ft",
    image: getPropertyImageById(251),
    badge: "Enhanced"
  },
  {
    id: 252,
    title: "Waterfront Luxury Villa",
    location: "315 Waterfront St, Austin, TX",
    price: "$465,000",
    beds: "5",
    baths: "4",
    area: "3395 sq ft",
    image: getPropertyImageById(252),
    badge: "Basic"
  },
  {
    id: 253,
    title: "Urban Studio Flat",
    location: "511 Urban St, Los Angeles, CA",
    price: "$547,000",
    beds: "3",
    baths: "2",
    area: "1160 sq ft",
    image: getPropertyImageById(253),
    badge: "Basic"
  },
  {
    id: 254,
    title: "Modern Downtown Apartment",
    location: "195 Modern St, New York, NY",
    price: "$508,000",
    beds: "2",
    baths: "4",
    area: "2500 sq ft",
    image: getPropertyImageById(254),
    badge: "Premium"
  },
  {
    id: 255,
    title: "Modern Downtown Apartment",
    location: "230 Modern St, Miami, FL",
    price: "$875,000",
    beds: "2",
    baths: "3",
    area: "2599 sq ft",
    image: getPropertyImageById(255),
    badge: "Premium"
  },
  {
    id: 256,
    title: "Urban Studio Flat",
    location: "986 Urban St, Los Angeles, CA",
    price: "$603,000",
    beds: "3",
    baths: "4",
    area: "3349 sq ft",
    image: getPropertyImageById(256),
    badge: "Enhanced"
  },
  {
    id: 257,
    title: "Mountain View Cottage",
    location: "815 Mountain St, Los Angeles, CA",
    price: "$1,115,000",
    beds: "1",
    baths: "3",
    area: "1883 sq ft",
    image: getPropertyImageById(257),
    badge: "Premium"
  },
  {
    id: 258,
    title: "Luxury Penthouse Suite",
    location: "276 Luxury St, New York, NY",
    price: "$532,000",
    beds: "1",
    baths: "4",
    area: "3348 sq ft",
    image: getPropertyImageById(258),
    badge: "Basic"
  },
  {
    id: 259,
    title: "Luxury Penthouse Suite",
    location: "282 Luxury St, New York, NY",
    price: "$537,000",
    beds: "1",
    baths: "3",
    area: "1989 sq ft",
    image: getPropertyImageById(259),
    badge: "Enhanced"
  },
  {
    id: 260,
    title: "Urban Studio Flat",
    location: "316 Urban St, Seattle, WA",
    price: "$1,115,000",
    beds: "5",
    baths: "2",
    area: "3805 sq ft",
    image: getPropertyImageById(260),
    badge: "Basic"
  },
  {
    id: 261,
    title: "Modern Downtown Apartment",
    location: "466 Modern St, Boston, MA",
    price: "$1,151,000",
    beds: "4",
    baths: "3",
    area: "2527 sq ft",
    image: getPropertyImageById(261),
    badge: "Premium"
  },
  {
    id: 262,
    title: "Waterfront Luxury Villa",
    location: "499 Waterfront St, Los Angeles, CA",
    price: "$637,000",
    beds: "4",
    baths: "3",
    area: "1269 sq ft",
    image: getPropertyImageById(262),
    badge: "Enhanced"
  },
  {
    id: 263,
    title: "Luxury Penthouse Suite",
    location: "543 Luxury St, Los Angeles, CA",
    price: "$1,206,000",
    beds: "1",
    baths: "2",
    area: "2149 sq ft",
    image: getPropertyImageById(263),
    badge: "Enhanced"
  },
  {
    id: 264,
    title: "Modern Downtown Apartment",
    location: "746 Modern St, Boston, MA",
    price: "$1,244,000",
    beds: "5",
    baths: "1",
    area: "3448 sq ft",
    image: getPropertyImageById(264),
    badge: "Premium"
  },
  {
    id: 265,
    title: "Urban Studio Flat",
    location: "671 Urban St, Denver, CO",
    price: "$423,000",
    beds: "3",
    baths: "4",
    area: "1817 sq ft",
    image: getPropertyImageById(265),
    badge: "Enhanced"
  },
  {
    id: 266,
    title: "Suburban Family Home",
    location: "965 Suburban St, Austin, TX",
    price: "$517,000",
    beds: "5",
    baths: "1",
    area: "3118 sq ft",
    image: getPropertyImageById(266),
    badge: "Enhanced"
  },
  {
    id: 267,
    title: "Mountain View Cottage",
    location: "574 Mountain St, Chicago, IL",
    price: "$494,000",
    beds: "5",
    baths: "4",
    area: "3862 sq ft",
    image: getPropertyImageById(267),
    badge: "Premium"
  },
  {
    id: 268,
    title: "Mountain View Cottage",
    location: "217 Mountain St, Los Angeles, CA",
    price: "$982,000",
    beds: "2",
    baths: "1",
    area: "2938 sq ft",
    image: getPropertyImageById(268),
    badge: "Premium"
  },
  {
    id: 269,
    title: "Modern Downtown Apartment",
    location: "113 Modern St, Seattle, WA",
    price: "$1,212,000",
    beds: "4",
    baths: "2",
    area: "1160 sq ft",
    image: getPropertyImageById(269),
    badge: "Basic"
  },
  {
    id: 270,
    title: "Waterfront Luxury Villa",
    location: "538 Waterfront St, Seattle, WA",
    price: "$346,000",
    beds: "4",
    baths: "2",
    area: "3962 sq ft",
    image: getPropertyImageById(270),
    badge: "Premium"
  },
  {
    id: 271,
    title: "Rustic Ranch House",
    location: "276 Rustic St, Los Angeles, CA",
    price: "$400,000",
    beds: "1",
    baths: "3",
    area: "1010 sq ft",
    image: getPropertyImageById(271),
    badge: "Premium"
  },
  {
    id: 272,
    title: "Beachside Bungalow",
    location: "904 Beachside St, Chicago, IL",
    price: "$332,000",
    beds: "2",
    baths: "4",
    area: "963 sq ft",
    image: getPropertyImageById(272),
    badge: "Enhanced"
  },
  {
    id: 273,
    title: "Modern Downtown Apartment",
    location: "503 Modern St, New York, NY",
    price: "$921,000",
    beds: "5",
    baths: "4",
    area: "1543 sq ft",
    image: getPropertyImageById(273),
    badge: "Premium"
  },
  {
    id: 274,
    title: "Beachside Bungalow",
    location: "892 Beachside St, Denver, CO",
    price: "$629,000",
    beds: "2",
    baths: "1",
    area: "2036 sq ft",
    image: getPropertyImageById(274),
    badge: "Basic"
  },
  {
    id: 275,
    title: "Modern Downtown Apartment",
    location: "642 Modern St, Austin, TX",
    price: "$691,000",
    beds: "2",
    baths: "4",
    area: "1689 sq ft",
    image: getPropertyImageById(275),
    badge: "Premium"
  },
  {
    id: 276,
    title: "Suburban Family Home",
    location: "609 Suburban St, Miami, FL",
    price: "$1,072,000",
    beds: "2",
    baths: "2",
    area: "1055 sq ft",
    image: getPropertyImageById(276),
    badge: "Enhanced"
  },
  {
    id: 277,
    title: "Suburban Family Home",
    location: "301 Suburban St, Seattle, WA",
    price: "$454,000",
    beds: "3",
    baths: "1",
    area: "1150 sq ft",
    image: getPropertyImageById(277),
    badge: "Enhanced"
  },
  {
    id: 278,
    title: "Suburban Family Home",
    location: "943 Suburban St, Denver, CO",
    price: "$931,000",
    beds: "3",
    baths: "2",
    area: "3281 sq ft",
    image: getPropertyImageById(278),
    badge: "Basic"
  },
  {
    id: 279,
    title: "Rustic Ranch House",
    location: "166 Rustic St, Miami, FL",
    price: "$935,000",
    beds: "4",
    baths: "2",
    area: "1833 sq ft",
    image: getPropertyImageById(279),
    badge: "Enhanced"
  },
  {
    id: 280,
    title: "Suburban Family Home",
    location: "326 Suburban St, Denver, CO",
    price: "$156,000",
    beds: "5",
    baths: "1",
    area: "1708 sq ft",
    image: getPropertyImageById(280),
    badge: "Basic"
  },
  {
    id: 281,
    title: "Luxury Penthouse Suite",
    location: "365 Luxury St, Chicago, IL",
    price: "$935,000",
    beds: "1",
    baths: "1",
    area: "1906 sq ft",
    image: getPropertyImageById(281),
    badge: "Premium"
  },
  {
    id: 282,
    title: "Waterfront Luxury Villa",
    location: "300 Waterfront St, Boston, MA",
    price: "$228,000",
    beds: "5",
    baths: "2",
    area: "1512 sq ft",
    image: getPropertyImageById(282),
    badge: "Enhanced"
  },
  {
    id: 283,
    title: "Mountain View Cottage",
    location: "478 Mountain St, Chicago, IL",
    price: "$626,000",
    beds: "2",
    baths: "2",
    area: "1571 sq ft",
    image: getPropertyImageById(283),
    badge: "Enhanced"
  },
  {
    id: 284,
    title: "Urban Studio Flat",
    location: "747 Urban St, Miami, FL",
    price: "$1,112,000",
    beds: "3",
    baths: "1",
    area: "1811 sq ft",
    image: getPropertyImageById(284),
    badge: "Basic"
  },
  {
    id: 285,
    title: "Luxury Penthouse Suite",
    location: "385 Luxury St, Seattle, WA",
    price: "$942,000",
    beds: "2",
    baths: "3",
    area: "3016 sq ft",
    image: getPropertyImageById(285),
    badge: "Basic"
  },
  {
    id: 286,
    title: "Mountain View Cottage",
    location: "552 Mountain St, Miami, FL",
    price: "$714,000",
    beds: "4",
    baths: "3",
    area: "2477 sq ft",
    image: getPropertyImageById(286),
    badge: "Basic"
  },
  {
    id: 287,
    title: "Beachside Bungalow",
    location: "642 Beachside St, Seattle, WA",
    price: "$644,000",
    beds: "3",
    baths: "1",
    area: "809 sq ft",
    image: getPropertyImageById(287),
    badge: "Enhanced"
  },
  {
    id: 288,
    title: "Mountain View Cottage",
    location: "405 Mountain St, Boston, MA",
    price: "$287,000",
    beds: "1",
    baths: "2",
    area: "1153 sq ft",
    image: getPropertyImageById(288),
    badge: "Basic"
  },
  {
    id: 289,
    title: "Suburban Family Home",
    location: "171 Suburban St, Los Angeles, CA",
    price: "$721,000",
    beds: "4",
    baths: "1",
    area: "3117 sq ft",
    image: getPropertyImageById(289),
    badge: "Enhanced"
  },
  {
    id: 290,
    title: "Modern Downtown Apartment",
    location: "280 Modern St, Austin, TX",
    price: "$1,096,000",
    beds: "1",
    baths: "1",
    area: "3743 sq ft",
    image: getPropertyImageById(290),
    badge: "Premium"
  },
  {
    id: 291,
    title: "Beachside Bungalow",
    location: "555 Beachside St, Denver, CO",
    price: "$981,000",
    beds: "2",
    baths: "1",
    area: "3997 sq ft",
    image: getPropertyImageById(291),
    badge: "Premium"
  },
  {
    id: 292,
    title: "Modern Downtown Apartment",
    location: "661 Modern St, Boston, MA",
    price: "$837,000",
    beds: "2",
    baths: "3",
    area: "978 sq ft",
    image: getPropertyImageById(292),
    badge: "Enhanced"
  },
  {
    id: 293,
    title: "Rustic Ranch House",
    location: "953 Rustic St, Chicago, IL",
    price: "$939,000",
    beds: "1",
    baths: "4",
    area: "2200 sq ft",
    image: getPropertyImageById(293),
    badge: "Basic"
  },
  {
    id: 294,
    title: "Mountain View Cottage",
    location: "116 Mountain St, Seattle, WA",
    price: "$930,000",
    beds: "1",
    baths: "3",
    area: "821 sq ft",
    image: getPropertyImageById(294),
    badge: "Enhanced"
  },
  {
    id: 295,
    title: "Beachside Bungalow",
    location: "842 Beachside St, Los Angeles, CA",
    price: "$286,000",
    beds: "3",
    baths: "4",
    area: "2682 sq ft",
    image: getPropertyImageById(295),
    badge: "Premium"
  },
  {
    id: 296,
    title: "Waterfront Luxury Villa",
    location: "819 Waterfront St, Denver, CO",
    price: "$391,000",
    beds: "2",
    baths: "3",
    area: "3215 sq ft",
    image: getPropertyImageById(296),
    badge: "Basic"
  },
  {
    id: 297,
    title: "Urban Studio Flat",
    location: "999 Urban St, Los Angeles, CA",
    price: "$735,000",
    beds: "4",
    baths: "3",
    area: "1954 sq ft",
    image: getPropertyImageById(297),
    badge: "Premium"
  },
  {
    id: 298,
    title: "Suburban Family Home",
    location: "108 Suburban St, Denver, CO",
    price: "$950,000",
    beds: "4",
    baths: "4",
    area: "2424 sq ft",
    image: getPropertyImageById(298),
    badge: "Premium"
  },
  {
    id: 299,
    title: "Beachside Bungalow",
    location: "116 Beachside St, Miami, FL",
    price: "$273,000",
    beds: "2",
    baths: "3",
    area: "1001 sq ft",
    image: getPropertyImageById(299),
    badge: "Basic"
  },
  {
    id: 300,
    title: "Urban Studio Flat",
    location: "111 Urban St, Seattle, WA",
    price: "$1,222,000",
    beds: "1",
    baths: "1",
    area: "2348 sq ft",
    image: getPropertyImageById(300),
    badge: "Premium"
  },
  {
    id: 301,
    title: "Urban Studio Flat",
    location: "425 Urban St, Seattle, WA",
    price: "$152,000",
    beds: "5",
    baths: "3",
    area: "3440 sq ft",
    image: getPropertyImageById(301),
    badge: "Enhanced"
  },
  {
    id: 302,
    title: "Beachside Bungalow",
    location: "365 Beachside St, Denver, CO",
    price: "$615,000",
    beds: "2",
    baths: "4",
    area: "904 sq ft",
    image: getPropertyImageById(302),
    badge: "Basic"
  },
  {
    id: 303,
    title: "Modern Downtown Apartment",
    location: "210 Modern St, Seattle, WA",
    price: "$1,122,000",
    beds: "5",
    baths: "1",
    area: "3075 sq ft",
    image: getPropertyImageById(303),
    badge: "Premium"
  },
  {
    id: 304,
    title: "Waterfront Luxury Villa",
    location: "439 Waterfront St, New York, NY",
    price: "$928,000",
    beds: "3",
    baths: "3",
    area: "2254 sq ft",
    image: getPropertyImageById(304),
    badge: "Premium"
  },
  {
    id: 305,
    title: "Waterfront Luxury Villa",
    location: "240 Waterfront St, Miami, FL",
    price: "$445,000",
    beds: "4",
    baths: "3",
    area: "1548 sq ft",
    image: getPropertyImageById(305),
    badge: "Enhanced"
  },
  {
    id: 306,
    title: "Luxury Penthouse Suite",
    location: "230 Luxury St, Austin, TX",
    price: "$1,128,000",
    beds: "5",
    baths: "1",
    area: "2349 sq ft",
    image: getPropertyImageById(306),
    badge: "Basic"
  },
  {
    id: 307,
    title: "Waterfront Luxury Villa",
    location: "834 Waterfront St, Chicago, IL",
    price: "$589,000",
    beds: "4",
    baths: "1",
    area: "2662 sq ft",
    image: getPropertyImageById(307),
    badge: "Basic"
  },
  {
    id: 308,
    title: "Urban Studio Flat",
    location: "707 Urban St, Denver, CO",
    price: "$911,000",
    beds: "3",
    baths: "1",
    area: "3332 sq ft",
    image: getPropertyImageById(308),
    badge: "Premium"
  },
  {
    id: 309,
    title: "Beachside Bungalow",
    location: "525 Beachside St, Miami, FL",
    price: "$1,042,000",
    beds: "3",
    baths: "3",
    area: "2073 sq ft",
    image: getPropertyImageById(309),
    badge: "Enhanced"
  },
  {
    id: 310,
    title: "Urban Studio Flat",
    location: "943 Urban St, Boston, MA",
    price: "$1,098,000",
    beds: "1",
    baths: "1",
    area: "2246 sq ft",
    image: getPropertyImageById(310),
    badge: "Basic"
  },
  {
    id: 311,
    title: "Mountain View Cottage",
    location: "465 Mountain St, Miami, FL",
    price: "$501,000",
    beds: "2",
    baths: "4",
    area: "3177 sq ft",
    image: getPropertyImageById(311),
    badge: "Enhanced"
  },
  {
    id: 312,
    title: "Luxury Penthouse Suite",
    location: "874 Luxury St, Denver, CO",
    price: "$217,000",
    beds: "2",
    baths: "3",
    area: "2280 sq ft",
    image: getPropertyImageById(312),
    badge: "Enhanced"
  },
  {
    id: 313,
    title: "Urban Studio Flat",
    location: "718 Urban St, Chicago, IL",
    price: "$398,000",
    beds: "1",
    baths: "2",
    area: "3536 sq ft",
    image: getPropertyImageById(313),
    badge: "Enhanced"
  },
  {
    id: 314,
    title: "Waterfront Luxury Villa",
    location: "617 Waterfront St, Denver, CO",
    price: "$740,000",
    beds: "1",
    baths: "1",
    area: "2003 sq ft",
    image: getPropertyImageById(314),
    badge: "Basic"
  },
  {
    id: 315,
    title: "Urban Studio Flat",
    location: "674 Urban St, Boston, MA",
    price: "$865,000",
    beds: "2",
    baths: "2",
    area: "1473 sq ft",
    image: getPropertyImageById(315),
    badge: "Premium"
  },
  {
    id: 316,
    title: "Rustic Ranch House",
    location: "155 Rustic St, Seattle, WA",
    price: "$204,000",
    beds: "4",
    baths: "4",
    area: "2774 sq ft",
    image: getPropertyImageById(316),
    badge: "Basic"
  },
  {
    id: 317,
    title: "Luxury Penthouse Suite",
    location: "531 Luxury St, Denver, CO",
    price: "$378,000",
    beds: "3",
    baths: "4",
    area: "3263 sq ft",
    image: getPropertyImageById(317),
    badge: "Premium"
  },
  {
    id: 318,
    title: "Mountain View Cottage",
    location: "972 Mountain St, Miami, FL",
    price: "$632,000",
    beds: "5",
    baths: "4",
    area: "1716 sq ft",
    image: getPropertyImageById(318),
    badge: "Enhanced"
  },
  {
    id: 319,
    title: "Rustic Ranch House",
    location: "715 Rustic St, New York, NY",
    price: "$382,000",
    beds: "2",
    baths: "3",
    area: "2243 sq ft",
    image: getPropertyImageById(319),
    badge: "Premium"
  },
  {
    id: 320,
    title: "Waterfront Luxury Villa",
    location: "805 Waterfront St, Denver, CO",
    price: "$859,000",
    beds: "4",
    baths: "3",
    area: "1580 sq ft",
    image: getPropertyImageById(320),
    badge: "Premium"
  },
  {
    id: 321,
    title: "Mountain View Cottage",
    location: "750 Mountain St, Seattle, WA",
    price: "$1,076,000",
    beds: "1",
    baths: "4",
    area: "1214 sq ft",
    image: getPropertyImageById(321),
    badge: "Premium"
  },
  {
    id: 322,
    title: "Modern Downtown Apartment",
    location: "671 Modern St, Austin, TX",
    price: "$768,000",
    beds: "3",
    baths: "3",
    area: "1245 sq ft",
    image: getPropertyImageById(322),
    badge: "Basic"
  },
  {
    id: 323,
    title: "Suburban Family Home",
    location: "720 Suburban St, Chicago, IL",
    price: "$334,000",
    beds: "4",
    baths: "2",
    area: "1321 sq ft",
    image: getPropertyImageById(323),
    badge: "Enhanced"
  },
  {
    id: 324,
    title: "Mountain View Cottage",
    location: "358 Mountain St, Denver, CO",
    price: "$357,000",
    beds: "5",
    baths: "3",
    area: "1860 sq ft",
    image: getPropertyImageById(324),
    badge: "Enhanced"
  },
  {
    id: 325,
    title: "Luxury Penthouse Suite",
    location: "864 Luxury St, Austin, TX",
    price: "$402,000",
    beds: "1",
    baths: "1",
    area: "3276 sq ft",
    image: getPropertyImageById(325),
    badge: "Basic"
  },
  {
    id: 326,
    title: "Luxury Penthouse Suite",
    location: "141 Luxury St, Chicago, IL",
    price: "$659,000",
    beds: "4",
    baths: "1",
    area: "2133 sq ft",
    image: getPropertyImageById(326),
    badge: "Enhanced"
  },
  {
    id: 327,
    title: "Mountain View Cottage",
    location: "378 Mountain St, Chicago, IL",
    price: "$293,000",
    beds: "1",
    baths: "3",
    area: "2368 sq ft",
    image: getPropertyImageById(327),
    badge: "Enhanced"
  },
  {
    id: 328,
    title: "Waterfront Luxury Villa",
    location: "843 Waterfront St, Miami, FL",
    price: "$390,000",
    beds: "1",
    baths: "4",
    area: "3039 sq ft",
    image: getPropertyImageById(328),
    badge: "Basic"
  },
  {
    id: 329,
    title: "Luxury Penthouse Suite",
    location: "921 Luxury St, Denver, CO",
    price: "$359,000",
    beds: "5",
    baths: "4",
    area: "945 sq ft",
    image: getPropertyImageById(329),
    badge: "Premium"
  },
  {
    id: 330,
    title: "Modern Downtown Apartment",
    location: "193 Modern St, Seattle, WA",
    price: "$1,090,000",
    beds: "1",
    baths: "4",
    area: "2760 sq ft",
    image: getPropertyImageById(330),
    badge: "Enhanced"
  },
  {
    id: 331,
    title: "Modern Downtown Apartment",
    location: "249 Modern St, Austin, TX",
    price: "$962,000",
    beds: "3",
    baths: "4",
    area: "920 sq ft",
    image: getPropertyImageById(331),
    badge: "Enhanced"
  },
  {
    id: 332,
    title: "Rustic Ranch House",
    location: "173 Rustic St, Austin, TX",
    price: "$643,000",
    beds: "2",
    baths: "3",
    area: "1949 sq ft",
    image: getPropertyImageById(332),
    badge: "Basic"
  },
  {
    id: 333,
    title: "Rustic Ranch House",
    location: "818 Rustic St, Denver, CO",
    price: "$363,000",
    beds: "3",
    baths: "4",
    area: "1077 sq ft",
    image: getPropertyImageById(333),
    badge: "Basic"
  },
  {
    id: 334,
    title: "Suburban Family Home",
    location: "334 Suburban St, Seattle, WA",
    price: "$1,201,000",
    beds: "2",
    baths: "1",
    area: "2463 sq ft",
    image: getPropertyImageById(334),
    badge: "Enhanced"
  },
  {
    id: 335,
    title: "Beachside Bungalow",
    location: "461 Beachside St, New York, NY",
    price: "$1,201,000",
    beds: "3",
    baths: "1",
    area: "3490 sq ft",
    image: getPropertyImageById(335),
    badge: "Premium"
  },
  {
    id: 336,
    title: "Mountain View Cottage",
    location: "466 Mountain St, Denver, CO",
    price: "$1,215,000",
    beds: "2",
    baths: "1",
    area: "2086 sq ft",
    image: getPropertyImageById(336),
    badge: "Enhanced"
  },
  {
    id: 337,
    title: "Suburban Family Home",
    location: "863 Suburban St, Miami, FL",
    price: "$667,000",
    beds: "4",
    baths: "1",
    area: "2011 sq ft",
    image: getPropertyImageById(337),
    badge: "Basic"
  },
  {
    id: 338,
    title: "Suburban Family Home",
    location: "600 Suburban St, Seattle, WA",
    price: "$581,000",
    beds: "5",
    baths: "3",
    area: "1255 sq ft",
    image: getPropertyImageById(338),
    badge: "Premium"
  },
  {
    id: 339,
    title: "Waterfront Luxury Villa",
    location: "472 Waterfront St, Los Angeles, CA",
    price: "$684,000",
    beds: "1",
    baths: "2",
    area: "2540 sq ft",
    image: getPropertyImageById(339),
    badge: "Premium"
  },
  {
    id: 340,
    title: "Luxury Penthouse Suite",
    location: "587 Luxury St, Chicago, IL",
    price: "$438,000",
    beds: "1",
    baths: "1",
    area: "2330 sq ft",
    image: getPropertyImageById(340),
    badge: "Premium"
  },
  {
    id: 341,
    title: "Urban Studio Flat",
    location: "507 Urban St, Boston, MA",
    price: "$915,000",
    beds: "3",
    baths: "1",
    area: "2229 sq ft",
    image: getPropertyImageById(341),
    badge: "Basic"
  },
  {
    id: 342,
    title: "Luxury Penthouse Suite",
    location: "414 Luxury St, Los Angeles, CA",
    price: "$249,000",
    beds: "5",
    baths: "3",
    area: "3751 sq ft",
    image: getPropertyImageById(342),
    badge: "Enhanced"
  },
  {
    id: 343,
    title: "Urban Studio Flat",
    location: "953 Urban St, Denver, CO",
    price: "$654,000",
    beds: "5",
    baths: "2",
    area: "3857 sq ft",
    image: getPropertyImageById(343),
    badge: "Enhanced"
  },
  {
    id: 344,
    title: "Luxury Penthouse Suite",
    location: "416 Luxury St, Chicago, IL",
    price: "$1,223,000",
    beds: "5",
    baths: "1",
    area: "2405 sq ft",
    image: getPropertyImageById(344),
    badge: "Basic"
  },
  {
    id: 345,
    title: "Urban Studio Flat",
    location: "596 Urban St, Boston, MA",
    price: "$403,000",
    beds: "4",
    baths: "4",
    area: "839 sq ft",
    image: getPropertyImageById(345),
    badge: "Premium"
  },
  {
    id: 346,
    title: "Modern Downtown Apartment",
    location: "401 Modern St, Austin, TX",
    price: "$613,000",
    beds: "2",
    baths: "2",
    area: "1030 sq ft",
    image: getPropertyImageById(346),
    badge: "Enhanced"
  },
  {
    id: 347,
    title: "Urban Studio Flat",
    location: "537 Urban St, Miami, FL",
    price: "$500,000",
    beds: "1",
    baths: "4",
    area: "2679 sq ft",
    image: getPropertyImageById(347),
    badge: "Basic"
  },
  {
    id: 348,
    title: "Luxury Penthouse Suite",
    location: "488 Luxury St, Denver, CO",
    price: "$394,000",
    beds: "1",
    baths: "1",
    area: "2642 sq ft",
    image: getPropertyImageById(348),
    badge: "Basic"
  },
  {
    id: 349,
    title: "Waterfront Luxury Villa",
    location: "267 Waterfront St, Miami, FL",
    price: "$379,000",
    beds: "4",
    baths: "2",
    area: "2184 sq ft",
    image: getPropertyImageById(349),
    badge: "Premium"
  },
  {
    id: 350,
    title: "Mountain View Cottage",
    location: "373 Mountain St, Chicago, IL",
    price: "$1,018,000",
    beds: "5",
    baths: "4",
    area: "2345 sq ft",
    image: getPropertyImageById(350),
    badge: "Basic"
  },
  {
    id: 351,
    title: "Urban Studio Flat",
    location: "346 Urban St, Chicago, IL",
    price: "$254,000",
    beds: "1",
    baths: "2",
    area: "2034 sq ft",
    image: getPropertyImageById(351),
    badge: "Enhanced"
  },
  {
    id: 352,
    title: "Beachside Bungalow",
    location: "566 Beachside St, Los Angeles, CA",
    price: "$790,000",
    beds: "2",
    baths: "3",
    area: "3728 sq ft",
    image: getPropertyImageById(352),
    badge: "Enhanced"
  },
  {
    id: 353,
    title: "Modern Downtown Apartment",
    location: "421 Modern St, Seattle, WA",
    price: "$619,000",
    beds: "3",
    baths: "2",
    area: "2653 sq ft",
    image: getPropertyImageById(353),
    badge: "Basic"
  },
  {
    id: 354,
    title: "Luxury Penthouse Suite",
    location: "129 Luxury St, Boston, MA",
    price: "$273,000",
    beds: "1",
    baths: "2",
    area: "2908 sq ft",
    image: getPropertyImageById(354),
    badge: "Enhanced"
  },
  {
    id: 355,
    title: "Suburban Family Home",
    location: "736 Suburban St, New York, NY",
    price: "$568,000",
    beds: "1",
    baths: "2",
    area: "1334 sq ft",
    image: getPropertyImageById(355),
    badge: "Premium"
  },
  {
    id: 356,
    title: "Beachside Bungalow",
    location: "402 Beachside St, Miami, FL",
    price: "$662,000",
    beds: "2",
    baths: "3",
    area: "2773 sq ft",
    image: getPropertyImageById(356),
    badge: "Basic"
  },
  {
    id: 357,
    title: "Urban Studio Flat",
    location: "410 Urban St, Miami, FL",
    price: "$939,000",
    beds: "3",
    baths: "2",
    area: "2466 sq ft",
    image: getPropertyImageById(357),
    badge: "Premium"
  },
  {
    id: 358,
    title: "Urban Studio Flat",
    location: "700 Urban St, Miami, FL",
    price: "$898,000",
    beds: "1",
    baths: "1",
    area: "1896 sq ft",
    image: getPropertyImageById(358),
    badge: "Enhanced"
  },
  {
    id: 359,
    title: "Urban Studio Flat",
    location: "923 Urban St, Seattle, WA",
    price: "$980,000",
    beds: "2",
    baths: "2",
    area: "1088 sq ft",
    image: getPropertyImageById(359),
    badge: "Enhanced"
  },
  {
    id: 360,
    title: "Beachside Bungalow",
    location: "174 Beachside St, New York, NY",
    price: "$694,000",
    beds: "2",
    baths: "4",
    area: "3134 sq ft",
    image: getPropertyImageById(360),
    badge: "Enhanced"
  },
  {
    id: 361,
    title: "Luxury Penthouse Suite",
    location: "125 Luxury St, Chicago, IL",
    price: "$234,000",
    beds: "5",
    baths: "1",
    area: "1798 sq ft",
    image: getPropertyImageById(361),
    badge: "Enhanced"
  },
  {
    id: 362,
    title: "Rustic Ranch House",
    location: "825 Rustic St, Miami, FL",
    price: "$709,000",
    beds: "3",
    baths: "3",
    area: "3266 sq ft",
    image: getPropertyImageById(362),
    badge: "Basic"
  },
  {
    id: 363,
    title: "Suburban Family Home",
    location: "273 Suburban St, Miami, FL",
    price: "$1,101,000",
    beds: "3",
    baths: "3",
    area: "3542 sq ft",
    image: getPropertyImageById(363),
    badge: "Basic"
  },
  {
    id: 364,
    title: "Luxury Penthouse Suite",
    location: "945 Luxury St, New York, NY",
    price: "$231,000",
    beds: "1",
    baths: "4",
    area: "1922 sq ft",
    image: getPropertyImageById(364),
    badge: "Basic"
  },
  {
    id: 365,
    title: "Urban Studio Flat",
    location: "792 Urban St, Denver, CO",
    price: "$1,175,000",
    beds: "5",
    baths: "3",
    area: "2856 sq ft",
    image: getPropertyImageById(365),
    badge: "Basic"
  },
  {
    id: 366,
    title: "Waterfront Luxury Villa",
    location: "355 Waterfront St, Miami, FL",
    price: "$851,000",
    beds: "3",
    baths: "2",
    area: "2816 sq ft",
    image: getPropertyImageById(366),
    badge: "Premium"
  },
  {
    id: 367,
    title: "Mountain View Cottage",
    location: "515 Mountain St, Chicago, IL",
    price: "$1,120,000",
    beds: "2",
    baths: "3",
    area: "3315 sq ft",
    image: getPropertyImageById(367),
    badge: "Premium"
  },
  {
    id: 368,
    title: "Modern Downtown Apartment",
    location: "591 Modern St, Chicago, IL",
    price: "$829,000",
    beds: "4",
    baths: "3",
    area: "1675 sq ft",
    image: getPropertyImageById(368),
    badge: "Premium"
  },
  {
    id: 369,
    title: "Urban Studio Flat",
    location: "551 Urban St, Seattle, WA",
    price: "$254,000",
    beds: "2",
    baths: "1",
    area: "1185 sq ft",
    image: getPropertyImageById(369),
    badge: "Premium"
  },
  {
    id: 370,
    title: "Suburban Family Home",
    location: "206 Suburban St, New York, NY",
    price: "$1,138,000",
    beds: "5",
    baths: "4",
    area: "3226 sq ft",
    image: getPropertyImageById(370),
    badge: "Enhanced"
  },
  {
    id: 371,
    title: "Luxury Penthouse Suite",
    location: "515 Luxury St, Austin, TX",
    price: "$266,000",
    beds: "4",
    baths: "2",
    area: "1485 sq ft",
    image: getPropertyImageById(371),
    badge: "Basic"
  },
  {
    id: 372,
    title: "Rustic Ranch House",
    location: "332 Rustic St, Denver, CO",
    price: "$911,000",
    beds: "1",
    baths: "3",
    area: "1127 sq ft",
    image: getPropertyImageById(372),
    badge: "Premium"
  },
  {
    id: 373,
    title: "Waterfront Luxury Villa",
    location: "146 Waterfront St, Seattle, WA",
    price: "$298,000",
    beds: "3",
    baths: "2",
    area: "1578 sq ft",
    image: getPropertyImageById(373),
    badge: "Premium"
  },
  {
    id: 374,
    title: "Luxury Penthouse Suite",
    location: "919 Luxury St, Miami, FL",
    price: "$306,000",
    beds: "1",
    baths: "3",
    area: "920 sq ft",
    image: getPropertyImageById(374),
    badge: "Premium"
  },
  {
    id: 375,
    title: "Luxury Penthouse Suite",
    location: "199 Luxury St, Chicago, IL",
    price: "$715,000",
    beds: "1",
    baths: "1",
    area: "3843 sq ft",
    image: getPropertyImageById(375),
    badge: "Enhanced"
  },
  {
    id: 376,
    title: "Suburban Family Home",
    location: "373 Suburban St, New York, NY",
    price: "$307,000",
    beds: "1",
    baths: "2",
    area: "3639 sq ft",
    image: getPropertyImageById(376),
    badge: "Premium"
  },
  {
    id: 377,
    title: "Mountain View Cottage",
    location: "618 Mountain St, Austin, TX",
    price: "$312,000",
    beds: "3",
    baths: "3",
    area: "3949 sq ft",
    image: getPropertyImageById(377),
    badge: "Premium"
  },
  {
    id: 378,
    title: "Urban Studio Flat",
    location: "376 Urban St, Austin, TX",
    price: "$664,000",
    beds: "3",
    baths: "1",
    area: "3386 sq ft",
    image: getPropertyImageById(378),
    badge: "Premium"
  },
  {
    id: 379,
    title: "Luxury Penthouse Suite",
    location: "187 Luxury St, Seattle, WA",
    price: "$658,000",
    beds: "4",
    baths: "4",
    area: "1531 sq ft",
    image: getPropertyImageById(379),
    badge: "Premium"
  },
  {
    id: 380,
    title: "Beachside Bungalow",
    location: "332 Beachside St, Seattle, WA",
    price: "$496,000",
    beds: "4",
    baths: "1",
    area: "1400 sq ft",
    image: getPropertyImageById(380),
    badge: "Enhanced"
  },
  {
    id: 381,
    title: "Rustic Ranch House",
    location: "414 Rustic St, Denver, CO",
    price: "$980,000",
    beds: "4",
    baths: "4",
    area: "1400 sq ft",
    image: getPropertyImageById(381),
    badge: "Basic"
  },
  {
    id: 382,
    title: "Luxury Penthouse Suite",
    location: "686 Luxury St, Seattle, WA",
    price: "$1,204,000",
    beds: "3",
    baths: "1",
    area: "2394 sq ft",
    image: getPropertyImageById(382),
    badge: "Basic"
  },
  {
    id: 383,
    title: "Waterfront Luxury Villa",
    location: "975 Waterfront St, Denver, CO",
    price: "$754,000",
    beds: "1",
    baths: "2",
    area: "3273 sq ft",
    image: getPropertyImageById(383),
    badge: "Enhanced"
  },
  {
    id: 384,
    title: "Luxury Penthouse Suite",
    location: "288 Luxury St, Seattle, WA",
    price: "$1,110,000",
    beds: "2",
    baths: "3",
    area: "1405 sq ft",
    image: getPropertyImageById(384),
    badge: "Basic"
  },
  {
    id: 385,
    title: "Mountain View Cottage",
    location: "216 Mountain St, New York, NY",
    price: "$265,000",
    beds: "2",
    baths: "3",
    area: "1578 sq ft",
    image: getPropertyImageById(385),
    badge: "Premium"
  },
  {
    id: 386,
    title: "Luxury Penthouse Suite",
    location: "515 Luxury St, Los Angeles, CA",
    price: "$1,105,000",
    beds: "1",
    baths: "2",
    area: "1615 sq ft",
    image: getPropertyImageById(386),
    badge: "Enhanced"
  },
  {
    id: 387,
    title: "Suburban Family Home",
    location: "757 Suburban St, Denver, CO",
    price: "$616,000",
    beds: "4",
    baths: "1",
    area: "963 sq ft",
    image: getPropertyImageById(387),
    badge: "Enhanced"
  },
  {
    id: 388,
    title: "Rustic Ranch House",
    location: "406 Rustic St, Austin, TX",
    price: "$969,000",
    beds: "1",
    baths: "2",
    area: "1757 sq ft",
    image: getPropertyImageById(388),
    badge: "Enhanced"
  },
  {
    id: 389,
    title: "Urban Studio Flat",
    location: "920 Urban St, Denver, CO",
    price: "$1,006,000",
    beds: "1",
    baths: "1",
    area: "1092 sq ft",
    image: getPropertyImageById(389),
    badge: "Basic"
  },
  {
    id: 390,
    title: "Urban Studio Flat",
    location: "113 Urban St, Austin, TX",
    price: "$827,000",
    beds: "3",
    baths: "4",
    area: "2803 sq ft",
    image: getPropertyImageById(390),
    badge: "Enhanced"
  },
  {
    id: 391,
    title: "Modern Downtown Apartment",
    location: "107 Modern St, Los Angeles, CA",
    price: "$1,218,000",
    beds: "2",
    baths: "1",
    area: "1021 sq ft",
    image: getPropertyImageById(391),
    badge: "Enhanced"
  },
  {
    id: 392,
    title: "Rustic Ranch House",
    location: "505 Rustic St, Boston, MA",
    price: "$366,000",
    beds: "3",
    baths: "1",
    area: "958 sq ft",
    image: getPropertyImageById(392),
    badge: "Enhanced"
  },
  {
    id: 393,
    title: "Waterfront Luxury Villa",
    location: "186 Waterfront St, Chicago, IL",
    price: "$533,000",
    beds: "2",
    baths: "2",
    area: "3936 sq ft",
    image: getPropertyImageById(393),
    badge: "Enhanced"
  },
  {
    id: 394,
    title: "Modern Downtown Apartment",
    location: "704 Modern St, Austin, TX",
    price: "$1,061,000",
    beds: "1",
    baths: "4",
    area: "3124 sq ft",
    image: getPropertyImageById(394),
    badge: "Basic"
  },
  {
    id: 395,
    title: "Beachside Bungalow",
    location: "552 Beachside St, Chicago, IL",
    price: "$1,049,000",
    beds: "3",
    baths: "1",
    area: "2588 sq ft",
    image: getPropertyImageById(395),
    badge: "Enhanced"
  },
  {
    id: 396,
    title: "Modern Downtown Apartment",
    location: "944 Modern St, New York, NY",
    price: "$363,000",
    beds: "1",
    baths: "2",
    area: "2635 sq ft",
    image: getPropertyImageById(396),
    badge: "Premium"
  },
  {
    id: 397,
    title: "Beachside Bungalow",
    location: "295 Beachside St, Seattle, WA",
    price: "$265,000",
    beds: "5",
    baths: "4",
    area: "2053 sq ft",
    image: getPropertyImageById(397),
    badge: "Premium"
  },
  {
    id: 398,
    title: "Urban Studio Flat",
    location: "233 Urban St, Boston, MA",
    price: "$875,000",
    beds: "3",
    baths: "3",
    area: "1649 sq ft",
    image: getPropertyImageById(398),
    badge: "Enhanced"
  },
  {
    id: 399,
    title: "Beachside Bungalow",
    location: "494 Beachside St, Boston, MA",
    price: "$782,000",
    beds: "1",
    baths: "1",
    area: "2306 sq ft",
    image: getPropertyImageById(399),
    badge: "Basic"
  },
  {
    id: 400,
    title: "Rustic Ranch House",
    location: "611 Rustic St, Denver, CO",
    price: "$444,000",
    beds: "5",
    baths: "2",
    area: "2690 sq ft",
    image: getPropertyImageById(400),
    badge: "Basic"
  },
  {
    id: 401,
    title: "Waterfront Luxury Villa",
    location: "853 Waterfront St, Boston, MA",
    price: "$707,000",
    beds: "3",
    baths: "3",
    area: "2756 sq ft",
    image: getPropertyImageById(401),
    badge: "Basic"
  },
  {
    id: 402,
    title: "Mountain View Cottage",
    location: "693 Mountain St, Los Angeles, CA",
    price: "$325,000",
    beds: "5",
    baths: "1",
    area: "1601 sq ft",
    image: getPropertyImageById(402),
    badge: "Premium"
  },
  {
    id: 403,
    title: "Rustic Ranch House",
    location: "616 Rustic St, New York, NY",
    price: "$924,000",
    beds: "2",
    baths: "3",
    area: "1429 sq ft",
    image: getPropertyImageById(403),
    badge: "Premium"
  },
  {
    id: 404,
    title: "Waterfront Luxury Villa",
    location: "657 Waterfront St, New York, NY",
    price: "$946,000",
    beds: "4",
    baths: "4",
    area: "2339 sq ft",
    image: getPropertyImageById(404),
    badge: "Enhanced"
  },
  {
    id: 405,
    title: "Waterfront Luxury Villa",
    location: "728 Waterfront St, Los Angeles, CA",
    price: "$591,000",
    beds: "1",
    baths: "1",
    area: "1589 sq ft",
    image: getPropertyImageById(405),
    badge: "Enhanced"
  },
  {
    id: 406,
    title: "Luxury Penthouse Suite",
    location: "547 Luxury St, Los Angeles, CA",
    price: "$268,000",
    beds: "4",
    baths: "3",
    area: "2302 sq ft",
    image: getPropertyImageById(406),
    badge: "Enhanced"
  },
  {
    id: 407,
    title: "Mountain View Cottage",
    location: "524 Mountain St, Miami, FL",
    price: "$348,000",
    beds: "5",
    baths: "4",
    area: "1894 sq ft",
    image: getPropertyImageById(407),
    badge: "Basic"
  },
  {
    id: 408,
    title: "Waterfront Luxury Villa",
    location: "760 Waterfront St, Boston, MA",
    price: "$623,000",
    beds: "5",
    baths: "3",
    area: "1803 sq ft",
    image: getPropertyImageById(408),
    badge: "Basic"
  },
  {
    id: 409,
    title: "Rustic Ranch House",
    location: "715 Rustic St, Los Angeles, CA",
    price: "$585,000",
    beds: "4",
    baths: "1",
    area: "3406 sq ft",
    image: getPropertyImageById(409),
    badge: "Enhanced"
  },
  {
    id: 410,
    title: "Mountain View Cottage",
    location: "569 Mountain St, Boston, MA",
    price: "$1,158,000",
    beds: "4",
    baths: "1",
    area: "2219 sq ft",
    image: getPropertyImageById(410),
    badge: "Basic"
  },
  {
    id: 411,
    title: "Luxury Penthouse Suite",
    location: "460 Luxury St, Boston, MA",
    price: "$498,000",
    beds: "2",
    baths: "2",
    area: "3235 sq ft",
    image: getPropertyImageById(411),
    badge: "Premium"
  },
  {
    id: 412,
    title: "Luxury Penthouse Suite",
    location: "578 Luxury St, Boston, MA",
    price: "$418,000",
    beds: "2",
    baths: "2",
    area: "1205 sq ft",
    image: getPropertyImageById(412),
    badge: "Basic"
  },
  {
    id: 413,
    title: "Beachside Bungalow",
    location: "824 Beachside St, Miami, FL",
    price: "$742,000",
    beds: "5",
    baths: "3",
    area: "1742 sq ft",
    image: getPropertyImageById(413),
    badge: "Enhanced"
  },
  {
    id: 414,
    title: "Urban Studio Flat",
    location: "493 Urban St, Austin, TX",
    price: "$807,000",
    beds: "4",
    baths: "2",
    area: "3783 sq ft",
    image: getPropertyImageById(414),
    badge: "Enhanced"
  },
  {
    id: 415,
    title: "Urban Studio Flat",
    location: "136 Urban St, Miami, FL",
    price: "$804,000",
    beds: "5",
    baths: "2",
    area: "2158 sq ft",
    image: getPropertyImageById(415),
    badge: "Enhanced"
  },
  {
    id: 416,
    title: "Modern Downtown Apartment",
    location: "377 Modern St, Austin, TX",
    price: "$1,006,000",
    beds: "3",
    baths: "1",
    area: "3061 sq ft",
    image: getPropertyImageById(416),
    badge: "Basic"
  },
  {
    id: 417,
    title: "Modern Downtown Apartment",
    location: "649 Modern St, New York, NY",
    price: "$1,011,000",
    beds: "3",
    baths: "4",
    area: "1058 sq ft",
    image: getPropertyImageById(417),
    badge: "Enhanced"
  },
  {
    id: 418,
    title: "Rustic Ranch House",
    location: "929 Rustic St, Miami, FL",
    price: "$526,000",
    beds: "4",
    baths: "1",
    area: "1671 sq ft",
    image: getPropertyImageById(418),
    badge: "Basic"
  },
  {
    id: 419,
    title: "Waterfront Luxury Villa",
    location: "193 Waterfront St, Austin, TX",
    price: "$437,000",
    beds: "5",
    baths: "3",
    area: "2082 sq ft",
    image: getPropertyImageById(419),
    badge: "Basic"
  },
  {
    id: 420,
    title: "Modern Downtown Apartment",
    location: "840 Modern St, Austin, TX",
    price: "$946,000",
    beds: "4",
    baths: "4",
    area: "3761 sq ft",
    image: getPropertyImageById(420),
    badge: "Enhanced"
  },
  {
    id: 421,
    title: "Modern Downtown Apartment",
    location: "295 Modern St, Los Angeles, CA",
    price: "$283,000",
    beds: "4",
    baths: "2",
    area: "2195 sq ft",
    image: getPropertyImageById(421),
    badge: "Basic"
  },
  {
    id: 422,
    title: "Luxury Penthouse Suite",
    location: "696 Luxury St, Seattle, WA",
    price: "$158,000",
    beds: "2",
    baths: "2",
    area: "2306 sq ft",
    image: getPropertyImageById(422),
    badge: "Enhanced"
  },
  {
    id: 423,
    title: "Rustic Ranch House",
    location: "365 Rustic St, New York, NY",
    price: "$227,000",
    beds: "2",
    baths: "1",
    area: "2654 sq ft",
    image: getPropertyImageById(423),
    badge: "Basic"
  },
  {
    id: 424,
    title: "Mountain View Cottage",
    location: "368 Mountain St, Boston, MA",
    price: "$576,000",
    beds: "1",
    baths: "3",
    area: "3113 sq ft",
    image: getPropertyImageById(424),
    badge: "Basic"
  },
  {
    id: 425,
    title: "Rustic Ranch House",
    location: "847 Rustic St, New York, NY",
    price: "$525,000",
    beds: "3",
    baths: "2",
    area: "2858 sq ft",
    image: getPropertyImageById(425),
    badge: "Basic"
  },
  {
    id: 426,
    title: "Modern Downtown Apartment",
    location: "481 Modern St, New York, NY",
    price: "$714,000",
    beds: "2",
    baths: "2",
    area: "3828 sq ft",
    image: getPropertyImageById(426),
    badge: "Premium"
  },
  {
    id: 427,
    title: "Modern Downtown Apartment",
    location: "191 Modern St, Chicago, IL",
    price: "$1,018,000",
    beds: "1",
    baths: "2",
    area: "3164 sq ft",
    image: getPropertyImageById(427),
    badge: "Premium"
  },
  {
    id: 428,
    title: "Urban Studio Flat",
    location: "413 Urban St, Miami, FL",
    price: "$1,200,000",
    beds: "4",
    baths: "3",
    area: "3770 sq ft",
    image: getPropertyImageById(428),
    badge: "Enhanced"
  },
  {
    id: 429,
    title: "Beachside Bungalow",
    location: "747 Beachside St, Chicago, IL",
    price: "$517,000",
    beds: "5",
    baths: "3",
    area: "2549 sq ft",
    image: getPropertyImageById(429),
    badge: "Premium"
  },
  {
    id: 430,
    title: "Urban Studio Flat",
    location: "893 Urban St, Denver, CO",
    price: "$441,000",
    beds: "1",
    baths: "1",
    area: "3673 sq ft",
    image: getPropertyImageById(430),
    badge: "Premium"
  },
  {
    id: 431,
    title: "Suburban Family Home",
    location: "769 Suburban St, New York, NY",
    price: "$1,247,000",
    beds: "1",
    baths: "2",
    area: "3226 sq ft",
    image: getPropertyImageById(431),
    badge: "Enhanced"
  },
  {
    id: 432,
    title: "Modern Downtown Apartment",
    location: "245 Modern St, Seattle, WA",
    price: "$952,000",
    beds: "2",
    baths: "2",
    area: "3222 sq ft",
    image: getPropertyImageById(432),
    badge: "Premium"
  },
  {
    id: 433,
    title: "Rustic Ranch House",
    location: "143 Rustic St, New York, NY",
    price: "$979,000",
    beds: "2",
    baths: "2",
    area: "3600 sq ft",
    image: getPropertyImageById(433),
    badge: "Premium"
  },
  {
    id: 434,
    title: "Luxury Penthouse Suite",
    location: "234 Luxury St, Miami, FL",
    price: "$1,153,000",
    beds: "3",
    baths: "1",
    area: "1299 sq ft",
    image: getPropertyImageById(434),
    badge: "Enhanced"
  },
  {
    id: 435,
    title: "Luxury Penthouse Suite",
    location: "614 Luxury St, Los Angeles, CA",
    price: "$676,000",
    beds: "3",
    baths: "2",
    area: "3620 sq ft",
    image: getPropertyImageById(435),
    badge: "Premium"
  },
  {
    id: 436,
    title: "Mountain View Cottage",
    location: "152 Mountain St, Seattle, WA",
    price: "$635,000",
    beds: "2",
    baths: "2",
    area: "1563 sq ft",
    image: getPropertyImageById(436),
    badge: "Premium"
  },
  {
    id: 437,
    title: "Waterfront Luxury Villa",
    location: "121 Waterfront St, Austin, TX",
    price: "$693,000",
    beds: "1",
    baths: "2",
    area: "3719 sq ft",
    image: getPropertyImageById(437),
    badge: "Basic"
  },
  {
    id: 438,
    title: "Mountain View Cottage",
    location: "613 Mountain St, Boston, MA",
    price: "$545,000",
    beds: "5",
    baths: "3",
    area: "2303 sq ft",
    image: getPropertyImageById(438),
    badge: "Enhanced"
  },
  {
    id: 439,
    title: "Rustic Ranch House",
    location: "586 Rustic St, Chicago, IL",
    price: "$525,000",
    beds: "5",
    baths: "3",
    area: "3444 sq ft",
    image: getPropertyImageById(439),
    badge: "Basic"
  },
  {
    id: 440,
    title: "Waterfront Luxury Villa",
    location: "132 Waterfront St, New York, NY",
    price: "$1,244,000",
    beds: "3",
    baths: "2",
    area: "2251 sq ft",
    image: getPropertyImageById(440),
    badge: "Premium"
  },
  {
    id: 441,
    title: "Rustic Ranch House",
    location: "154 Rustic St, Austin, TX",
    price: "$987,000",
    beds: "1",
    baths: "3",
    area: "2379 sq ft",
    image: getPropertyImageById(441),
    badge: "Enhanced"
  },
  {
    id: 442,
    title: "Urban Studio Flat",
    location: "284 Urban St, Seattle, WA",
    price: "$992,000",
    beds: "2",
    baths: "3",
    area: "3926 sq ft",
    image: getPropertyImageById(442),
    badge: "Premium"
  },
  {
    id: 443,
    title: "Luxury Penthouse Suite",
    location: "910 Luxury St, Boston, MA",
    price: "$1,132,000",
    beds: "5",
    baths: "1",
    area: "3180 sq ft",
    image: getPropertyImageById(443),
    badge: "Basic"
  },
  {
    id: 444,
    title: "Beachside Bungalow",
    location: "466 Beachside St, Boston, MA",
    price: "$934,000",
    beds: "4",
    baths: "1",
    area: "3982 sq ft",
    image: getPropertyImageById(444),
    badge: "Basic"
  },
  {
    id: 445,
    title: "Urban Studio Flat",
    location: "835 Urban St, Boston, MA",
    price: "$159,000",
    beds: "1",
    baths: "4",
    area: "1725 sq ft",
    image: getPropertyImageById(445),
    badge: "Premium"
  },
  {
    id: 446,
    title: "Rustic Ranch House",
    location: "265 Rustic St, New York, NY",
    price: "$417,000",
    beds: "1",
    baths: "3",
    area: "2681 sq ft",
    image: getPropertyImageById(446),
    badge: "Basic"
  },
  {
    id: 447,
    title: "Suburban Family Home",
    location: "751 Suburban St, Denver, CO",
    price: "$564,000",
    beds: "1",
    baths: "4",
    area: "1517 sq ft",
    image: getPropertyImageById(447),
    badge: "Basic"
  },
  {
    id: 448,
    title: "Suburban Family Home",
    location: "226 Suburban St, Los Angeles, CA",
    price: "$941,000",
    beds: "2",
    baths: "1",
    area: "1863 sq ft",
    image: getPropertyImageById(448),
    badge: "Premium"
  },
  {
    id: 449,
    title: "Mountain View Cottage",
    location: "514 Mountain St, Denver, CO",
    price: "$166,000",
    beds: "4",
    baths: "2",
    area: "2043 sq ft",
    image: getPropertyImageById(449),
    badge: "Enhanced"
  },
  {
    id: 450,
    title: "Rustic Ranch House",
    location: "260 Rustic St, Miami, FL",
    price: "$964,000",
    beds: "2",
    baths: "1",
    area: "3915 sq ft",
    image: getPropertyImageById(450),
    badge: "Basic"
  },
  {
    id: 451,
    title: "Suburban Family Home",
    location: "299 Suburban St, Los Angeles, CA",
    price: "$1,142,000",
    beds: "1",
    baths: "2",
    area: "1659 sq ft",
    image: getPropertyImageById(451),
    badge: "Basic"
  },
  {
    id: 452,
    title: "Luxury Penthouse Suite",
    location: "372 Luxury St, Austin, TX",
    price: "$455,000",
    beds: "4",
    baths: "2",
    area: "1140 sq ft",
    image: getPropertyImageById(452),
    badge: "Basic"
  },
  {
    id: 453,
    title: "Luxury Penthouse Suite",
    location: "317 Luxury St, New York, NY",
    price: "$1,201,000",
    beds: "3",
    baths: "1",
    area: "1762 sq ft",
    image: getPropertyImageById(453),
    badge: "Premium"
  },
  {
    id: 454,
    title: "Modern Downtown Apartment",
    location: "572 Modern St, Seattle, WA",
    price: "$896,000",
    beds: "2",
    baths: "2",
    area: "1047 sq ft",
    image: getPropertyImageById(454),
    badge: "Premium"
  },
  {
    id: 455,
    title: "Beachside Bungalow",
    location: "986 Beachside St, Seattle, WA",
    price: "$772,000",
    beds: "3",
    baths: "3",
    area: "1512 sq ft",
    image: getPropertyImageById(455),
    badge: "Basic"
  },
  {
    id: 456,
    title: "Urban Studio Flat",
    location: "346 Urban St, Seattle, WA",
    price: "$335,000",
    beds: "2",
    baths: "1",
    area: "3544 sq ft",
    image: getPropertyImageById(456),
    badge: "Basic"
  },
  {
    id: 457,
    title: "Luxury Penthouse Suite",
    location: "564 Luxury St, New York, NY",
    price: "$505,000",
    beds: "3",
    baths: "3",
    area: "1528 sq ft",
    image: getPropertyImageById(457),
    badge: "Enhanced"
  },
  {
    id: 458,
    title: "Beachside Bungalow",
    location: "784 Beachside St, New York, NY",
    price: "$489,000",
    beds: "4",
    baths: "3",
    area: "3973 sq ft",
    image: getPropertyImageById(458),
    badge: "Basic"
  },
  {
    id: 459,
    title: "Suburban Family Home",
    location: "836 Suburban St, Miami, FL",
    price: "$313,000",
    beds: "2",
    baths: "4",
    area: "2545 sq ft",
    image: getPropertyImageById(459),
    badge: "Premium"
  },
  {
    id: 460,
    title: "Urban Studio Flat",
    location: "449 Urban St, Los Angeles, CA",
    price: "$1,213,000",
    beds: "2",
    baths: "3",
    area: "2718 sq ft",
    image: getPropertyImageById(460),
    badge: "Premium"
  },
  {
    id: 461,
    title: "Waterfront Luxury Villa",
    location: "459 Waterfront St, Denver, CO",
    price: "$375,000",
    beds: "4",
    baths: "3",
    area: "3087 sq ft",
    image: getPropertyImageById(461),
    badge: "Enhanced"
  },
  {
    id: 462,
    title: "Suburban Family Home",
    location: "647 Suburban St, Chicago, IL",
    price: "$1,090,000",
    beds: "5",
    baths: "1",
    area: "1936 sq ft",
    image: getPropertyImageById(462),
    badge: "Premium"
  },
  {
    id: 463,
    title: "Luxury Penthouse Suite",
    location: "429 Luxury St, Chicago, IL",
    price: "$512,000",
    beds: "4",
    baths: "3",
    area: "801 sq ft",
    image: getPropertyImageById(463),
    badge: "Premium"
  },
  {
    id: 464,
    title: "Luxury Penthouse Suite",
    location: "370 Luxury St, Boston, MA",
    price: "$793,000",
    beds: "5",
    baths: "4",
    area: "1071 sq ft",
    image: getPropertyImageById(464),
    badge: "Premium"
  },
  {
    id: 465,
    title: "Luxury Penthouse Suite",
    location: "373 Luxury St, Denver, CO",
    price: "$943,000",
    beds: "4",
    baths: "3",
    area: "1188 sq ft",
    image: getPropertyImageById(465),
    badge: "Enhanced"
  },
  {
    id: 466,
    title: "Waterfront Luxury Villa",
    location: "400 Waterfront St, Boston, MA",
    price: "$1,023,000",
    beds: "1",
    baths: "2",
    area: "3060 sq ft",
    image: getPropertyImageById(466),
    badge: "Enhanced"
  },
  {
    id: 467,
    title: "Mountain View Cottage",
    location: "744 Mountain St, Chicago, IL",
    price: "$539,000",
    beds: "3",
    baths: "3",
    area: "2729 sq ft",
    image: getPropertyImageById(467),
    badge: "Enhanced"
  },
  {
    id: 468,
    title: "Waterfront Luxury Villa",
    location: "234 Waterfront St, Los Angeles, CA",
    price: "$845,000",
    beds: "4",
    baths: "3",
    area: "2088 sq ft",
    image: getPropertyImageById(468),
    badge: "Premium"
  },
  {
    id: 469,
    title: "Waterfront Luxury Villa",
    location: "592 Waterfront St, Seattle, WA",
    price: "$464,000",
    beds: "1",
    baths: "2",
    area: "1888 sq ft",
    image: getPropertyImageById(469),
    badge: "Premium"
  },
  {
    id: 470,
    title: "Modern Downtown Apartment",
    location: "891 Modern St, Los Angeles, CA",
    price: "$668,000",
    beds: "3",
    baths: "4",
    area: "906 sq ft",
    image: getPropertyImageById(470),
    badge: "Basic"
  },
  {
    id: 471,
    title: "Suburban Family Home",
    location: "403 Suburban St, Miami, FL",
    price: "$319,000",
    beds: "4",
    baths: "4",
    area: "2158 sq ft",
    image: getPropertyImageById(471),
    badge: "Premium"
  },
  {
    id: 472,
    title: "Modern Downtown Apartment",
    location: "913 Modern St, Boston, MA",
    price: "$1,128,000",
    beds: "5",
    baths: "4",
    area: "892 sq ft",
    image: getPropertyImageById(472),
    badge: "Enhanced"
  },
  {
    id: 473,
    title: "Suburban Family Home",
    location: "789 Suburban St, Seattle, WA",
    price: "$848,000",
    beds: "5",
    baths: "1",
    area: "1889 sq ft",
    image: getPropertyImageById(473),
    badge: "Enhanced"
  },
  {
    id: 474,
    title: "Suburban Family Home",
    location: "903 Suburban St, Seattle, WA",
    price: "$1,035,000",
    beds: "1",
    baths: "3",
    area: "2594 sq ft",
    image: getPropertyImageById(474),
    badge: "Basic"
  },
  {
    id: 475,
    title: "Beachside Bungalow",
    location: "226 Beachside St, New York, NY",
    price: "$950,000",
    beds: "1",
    baths: "2",
    area: "1860 sq ft",
    image: getPropertyImageById(475),
    badge: "Basic"
  },
  {
    id: 476,
    title: "Urban Studio Flat",
    location: "302 Urban St, Miami, FL",
    price: "$525,000",
    beds: "5",
    baths: "3",
    area: "1095 sq ft",
    image: getPropertyImageById(476),
    badge: "Enhanced"
  },
  {
    id: 477,
    title: "Suburban Family Home",
    location: "522 Suburban St, Denver, CO",
    price: "$961,000",
    beds: "1",
    baths: "3",
    area: "3001 sq ft",
    image: getPropertyImageById(477),
    badge: "Premium"
  },
  {
    id: 478,
    title: "Suburban Family Home",
    location: "519 Suburban St, Austin, TX",
    price: "$235,000",
    beds: "1",
    baths: "4",
    area: "2098 sq ft",
    image: getPropertyImageById(478),
    badge: "Enhanced"
  },
  {
    id: 479,
    title: "Urban Studio Flat",
    location: "118 Urban St, Los Angeles, CA",
    price: "$567,000",
    beds: "2",
    baths: "2",
    area: "2316 sq ft",
    image: getPropertyImageById(479),
    badge: "Premium"
  },
  {
    id: 480,
    title: "Waterfront Luxury Villa",
    location: "579 Waterfront St, Chicago, IL",
    price: "$361,000",
    beds: "2",
    baths: "4",
    area: "3137 sq ft",
    image: getPropertyImageById(480),
    badge: "Basic"
  },
  {
    id: 481,
    title: "Rustic Ranch House",
    location: "490 Rustic St, Denver, CO",
    price: "$644,000",
    beds: "4",
    baths: "4",
    area: "854 sq ft",
    image: getPropertyImageById(481),
    badge: "Basic"
  },
  {
    id: 482,
    title: "Waterfront Luxury Villa",
    location: "634 Waterfront St, New York, NY",
    price: "$1,103,000",
    beds: "4",
    baths: "4",
    area: "3719 sq ft",
    image: getPropertyImageById(482),
    badge: "Enhanced"
  },
  {
    id: 483,
    title: "Beachside Bungalow",
    location: "465 Beachside St, Denver, CO",
    price: "$820,000",
    beds: "3",
    baths: "2",
    area: "3041 sq ft",
    image: getPropertyImageById(483),
    badge: "Enhanced"
  },
  {
    id: 484,
    title: "Mountain View Cottage",
    location: "967 Mountain St, Denver, CO",
    price: "$1,145,000",
    beds: "4",
    baths: "2",
    area: "2269 sq ft",
    image: getPropertyImageById(484),
    badge: "Enhanced"
  },
  {
    id: 485,
    title: "Waterfront Luxury Villa",
    location: "475 Waterfront St, Los Angeles, CA",
    price: "$877,000",
    beds: "2",
    baths: "4",
    area: "1480 sq ft",
    image: getPropertyImageById(485),
    badge: "Premium"
  },
  {
    id: 486,
    title: "Rustic Ranch House",
    location: "946 Rustic St, Miami, FL",
    price: "$736,000",
    beds: "5",
    baths: "1",
    area: "881 sq ft",
    image: getPropertyImageById(486),
    badge: "Premium"
  },
  {
    id: 487,
    title: "Urban Studio Flat",
    location: "459 Urban St, Los Angeles, CA",
    price: "$560,000",
    beds: "1",
    baths: "1",
    area: "2645 sq ft",
    image: getPropertyImageById(487),
    badge: "Basic"
  },
  {
    id: 488,
    title: "Waterfront Luxury Villa",
    location: "529 Waterfront St, Los Angeles, CA",
    price: "$860,000",
    beds: "5",
    baths: "2",
    area: "1265 sq ft",
    image: getPropertyImageById(488),
    badge: "Enhanced"
  },
  {
    id: 489,
    title: "Waterfront Luxury Villa",
    location: "682 Waterfront St, Seattle, WA",
    price: "$764,000",
    beds: "1",
    baths: "1",
    area: "949 sq ft",
    image: getPropertyImageById(489),
    badge: "Enhanced"
  },
  {
    id: 490,
    title: "Urban Studio Flat",
    location: "387 Urban St, Chicago, IL",
    price: "$1,039,000",
    beds: "2",
    baths: "1",
    area: "2236 sq ft",
    image: getPropertyImageById(490),
    badge: "Basic"
  },
  {
    id: 491,
    title: "Waterfront Luxury Villa",
    location: "533 Waterfront St, Miami, FL",
    price: "$947,000",
    beds: "2",
    baths: "2",
    area: "3958 sq ft",
    image: getPropertyImageById(491),
    badge: "Enhanced"
  },
  {
    id: 492,
    title: "Beachside Bungalow",
    location: "699 Beachside St, Chicago, IL",
    price: "$1,072,000",
    beds: "2",
    baths: "3",
    area: "3141 sq ft",
    image: getPropertyImageById(492),
    badge: "Enhanced"
  },
  {
    id: 493,
    title: "Urban Studio Flat",
    location: "255 Urban St, New York, NY",
    price: "$477,000",
    beds: "1",
    baths: "3",
    area: "892 sq ft",
    image: getPropertyImageById(493),
    badge: "Basic"
  },
  {
    id: 494,
    title: "Waterfront Luxury Villa",
    location: "360 Waterfront St, Denver, CO",
    price: "$262,000",
    beds: "4",
    baths: "2",
    area: "1633 sq ft",
    image: getPropertyImageById(494),
    badge: "Premium"
  },
  {
    id: 495,
    title: "Luxury Penthouse Suite",
    location: "313 Luxury St, Seattle, WA",
    price: "$1,214,000",
    beds: "4",
    baths: "4",
    area: "2652 sq ft",
    image: getPropertyImageById(495),
    badge: "Premium"
  },
  {
    id: 496,
    title: "Urban Studio Flat",
    location: "958 Urban St, Miami, FL",
    price: "$1,029,000",
    beds: "1",
    baths: "2",
    area: "931 sq ft",
    image: getPropertyImageById(496),
    badge: "Premium"
  },
  {
    id: 497,
    title: "Modern Downtown Apartment",
    location: "594 Modern St, Boston, MA",
    price: "$224,000",
    beds: "2",
    baths: "4",
    area: "2420 sq ft",
    image: getPropertyImageById(497),
    badge: "Basic"
  },
  {
    id: 498,
    title: "Mountain View Cottage",
    location: "111 Mountain St, New York, NY",
    price: "$952,000",
    beds: "4",
    baths: "2",
    area: "3358 sq ft",
    image: getPropertyImageById(498),
    badge: "Basic"
  },
  {
    id: 499,
    title: "Luxury Penthouse Suite",
    location: "425 Luxury St, Denver, CO",
    price: "$305,000",
    beds: "4",
    baths: "3",
    area: "802 sq ft",
    image: getPropertyImageById(499),
    badge: "Premium"
  },
  {
    id: 500,
    title: "Urban Studio Flat",
    location: "374 Urban St, Denver, CO",
    price: "$229,000",
    beds: "4",
    baths: "4",
    area: "2311 sq ft",
    image: getPropertyImageById(500),
    badge: "Premium"
  }
];

/**
 * Returns properties associated with a specific agent
 * @param {number|string} agentId - The ID of the agent
 * @param {number} limit - Maximum number of properties to return (optional)
 * @returns {Array} - Array of properties for the agent
 */
export function getPropertiesByAgent(agentId, limit = 6) {
  // For demo purposes, we'll simulate agent-property relationships
  // by using a deterministic selection based on the agent ID
  const agentIdNum = Number(agentId);
  
  // Use the agent ID to create a consistent starting index
  const startIndex = agentIdNum % (featuredProperties.length - limit);
  
  // Return a subset of properties as if they belong to this agent
  return featuredProperties.slice(startIndex, startIndex + limit);
}