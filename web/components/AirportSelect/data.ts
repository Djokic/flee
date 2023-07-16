import { Airport } from "@prisma/client";

export const AIRPORTS_TEST_DATA: Airport[] = [
  {
      "id": "b7a03209-4aff-4b0d-87b1-b16763823e1c",
      "code": "AAL",
      "name": "Aalborg",
      "country": "dk",
      "latitude": 57.0534,
      "longitude": 9.5057,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "c171f0f5-39a5-4b97-9ed5-82290757f29a",
      "code": "AAR",
      "name": "Aarhus",
      "country": "dk",
      "latitude": 56.3,
      "longitude": 10.619,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "9ee99736-5456-4a28-824b-5e89e558f7b0",
      "code": "ABZ",
      "name": "Aberdeen",
      "country": "gb",
      "latitude": 57.2019,
      "longitude": -2.19778,
      "connections": [
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "21f0d77d-d72e-45a1-b142-781d4570bc2d",
      "code": "ACE",
      "name": "Lanzarote",
      "country": "es",
      "latitude": 28.9455,
      "longitude": -13.6052,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "ae5562a8-f25e-4964-9324-44f7eda82008",
      "code": "AGA",
      "name": "Agadir",
      "country": "ma",
      "latitude": 30.325,
      "longitude": -9.41307,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "SXB",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "125344d2-eb99-40d2-9122-7587959e96fd",
      "code": "AGP",
      "name": "Malaga",
      "country": "es",
      "latitude": 36.6749,
      "longitude": -4.49911,
      "connections": [
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "EXT",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "VST",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "AMS",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ABZ",
              "operator": "RYANAIR"
          },
          {
              "code": "CWL",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PAD",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0e050d16-1506-4c71-af1a-0e4a1b5a4686",
      "code": "AHO",
      "name": "Alghero",
      "country": "it",
      "latitude": 40.6321,
      "longitude": 8.29077,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "8d36ac5b-8c28-4cd9-ac5d-dbbf1e10a147",
      "code": "ALC",
      "name": "Alicante",
      "country": "es",
      "latitude": 38.2822,
      "longitude": -0.558156,
      "connections": [
          {
              "code": "VXO",
              "operator": "RYANAIR"
          },
          {
              "code": "WAW",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "EXT",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "PED",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "KLU",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "VST",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "ABZ",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PAD",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "MME",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "abcc10f9-c826-4385-99b4-827976c7f754",
      "code": "AMM",
      "name": "Amman Jordan",
      "country": "jo",
      "latitude": 31.9497,
      "longitude": 35.9328,
      "connections": [
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fb3ac459-f22d-4a56-9162-d5583676dd58",
      "code": "AMS",
      "name": "Amsterdam",
      "country": "nl",
      "latitude": 52.3105,
      "longitude": 4.76827,
      "connections": [
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f743e392-52ea-4cf3-afe7-31fd1da961a2",
      "code": "AOI",
      "name": "Ancona",
      "country": "it",
      "latitude": 43.6163,
      "longitude": 13.3623,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "994373ae-055d-4911-8557-f8fd2ed4ec66",
      "code": "AQJ",
      "name": "Aqaba Jordan",
      "country": "jo",
      "latitude": 29.364183,
      "longitude": 35.010504,
      "connections": [
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "5a3c725d-5ee8-423f-98b4-5d829a1fe3fe",
      "code": "ARN",
      "name": "Stockholm Arlanda",
      "country": "se",
      "latitude": 59.6498,
      "longitude": 17.9239,
      "connections": [
          {
              "code": "INI",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MMX",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "VBY",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "RJK",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SFT",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "48392846-313c-4360-98c4-5b4569c04b35",
      "code": "ATH",
      "name": "Athens",
      "country": "gr",
      "latitude": 37.9364,
      "longitude": 23.9445,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "802a8931-5f3b-402f-bc7a-5856119598d2",
      "code": "BCN",
      "name": "Barcelona",
      "country": "es",
      "latitude": 41.2971,
      "longitude": 2.07846,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "VGO",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "OZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "VLL",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PIS",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "XRY",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "58d921d9-9588-4797-8068-6a7d7540a0cf",
      "code": "BDS",
      "name": "Brindisi",
      "country": "it",
      "latitude": 40.6576,
      "longitude": 17.947,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "ee4a8a66-8385-4543-a8ae-23c1f3022532",
      "code": "BER",
      "name": "Berlin Brandenburg",
      "country": "de",
      "latitude": 52.3667,
      "longitude": 13.5033,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4c970f1c-0fe7-49d7-bb44-ed4dbeab7605",
      "code": "BFS",
      "name": "Belfast International",
      "country": "gb",
      "latitude": 54.6575,
      "longitude": -6.2158,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "CWL",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "19da58e3-6e8a-4776-b291-50c98153bd7a",
      "code": "BGY",
      "name": "Milan Bergamo",
      "country": "it",
      "latitude": 45.6739,
      "longitude": 9.70417,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "EFL",
              "operator": "RYANAIR"
          },
          {
              "code": "CRV",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BRQ",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "LUZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LPP",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "KLX",
              "operator": "RYANAIR"
          },
          {
              "code": "RJK",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "IAS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "07835d67-8e11-4d1e-a500-13c4825a153d",
      "code": "BHX",
      "name": "Birmingham",
      "country": "gb",
      "latitude": 52.4539,
      "longitude": -1.74803,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BZG",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "ac61a430-77fc-4b42-8b0c-1e975c5ce43f",
      "code": "BIQ",
      "name": "Biarritz",
      "country": "fr",
      "latitude": 43.4684,
      "longitude": -1.52332,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "5484c49a-9d7f-493c-8a88-784651a2650b",
      "code": "BJV",
      "name": "Bodrum",
      "country": "tr",
      "latitude": 37.2506,
      "longitude": 27.6642,
      "connections": [
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "314cb761-dc9d-49d8-860d-a9404a7c6cdd",
      "code": "BLL",
      "name": "Billund",
      "country": "dk",
      "latitude": 55.7403,
      "longitude": 9.15178,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "6807ac32-570a-4888-b9e4-c0dbeeb43d52",
      "code": "BLQ",
      "name": "Bologna",
      "country": "it",
      "latitude": 44.5354,
      "longitude": 11.2887,
      "connections": [
          {
              "code": "CRV",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "JMK",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "29df0202-3ec4-489f-a574-c3a5b3d1f2cf",
      "code": "BNX",
      "name": "Banja Luka",
      "country": "ba",
      "latitude": 44.5629,
      "longitude": 17.1731,
      "connections": [
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "524bdcd2-5daa-4a58-a951-34ed6026874b",
      "code": "BOD",
      "name": "Bordeaux",
      "country": "fr",
      "latitude": 44.8283,
      "longitude": -0.715556,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "FSC",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "afe90b08-2c5f-4c27-b589-3cf6646b8812",
      "code": "BOH",
      "name": "Bournemouth",
      "country": "gb",
      "latitude": 50.78,
      "longitude": -1.8425,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "fbe76a0a-546c-47b4-9f23-ff501e9d832c",
      "code": "BOJ",
      "name": "Burgas",
      "country": "bg",
      "latitude": 42.3413,
      "longitude": 27.3055,
      "connections": [
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "795e1fd5-8506-4210-a801-307dccb4b99b",
      "code": "BRE",
      "name": "Bremen",
      "country": "de",
      "latitude": 53.0475,
      "longitude": 8.78667,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c83db1ab-b69c-4f8f-a97a-336aa2b3d298",
      "code": "BRI",
      "name": "Bari",
      "country": "it",
      "latitude": 41.1389,
      "longitude": 16.7606,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "JSI",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "edb04aa1-c8dc-41ec-b256-a29320ac7071",
      "code": "BRQ",
      "name": "Brno",
      "country": "cz",
      "latitude": 49.1513,
      "longitude": 16.6944,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "53ae5012-4fb9-465c-b780-8d476258c90c",
      "code": "BRS",
      "name": "Bristol",
      "country": "gb",
      "latitude": 51.3827,
      "longitude": -2.71909,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BZG",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "6dcab217-789a-4dfa-8bf2-8a58e02ee300",
      "code": "BRU",
      "name": "Brussels",
      "country": "be",
      "latitude": 50.9014,
      "longitude": 4.48444,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "9af6d194-4218-4491-ad61-e8e0db97c42c",
      "code": "BSL",
      "name": "Basel",
      "country": "ch",
      "latitude": 47.5896,
      "longitude": 7.52991,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BNX",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KFZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a7ede5c3-a7dc-4c44-bf94-d366f1caffbd",
      "code": "BTS",
      "name": "Bratislava",
      "country": "sk",
      "latitude": 48.1702,
      "longitude": 17.2127,
      "connections": [
          {
              "code": "DLM",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c68a017b-338d-4b47-b2cc-63d19a47b81e",
      "code": "BUD",
      "name": "Budapest",
      "country": "hu",
      "latitude": 47.4369,
      "longitude": 19.2556,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "JMK",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CDT",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EDI",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "GYD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "IST",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "ORY",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "RHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGM",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0108b749-97c5-4b01-af4b-7d57cd1be894",
      "code": "BVA",
      "name": "Paris Beauvais",
      "country": "fr",
      "latitude": 49.4544,
      "longitude": 2.11278,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "FSC",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "IAS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "931da143-4758-4268-92f1-6850efa60fcc",
      "code": "BVE",
      "name": "Brive",
      "country": "fr",
      "latitude": 45.1508,
      "longitude": 1.46917,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "35e0fac9-a70b-4d23-b50b-85ee367622d2",
      "code": "BZG",
      "name": "Bydgoszcz",
      "country": "pl",
      "latitude": 53.0968,
      "longitude": 17.9777,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0767bd7b-82ca-474d-a0af-8cfec26623dd",
      "code": "BZR",
      "name": "Beziers Cap d'Agde",
      "country": "fr",
      "latitude": 43.3235,
      "longitude": 3.3539,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "5006ccf3-b5ca-40a7-81ad-1a7e726a3425",
      "code": "CAG",
      "name": "Cagliari",
      "country": "it",
      "latitude": 39.2515,
      "longitude": 9.05428,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMF",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "CUF",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "8a4d0ce1-f069-4a2b-932d-6f1fc56fda17",
      "code": "CCF",
      "name": "Carcassonne",
      "country": "fr",
      "latitude": 43.216,
      "longitude": 2.30632,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "d19c26ca-dfa2-4fef-8c40-062885796f09",
      "code": "CDT",
      "name": "Castellon (Valencia)",
      "country": "es",
      "latitude": 39.999,
      "longitude": 0.026,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "99258087-6ff0-40c6-80f4-139cf32d6b9f",
      "code": "CFE",
      "name": "Clermont",
      "country": "fr",
      "latitude": 45.7867,
      "longitude": 3.16917,
      "connections": [
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "830d40a5-4d0d-44a7-8835-cd66c7b0d341",
      "code": "CFU",
      "name": "Corfu",
      "country": "gr",
      "latitude": 39.6019,
      "longitude": 19.9117,
      "connections": [
          {
              "code": "INI",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMO",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "MME",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c86f493c-03c6-48d0-bf84-0cf4ebcb5b36",
      "code": "CGN",
      "name": "Cologne",
      "country": "de",
      "latitude": 50.8659,
      "longitude": 7.14274,
      "connections": [
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "BIQ",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "9f0e2a25-e3c3-43de-b375-b1605b356bef",
      "code": "CHQ",
      "name": "Chania",
      "country": "gr",
      "latitude": 35.5317,
      "longitude": 24.1497,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a4754190-6a2a-410d-aa3a-376a72607553",
      "code": "CIA",
      "name": "Rome Ciampino",
      "country": "it",
      "latitude": 41.7994,
      "longitude": 12.5949,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OLB",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "98b62ec1-6e84-4780-ba2f-9ac23c7a533c",
      "code": "CLJ",
      "name": "Cluj",
      "country": "ro",
      "latitude": 46.785,
      "longitude": 23.6861,
      "connections": [
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "PEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZAZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "46ea85de-73db-40a2-9314-48ac661f3714",
      "code": "CPH",
      "name": "Copenhagen",
      "country": "dk",
      "latitude": 55.6181,
      "longitude": 12.6561,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "25ea69f0-a292-4fc9-935a-fac0e2fb0f68",
      "code": "CRL",
      "name": "Brussels Charleroi",
      "country": "be",
      "latitude": 50.4592,
      "longitude": 4.45382,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "LEI",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "CDT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "OVD",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ESU",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "WAW",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "BIQ",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "FSC",
              "operator": "RYANAIR"
          },
          {
              "code": "RJK",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "IAS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "RDZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RVN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BVE",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "22e5fb39-518b-4f27-a88e-1d327eaf30b4",
      "code": "CRV",
      "name": "Crotone",
      "country": "it",
      "latitude": 38.99722,
      "longitude": 17.08028,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "e4f6ce3f-15a4-4c0a-bd09-e481ec8cb017",
      "code": "CTA",
      "name": "Catania",
      "country": "it",
      "latitude": 37.4668,
      "longitude": 15.0664,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0f081617-3ca4-4f79-b57e-b9b26cb586f8",
      "code": "CUF",
      "name": "Cuneo",
      "country": "it",
      "latitude": 44.547,
      "longitude": 7.62322,
      "connections": [
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "942baa82-f442-4f3e-b724-80b72e8127eb",
      "code": "CWL",
      "name": "Cardiff",
      "country": "gb",
      "latitude": 51.3967,
      "longitude": -3.34333,
      "connections": [
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "23217be7-e0fa-48f2-a9db-b90ff0f19969",
      "code": "DBV",
      "name": "Dubrovnik",
      "country": "hr",
      "latitude": 42.5614,
      "longitude": 18.2683,
      "connections": [
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a2157743-b53d-48ff-9c08-aba41237ce4d",
      "code": "DLE",
      "name": "Dole",
      "country": "fr",
      "latitude": 47.039,
      "longitude": 5.42725,
      "connections": [
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "7daf1501-b334-4e34-a6c1-4cadefceb013",
      "code": "DLM",
      "name": "Dalaman",
      "country": "tr",
      "latitude": 36.7147,
      "longitude": 28.7928,
      "connections": [
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4b1a175a-16ed-4589-adcc-6e6f5dc9ffbc",
      "code": "DRS",
      "name": "Dresden",
      "country": "de",
      "latitude": 51.1344,
      "longitude": 13.7681,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "c022dd1c-7eaa-4c98-8dc6-a21ee477f26a",
      "code": "DTM",
      "name": "Dortmund",
      "country": "de",
      "latitude": 51.5183,
      "longitude": 7.61224,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BNX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "GHV",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZY",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGM",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e5fbfd53-5151-4984-b4d5-8c713ba61088",
      "code": "DUB",
      "name": "Dublin",
      "country": "ie",
      "latitude": 53.4213,
      "longitude": -6.27007,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TUF",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "KSC",
              "operator": "RYANAIR"
          },
          {
              "code": "PLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "LEJ",
              "operator": "RYANAIR"
          },
          {
              "code": "LUZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "LEI",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BSL",
              "operator": "RYANAIR"
          },
          {
              "code": "CDT",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "OVD",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "NCE",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "AMS",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "DBV",
              "operator": "RYANAIR"
          },
          {
              "code": "SPU",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "DLM",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZG",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "BIQ",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "BJV",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BZG",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "IAS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "RDZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "CWL",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RVN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "c6d893c0-7ac5-425b-a769-fd690e5d4472",
      "code": "EDI",
      "name": "Edinburgh",
      "country": "gb",
      "latitude": 55.95,
      "longitude": -3.3725,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "PIS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "b659aefb-308e-4ce1-8118-07ca77f81b2c",
      "code": "EFL",
      "name": "Kefalonia",
      "country": "gr",
      "latitude": 38.1201,
      "longitude": 20.5005,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0534680a-f53d-4854-bb79-e5f0e5dca0ec",
      "code": "EGC",
      "name": "Bergerac",
      "country": "fr",
      "latitude": 44.8253,
      "longitude": 0.518611,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "add0b938-09c3-43e0-b20a-7b086b541671",
      "code": "EIN",
      "name": "Eindhoven",
      "country": "nl",
      "latitude": 51.4501,
      "longitude": 5.37453,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "ab076e4e-d400-41f9-8764-e2b8dda5b281",
      "code": "EMA",
      "name": "East Midlands",
      "country": "gb",
      "latitude": 52.8311,
      "longitude": -1.32806,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "22ffa375-9f1d-43e3-b5ba-cc98daacb06b",
      "code": "ESU",
      "name": "Essaouira",
      "country": "ma",
      "latitude": 31.3918,
      "longitude": -9.6757,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "811a20c1-b0c2-487c-9297-ea2948f09aa5",
      "code": "EXT",
      "name": "Exeter",
      "country": "gb",
      "latitude": 50.7344,
      "longitude": -3.4139,
      "connections": [
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "440e1a38-8a43-49be-9ae5-ff762f1abb83",
      "code": "FAO",
      "name": "Faro",
      "country": "pt",
      "latitude": 37.0144,
      "longitude": -7.96591,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "EXT",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "ABZ",
              "operator": "RYANAIR"
          },
          {
              "code": "CWL",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "MME",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "684a312f-1120-454e-8425-0d86aec501af",
      "code": "FCO",
      "name": "Rome Fiumicino",
      "country": "it",
      "latitude": 41.8045,
      "longitude": 12.2508,
      "connections": [
          {
              "code": "EFL",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "JSI",
              "operator": "RYANAIR"
          },
          {
              "code": "FSC",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "OVD",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "SPU",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CDT",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EFL",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "ETM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "GYD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KGS",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "KWI",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LMP",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUX",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ORY",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "RZE",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TKU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a3c7d0db-ebe3-4a21-85ea-e4e5c7d9757b",
      "code": "FEZ",
      "name": "Fez",
      "country": "ma",
      "latitude": 33.9273,
      "longitude": -4.97796,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "CFE",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DLE",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "b5727bb9-4a06-4be8-98cf-a0219a0b6dfc",
      "code": "FKB",
      "name": "Karlsruhe / Baden-Baden",
      "country": "de",
      "latitude": 48.7794,
      "longitude": 8.0805,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "KFZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "27f5240d-d81d-46d2-a0a4-3b270d93792f",
      "code": "FMM",
      "name": "Memmingen",
      "country": "de",
      "latitude": 47.9888,
      "longitude": 10.2395,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KFZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PDV",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGM",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fe581dc1-8978-45ed-b54b-612c74ec264c",
      "code": "FMO",
      "name": "Münster",
      "country": "de",
      "latitude": 52.1346,
      "longitude": 7.68483,
      "connections": [
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "302d2a4f-49c5-46c6-8e23-8418a827ad00",
      "code": "FNC",
      "name": "Madeira Funchal",
      "country": "pt",
      "latitude": 32.6942,
      "longitude": -16.7781,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c7472f42-a218-40af-ae51-a3a40cd05419",
      "code": "FNI",
      "name": "Nimes",
      "country": "fr",
      "latitude": 43.7574,
      "longitude": 4.41635,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6bc950f9-de3c-4ca5-8faa-c10605ab3dbe",
      "code": "FRL",
      "name": "Bologna Forli",
      "country": "it",
      "latitude": 44.1948,
      "longitude": 12.0701,
      "connections": [
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "ec36556f-e27a-466d-8cfc-307820662066",
      "code": "FSC",
      "name": "Figari-Corsica",
      "country": "fr",
      "latitude": 41.5006,
      "longitude": 9.09778,
      "connections": [
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "4d429c80-df6d-41b9-a77c-399839327aaf",
      "code": "FUE",
      "name": "Fuerteventura",
      "country": "es",
      "latitude": 28.4527,
      "longitude": -13.8638,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a9686aac-8606-4a37-b969-e36b4ce5cc37",
      "code": "GDN",
      "name": "Gdansk",
      "country": "pl",
      "latitude": 54.3776,
      "longitude": 18.4662,
      "connections": [
          {
              "code": "VXO",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "LUZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "ABZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "AES",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EDI",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAU",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TKU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "83e3050a-04a9-4f79-befc-e9f039289012",
      "code": "GLA",
      "name": "Glasgow",
      "country": "gb",
      "latitude": 55.87194,
      "longitude": -4.43306,
      "connections": [
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "8d285501-89bb-4972-9264-ad066137a8c5",
      "code": "GNB",
      "name": "Grenoble",
      "country": "fr",
      "latitude": 45.3629,
      "longitude": 5.32937,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d8d6f6f0-4370-4a7e-98e1-e248f59d5bbc",
      "code": "GOA",
      "name": "Genoa",
      "country": "it",
      "latitude": 44.4133,
      "longitude": 8.8375,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "01a34a65-c588-474b-a3d8-2876314f9dff",
      "code": "GOT",
      "name": "Göteborg Landvetter",
      "country": "se",
      "latitude": 57.6741,
      "longitude": 12.2925,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "56ba33fb-fa95-4716-bb79-f18d58719900",
      "code": "GRO",
      "name": "Barcelona Girona",
      "country": "es",
      "latitude": 41.901,
      "longitude": 2.76055,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f3068df9-b540-442c-b300-04080167d1ba",
      "code": "HAM",
      "name": "Hamburg",
      "country": "de",
      "latitude": 53.63028,
      "longitude": 9.99111,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BNX",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fece765a-2600-440b-a3b8-2caf02bf63f5",
      "code": "HEL",
      "name": "Helsinki",
      "country": "fi",
      "latitude": 60.3172,
      "longitude": 24.9633,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "fd977c7d-3c99-49e9-9af1-14b7cd4f04bc",
      "code": "HER",
      "name": "Heraklion Crete",
      "country": "gr",
      "latitude": 35.3397,
      "longitude": 25.1803,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4def2fd8-bbcd-44ba-ac6f-14b0d53e0eb9",
      "code": "HHN",
      "name": "Frankfurt Hahn",
      "country": "de",
      "latitude": 49.9487,
      "longitude": 7.26389,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a5d068bf-520b-43b9-bb7a-5d67c2ab8be7",
      "code": "IAS",
      "name": "Iasi",
      "country": "ro",
      "latitude": 47.17889,
      "longitude": 27.617,
      "connections": [
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IST",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "424f86d3-9c16-4319-9395-3e7680e1d572",
      "code": "IBZ",
      "name": "Ibiza",
      "country": "es",
      "latitude": 38.8729,
      "longitude": 1.37312,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "5e0c0dfc-77cd-401b-bada-eb9ec9e98351",
      "code": "INI",
      "name": "Nis",
      "country": "rs",
      "latitude": 43.3372,
      "longitude": 21.8536,
      "connections": [
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "82ef9aa0-0402-4e5f-a471-e8829271b532",
      "code": "JMK",
      "name": "Mykonos",
      "country": "gr",
      "latitude": 37.4351,
      "longitude": 25.3481,
      "connections": [
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d4d0589d-808f-4480-8f79-50261618aa35",
      "code": "JSI",
      "name": "Skiathos",
      "country": "gr",
      "latitude": 39.1775,
      "longitude": 23.5036,
      "connections": [
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "2a8ae2cc-a6b0-400d-b5fd-4029f2fa2c29",
      "code": "JTR",
      "name": "Santorini",
      "country": "gr",
      "latitude": 36.3992,
      "longitude": 25.4793,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c1caeb08-c27e-46a5-97bd-73d411b656a6",
      "code": "KGS",
      "name": "Kos",
      "country": "gr",
      "latitude": 36.7933,
      "longitude": 27.0917,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3712aa82-6236-4ecd-813a-4a04239ac9db",
      "code": "KIR",
      "name": "Kerry",
      "country": "ie",
      "latitude": 52.1809,
      "longitude": -9.52378,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "42f96c76-a66e-4292-a5c6-dd212d6540e9",
      "code": "KLU",
      "name": "Klagenfurt",
      "country": "at",
      "latitude": 46.6425,
      "longitude": 14.3377,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "0b83cadf-2ddb-415f-873b-aed4eb2191da",
      "code": "KLX",
      "name": "Kalamata",
      "country": "gr",
      "latitude": 37.0683,
      "longitude": 22.0255,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1861a0f6-57d4-46a2-b9f0-a1ac046cd959",
      "code": "KRK",
      "name": "Krakow",
      "country": "pl",
      "latitude": 50.0777,
      "longitude": 19.7848,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "SZY",
              "operator": "RYANAIR"
          },
          {
              "code": "VAR",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "LIL",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "76eefadc-ee7e-4545-af60-b22ff8dc9462",
      "code": "KSC",
      "name": "Kosice",
      "country": "sk",
      "latitude": 48.6631,
      "longitude": 21.2411,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "daab6435-f643-4295-94c0-ce11a669dfbd",
      "code": "KTW",
      "name": "Katowice",
      "country": "pl",
      "latitude": 50.4743,
      "longitude": 19.08,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VAR",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "FRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "OSL",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRS",
              "operator": "WIZZAIR"
          },
          {
              "code": "CDT",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "FUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "IBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OZH",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7b592578-9f51-4c71-8261-0e1e525e1ddf",
      "code": "KUN",
      "name": "Kaunas",
      "country": "lt",
      "latitude": 54.9639,
      "longitude": 24.0848,
      "connections": [
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "AAL",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "AES",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGO",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVG",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "650ed47a-1eb4-4e26-bea2-05d09b9027bf",
      "code": "LBA",
      "name": "Leeds Bradford",
      "country": "gb",
      "latitude": 53.8659,
      "longitude": -1.66057,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c9bba03b-6991-4de1-b923-500d49f1d827",
      "code": "LCA",
      "name": "Larnaca",
      "country": "cy",
      "latitude": 34.8751,
      "longitude": 33.6249,
      "connections": [
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "ede6bdaa-97ab-4dec-865c-3b93a99617df",
      "code": "LCJ",
      "name": "Lodz",
      "country": "pl",
      "latitude": 51.7219,
      "longitude": 19.3981,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c20015d9-8170-4276-9f8d-82d2b03a678f",
      "code": "LDE",
      "name": "Lourdes–Pyrenees",
      "country": "fr",
      "latitude": 43.1787,
      "longitude": -0.006439,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6dd0e896-dc4d-4196-8070-b045236897a3",
      "code": "LDY",
      "name": "Derry",
      "country": "gb",
      "latitude": 55.0428,
      "longitude": -7.16111,
      "connections": [
          {
              "code": "MAN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "4d786b3f-eaad-4632-a19b-00e611e939e8",
      "code": "LEI",
      "name": "Almeria",
      "country": "es",
      "latitude": 36.8439,
      "longitude": -2.3701,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1debaba3-f3a6-478f-99a8-ea85e100b09a",
      "code": "LEJ",
      "name": "Leipzig",
      "country": "de",
      "latitude": 51.4324,
      "longitude": 12.2416,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6715697c-6e48-4484-b8c0-4599481a8715",
      "code": "LGW",
      "name": "London Gatwick",
      "country": "gb",
      "latitude": 51.1481,
      "longitude": -0.190278,
      "connections": [
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DLM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FAO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "IST",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "2e9f17cf-7d24-4686-9c87-13816413e199",
      "code": "LIG",
      "name": "Limoges",
      "country": "fr",
      "latitude": 45.8628,
      "longitude": 1.17944,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "78e60560-12b0-4eba-b8fd-e9b73b92735b",
      "code": "LIL",
      "name": "Lille",
      "country": "fr",
      "latitude": 50.5619,
      "longitude": 3.08944,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f86976fc-cd5f-44e0-a81a-dcaca725de4f",
      "code": "LIS",
      "name": "Lisbon",
      "country": "pt",
      "latitude": 38.7813,
      "longitude": -9.13592,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "PDL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TER",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "96cd8407-6af1-4f30-b93e-549da7ad12f7",
      "code": "LLA",
      "name": "Lulea",
      "country": "se",
      "latitude": 65.5425,
      "longitude": 22.1219,
      "connections": [
          {
              "code": "ARN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "9133f385-162c-4926-8ce3-743bdf42c5fd",
      "code": "LPA",
      "name": "Gran Canaria",
      "country": "es",
      "latitude": 27.9319,
      "longitude": -15.3866,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "0cef788b-e0a7-4d39-bff1-5448b5db1cb0",
      "code": "LPL",
      "name": "Liverpool",
      "country": "gb",
      "latitude": 53.3336,
      "longitude": -2.84972,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "KSC",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "SZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "RVN",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "f0c8475a-cb8b-45a0-8e8e-240e9e12a430",
      "code": "LPP",
      "name": "Lappeenranta",
      "country": "fi",
      "latitude": 61.0446,
      "longitude": 28.1444,
      "connections": [
          {
              "code": "BGY",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1265d883-7c7a-40d4-a846-d98ea0ebc618",
      "code": "LRH",
      "name": "La Rochelle",
      "country": "fr",
      "latitude": 46.1792,
      "longitude": -1.19528,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "3de15df7-3d5a-4253-ae63-4c8525d24ec2",
      "code": "LTN",
      "name": "London Luton",
      "country": "gb",
      "latitude": 51.8747,
      "longitude": -0.368333,
      "connections": [
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "LUZ",
              "operator": "RYANAIR"
          },
          {
              "code": "BZG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCM",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BZG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CND",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DBV",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "DLM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "GHV",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "IST",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KSC",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LJU",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PDV",
              "operator": "WIZZAIR"
          },
          {
              "code": "PLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SJJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZY",
              "operator": "WIZZAIR"
          },
          {
              "code": "TAT",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGM",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7ced3d72-7587-4173-87ba-8237e2f6ebbd",
      "code": "LUX",
      "name": "Luxembourg",
      "country": "lu",
      "latitude": 49.6233,
      "longitude": 6.2044,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "5b8c4a01-3d49-40a2-be82-6f03673ed104",
      "code": "LUZ",
      "name": "Lublin",
      "country": "pl",
      "latitude": 51.2319,
      "longitude": 22.6903,
      "connections": [
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "85714b77-5dc4-4ed5-9beb-59e4584c17bf",
      "code": "MAD",
      "name": "Madrid",
      "country": "es",
      "latitude": 40.4936,
      "longitude": -3.56676,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ESU",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "64f905ca-22e5-4b87-b093-521e269d50f8",
      "code": "MAH",
      "name": "Menorca",
      "country": "es",
      "latitude": 39.8626,
      "longitude": 4.21865,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "799d42c4-880e-44da-8fa9-fb0e93cfccf0",
      "code": "MAN",
      "name": "Manchester",
      "country": "gb",
      "latitude": 53.3537,
      "longitude": -2.27495,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "LDY",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LEI",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZG",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "PDV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "aca90bb3-5020-4712-bbf3-e8aff1e96d96",
      "code": "MLA",
      "name": "Malta",
      "country": "mt",
      "latitude": 35.8575,
      "longitude": 14.4775,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "INI",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c791c930-5e82-4d97-9786-766d775d716a",
      "code": "MME",
      "name": "Teesside",
      "country": "gb",
      "latitude": 54.5092,
      "longitude": -1.42941,
      "connections": [
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "e06157da-4c9b-40a3-8a36-04768409e8fa",
      "code": "MMX",
      "name": "Malmo",
      "country": "se",
      "latitude": 55.5363,
      "longitude": 13.3762,
      "connections": [
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bf7895c1-32f0-4661-9417-c0e65161ea82",
      "code": "MRS",
      "name": "Marseille",
      "country": "fr",
      "latitude": 43.4393,
      "longitude": 5.22142,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "ESU",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "LIL",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "41ff765b-c8dc-4505-8b2a-87858b339638",
      "code": "MST",
      "name": "Maastricht",
      "country": "nl",
      "latitude": 50.9117,
      "longitude": 5.77014,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f1e3b4ed-91ba-4705-a06d-f773da9187b6",
      "code": "MXP",
      "name": "Milan Malpensa",
      "country": "it",
      "latitude": 45.63,
      "longitude": 8.7231,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCM",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LMP",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OLB",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RMF",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c9545a63-0425-4b43-a7b9-d3b0997999d6",
      "code": "NAP",
      "name": "Naples",
      "country": "it",
      "latitude": 40.5304,
      "longitude": 14.1727,
      "connections": [
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "JMK",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3390d178-6d02-42ca-8f7a-6342c6cae871",
      "code": "NCE",
      "name": "Nice",
      "country": "fr",
      "latitude": 43.6584,
      "longitude": 7.21587,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a2b559b8-d3fc-4e88-8423-153c56bc7365",
      "code": "NCL",
      "name": "Newcastle",
      "country": "gb",
      "latitude": 55.0375,
      "longitude": -1.69167,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "2642e3ff-335b-499a-b75d-80086f126718",
      "code": "NDR",
      "name": "Nador",
      "country": "ma",
      "latitude": 34.9888,
      "longitude": -3.02821,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "e635095c-0a2f-4db3-9fb1-916f946535da",
      "code": "NOC",
      "name": "Knock",
      "country": "ie",
      "latitude": 53.9103,
      "longitude": -8.81849,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "a7ae72f3-e31d-44ac-a994-32a4d3270760",
      "code": "NQY",
      "name": "Newquay Cornwall",
      "country": "gb",
      "latitude": 50.4406,
      "longitude": -4.99541,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "64ceaf03-d37e-4b5d-9e58-6a8683747490",
      "code": "NRN",
      "name": "Dusseldorf Weeze",
      "country": "de",
      "latitude": 51.6024,
      "longitude": 6.14217,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CDT",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "OVD",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "b63229f8-35b9-4883-adb2-7a296ba52ed7",
      "code": "NTE",
      "name": "Nantes",
      "country": "fr",
      "latitude": 47.1532,
      "longitude": -1.61073,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "4d819e25-1e9c-42f7-b269-0294db9f0eb6",
      "code": "NUE",
      "name": "Nuremberg",
      "country": "de",
      "latitude": 49.4987,
      "longitude": 11.0669,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PDL",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "da01c62c-ed68-476a-8946-b1b86badfbaf",
      "code": "OPO",
      "name": "Porto",
      "country": "pt",
      "latitude": 41.2481,
      "longitude": -8.68139,
      "connections": [
          {
              "code": "XCR",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DLE",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TUF",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "PDL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TER",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "CDT",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "CFE",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "SXB",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BVE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "LIL",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d4668a12-6828-45f8-812c-e6f28622c12b",
      "code": "ORB",
      "name": "Orebro",
      "country": "se",
      "latitude": 59.2275,
      "longitude": 15.0462,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "3da1ea81-0460-499b-94c2-b62f3432e22d",
      "code": "ORK",
      "name": "Cork",
      "country": "ie",
      "latitude": 51.8413,
      "longitude": -8.49111,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "736565ca-fcfb-46f3-bff5-3483186dd8d4",
      "code": "OSI",
      "name": "Osijek",
      "country": "hr",
      "latitude": 45.4627,
      "longitude": 18.8102,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "002e5d69-fca2-4418-9ccc-cd1312cfaca4",
      "code": "OSL",
      "name": "Oslo",
      "country": "no",
      "latitude": 60.2028,
      "longitude": 11.0839,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "79241474-3895-458e-bb06-c94a6c214c0a",
      "code": "OSR",
      "name": "Ostrava",
      "country": "cz",
      "latitude": 49.6963,
      "longitude": 18.1111,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "ec9bb0a8-25ef-44e1-8bf6-f2e823a56963",
      "code": "OTP",
      "name": "Bucharest",
      "country": "ro",
      "latitude": 44.5722,
      "longitude": 26.1022,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "AOI",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CDT",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EDI",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUX",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PSA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PVK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SDR",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZAZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "74f48377-ed18-45ec-8592-e789eae2c21f",
      "code": "OUD",
      "name": "Oujda",
      "country": "ma",
      "latitude": 34.7872,
      "longitude": -1.92399,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "5fc80c93-5dc7-4229-9e74-3ab097ccc18f",
      "code": "OVD",
      "name": "Asturias",
      "country": "es",
      "latitude": 43.5636,
      "longitude": -6.03462,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "20acf9f4-76e8-4cc6-aead-581c62f1c2ad",
      "code": "OZZ",
      "name": "Ouarzazate",
      "country": "ma",
      "latitude": 30.9392,
      "longitude": -6.9094,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f5e87bbf-cbb0-4ca8-b0df-bdfa9129909e",
      "code": "PAD",
      "name": "Paderborn",
      "country": "de",
      "latitude": 51.3655,
      "longitude": 8.3702,
      "connections": [
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1b5a1434-9e8a-4661-b392-731d84043d9f",
      "code": "PDL",
      "name": "Ponta Delgada",
      "country": "pt",
      "latitude": 37.74194,
      "longitude": -25.69778,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "5802081e-e75e-48f8-ae63-3610e967e578",
      "code": "PDV",
      "name": "Plovdiv",
      "country": "bg",
      "latitude": 42.0678,
      "longitude": 24.8508,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bf065e85-7a14-4698-8180-f5edebaa9842",
      "code": "PED",
      "name": "Pardubice",
      "country": "cz",
      "latitude": 50.0048,
      "longitude": 15.4419,
      "connections": [
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fb373eb7-c118-44d6-be13-d658c24f0ac3",
      "code": "PEG",
      "name": "Perugia",
      "country": "it",
      "latitude": 43.0959,
      "longitude": 12.5132,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "53fc9bb9-e4b1-4849-b925-779945257431",
      "code": "PFO",
      "name": "Paphos",
      "country": "cy",
      "latitude": 34.718,
      "longitude": 32.4857,
      "connections": [
          {
              "code": "WAW",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "JMK",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "ac25e385-9a2a-4112-9472-1e42dc80db8b",
      "code": "PGF",
      "name": "Perpignan",
      "country": "fr",
      "latitude": 42.7404,
      "longitude": 2.87067,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "e7a89fce-1ea3-448c-a1d4-570c80a6fe39",
      "code": "PIK",
      "name": "Glasgow Prestwick",
      "country": "gb",
      "latitude": 55.5094,
      "longitude": -4.58667,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "573b12fc-afba-437c-8ba8-eff637fc7146",
      "code": "PIS",
      "name": "Poitiers",
      "country": "fr",
      "latitude": 46.5877,
      "longitude": 0.306666,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "52703118-7337-4c7b-b43d-721cda7e29ec",
      "code": "PLQ",
      "name": "Palanga",
      "country": "lt",
      "latitude": 55.9733,
      "longitude": 21.0939,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1baa0d7c-c1f6-4b03-ab0f-929479aabca5",
      "code": "PMF",
      "name": "Parma",
      "country": "it",
      "latitude": 44.8245,
      "longitude": 10.2964,
      "connections": [
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "e8d2b6ba-8d9c-4fb2-90ed-448e532ba16c",
      "code": "PMI",
      "name": "Palma de Mallorca",
      "country": "es",
      "latitude": 39.5517,
      "longitude": 2.73881,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "DRS",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "WAW",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "KLU",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMO",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "VLL",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "PAD",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "MME",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "XRY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1eed7ca6-d09a-4d4b-8eb7-ce35a3b1750e",
      "code": "PMO",
      "name": "Palermo",
      "country": "it",
      "latitude": 38.176,
      "longitude": 13.091,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMF",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "FRL",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "CUF",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fbf5ac97-b6d9-427e-b2e9-ed69ff3a1fb3",
      "code": "POZ",
      "name": "Poznan",
      "country": "pl",
      "latitude": 52.421,
      "longitude": 16.8263,
      "connections": [
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "b90b5255-fddb-4391-a61b-a288bf1d186f",
      "code": "PRG",
      "name": "Prague",
      "country": "cz",
      "latitude": 50.1008,
      "longitude": 14.26,
      "connections": [
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "KSC",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "JSI",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "2bcc3fe9-e1eb-4cce-b645-54744c1ad85e",
      "code": "PSA",
      "name": "Pisa",
      "country": "it",
      "latitude": 43.6839,
      "longitude": 10.3927,
      "connections": [
          {
              "code": "EFL",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "JSI",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bd1c8129-4c98-45fa-be18-deac0c968cfc",
      "code": "PSR",
      "name": "Pescara",
      "country": "it",
      "latitude": 42.4317,
      "longitude": 14.1811,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "b26adaa5-bdf4-4b8f-8306-b3e5325a2838",
      "code": "PUY",
      "name": "Pula",
      "country": "hr",
      "latitude": 44.8935,
      "longitude": 13.9222,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "10c62d14-7c44-4acb-88c4-3349051f42bc",
      "code": "PVK",
      "name": "Preveza - Aktion",
      "country": "gr",
      "latitude": 38.9256,
      "longitude": 20.7653,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "cb013fec-afa5-40d4-b21e-c066c060e1c5",
      "code": "RAK",
      "name": "Marrakesh",
      "country": "ma",
      "latitude": 31.6069,
      "longitude": -8.0363,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "XCR",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DLE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "TUF",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c878cb8d-c1db-4af1-af98-71a3424fe414",
      "code": "RBA",
      "name": "Rabat",
      "country": "ma",
      "latitude": 34.0515,
      "longitude": -6.75152,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1c7185eb-5524-4b39-92de-0072fe93f8a2",
      "code": "RDZ",
      "name": "Rodez",
      "country": "fr",
      "latitude": 44.4079,
      "longitude": 2.48267,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1a5291cd-ed6e-459c-9732-6ad5c514c2d9",
      "code": "REU",
      "name": "Barcelona Reus",
      "country": "es",
      "latitude": 41.1474,
      "longitude": 1.16717,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "86d4d214-d202-4486-b8f2-7f8db0662d4e",
      "code": "RHO",
      "name": "Rhodes",
      "country": "gr",
      "latitude": 36.4054,
      "longitude": 28.0862,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "81e3ebdd-70fa-4654-b0d6-ced9fd5035be",
      "code": "RIX",
      "name": "Riga",
      "country": "lv",
      "latitude": 56.9236,
      "longitude": 23.9711,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "027849c1-a27c-4568-8378-577e7110d59f",
      "code": "RJK",
      "name": "Rijeka",
      "country": "hr",
      "latitude": 45.2169,
      "longitude": 14.5703,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "c69a306f-a44a-4ed5-ae32-ec93d4156077",
      "code": "RMI",
      "name": "Rimini",
      "country": "it",
      "latitude": 44.0203,
      "longitude": 12.6117,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "11b5e723-696b-4ade-b2a6-9138bb41a2ea",
      "code": "RMU",
      "name": "Murcia International",
      "country": "es",
      "latitude": 37.7903,
      "longitude": -1.1418,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "b3222cfa-beb0-4239-a968-5377b134ff82",
      "code": "RVN",
      "name": "Lapland Rovaniemi",
      "country": "fi",
      "latitude": 66.5631,
      "longitude": 25.8301,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "869c0826-df42-4783-bed4-f70a28dd5a60",
      "code": "RZE",
      "name": "Rzeszow",
      "country": "pl",
      "latitude": 50.11,
      "longitude": 22.019,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "70ee9f00-420b-4e1c-a511-bb961748935a",
      "code": "SCQ",
      "name": "Santiago",
      "country": "es",
      "latitude": 42.8963,
      "longitude": -8.41514,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "863b1940-4db4-4e47-a501-c42e651e2a8e",
      "code": "SDR",
      "name": "Santander",
      "country": "es",
      "latitude": 43.4271,
      "longitude": -3.82001,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3e065a78-19a0-41b3-bd09-d82ebb0e001d",
      "code": "SFT",
      "name": "Skelleftea",
      "country": "se",
      "latitude": 64.6248,
      "longitude": 21.0769,
      "connections": [
          {
              "code": "ARN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "a9273c50-c84e-428f-adb4-f5a111ed967f",
      "code": "SKG",
      "name": "Thessaloniki",
      "country": "gr",
      "latitude": 40.5197,
      "longitude": 22.9709,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "982ff8bd-0c37-47f5-aea3-43eccac054b8",
      "code": "SNN",
      "name": "Shannon",
      "country": "ie",
      "latitude": 52.702,
      "longitude": -8.92482,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "LGW",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "721ff23a-2785-4695-8177-cb9074d9fd59",
      "code": "SOF",
      "name": "Sofia",
      "country": "bg",
      "latitude": 42.67,
      "longitude": 23.35,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "VAR",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4a1affcb-6bdf-43ff-bc00-ea7d542eb84b",
      "code": "SPU",
      "name": "Split",
      "country": "hr",
      "latitude": 43.5389,
      "longitude": 16.2981,
      "connections": [
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "637a09f8-5c66-4451-8ca4-4024c5862ec7",
      "code": "STN",
      "name": "London Stansted",
      "country": "gb",
      "latitude": 51.885,
      "longitude": 0.235,
      "connections": [
          {
              "code": "LDE",
              "operator": "RYANAIR"
          },
          {
              "code": "VXO",
              "operator": "RYANAIR"
          },
          {
              "code": "EFL",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "RYANAIR"
          },
          {
              "code": "VGO",
              "operator": "RYANAIR"
          },
          {
              "code": "LCJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TUF",
              "operator": "RYANAIR"
          },
          {
              "code": "CCF",
              "operator": "RYANAIR"
          },
          {
              "code": "EGC",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "RYANAIR"
          },
          {
              "code": "KSC",
              "operator": "RYANAIR"
          },
          {
              "code": "PLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "OZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRQ",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "LEJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "LEI",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "AAL",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "BSL",
              "operator": "RYANAIR"
          },
          {
              "code": "CDT",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "OVD",
              "operator": "RYANAIR"
          },
          {
              "code": "VST",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "PGF",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "NCE",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "ESU",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "DRS",
              "operator": "RYANAIR"
          },
          {
              "code": "LRH",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "PIS",
              "operator": "RYANAIR"
          },
          {
              "code": "RMU",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "ORB",
              "operator": "RYANAIR"
          },
          {
              "code": "SZG",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "KIR",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "OSR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "BIQ",
              "operator": "RYANAIR"
          },
          {
              "code": "OSL",
              "operator": "RYANAIR"
          },
          {
              "code": "OSI",
              "operator": "RYANAIR"
          },
          {
              "code": "PDV",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PDL",
              "operator": "RYANAIR"
          },
          {
              "code": "SZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZY",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "BZR",
              "operator": "RYANAIR"
          },
          {
              "code": "TMP",
              "operator": "RYANAIR"
          },
          {
              "code": "NQY",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "BZG",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "KLX",
              "operator": "RYANAIR"
          },
          {
              "code": "RJK",
              "operator": "RYANAIR"
          },
          {
              "code": "KLU",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "GNB",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "LIG",
              "operator": "RYANAIR"
          },
          {
              "code": "RDZ",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "RVN",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "FNI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "REU",
              "operator": "RYANAIR"
          },
          {
              "code": "FNC",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BVE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "XRY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f989d03e-5a03-47ff-8ed2-718a2d536e79",
      "code": "SUF",
      "name": "Lamezia",
      "country": "it",
      "latitude": 38.9054,
      "longitude": 16.2423,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOA",
              "operator": "RYANAIR"
          },
          {
              "code": "VRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "394934aa-fccc-4ee6-9bd3-42c3fa09b19e",
      "code": "SVQ",
      "name": "Seville",
      "country": "es",
      "latitude": 37.418,
      "longitude": -5.89311,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "TTU",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "VIT",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "be7d3085-b8ce-47e0-938a-c0146f00bcf6",
      "code": "SXB",
      "name": "Strasbourg",
      "country": "fr",
      "latitude": 48.5383,
      "longitude": 7.62823,
      "connections": [
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f9422d8b-3028-4c50-9e27-747347c1060b",
      "code": "SZG",
      "name": "Salzburg",
      "country": "at",
      "latitude": 47.7933,
      "longitude": 13.0043,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "564833c5-d62e-4f35-b62d-52e564286c6c",
      "code": "SZY",
      "name": "Olsztyn - Mazury",
      "country": "pl",
      "latitude": 53.4819,
      "longitude": 20.9378,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e8a5a4d8-5167-4311-be9f-c69cf42fac64",
      "code": "SZZ",
      "name": "Szczecin",
      "country": "pl",
      "latitude": 53.5847,
      "longitude": 14.9022,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1aa3c1b7-3d3a-4234-a780-59fccffbd67a",
      "code": "TER",
      "name": "Terceira Lajes",
      "country": "pt",
      "latitude": 38.761944,
      "longitude": -27.090833,
      "connections": [
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "983c2578-9406-45f8-be49-ddac61470f1d",
      "code": "TFN",
      "name": "Tenerife North",
      "country": "es",
      "latitude": 28.4827,
      "longitude": -16.3415,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "2ea56527-6cf2-4ed9-ab6a-4e58a7e26da7",
      "code": "TFS",
      "name": "Tenerife South",
      "country": "es",
      "latitude": 28.0445,
      "longitude": -16.5725,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PIK",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "NOC",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1b5b6f1c-47fa-4889-a068-9445c226c72e",
      "code": "TGD",
      "name": "Podgorica",
      "country": "me",
      "latitude": 42.3594,
      "longitude": 19.2519,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "549bb54e-33c7-4943-b8cc-9d6457abc7b5",
      "code": "TIA",
      "name": "Tirana",
      "country": "al",
      "latitude": 41.4147,
      "longitude": 19.7206,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "AOI",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BDS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRE",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIY",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EDI",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOA",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMO",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PSA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "RMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "415fc5a8-23cb-4676-aef9-380ec611f5f0",
      "code": "TLL",
      "name": "Tallinn",
      "country": "ee",
      "latitude": 59.4133,
      "longitude": 24.8328,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "6bcd6f23-0ef2-4327-a3f3-b48e9b516d72",
      "code": "TLS",
      "name": "Toulouse",
      "country": "fr",
      "latitude": 43.6044,
      "longitude": 1.4439,
      "connections": [
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "NDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "LUX",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "OUD",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "FSC",
              "operator": "RYANAIR"
          },
          {
              "code": "RBA",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "60116fbe-02dc-43aa-89a4-6aa6e7a2b728",
      "code": "TLV",
      "name": "Tel Aviv",
      "country": "il",
      "latitude": 32.0034,
      "longitude": 34.5258,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "RHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "5a1eec89-2e36-416e-962c-e911111b3753",
      "code": "TMP",
      "name": "Tampere",
      "country": "fi",
      "latitude": 61.4141,
      "longitude": 23.6044,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "29f13598-b5b5-4c13-b416-79fc64f75b8d",
      "code": "TNG",
      "name": "Tangier",
      "country": "ma",
      "latitude": 35.7269,
      "longitude": -5.91689,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "1fd4d2d4-252f-49e2-8eac-179154df2843",
      "code": "TPS",
      "name": "Trapani-Marsala",
      "country": "it",
      "latitude": 37.9114,
      "longitude": 12.488,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "85dac671-da31-45f2-83fa-e208acb0c857",
      "code": "TRF",
      "name": "Oslo Torp",
      "country": "no",
      "latitude": 59.1867,
      "longitude": 10.2586,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAG",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "adc541aa-7ac6-4914-9f1d-b12b8ab137ea",
      "code": "TRN",
      "name": "Turin",
      "country": "it",
      "latitude": 45.2008,
      "longitude": 7.64963,
      "connections": [
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "95667e07-9f58-46c5-a887-c4e8364dd102",
      "code": "TRS",
      "name": "Trieste",
      "country": "it",
      "latitude": 45.8275,
      "longitude": 13.4722,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "cd7d3ae1-3368-497c-88a7-f01774de3554",
      "code": "TSF",
      "name": "Venice Treviso",
      "country": "it",
      "latitude": 45.6484,
      "longitude": 12.1944,
      "connections": [
          {
              "code": "CRV",
              "operator": "RYANAIR"
          },
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAZ",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "71a24561-96df-4683-b3e0-5edf87c7bf43",
      "code": "TTU",
      "name": "Tétouan",
      "country": "ma",
      "latitude": 35.5944,
      "longitude": -5.32,
      "connections": [
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6e99f35d-ac01-4631-ae19-b47c698847a0",
      "code": "TUF",
      "name": "Tours Loire Valley",
      "country": "fr",
      "latitude": 47.4322,
      "longitude": 0.727606,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "f582630d-2028-426f-a210-dcbb6221f34d",
      "code": "VAR",
      "name": "Varna",
      "country": "bg",
      "latitude": 43.1355,
      "longitude": 27.4931,
      "connections": [
          {
              "code": "KTW",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "debe0fc4-c28c-41e5-a72b-974485854497",
      "code": "VBY",
      "name": "Visby Gotland",
      "country": "se",
      "latitude": 57.6596,
      "longitude": 18.3424,
      "connections": [
          {
              "code": "ARN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "333f1fc0-df18-4f56-9349-e486c3e275b7",
      "code": "VCE",
      "name": "Venice M.Polo",
      "country": "it",
      "latitude": 45.5053,
      "longitude": 12.3519,
      "connections": [
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "AHO",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "ccf5d862-46d4-4b50-aba9-87e8605539d0",
      "code": "VGO",
      "name": "Vigo",
      "country": "es",
      "latitude": 42.23,
      "longitude": -8.63,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "0153b924-826c-46c8-bc15-8e16cf3d831d",
      "code": "VIE",
      "name": "Vienna",
      "country": "at",
      "latitude": 48.0639,
      "longitude": 16.3415,
      "connections": [
          {
              "code": "EFL",
              "operator": "RYANAIR"
          },
          {
              "code": "INI",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "JSI",
              "operator": "RYANAIR"
          },
          {
              "code": "AQJ",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "VCE",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "JMK",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BNX",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "CPH",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "LCA",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "DBV",
              "operator": "RYANAIR"
          },
          {
              "code": "WAW",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "TLL",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "VAR",
              "operator": "RYANAIR"
          },
          {
              "code": "PVK",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "HER",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PUY",
              "operator": "RYANAIR"
          },
          {
              "code": "PEG",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "KLX",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "JTR",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "VNO",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BIO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "DBV",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DXB",
              "operator": "WIZZAIR"
          },
          {
              "code": "ETM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KFZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "KWI",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d374709f-15cb-4eba-8d71-f01af85b8e6c",
      "code": "VIT",
      "name": "Vitoria (Basque Country)",
      "country": "es",
      "latitude": 42.8828,
      "longitude": -2.7244,
      "connections": [
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6920211e-2bec-469d-aa9f-62dc6cab7a13",
      "code": "VLC",
      "name": "Valencia",
      "country": "es",
      "latitude": 39.4893,
      "longitude": -0.481625,
      "connections": [
          {
              "code": "ORK",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "TLS",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "TNG",
              "operator": "RYANAIR"
          },
          {
              "code": "BRU",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "SDR",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "TFN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "SVQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "NTE",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "LPA",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAH",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "IBZ",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "FUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "FEZ",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "394d8878-5f63-4230-8b64-b3a152f4325d",
      "code": "VLL",
      "name": "Valladolid",
      "country": "es",
      "latitude": 41.7061,
      "longitude": -4.85194,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "8e1b2b76-afc1-408d-aec2-f23b37ef8135",
      "code": "VNO",
      "name": "Vilnius",
      "country": "lt",
      "latitude": 54.6341,
      "longitude": 25.2858,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "LTN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "OSL",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "VAR",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AES",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGO",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVG",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a065eefc-cab4-41e1-b0ce-50ed9143935c",
      "code": "VRN",
      "name": "Verona",
      "country": "it",
      "latitude": 45.3957,
      "longitude": 10.8885,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "SUF",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4103724c-65d8-4723-995f-9faaeeedf95a",
      "code": "VST",
      "name": "Stockholm Västerås",
      "country": "se",
      "latitude": 59.5894,
      "longitude": 16.6336,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "3f14ec29-52e4-4d20-8b32-c24069b3f8cb",
      "code": "VXO",
      "name": "Växjö Småland",
      "country": "se",
      "latitude": 56.9291,
      "longitude": 14.728,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "5b5fab69-3754-479d-8460-e44a94d004d0",
      "code": "WAW",
      "name": "Warsaw Chopin",
      "country": "pl",
      "latitude": 52.1657,
      "longitude": 20.9671,
      "connections": [
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "AQJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BIO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DBV",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "FUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LPL",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OLB",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ORY",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d7c0e4e2-1738-4863-9a1e-919a0778760c",
      "code": "WMI",
      "name": "Warsaw Modlin",
      "country": "pl",
      "latitude": 52.4511,
      "longitude": 20.6517,
      "connections": [
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PSR",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "TLV",
              "operator": "RYANAIR"
          },
          {
              "code": "RHO",
              "operator": "RYANAIR"
          },
          {
              "code": "SZZ",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "RIX",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "FAO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "CTA",
              "operator": "RYANAIR"
          },
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "KUN",
              "operator": "RYANAIR"
          },
          {
              "code": "TFS",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "ZTH",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAD",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "RMI",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "TIA",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "ACE",
              "operator": "RYANAIR"
          },
          {
              "code": "TPS",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "CAG",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "AMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BOJ",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "BFS",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "ec68c40e-c7e4-4bde-b5d9-aa4782efa503",
      "code": "WRO",
      "name": "Wroclaw",
      "country": "pl",
      "latitude": 51.1027,
      "longitude": 16.8858,
      "connections": [
          {
              "code": "GRO",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "AGA",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "SZY",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BRS",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "ZAD",
              "operator": "RYANAIR"
          },
          {
              "code": "GLA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMO",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "VLC",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "BLL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "SNN",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "CHQ",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "ALC",
              "operator": "RYANAIR"
          },
          {
              "code": "ATH",
              "operator": "RYANAIR"
          },
          {
              "code": "LIS",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "CIA",
              "operator": "RYANAIR"
          },
          {
              "code": "EMA",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "DBV",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LBA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OZH",
              "operator": "WIZZAIR"
          },
          {
              "code": "RHO",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4ec2bbba-456b-4786-9086-5c6ba81f6580",
      "code": "XCR",
      "name": "Paris Vatry",
      "country": "fr",
      "latitude": 48.7761,
      "longitude": 4.18449,
      "connections": [
          {
              "code": "OPO",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "6b3b95f4-080d-4353-98b8-19fc7961f00a",
      "code": "XRY",
      "name": "Jerez",
      "country": "es",
      "latitude": 36.7446,
      "longitude": -6.06011,
      "connections": [
          {
              "code": "BCN",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "06362b58-714f-4fdc-a706-9ac6905dbd02",
      "code": "ZAD",
      "name": "Zadar",
      "country": "hr",
      "latitude": 44.1083,
      "longitude": 15.3467,
      "connections": [
          {
              "code": "VXO",
              "operator": "RYANAIR"
          },
          {
              "code": "KRK",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "WRO",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BHX",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "OTP",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "MXP",
              "operator": "RYANAIR"
          },
          {
              "code": "RZE",
              "operator": "RYANAIR"
          },
          {
              "code": "BRE",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "HEL",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "GDN",
              "operator": "RYANAIR"
          },
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "MRS",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "LPL",
              "operator": "RYANAIR"
          },
          {
              "code": "ARN",
              "operator": "RYANAIR"
          },
          {
              "code": "POZ",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "NCL",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "AAR",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "MST",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "CGN",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMO",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "NUE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "LBA",
              "operator": "RYANAIR"
          },
          {
              "code": "EDI",
              "operator": "RYANAIR"
          },
          {
              "code": "PRG",
              "operator": "RYANAIR"
          },
          {
              "code": "HAM",
              "operator": "RYANAIR"
          },
          {
              "code": "BER",
              "operator": "RYANAIR"
          },
          {
              "code": "PSA",
              "operator": "RYANAIR"
          },
          {
              "code": "BOH",
              "operator": "RYANAIR"
          },
          {
              "code": "BOD",
              "operator": "RYANAIR"
          },
          {
              "code": "TRN",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "226bb512-7f3a-4bcc-b256-06376374d7b7",
      "code": "ZAG",
      "name": "Zagreb",
      "country": "hr",
      "latitude": 45.7431,
      "longitude": 16.0689,
      "connections": [
          {
              "code": "HHN",
              "operator": "RYANAIR"
          },
          {
              "code": "BTS",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "MAN",
              "operator": "RYANAIR"
          },
          {
              "code": "MMX",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "TGD",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "GOT",
              "operator": "RYANAIR"
          },
          {
              "code": "AGP",
              "operator": "RYANAIR"
          },
          {
              "code": "SOF",
              "operator": "RYANAIR"
          },
          {
              "code": "FMM",
              "operator": "RYANAIR"
          },
          {
              "code": "BDS",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "CFU",
              "operator": "RYANAIR"
          },
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NRN",
              "operator": "RYANAIR"
          },
          {
              "code": "TRF",
              "operator": "RYANAIR"
          },
          {
              "code": "MLA",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "KGS",
              "operator": "RYANAIR"
          },
          {
              "code": "SKG",
              "operator": "RYANAIR"
          },
          {
              "code": "EIN",
              "operator": "RYANAIR"
          },
          {
              "code": "FKB",
              "operator": "RYANAIR"
          },
          {
              "code": "BSL",
              "operator": "RYANAIR"
          },
          {
              "code": "PFO",
              "operator": "RYANAIR"
          }
      ]
  },
  {
      "id": "4d73632e-9b42-4eec-9d24-c43dd77bed6c",
      "code": "ZAZ",
      "name": "Zaragoza",
      "country": "es",
      "latitude": 41.6662,
      "longitude": -1.04155,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "BLQ",
              "operator": "RYANAIR"
          },
          {
              "code": "SCQ",
              "operator": "RYANAIR"
          },
          {
              "code": "CRL",
              "operator": "RYANAIR"
          },
          {
              "code": "RAK",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "BVA",
              "operator": "RYANAIR"
          },
          {
              "code": "PMI",
              "operator": "RYANAIR"
          },
          {
              "code": "TSF",
              "operator": "RYANAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7cd7cdef-531e-4e18-8df4-abd7f15a6636",
      "code": "ZTH",
      "name": "Zakynthos",
      "country": "gr",
      "latitude": 37.7509,
      "longitude": 20.8843,
      "connections": [
          {
              "code": "STN",
              "operator": "RYANAIR"
          },
          {
              "code": "NAP",
              "operator": "RYANAIR"
          },
          {
              "code": "BRI",
              "operator": "RYANAIR"
          },
          {
              "code": "WMI",
              "operator": "RYANAIR"
          },
          {
              "code": "BGY",
              "operator": "RYANAIR"
          },
          {
              "code": "FCO",
              "operator": "RYANAIR"
          },
          {
              "code": "VIE",
              "operator": "RYANAIR"
          },
          {
              "code": "BUD",
              "operator": "RYANAIR"
          },
          {
              "code": "DUB",
              "operator": "RYANAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "31464f94-897f-4719-b29c-247d3f47d164",
      "code": "KFZ",
      "name": "Kukës",
      "country": "Albania",
      "latitude": 42.03333333333333,
      "longitude": 20.4,
      "connections": [
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "62ab0232-1610-48f9-98e3-b2744651d00c",
      "code": "EVN",
      "name": "Yerevan",
      "country": "Armenia",
      "latitude": 40.15,
      "longitude": 44.4,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0f910ed0-bebb-4257-a64c-3d32a81150b6",
      "code": "GYD",
      "name": "Baku",
      "country": "Azerbaijan",
      "latitude": 40.5,
      "longitude": 49.98333333333333,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c0fd57bf-f485-464f-a914-0a208b6a151f",
      "code": "BAH",
      "name": "Bahrain",
      "country": "Bahrain",
      "latitude": 26.27083333333333,
      "longitude": 50.6375,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3cee8da1-641e-476c-8ff1-e4d88bdcef28",
      "code": "SJJ",
      "name": "Sarajevo",
      "country": "Bosnia and Herzegovina",
      "latitude": 43.81888888888889,
      "longitude": 18.33805555555556,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c2d8184b-4e32-4d67-a72f-2b96f6d48eab",
      "code": "TZL",
      "name": "Tuzla",
      "country": "Bosnia and Herzegovina",
      "latitude": 44.40972222222222,
      "longitude": 18.70916666666666,
      "connections": [
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FDH",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "891d8262-096d-43d3-adff-9754f048b270",
      "code": "HBE",
      "name": "Alexandria (Borg El Arab)",
      "country": "Egypt",
      "latitude": 30.9,
      "longitude": 29.68333333333333,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "70328400-d9e3-484f-8306-973a4e5d72a8",
      "code": "SPX",
      "name": "Cairo (Sphinx)",
      "country": "Egypt",
      "latitude": 30.10972222222222,
      "longitude": 30.89444444444445,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fbbe2a05-773d-413b-be6a-8784d722e7ec",
      "code": "HRG",
      "name": "Hurghada",
      "country": "Egypt",
      "latitude": 27.2,
      "longitude": 33.86666666666667,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "4c4e569a-3ecf-4965-a190-48ece667a21e",
      "code": "RMF",
      "name": "Marsa Alam",
      "country": "Egypt",
      "latitude": 25.63333333333333,
      "longitude": 34.56944444444445,
      "connections": [
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e03bc5bc-e5e7-4196-98de-26dd3109e8a6",
      "code": "SSH",
      "name": "Sharm El Sheikh",
      "country": "Egypt",
      "latitude": 27.85,
      "longitude": 34.26666666666667,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0fad8e83-ff4b-4a14-aad1-ec97a0b5d9d9",
      "code": "HMB",
      "name": "Sohag",
      "country": "Egypt",
      "latitude": 26.34277777777778,
      "longitude": 31.74277777777778,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "32a0f74c-7667-450b-bf48-9aa336d07743",
      "code": "TKU",
      "name": "Turku",
      "country": "Finland",
      "latitude": 60.51416666666667,
      "longitude": 22.27055555555555,
      "connections": [
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0f25d5fb-29fd-4d9c-b018-f65a4d20ddb8",
      "code": "MLH",
      "name": "Basel-Mulhouse-Freiburg",
      "country": "France",
      "latitude": 47.60666666666667,
      "longitude": 7.546666666666667,
      "connections": [
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BNX",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "INI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KFZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "OHD",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "b26ca66d-f09f-4df5-8f48-b276150a9b7f",
      "code": "LYS",
      "name": "Lyon",
      "country": "France",
      "latitude": 45.72555555555556,
      "longitude": 5.081666666666666,
      "connections": [
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "965eb752-46a8-4d93-b484-5a757331f92d",
      "code": "PAR",
      "name": "Paris (Any)",
      "country": "France",
      "latitude": 48.86444444444444,
      "longitude": 2.348888888888889,
      "connections": [
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "32f417c5-7f10-454f-b9d2-02b379a5a74c",
      "code": "ORY",
      "name": "Paris Orly",
      "country": "France",
      "latitude": 48.72888888888889,
      "longitude": 2.357222222222222,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "f8f24cdf-eb6c-49bd-84de-baef6855719c",
      "code": "KUT",
      "name": "Kutaisi",
      "country": "Georgia",
      "latitude": 42.25,
      "longitude": 42.7,
      "connections": [
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "f14ceec3-89e3-4da1-a2d0-d4fcdeb5984f",
      "code": "FDH",
      "name": "Friedrichshafen",
      "country": "Germany",
      "latitude": 47.66722222222222,
      "longitude": 9.5125,
      "connections": [
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bd73526c-6c62-4631-ae1f-2e1ff00b1126",
      "code": "DEB",
      "name": "Debrecen",
      "country": "Hungary",
      "latitude": 47.55,
      "longitude": 21.7,
      "connections": [
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "44b057bf-0f5c-4e5d-977a-f8a93bfa55bc",
      "code": "KEF",
      "name": "Reykjavik",
      "country": "Iceland",
      "latitude": 63.985,
      "longitude": -22.60611111111111,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1977acfc-0cc1-49f6-a0fc-c797a830c6f0",
      "code": "ETM",
      "name": "Eilat",
      "country": "Israel",
      "latitude": 29.55472222222222,
      "longitude": 34.95527777777778,
      "connections": [
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "15b04cfe-dbdd-4273-aeb3-2cd01c0bec54",
      "code": "CIY",
      "name": "Comiso",
      "country": "Italy",
      "latitude": 36.99166666666667,
      "longitude": 14.60694444444444,
      "connections": [
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "db3e7c60-a03f-4814-8591-28de084b6d63",
      "code": "LMP",
      "name": "Lampedusa",
      "country": "Italy",
      "latitude": 35.5,
      "longitude": 12.61666666666667,
      "connections": [
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1c283fb8-0420-4025-a7eb-5669f561f93b",
      "code": "MIL",
      "name": "Milan (Any)",
      "country": "Italy",
      "latitude": 45.46472222222223,
      "longitude": 9.188611111111111,
      "connections": [
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCM",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LMP",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OLB",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RMF",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "78c32620-8603-47a0-bebf-a10caf025231",
      "code": "LIN",
      "name": "Milan Linate",
      "country": "Italy",
      "latitude": 45.44166666666666,
      "longitude": 9.277777777777779,
      "connections": [
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "d3ad4331-e72c-48a8-b31c-e85c5887fa08",
      "code": "OLB",
      "name": "Olbia (Sardinia)",
      "country": "Italy",
      "latitude": 40.86638888888889,
      "longitude": 9.500277777777777,
      "connections": [
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "aa172e9e-4d3c-489f-b625-70c469501acd",
      "code": "ROM",
      "name": "Rome (Any)",
      "country": "Italy",
      "latitude": 41.90277777777778,
      "longitude": 12.49638888888889,
      "connections": [
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OLB",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CDT",
              "operator": "WIZZAIR"
          },
          {
              "code": "CFU",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EFL",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "ETM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FNC",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "GYD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "IBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JMK",
              "operator": "WIZZAIR"
          },
          {
              "code": "JSI",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KGS",
              "operator": "WIZZAIR"
          },
          {
              "code": "KWI",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LMP",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUX",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ORY",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "RZE",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SVQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TKU",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "63d0b585-86ee-4da3-8819-bb0d2510f913",
      "code": "VEN",
      "name": "Venice (Any)",
      "country": "Italy",
      "latitude": 45.43888888888888,
      "longitude": 12.32722222222222,
      "connections": [
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "JED",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TFS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "163c474e-3cfe-4c8a-bace-9d2a127c6e7e",
      "code": "ALA",
      "name": "Almaty",
      "country": "Kazakhstan",
      "latitude": 43.35,
      "longitude": 77.03333333333333,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1fd04712-eaa2-48b9-a416-2446ade244b9",
      "code": "NQZ",
      "name": "Astana",
      "country": "Kazakhstan",
      "latitude": 51.02277777777778,
      "longitude": 71.46611111111112,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "19cd1f1c-1462-442b-998e-1def4e836db5",
      "code": "PRN",
      "name": "Prishtina",
      "country": "Kosovo",
      "latitude": 42.57361111111111,
      "longitude": 21.03555555555556,
      "connections": [
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "74cded2e-f4df-4497-a85a-c968dfd57f53",
      "code": "KWI",
      "name": "Kuwait",
      "country": "Kuwait",
      "latitude": 29.23027777777778,
      "longitude": 47.97527777777778,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "be26e56b-ff87-4d8a-928e-59f974010f34",
      "code": "FRU",
      "name": "Bishkek",
      "country": "Kyrgyzstan",
      "latitude": 42.83333333333334,
      "longitude": 74.56666666666666,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7023d199-732c-4a51-b856-9440bc672815",
      "code": "MLE",
      "name": "Malé (Maldives)",
      "country": "Maldives",
      "latitude": 4.201388888888889,
      "longitude": 73.52444444444444,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1825b13c-95f9-45b0-be55-2f5a41333acd",
      "code": "CMN",
      "name": "Casablanca",
      "country": "Morocco",
      "latitude": 33.36666666666667,
      "longitude": -7.586666666666666,
      "connections": [
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e0d35733-aca7-4822-a484-a13f04f1aca7",
      "code": "OHD",
      "name": "Ohrid",
      "country": "North Macedonia",
      "latitude": 41.185,
      "longitude": 20.74305555555556,
      "connections": [
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a8ec6887-3396-4826-9604-53945416a0ff",
      "code": "SKP",
      "name": "Skopje",
      "country": "North Macedonia",
      "latitude": 41.96666666666667,
      "longitude": 21.63333333333333,
      "connections": [
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRE",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FDH",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LJU",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUX",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRF",
              "operator": "WIZZAIR"
          },
          {
              "code": "OOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VXO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0087906a-9f06-4993-a90e-8719991b0c73",
      "code": "AES",
      "name": "Alesund",
      "country": "Norway",
      "latitude": 62.5625,
      "longitude": 6.105277777777777,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a9e1d85a-0409-4cd6-8990-b7584de119ea",
      "code": "BGO",
      "name": "Bergen",
      "country": "Norway",
      "latitude": 60.29361111111111,
      "longitude": 5.219444444444445,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "2a700706-8232-4e59-80e6-8dce86aa8b5b",
      "code": "HAU",
      "name": "Haugesund",
      "country": "Norway",
      "latitude": 59.40555555555555,
      "longitude": 5.279166666666667,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0c8bf691-a28d-4a05-819f-c53f0bac4b71",
      "code": "OOS",
      "name": "Oslo (Any)",
      "country": "Norway",
      "latitude": 59.9125,
      "longitude": 10.74583333333333,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "58fc1c9a-1b39-49b8-a727-bac45ab5c468",
      "code": "SVG",
      "name": "Stavanger",
      "country": "Norway",
      "latitude": 58.87972222222222,
      "longitude": 5.634722222222222,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "50928da6-6c63-4b7d-ab1b-d69b9b98a56b",
      "code": "TOS",
      "name": "Tromso",
      "country": "Norway",
      "latitude": 69.68138888888889,
      "longitude": 18.92166666666667,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "50e9fc13-f3d6-437c-93a5-3f1e6c46a333",
      "code": "TRD",
      "name": "Trondheim",
      "country": "Norway",
      "latitude": 63.45,
      "longitude": 10.93333333333333,
      "connections": [
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "fe95f83f-8e29-4a37-8597-2f7e867cdb85",
      "code": "MCT",
      "name": "Muscat",
      "country": "Oman",
      "latitude": 23.59166666666667,
      "longitude": 58.27916666666667,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "8cb5c40c-151e-4ec8-a80c-9168b3cfde15",
      "code": "SLL",
      "name": "Salalah",
      "country": "Oman",
      "latitude": 17.03638888888889,
      "longitude": 54.10166666666667,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "23f6622d-e0cd-4c79-8151-15b10432f955",
      "code": "BCM",
      "name": "Bacau",
      "country": "Romania",
      "latitude": 46.59861111111111,
      "longitude": 26.88194444444445,
      "connections": [
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3ea3ac7d-d49f-4063-9891-1dceaf31ca64",
      "code": "GHV",
      "name": "Brasov",
      "country": "Romania",
      "latitude": 45.70166666666667,
      "longitude": 25.52,
      "connections": [
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "deaedce2-4dfd-4856-a8c4-1f3949d4b928",
      "code": "CND",
      "name": "Constanta",
      "country": "Romania",
      "latitude": 44.35,
      "longitude": 28.48333333333333,
      "connections": [
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e56f145c-ea11-41e3-b76b-8920398a4563",
      "code": "CRA",
      "name": "Craiova",
      "country": "Romania",
      "latitude": 44.31888888888889,
      "longitude": 23.88638888888889,
      "connections": [
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BHX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TRN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "99a9dc72-4213-4611-bffc-90acc6e4a796",
      "code": "SUJ",
      "name": "Satu Mare",
      "country": "Romania",
      "latitude": 47.7,
      "longitude": 22.88333333333333,
      "connections": [
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1584b866-0565-48fd-b3d3-6b1b6bb1fe99",
      "code": "SBZ",
      "name": "Sibiu",
      "country": "Romania",
      "latitude": 45.78333333333333,
      "longitude": 24.08333333333333,
      "connections": [
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "8a6fb644-5d7c-4e97-bbb1-27b5824b1ca8",
      "code": "SCV",
      "name": "Suceava",
      "country": "Romania",
      "latitude": 47.68944444444444,
      "longitude": 26.35611111111111,
      "connections": [
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "18fd06c4-b1a9-4a59-8fe8-a8087285b11a",
      "code": "TSR",
      "name": "Timisoara",
      "country": "Romania",
      "latitude": 45.81666666666667,
      "longitude": 21.33333333333333,
      "connections": [
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BRI",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HHN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "16d32904-0eb9-4eaf-ae5d-c9252cc99af8",
      "code": "TGM",
      "name": "Tirgu Mures",
      "country": "Romania",
      "latitude": 46.53333333333333,
      "longitude": 24.53333333333333,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "b7c6db9a-ec5e-4677-b8b3-08c7afceec5e",
      "code": "KRR",
      "name": "Krasnodar",
      "country": "Russia",
      "latitude": 45.06666666666667,
      "longitude": 38.91666666666666,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e7841e42-58ac-4f61-a873-f4c8fab93629",
      "code": "VKO",
      "name": "Moscow",
      "country": "Russia",
      "latitude": 55.58333333333334,
      "longitude": 37.26666666666667,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bf80eaf2-3540-4b2a-b854-b67bfb39b45c",
      "code": "DMM",
      "name": "Dammam",
      "country": "Saudi Arabia",
      "latitude": 26.46666666666667,
      "longitude": 49.8,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "8daa6c44-a481-4814-8a82-cc2f5b952192",
      "code": "JED",
      "name": "Jeddah",
      "country": "Saudi Arabia",
      "latitude": 21.68333333333333,
      "longitude": 39.15,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "9d8fb0f8-be81-4c4b-8631-bd1d49b91f1e",
      "code": "MED",
      "name": "Madinah",
      "country": "Saudi Arabia",
      "latitude": 24.545,
      "longitude": 39.72111111111111,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "6b84207a-ed7e-4d19-bbc0-c3c0bbca2bf9",
      "code": "RUH",
      "name": "Riyadh",
      "country": "Saudi Arabia",
      "latitude": 24.96666666666667,
      "longitude": 46.7,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "33eea36c-c3ef-4d77-a973-a1aa9365390c",
      "code": "BEG",
      "name": "Belgrade",
      "country": "Serbia",
      "latitude": 44.81916666666667,
      "longitude": 20.31222222222222,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BGY",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FKB",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GOT",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MMX",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ZTH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "c9ff60d9-81eb-4d47-b5e7-756d4934cb23",
      "code": "TAT",
      "name": "Poprad-Tatry",
      "country": "Slovakia",
      "latitude": 49.07194444444445,
      "longitude": 20.24027777777778,
      "connections": [
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3aa8f826-089f-41c7-902b-3510d8510bb4",
      "code": "LJU",
      "name": "Ljubljana",
      "country": "Slovenia",
      "latitude": 46.22472222222223,
      "longitude": 14.46083333333333,
      "connections": [
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "baa7a5a2-1016-4e36-93a0-1abde53ace6d",
      "code": "BIO",
      "name": "Bilbao",
      "country": "Spain",
      "latitude": 43.30277777777778,
      "longitude": -2.921666666666666,
      "connections": [
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0ec197c9-509a-42e2-88aa-95b9b43e039b",
      "code": "NYO",
      "name": "Stockholm Skavsta",
      "country": "Sweden",
      "latitude": 58.75,
      "longitude": 17,
      "connections": [
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BNX",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TZL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7f289d23-c8c0-410a-9619-e6921aff9d74",
      "code": "GVA",
      "name": "Geneva",
      "country": "Switzerland",
      "latitude": 46.23805555555555,
      "longitude": 6.108888888888888,
      "connections": [
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0405bf44-aafa-4587-bc07-60e4d2f7d591",
      "code": "ESB",
      "name": "Ankara",
      "country": "Türkiye",
      "latitude": 40.13333333333333,
      "longitude": 33,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "3aa03a3b-318d-494b-bcaf-fd595e4f2bf5",
      "code": "AYT",
      "name": "Antalya",
      "country": "Türkiye",
      "latitude": 36.90555555555555,
      "longitude": 30.79055555555556,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "f2a0d62c-e33b-4f56-8170-d9b172ec1ced",
      "code": "IST",
      "name": "Istanbul",
      "country": "Türkiye",
      "latitude": 40.97666666666667,
      "longitude": 28.81527777777778,
      "connections": [
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LGW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "7d126ab2-10a9-4626-9b48-7a3e9dfc405e",
      "code": "HRK",
      "name": "Kharkiv",
      "country": "Ukraine",
      "latitude": 49.93333333333333,
      "longitude": 36.28333333333333,
      "connections": [
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "PED",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "e0097cef-a211-4c22-a87b-afe956e56b84",
      "code": "IEV",
      "name": "Kyiv - Zhulyany",
      "country": "Ukraine",
      "latitude": 50.40194444444445,
      "longitude": 30.45083333333333,
      "connections": [
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PED",
              "operator": "WIZZAIR"
          },
          {
              "code": "PLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "cf058afb-d052-425e-9034-1017ce2efe90",
      "code": "WKV",
      "name": "Kyiv (Any)",
      "country": "Ukraine",
      "latitude": 50.40194444444445,
      "longitude": 30.45083333333333,
      "connections": [
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ALC",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BSL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CGN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CHQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CPH",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "HAM",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLH",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NUE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NYO",
              "operator": "WIZZAIR"
          },
          {
              "code": "OPO",
              "operator": "WIZZAIR"
          },
          {
              "code": "PED",
              "operator": "WIZZAIR"
          },
          {
              "code": "PLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          },
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "a02cfc94-fcc8-42ae-b866-4b18bedbac88",
      "code": "LWO",
      "name": "Lviv",
      "country": "Ukraine",
      "latitude": 49.81666666666667,
      "longitude": 23.85,
      "connections": [
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCN",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "BVA",
              "operator": "WIZZAIR"
          },
          {
              "code": "PAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "CIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRL",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DTM",
              "operator": "WIZZAIR"
          },
          {
              "code": "EIN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MAD",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "PED",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VLC",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0e18f7d2-236b-44c7-84ce-c70f4a49c969",
      "code": "ODS",
      "name": "Odesa",
      "country": "Ukraine",
      "latitude": 46.43333333333333,
      "longitude": 30.68333333333333,
      "connections": [
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BER",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "LTN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LON",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "PED",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "62e079a1-f844-4434-855f-d9f0c6ed53d3",
      "code": "OZH",
      "name": "Zaporizhzhya",
      "country": "Ukraine",
      "latitude": 47.8675,
      "longitude": 35.31583333333333,
      "connections": [
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "0c24e977-f6a1-443d-931c-3c6eead57a9d",
      "code": "KBP",
      "name": "Kyiv – Boryspil",
      "country": "Ukraine",
      "latitude": 50.35,
      "longitude": 30.91666666666667,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "bbea56bc-8d08-43eb-824f-d8d2e8134aa1",
      "code": "AUH",
      "name": "Abu Dhabi",
      "country": "United Arab Emirates",
      "latitude": 24.43333333333333,
      "longitude": 54.65,
      "connections": [
          {
              "code": "ALA",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "AQJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BAH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ESB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FRU",
              "operator": "WIZZAIR"
          },
          {
              "code": "GYD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HMB",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KBP",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "KWI",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MCT",
              "operator": "WIZZAIR"
          },
          {
              "code": "MED",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NQZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SJJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKD",
              "operator": "WIZZAIR"
          },
          {
              "code": "SLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "TAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VKO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "1108bc79-8954-4ecb-98f4-2aa26701ca22",
      "code": "DXB",
      "name": "Dubai",
      "country": "United Arab Emirates",
      "latitude": 25.25,
      "longitude": 55.35777777777778,
      "connections": [
          {
              "code": "ALA",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "AQJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BAH",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "DMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "ESB",
              "operator": "WIZZAIR"
          },
          {
              "code": "EVN",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FRU",
              "operator": "WIZZAIR"
          },
          {
              "code": "GYD",
              "operator": "WIZZAIR"
          },
          {
              "code": "HBE",
              "operator": "WIZZAIR"
          },
          {
              "code": "HMB",
              "operator": "WIZZAIR"
          },
          {
              "code": "JTR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KBP",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRR",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUT",
              "operator": "WIZZAIR"
          },
          {
              "code": "KWI",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "MCT",
              "operator": "WIZZAIR"
          },
          {
              "code": "MED",
              "operator": "WIZZAIR"
          },
          {
              "code": "MLE",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NQZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SJJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKD",
              "operator": "WIZZAIR"
          },
          {
              "code": "SLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPX",
              "operator": "WIZZAIR"
          },
          {
              "code": "TAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VKO",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "630f9f2b-d91f-4fc5-a1d9-171451bf0158",
      "code": "LON",
      "name": "London (Any)",
      "country": "United Kingdom",
      "latitude": 51.51,
      "longitude": -0.1180555555555556,
      "connections": [
          {
              "code": "AGA",
              "operator": "WIZZAIR"
          },
          {
              "code": "AGP",
              "operator": "WIZZAIR"
          },
          {
              "code": "ATH",
              "operator": "WIZZAIR"
          },
          {
              "code": "AYT",
              "operator": "WIZZAIR"
          },
          {
              "code": "BUD",
              "operator": "WIZZAIR"
          },
          {
              "code": "CTA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DLM",
              "operator": "WIZZAIR"
          },
          {
              "code": "FAO",
              "operator": "WIZZAIR"
          },
          {
              "code": "FCO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ROM",
              "operator": "WIZZAIR"
          },
          {
              "code": "GNB",
              "operator": "WIZZAIR"
          },
          {
              "code": "HRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "IST",
              "operator": "WIZZAIR"
          },
          {
              "code": "KRK",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCA",
              "operator": "WIZZAIR"
          },
          {
              "code": "LYS",
              "operator": "WIZZAIR"
          },
          {
              "code": "MXP",
              "operator": "WIZZAIR"
          },
          {
              "code": "MIL",
              "operator": "WIZZAIR"
          },
          {
              "code": "NAP",
              "operator": "WIZZAIR"
          },
          {
              "code": "NCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "OTP",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRG",
              "operator": "WIZZAIR"
          },
          {
              "code": "RAK",
              "operator": "WIZZAIR"
          },
          {
              "code": "SSH",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGD",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLV",
              "operator": "WIZZAIR"
          },
          {
              "code": "VCE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VEN",
              "operator": "WIZZAIR"
          },
          {
              "code": "VIE",
              "operator": "WIZZAIR"
          },
          {
              "code": "VRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "AMM",
              "operator": "WIZZAIR"
          },
          {
              "code": "BCM",
              "operator": "WIZZAIR"
          },
          {
              "code": "BEG",
              "operator": "WIZZAIR"
          },
          {
              "code": "BOJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "BTS",
              "operator": "WIZZAIR"
          },
          {
              "code": "BZG",
              "operator": "WIZZAIR"
          },
          {
              "code": "CLJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "CMN",
              "operator": "WIZZAIR"
          },
          {
              "code": "CND",
              "operator": "WIZZAIR"
          },
          {
              "code": "CRA",
              "operator": "WIZZAIR"
          },
          {
              "code": "DBV",
              "operator": "WIZZAIR"
          },
          {
              "code": "DEB",
              "operator": "WIZZAIR"
          },
          {
              "code": "GDN",
              "operator": "WIZZAIR"
          },
          {
              "code": "GHV",
              "operator": "WIZZAIR"
          },
          {
              "code": "HER",
              "operator": "WIZZAIR"
          },
          {
              "code": "IAS",
              "operator": "WIZZAIR"
          },
          {
              "code": "IEV",
              "operator": "WIZZAIR"
          },
          {
              "code": "WKV",
              "operator": "WIZZAIR"
          },
          {
              "code": "KEF",
              "operator": "WIZZAIR"
          },
          {
              "code": "KSC",
              "operator": "WIZZAIR"
          },
          {
              "code": "KTW",
              "operator": "WIZZAIR"
          },
          {
              "code": "KUN",
              "operator": "WIZZAIR"
          },
          {
              "code": "LCJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "LIS",
              "operator": "WIZZAIR"
          },
          {
              "code": "LJU",
              "operator": "WIZZAIR"
          },
          {
              "code": "LUZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "LWO",
              "operator": "WIZZAIR"
          },
          {
              "code": "ODS",
              "operator": "WIZZAIR"
          },
          {
              "code": "PDV",
              "operator": "WIZZAIR"
          },
          {
              "code": "PLQ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PMI",
              "operator": "WIZZAIR"
          },
          {
              "code": "POZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "PRN",
              "operator": "WIZZAIR"
          },
          {
              "code": "RIX",
              "operator": "WIZZAIR"
          },
          {
              "code": "SBZ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SCV",
              "operator": "WIZZAIR"
          },
          {
              "code": "SJJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKG",
              "operator": "WIZZAIR"
          },
          {
              "code": "SKP",
              "operator": "WIZZAIR"
          },
          {
              "code": "SOF",
              "operator": "WIZZAIR"
          },
          {
              "code": "SPU",
              "operator": "WIZZAIR"
          },
          {
              "code": "SUJ",
              "operator": "WIZZAIR"
          },
          {
              "code": "SZY",
              "operator": "WIZZAIR"
          },
          {
              "code": "TAT",
              "operator": "WIZZAIR"
          },
          {
              "code": "TGM",
              "operator": "WIZZAIR"
          },
          {
              "code": "TIA",
              "operator": "WIZZAIR"
          },
          {
              "code": "TLL",
              "operator": "WIZZAIR"
          },
          {
              "code": "TOS",
              "operator": "WIZZAIR"
          },
          {
              "code": "TSR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VAR",
              "operator": "WIZZAIR"
          },
          {
              "code": "VNO",
              "operator": "WIZZAIR"
          },
          {
              "code": "WAW",
              "operator": "WIZZAIR"
          },
          {
              "code": "WRO",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "dc1d2863-1ec1-4a6f-9c35-f2634ed8969a",
      "code": "SKD",
      "name": "Samarkand",
      "country": "Uzbekistan",
      "latitude": 39.7,
      "longitude": 67,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  },
  {
      "id": "da1886b4-19f1-4620-83ce-27b32b4c1073",
      "code": "TAS",
      "name": "Tashkent",
      "country": "Uzbekistan",
      "latitude": 41.25,
      "longitude": 69.28333333333333,
      "connections": [
          {
              "code": "AUH",
              "operator": "WIZZAIR"
          }
      ]
  }
]