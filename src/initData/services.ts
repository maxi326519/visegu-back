const services = [
  {
    description: " Replace Landing Gear Wheel  Metal Caster  ",
    code: "MC9005",
  },
  {
    description: " Replace Eye Hook Latch Kit (0.3)\n            #4X1307",
    code: "XC1001",
  },
  {
    description:
      " Replace Handle Assembly - With Roll Pin - 8” long (for use on 600, 700 and 800 series Jacks) ",
    code: "XC1002",
  },
  {
    description: "Replace  - Eye Hook Latch kit  #  4X1307  ",
    code: "XC1005",
  },
  {
    description:
      " Pull Handle Kit For Fifth Wheel. Left Release - KIT-PUL-  6000L ",
    code: "XC1006",
  },
  {
    description: "   Replace 7 way  Plug Conductor 15-730   ",
    code: "XC1007",
  },
  {
    description: " Replace Pull Button Valve RSL17600B  or 17600B   ",
    code: "XC1008",
  },
  {
    description: " Check Lights",
    code: "L2004",
  },
  {
    description: " REPLACE TAIL LIGHT",
    code: "ES2002",
  },
  {
    description: " Replace Turn Indicator Lamp",
    code: "ES2007",
  },
  {
    description: " Replace Pig Tail - Plug ( 3 Way )",
    code: "ES2009",
  },
  {
    description: " Replace Reflectors round ",
    code: "ES2015",
  },
  {
    description: ' Marker Light 2" Round Red Non Flange 30201Y  or  30201R',
    code: "ES2017",
  },
  {
    description: ' Replace  Marker Light LED 2" with Flange 30051Y  or  30051R',
    code: "ES2017AB",
  },
  {
    description: " Reconnect Market Light ",
    code: "ES2017c",
  },
  {
    description: " REPLACE L/ PLATE LIGHT",
    code: "ES2020",
  },
  {
    description: " Replace Licence Plate Mount Plastic",
    code: "ES2020ab",
  },
  {
    description:
      " Replace License Plate Light and Plastic Mount # 15011 ,  15200c3",
    code: "ES2020B",
  },
  {
    description: " Replace Electrical Plug - 7 Way",
    code: "ES2022",
  },
  {
    description: " RESECURE 7 WAY",
    code: "ES2024",
  },
  {
    description: " RESECURE LOOSE WIRING",
    code: "ES2026",
  },
  {
    description: " REPLACE BOLSTER HARNESS LEFT",
    code: "ES2027",
  },
  {
    description: "Labopr : REPLACE BOLSTER HARNESS RIGHT",
    code: "ES2028",
  },
  {
    description: " REPLACE LIGHT BRACKET",
    code: "ES2030",
  },
  {
    description: " REPLACE ABS LIGHT",
    code: "ES2032",
  },
  {
    description: " Replace Harness wire Cable (7 way)",
    code: "ES2034",
  },
  {
    description: " Replace Harness wire Cable and butt connecters",
    code: "ES2034b",
  },
  {
    description:
      " Replace complete Harness wire and Rewire - Rear Bolster  - 53' FT",
    code: "ES2038",
  },
  {
    description: " Replace 7 Way (Small)",
    code: "ES2041",
  },
  {
    description: " TRACE + REPAIR ELECTRICAL PROBLEM.",
    code: "ES2044",
  },
  {
    description: " REPLACE BULBS",
    code: "ES2068",
  },
  {
    description: " Repair Wire Broken",
    code: "ES2077",
  },
  {
    description: " Install Conspicuity Tape",
    code: "ES2078",
  },
  {
    description: " Replace Stop Light",
    code: "ES4001",
  },
  {
    description: " Inspection Trailer Lights",
    code: "L2011",
  },
  {
    description: " Remove and Reinstall Stop Light Safety Cover Plate ",
    code: "MDE30012",
  },
  {
    description: " Straight Signal Light Bracket ",
    code: "MI40019",
  },
  {
    description: " Replace Stop Light  with Flange  ",
    code: "ML4001",
  },
  {
    description:
      ' Replace Marker Light Oval 4"  and Plastic Base   1259A  or 1259-3 ',
    code: "ML40010    ",
  },
  {
    description: " Replace License Plate Light and Plastic Base ",
    code: "ML40011",
  },
  {
    description: " Replace Marker Light  (Non Flange ) ",
    code: "ML40012",
  },
  {
    description: " Replace Marker Light with Flange ",
    code: "ML40013",
  },
  {
    description: " Replace Marker Light  Rectangule LED  Front  Top \n35200Y3",
    code: "ML40014FT",
  },
  {
    description: " Replace Marker Light Rectangule LED  Rear Top ",
    code: "ML40014RT",
  },
  {
    description: " Replace Marker Light Plug ",
    code: "ML40015",
  },
  {
    description: " Replace Marker Light Rectangle  Regular   Parts # 19200  ",
    code: "ML40016",
  },
  {
    description:
      " Replace Marker Light Rectangle  Regular  and  Plastic Base -Front  Top     Parts # 19200Y3  and  19721-3",
    code: "ML40016F",
  },
  {
    description:
      " Replace Marker Light Rectangle  Regular and Plastic Base   -Rear Top     Parts # 19200R3  and  19721-3",
    code: "ML40016R",
  },
  {
    description: "  Replace  Marker Light Rectangular LED Front  Top ",
    code: "ML40017FT",
  },
  {
    description: "  Replace  Marker Light Rectangular LED Rear Top ",
    code: "ML40017RT",
  },
  {
    description: " Replace pig tail plug  2 way ",
    code: "ML40018",
  },
  {
    description:
      " Replace Marker Light Oval 4'  and Plastic Base   1259A , GRT45263   , GRT45262 or 1259-3  Front Top   ",
    code: "ML40019F",
  },
  {
    description:
      " Replace Marker Light Oval 4' + Plastic Base  Rear Top  GRT45262  and Screws   ",
    code: "ML40019R",
  },
  {
    description: " Replace Stop Light Grommet ",
    code: "ML4002",
  },
  {
    description: " Replace 7 Way Large ",
    code: "ML40020",
  },
  {
    description: " Replace Marker Light  Rectangular regular Front Top  ",
    code: "ML40021FT",
  },
  {
    description: " Replace Marker Light  Rectangular regular Rear Top  ",
    code: "ML40021RT",
  },
  {
    description:
      " Replace Stop Light Kit Square   \n              Truck-Lite Part #  41007R",
    code: "ML40022",
  },
  {
    description: " Replace 7 Way Aluminium Mount 16-775  16775  ",
    code: "ML40023",
  },
  {
    description:
      " Replace Stop Light Regular (Non Flange )   GRT52922 or 52922   ",
    code: "ML40024",
  },
  {
    description: " Trace and Repair Electrical Problem ",
    code: "ML40025",
  },
  {
    description: " Replace pigtail - plug (3 way) ",
    code: "ML4003",
  },
  {
    description:
      ' Replace Turn Signal Light 6"  Oval Regular \n60215Y3 Marker Light Oval 6"  Turn Signal Light',
    code: "Ml40039",
  },
  {
    description: " Replace 7 Way small ",
    code: "ML4004",
  },
  {
    description: " Replace Turn Signal Light 6' Grommet  ",
    code: "Ml40040",
  },
  {
    description: " Replace Pigtail plu - 2 way ",
    code: "ML40041",
  },
  {
    description: " Replace Power Electrical Cord ",
    code: "ML40042",
  },
  {
    description: " Resecure  Power Electrical Cord with Steel Wire and Lock  ",
    code: "ML40043",
  },
  {
    description: "  Replace Marker Light Round 2 1/2 Rear Bottom ",
    code: "ML4005B",
  },
  {
    description: " Replace Round Marker Light  -Front  Top 2 1/2 ",
    code: "ML4005FT",
  },
  {
    description: " Replace Round Marker Light  -Rear Top 2 1/2 ",
    code: "ML4005RT",
  },
  {
    description: " Resecure / Refasten Harness wire with  ziptie  ",
    code: "ML4006",
  },
  {
    description: " Resecure  / Refasten 7 Way ",
    code: "ML4007",
  },
  {
    description: " Replace Marker Light  Rectangular regular ",
    code: "ML4008",
  },
  {
    description: " Replace 7 Way lid kit 16-798 ",
    code: "ML4010",
  },
  {
    description: " Reinstall/ Refasten Marker Light Top",
    code: "L2039",
  },
  {
    description: " Replace 7 way and Aluminum Nose box Mount ",
    code: "L2025",
  },
  {
    description: " Replace Junction Box",
    code: "L2043",
  },
  {
    description: " Replace Led Marker Light with Flange 2'",
    code: "L2001",
  },
  {
    description: " Replace Market Light Grommet",
    code: "L2033",
  },
  {
    description: " Replace Pig Tail Plug LED For Rectangle Marker Light",
    code: "L2009",
  },
  {
    description: " Replace PigTail plug - (2 Ways)",
    code: "L2010",
  },
  {
    description: ' Replace Signal Light with Flange Oval 6" ',
    code: "L2036F",
  },
  {
    description: ' Replace Stop Light 4" with Flange.',
    code: "L2021CC",
  },
  {
    description: " Replace Stop Light Grommet",
    code: "L2014",
  },
  {
    description: " Replace Marker Light  Grommet 2' ",
    code: "SDC40010",
  },
  {
    description: " Replace 7 way Receptacle ",
    code: "SDC40011",
  },
  {
    description: " Replace 7 way  16-724 ",
    code: "SDC40012",
  },
  {
    description: " Replace Pigtail plug 2 way  ",
    code: "SDC40013",
  },
  {
    description: " Replace Pigtail Plug 3 way ",
    code: "SDC40014",
  },
  {
    description:
      " Trace and Repair ABS Problem  \n               Troubleshoot ABS System",
    code: "SDC40015",
  },
  {
    description: " Replace License Plate ",
    code: "SDC40016",
  },
  {
    description: " Reconect Stop Lights ",
    code: "SDC40027",
  },
  {
    description: " Resecure Electrical Wires ",
    code: "SDC40028",
  },
  {
    description: " Trace and Repair Electrical problem",
    code: "SDC4003",
  },
  {
    description: " Replace Stop Light ",
    code: "SDC4004",
  },
  {
    description: " Replace Stop Light Grommet ",
    code: "SDC4006",
  },
  {
    description: " Replace Marker Light non flange ",
    code: "SDC4009",
  },
  {
    description: " Replace LED Marker Light",
    code: "X2001",
  },
  {
    description: " Replace Tail Light",
    code: "X2002",
  },
  {
    description: " Trace + Repair  Electrical Problem",
    code: "X2003",
  },
  {
    description: " Check Lights ",
    code: "X2004",
  },
  {
    description: " Resecure 7 Way Connector  wires",
    code: "X2006",
  },
  {
    description: " Replace Pig Tail Plug - 3 Way ",
    code: "X2009",
  },
  {
    description: " Replace LED PigTail Plug - 3 Way\r\n",
    code: "X2009AA",
  },
  {
    description: " Replace Pig Tail Plug LED #94862  ",
    code: "X2009LED",
  },
  {
    description: " Replace Pigtail Plug ",
    code: "X2010",
  },
  {
    description: " Inspection Trailer Lights",
    code: "X2011",
  },
  {
    description: " Replace Stop Light Grommet ",
    code: "X2014",
  },
  {
    description: " Replace Marker Light ",
    code: "X2017",
  },
  {
    description: " Replace Marker Light and Plastic Base  GRT45263  45263 ",
    code: "X2018",
  },
  {
    description: " Replace Marker Light Front Top and Plastic Base  ",
    code: "X2019FT",
  },
  {
    description: " Replace Marker Light Rear  Top and  Plastic Base  ",
    code: "X2019RT",
  },
  {
    description: " Replace License Plate Light \n # 15200c3  or  TL15205",
    code: "X2020",
  },
  {
    description:
      " Replace License Plate Light and Plastic Mount \n # 15011 ,  15200c3",
    code: "X2020AA",
  },
  {
    description: " Straight License Plate Bracket ",
    code: "X2020AAA",
  },
  {
    description: " Replace Marker Light Base ",
    code: "X2020FF",
  },
  {
    description: " Replace Marker Light Rectangle  Regular  - Front Top ",
    code: "X2020FT",
  },
  {
    description:
      " Replace Marker Light Rectangle  Regular  -Rear Bottom  \n              # 19200R",
    code: "X2020RB",
  },
  {
    description:
      " Replace Marker Light Rectangle  Regular  -Rear Top  \n# 19200 or 19200R",
    code: "X2020RT",
  },
  {
    description: " Replace LED  Stop Light Non Flange ",
    code: "X2021AAA",
  },
  {
    description: " Resecure/ Refasten 7 Way  ",
    code: "X2024",
  },
  {
    description: " Replace 7 Way Large  ",
    code: "X2025",
  },
  {
    description: " Replace 7 Way and  Mount ",
    code: "X2025F",
  },
  {
    description: " Replace Marker Light Bulb \nPart # 1157",
    code: "X2026",
  },
  {
    description: " Replace ABS Light ",
    code: "X2032",
  },
  {
    description: " Replace Marker Light Gromet ",
    code: "X2033",
  },
  {
    description: " Replace LED Marker Lights 3/4'  Front Top ",
    code: "X2034F",
  },
  {
    description: " Replace LED Marker Lights 3/4'  Rear Top ",
    code: "X2034R",
  },
  {
    description: " Replace LED Marker Lights 3/4'  Rear Bottom ",
    code: "X2034RB",
  },
  {
    description: " Replace LED Marker Lights Rectangle and pigtail plug  -Top ",
    code: "X2035R",
  },
  {
    description: ' Replace Signal/Marker Light with Flange Oval 6" ',
    code: "X2036F",
  },
  {
    description: " Replace LED Marker Light Rectangular Front Top ",
    code: "X2037FT",
  },
  {
    description: " Replace LED Marker Light  Rectangular-Bottom Rear ",
    code: "X2037RB",
  },
  {
    description: " Replace LED Marker Light Rectangular Rear Top ",
    code: "X2037RT",
  },
  {
    description: " Replace LED Marker Light 3/4 Left Rear - Bottom ",
    code: "X2038LR",
  },
  {
    description: " Replace LED Marker Light 3/4 Right Rear - Bottom ",
    code: "X2038RR",
  },
  {
    description: " Reinstall/Refasten Marker Light Top ",
    code: "X2039",
  },
  {
    description:
      ' Replace Marker Light Oval 4" Regular with plastic Base Front  Top  ',
    code: "X2040FT",
  },
  {
    description:
      ' Replace Marker Light Oval 4" Regular with plastic Base Rear Top ',
    code: "X2040RT",
  },
  {
    description: " Replace 7 Way - Small ",
    code: "X2041",
  },
  {
    description: " Refasten Marker Light Rear Top ",
    code: "X2042",
  },
  {
    description: " Replace Junction Box ",
    code: "X2043",
  },
  {
    description: " Refasten Left  Mid Turn Light Bracket ",
    code: "X2044L",
  },
  {
    description: " Refasten Right Mid Turn Light Bracket ",
    code: "X2044R",
  },
  {
    description: " Replace Base Bottom Light (s) Marker  Regular ",
    code: "X2045B",
  },
  {
    description: " Replace Base Top Light (s) Marker  Regular ",
    code: "X2045T",
  },
  {
    description: " Straighten Left Mid Turn Light Bracket ",
    code: "X2046L",
  },
  {
    description: " Straighten Right Mid Turn Light Bracket ",
    code: "X2046R",
  },
  {
    description: " Rewire Lights ",
    code: "X2047",
  },
  {
    description: " Troubleshoot Lighting System Fault",
    code: "X2048",
  },
  {
    description: " Replace Stop Light Regular with Flange  ",
    code: "XL2021",
  },
  {
    description: " Replace LED Stop Light with Flange  ",
    code: "XL2021AB",
  },
  {
    description: ' Replace Signal Marker Light Oval 6" with Flange  ',
    code: "XL2036",
  },
  {
    description: " Straighten Signal Turn Light Bracket ",
    code: "XL2037",
  },
  {
    description: " Replace LED pigtail plug # 947073  or 94707-3  ",
    code: "XL2039",
  },
  {
    description: " Replace 10728 Marker Light Plastic Bracket",
    code: "XL2039",
  },
  {
    description: " Replace Light House  # 53702  ",
    code: "XL2040",
  },
  {
    description:
      " Replace Marker Light LED with Flange \n              Use 03 Rivet / Screw",
    code: "XL2041",
  },
  {
    description: ' Replace Signal Light Mounting Bracket 6" 60733 ',
    code: "XL2041",
  },
  {
    description:
      " Replace Adapter Plate - Adapter, powder-coated, 10 ga. steel 15-770  ",
    code: "XL2043",
  },
  {
    description: ' Stop Light Oval 6" regular  - Non Flange  # 602021R3  ',
    code: "XL2044",
  },
  {
    description: " Removed + Reinstalled Stop Light Cover Plate ",
    code: "XL2045",
  },
  {
    description: " Reforce Cross Member  with Steel Plate ",
    code: "XF001",
  },
  {
    description: " Straighten Door Frame  ",
    code: "XF002",
  },
  {
    description: " Weld Door Frame Left Side and Right Side ",
    code: "XF003",
  },
  {
    description: " Weld Door Frame Left Side ",
    code: "XF003L",
  },
  {
    description: " Weld Door Frame Right Side ",
    code: "XF003R",
  },
  {
    description: " Replace Trailer Cross Member ",
    code: "XF004",
  },
  {
    description: " Replace Slider Safety Pin ",
    code: "XF8001",
  },
  {
    description: " Straighten Crossmembers - Over Tandem ",
    code: "XF8002",
  },
  {
    description: " Straighten + Weld  Swing Door Hinge Bracket Left Side ",
    code: "XF8004",
  },
  {
    description: " Heat + Straighten Door Frame ",
    code: "XF8005",
  },
  {
    description: " Heat + Straighten + Weld  Crossmember (s) - Over Legs ",
    code: "XF8006",
  },
  {
    description: " Removed   GPS Equipment  of the chassis  ",
    code: "GSC001",
  },
  {
    description: " Troubleshoot Trlr Tracking Sys.",
    code: "X5050",
  },
  {
    description: " Replace Trlr Tracking Sys- Basic ",
    code: "X5052",
  },
  {
    description: "Replace Trlr Tracking Antenna ",
    code: "X5053",
  },
  {
    description: " Replace Tracking System Battery ",
    code: "X5054",
  },
  {
    description: " Remove Cust Owned Tracking  Unit \r\n",
    code: "X5055",
  },
  {
    code: "Labor",
  },
  {
    description:
      "Chassi # \r\nBIT INSPECTION/ Shipper Transport \r\nAdjust Brakes/ Lube Axles",
    code: "BIT-3011",
  },
  {
    description: " RESECURE ID PLATE",
    code: "BIT-3012",
  },
  {
    description: " REPLACE DOCUMENT HOLDER",
    code: "BIT-3013",
  },
  {
    description: " REPLACE LIC. PLATE",
    code: "BIT-3014",
  },
  {
    description: " Paint  Stencil Prefix Numbers/Chassi Number    ",
    code: "BIT-3015",
  },
  {
    description:
      " Paint Front Bolster Red and \r\n              Paint Out BACP/Shipper and SSA                           Stencil",
    code: "BIT-3017",
  },
  {
    description: "Rent  Chassi # VISE101003",
    code: "BIT-3022",
  },
  {
    description:
      " Complete BIT Inspection (90 Days) \n             Adjust Brakes \n             Lubrication  Axles",
    code: "MI2001",
  },
  {
    description:
      "CHASSI # \r\nFMCSA  Inspection (Annual Inspection ) and \r\nBIT INSPECTION ( 90 Days Inspection ) \r\nAdjust Brakes \r\n(Lube and Grease safety points  - Legs Twistlocks and Axles)",
    code: "BIT3010",
  },
  {
    description: " Complete FMCSA (annual)",
    code: "MI2005",
  },
  {
    description:
      " Complete FMCSA (annual) and BIT Inspection (90 Days).  \n             Adjust Brakes \n             Lube and Grease Axles and Landing Legs",
    code: "MI2002",
  },
  {
    description: "Service Call\nDate :\nTime\nLocation",
    code: "MI2003",
  },
  {
    description: " Complete BIT Inspection 90 Days ",
    code: "MI2004",
  },
  {
    description: " Roadability Inspection ",
    code: "SDC2003",
  },
  {
    description: " Replace Document   Holder ",
    code: "SDC2005",
  },
  {
    description: " Replace Federal Sticker / FMCSA Decal ",
    code: "SDC2006",
  },
  {
    description: "Trailer # \nRoadability Inspection  and Lubricate Axles",
    code: "X10010",
  },
  {
    description: "Trailer #\n Complete Trailer Inspection PM ",
    code: "X1008",
  },
  {
    description:
      " Roadability Inspection \n              Check  and Air up Tires \n              Check Air System - Brakes \n              Check Electrical System",
    code: "X94",
  },
  {
    description:
      "Equipment # \nDolly PM Service  \nAdjust Brakes \nLubricate Axles and 5th Wheel",
    code: "XPO1007",
  },
  {
    description: " Replace Timing Bar  ",
    code: 5008,
  },
  {
    description: " Replace 01 Set Landing Legs",
    code: 5009,
  },
  {
    description: " STRAIGHT  LEG - Bent",
    code: 5010,
  },
  {
    description: " STRAIGHT BOTH LEGS",
    code: 5011,
  },
  {
    description: " REPLACE DUST COVER",
    code: 5012,
  },
  {
    description: " REPLACE SHORT BRACE ( Bent / Broken / Missing )",
    code: 5014,
  },
  {
    description: " REPLACE CROSS BRACE - Bent / Broken  ",
    code: 5015,
  },
  {
    description: " REPLACE CRANK HANDLE",
    code: 5016,
  },
  {
    description: " Replace Crank Shaft Jost  ",
    code: 5017,
  },
  {
    description: " REPLACE CRANK SHAFT HOLLAND",
    code: 5019,
  },
  {
    description: " STRAIGHT CRANK SHAFT",
    code: 5020,
  },
  {
    description: " Replace Cross Over Shaft ",
    code: 5021,
  },
  {
    description: " TIME LEGS",
    code: 5023,
  },
  {
    description: " WELD LEG BOX",
    code: 5024,
  },
  {
    description: " REBUILT GEAR BOX",
    code: 5026,
  },
  {
    description: " REPLACE GEAR BOX COVER",
    code: 5027,
  },
  {
    description: " REPLACE GEAR BUSHING",
    code: 5028,
  },
  {
    description: " REPLACE SAND SHOE",
    code: 5030,
  },
  {
    description: " REPLACE AXLE HOUSING",
    code: 5032,
  },
  {
    description: " STRAIGHT AND WELD SAND SHOW AND AXLE",
    code: 5033,
  },
  {
    description: " RETIGHT LEG BOLTS",
    code: 5035,
  },
  {
    description: " RESECURE LEG",
    code: 5036,
  },
  {
    description:
      "Labor Remove, Straighten and Reinstall one small cross braket",
    code: 5036,
  },
  {
    description: "Replace ear leg broken",
    code: 5038,
  },
  {
    description: " Heat + Str Ear Legs - Bent",
    code: 5041,
  },
  {
    description: " Reweld Landing Leg Mounting Bracket",
    code: 5042,
  },
  {
    description: " Replace Mounting Bracket  Leg -",
    code: 5043,
  },
  {
    description: " Resecure/Refasten Landing Leg ",
    code: "LL5005",
  },
  {
    description: " Replace Crank Handle Retainer",
    code: "LL5016AA",
  },
  {
    description:
      " Replace Set Landing Legs  - Gear side and Non Gear Side \n              Replace Bolts and Nuts \n              Replace Ear Braces \n              Paint",
    code: "LL5018",
  },
  {
    description: " WELD 01 LEG",
    code: "LL5022",
  },
  {
    description: " STRAIGHT AND RESECURE GEAR BOX",
    code: "LL5025",
  },
  {
    description: " REPLACE ROLL PIN",
    code: "LL5029",
  },
  {
    description: "  Replace Sand Shoes ( High  / Short  ) and Axle 0.5",
    code: "LL5031",
  },
  {
    description:
      "  WELD BRACE EAR - LEG  + \r\n               REPLACE 2 BOLTS + NUTS 5/8",
    code: "LL5034",
  },
  {
    description: " RESECURE BRACES",
    code: "LL5037",
  },
  {
    description: " Weld Ear Leg",
    code: "LL5038",
  },
  {
    description: " Replace Leg Top Cover",
    code: "LL5040",
  },
  {
    description: " Heat + Straighten 5th Wheel Handle ",
    code: "MC9001",
  },
  {
    description: " Repair Crank Handle ",
    code: "MC9002",
  },
  {
    description:
      " Replace 01 Set  Landing Leg  \n              Replace Ear Braces \n              Replace Bolts and Nuts 5/8\n              Paint",
    code: "MLL5003",
  },
  {
    description: " Replace Ear Brace ",
    code: "MLL5004",
  },
  {
    description: " Replace Crank Handle Bolt + Nut + Washer - Broken/Missing",
    code: "LL5016AB",
  },
  {
    description: " Replace Sand Shoes Axles &/OR Wheels ",
    code: "SDC5001",
  },
  {
    description: " Replace San shoes Housing ",
    code: "SDC50010",
  },
  {
    description: " Weld Mounting Bracket",
    code: "SDC50011",
  },
  {
    description: " Resecure - Refasten Leg  Braces  ",
    code: "SDC5002",
  },
  {
    description: " Replace Crank Handle ",
    code: "SDC5003",
  },
  {
    description:
      " Sraight/Weld  Landing Legs/Braces/Gear Box/Skirts ((0.10 to 10)",
    code: "SDC5004",
  },
  {
    description: " Replace Crank Shaft  ",
    code: "SDC5005",
  },
  {
    description: " Retime Landing Legs ",
    code: "SDC5006",
  },
  {
    description: " Replace Ear Leg  ",
    code: "SDC5008",
  },
  {
    description: " Replace Landing Legs  - Gear Side and Non Gear Side . ",
    code: "SDC5009",
  },
  {
    description: " Replace 01 Landing Leg  Jost ",
    code: "X2031",
  },
  {
    description: " Refasten/Resecure  Cross Brace Channel - Loose  ",
    code: "X6001",
  },
  {
    description: " Straighte Sand Shoes ",
    code: "X6002",
  },
  {
    description: " Lubricate Landing Gear ",
    code: "X6003",
  },
  {
    description: " Replace Crank Handle ",
    code: "X6004",
  },
  {
    description: " Straighten Landing Gear K-Brace ",
    code: "X6005",
  },
  {
    description: " Straighten Non Gear Leg ",
    code: "X6006",
  },
  {
    description: " Replace  Set Landing Leg (Gear Side and Non Gear Side",
    code: "X6007",
  },
  {
    description: "Straighten Left, Right Landing Gear - Wing Brace ",
    code: "X6008",
  },
  {
    description: " Straighten Cross Brace Small ",
    code: "X6009",
  },
  {
    description: " Straighten Cross Brace Large (Channel)   -  ",
    code: "X6010",
  },
  {
    description: " Straighten Landing Gear  - Cushion Foot ",
    code: "X6011",
  },
  {
    description: " Weld Landing Gear-Wing Brace ",
    code: "X6012",
  },
  {
    description: " Straighten Landing Gear - Wing Brace ",
    code: "X6013",
  },
  {
    description: " Replace Crank Handle Holder / Retainer ",
    code: "X6014",
  },
  {
    description: " Weld Ear Braces  / K  Brackets ",
    code: "X6015",
  },
  {
    description: " Straighten and Weld Landing Legs ",
    code: "X6016",
  },
  {
    description: " Chisel Landing Leg Bands ",
    code: "x6017",
  },
  {
    description:
      " Replace Sand Shoes  Axle  Housing  \n               Cut off with Torch and Weld new Axle housing",
    code: "X6018",
  },
  {
    description: " Straighten Crank Handle Retainer ",
    code: "X6019",
  },
  {
    description: " Fabricate Landing Legs Brackets",
    code: "XL6018",
  },
  {
    description:
      " Pick up  the engine filter and motor oil in the shop and after recycle the filter and oil in the workshop recycling container ",
    code: "Fedex005",
  },
  {
    description: "Equipment : \n Replace  Engine Oil  \n Replace Oil Filter",
    code: "Fedexl001",
  },
  {
    description:
      " Replace Conspicuity Tape \n  Clean Area to Install Conspicuity Tape",
    code: "MDE3001",
  },
  {
    description: " Installed License Plate ",
    code: "MDE30010",
  },
  {
    description: " Replace Registration Holder / Document Holder ",
    code: "MDE3002",
  },
  {
    description: " Install Registration ",
    code: "MDE3003",
  },
  {
    description: " Replaced Placard Holder ",
    code: "MDE3008",
  },
  {
    description: " Straighten License Plate Bracket ",
    code: "MDE3009",
  },
  {
    description: " Snow Chains Inspection  ",
    code: "MF1003",
  },
  {
    description:
      "  Replaced Mud Flap Bracket  with Steel Angle 1/4X2' and Paint",
    code: 6008,
  },
  {
    description: " Fabricate  Mudflap Bracket  with Angle support .",
    code: 6009,
  },
  {
    description: " REPLACE MUDFLAPS",
    code: 6010,
  },
  {
    description: " STRAIGHT MUDFLA P BRACKET",
    code: 6012,
  },
  {
    description: " Resecure Mudflaps with bolts ,nuts and washers ",
    code: 6014,
  },
  {
    description: " Replace Mud Flap  Bracket",
    code: 6040,
  },
  {
    description: " Replace Mudflap ",
    code: "MDE3004",
  },
  {
    description: " Replace B25P Steel Bar Mudflap Bracket  ",
    code: "MDE30045",
  },
  {
    description: "  Replace \tMud Flap Hanger Mounting Bracket  # K700 ",
    code: "MDE30046",
  },
  {
    description: "  Straighten Mudflap Bracket ",
    code: "MDE3005",
  },
  {
    description: " Heat + Straighten and Weld Mudflap Bracket ",
    code: "MDE3006",
  },
  {
    description: " Resecure Mudflap ",
    code: "MDE3007",
  },
  {
    description: " Replace Mudflap Bracket ",
    code: "SDC60012",
  },
  {
    description:
      " Trace + Repair Electrical Short Reefer  container Harness Wire",
    code: "RC2002",
  },
  {
    description:
      " Replace Reefer Plug + Replace Reefer Cable 40' .\n              Use  Cable Repair Kit",
    code: "RC2003",
  },
  {
    description: " Replace Reefer  power plug Male",
    code: "RC2004",
  },
  {
    description: " Replace Roller Door Pull Strap ",
    code: "MRO8001",
  },
  {
    description: " Refasten  /  Resecure Roller Door Hinge ",
    code: "MRO8002",
  },
  {
    description: " Replace Roller Door Wheel and Roller Door Hinge End    ",
    code: "MRO8003",
  },
  {
    description: " Lubricate Roller Door ",
    code: "MRO8004",
  },
  {
    description: " Weld  / Refasten Horizontal Roller Door Rail  Left Side ",
    code: "MRO8005",
  },
  {
    description: " Weld  / Refasten Horizontal Roller Door Rail  Right  Side ",
    code: "MRO8005",
  },
  {
    description: " Refasten Roller Door Hinge / Wheel ",
    code: "MRO8006",
  },
  {
    description: " Straighten Roller Door Panels ",
    code: "MRO8007",
  },
  {
    description: " Refasten / Resecure  Roller Door Rail   ",
    code: "MRO8008",
  },
  {
    description: " Replace Complete Roller Door ",
    code: "RD3001",
  },
  {
    description:
      " Replace Roller Door Lock  Keeper Assembly 02510502  / 025-10502   ",
    code: "Roll0016",
  },
  {
    description: " Replace Lower Rail of Roller Door ",
    code: "Roll002",
  },
  {
    description: " Replace  Roll up door spring adjustment Dual ",
    code: "Roll003",
  },
  {
    description: " Replace Center Hinge ",
    code: "Roll004",
  },
  {
    description: " Replace Roller Door Wheel ",
    code: "Roll005",
  },
  {
    description: " Remove + Straighten + Reinstall Bottom  Roller Door Panel ",
    code: "Roll006",
  },
  {
    description: " Replace Intermediate Panel ",
    code: "Roll009",
  },
  {
    description: " Resecure Roller Door Hinge End. ",
    code: "Roll010",
  },
  {
    description: " Adjust Counter Balance Assemblies ",
    code: "Roll012",
  },
  {
    description: " Replace Roller Door Wheel and Roller Door Hinge End    ",
    code: "Roll013",
  },
  {
    description:
      " Replace Roller Door Wheel Todco + Roller Door Hinge End Todco + Bolts and Nuts ",
    code: "Roll014",
  },
  {
    description: " Straighten Roller Door Rail by Rail ",
    code: "Roll015",
  },
  {
    description: " Replace Roll Door Bottom Panel ",
    code: "X40103",
  },
  {
    description: " Replace Roller Door Wheel ",
    code: "X40104",
  },
  {
    description: " Replace  Roller Door End Hinge + Wheel ",
    code: "X4039",
  },
  {
    description: " Replace Pull Strap ",
    code: "X4040",
  },
  {
    description: " Refasten Roller Hinge ",
    code: "X4084",
  },
  {
    description: " Replace Center  Roller Door Hinge ",
    code: "X4086",
  },
  {
    description: " Replace Roller Door Hinge End  ",
    code: "X4087",
  },
  {
    description: " Adjust Operator ",
    code: "X4090",
  },
  {
    description: " Replace  Roller Door Lock Assembly and Roller Door Keeper  ",
    code: "X4091",
  },
  {
    description: " Adjust Roller Door Cable ",
    code: "XD401110",
  },
  {
    description: " Replace   Roller Door Cable ",
    code: "XD40115",
  },
  {
    description: " Reinstall Roller Door Wheel ",
    code: "XD40116",
  },
  {
    description: " Replace Roller Door Cable Bracket  TOD 61204 ",
    code: "XD40119",
  },
  {
    description: " Replace Roller Door Reforce Hinge End  ",
    code: "XR401015",
  },
  {
    description:
      " Replace Roller Door Reforce Hinge End  and  Roller Door Wheels ",
    code: "XR401016",
  },
  {
    description: " Replace Counter Balance Spring Adjuster ",
    code: "Xr401017",
  },
  {
    description:
      " Replace Roller Door Lift Handle  whi1715  \n              Replace Bolts and Nuts",
    code: "XR401019",
  },
  {
    description: " Installed Conspicuity Tape ",
    code: "Dec003",
  },
  {
    description: " Installed  Equipment numbers ",
    code: "Dec004",
  },
  {
    description: " REPLACE  TORQUE ARM AND ALIGNMENT ( Solid or Adjustable)",
    code: 6016,
  },
  {
    description: " RETIGHTEN / RESECURE TORQUE ARM- Loose",
    code: 6018,
  },
  {
    description: " ALIGN AXLES",
    code: 6019,
  },
  {
    description:
      " Replace 01 Suspension Spring               Bracket - Bottom Plate- Cracket \r\n              Replace 01 Set  U-Bolts + Bolts and                     Nuts",
    code: 9001,
  },
  {
    description: " Align Axles",
    code: 9002,
  },
  {
    description: " Replace Hutch Equalizer HU24820-01 with  Rocker Bolt Kit",
    code: 9003,
  },
  {
    description:
      " Replace U-Bolts Kit \r\n Replace Suspension  Bracket\r\n Replace Torque Arm",
    code: 9004,
  },
  {
    description:
      " Removed + Install New Spring Hanger \r\n             and Equalizer - Damage \r\n             Replace Hardware Kit Equalizer\r\n             (Removed + Reinstall Torque Arrm)",
    code: 9005,
  },
  {
    description: " Replace Spring Hanger",
    code: 9006,
  },
  {
    description: " Resecure U-Bolts / Torque All U-Bolts (0.80)",
    code: "SDC7001",
  },
  {
    description:
      " Replace Spring Suspension \n              Replace U-Bolts \n              Replace Sleeve Tube \n              Replace Sleeve Bolt and Nut",
    code: "SDC7002",
  },
  {
    description: " Replace Sleeve Bolt Suspension ",
    code: "SDC7003",
  },
  {
    description: " Replace U-Bolts (Pair 0.70)\n               Replace Nuts",
    code: "SDC7004",
  },
  {
    description: " Free up and  Lubricate Slider Pins ",
    code: "SDC7005",
  },
  {
    description: " Retorque U-Bolts axle   ",
    code: "SUS001",
  },
  {
    description: " Reinstall Bulk Head ",
    code: "X3017",
  },
  {
    description: " Replace Dust Plug(s) Brake Chamber ",
    code: "X3024",
  },
  {
    description: " Replace Absorber shocks ",
    code: "X3029",
  },
  {
    description: " Straighten Bulk Head ",
    code: "X3033",
  },
  {
    description: " Repair Air Bag Valve ",
    code: "X8050",
  },
  {
    description: "Reseat bell/  Free up Air Bag ",
    code: "X8051",
  },
  {
    description: " Adjust Valve - Leveling ",
    code: "X8052",
  },
  {
    description: " Retorque Suspension / Wheels  ",
    code: "X8053",
  },
  {
    description: " Retorque  Landing Leg Fasteners ",
    code: "X8054",
  },
  {
    description: " Check Axles and SubFrame  ",
    code: "X8055",
  },
  {
    description:
      " Replace Front Spring Hanger \n              Replace Torque Arm Adjustable \n               Align the Axle",
    code: "X9007",
  },
  {
    description:
      " Replace Air Hose 6ft + 01 Gladhand Universal + 2 Spring Guard Fitting  Emergency ",
    code: "XA3055",
  },
  {
    description:
      " Replace  Air Hose 4ft + 01 Gladhand Universal + 2 Spring Guard Fitting  ,Service  ",
    code: "XA3058",
  },
  {
    description:
      " Replace Trailer Connector Cord & Hose Separators / Holders  810138  81-0138   ",
    code: "XA3059",
  },
  {
    description:
      " Replace 15 ft Air Hose + 02 Air Fitting + 01 Gladhand and Resecure  \n              (Truck Air System ) ",
    code: "XA3060",
  },
  {
    description: " Replace  Clavis Pins + Clavis + Cutter pins # R810019  ",
    code: "XA3061",
  },
  {
    description:
      "Replace  Spring Pad Wear .\n            Jack Up , Remove the Old Pad  with Torch + Grinder and Weld",
    code: "XB1001",
  },
  {
    description: " Replace Leveling  Control Valve ",
    code: "XSU1001",
  },
  {
    description: " Replace  air spring actuator assembly S25593  ",
    code: "XSU1002",
  },
  {
    description: " Patch 0.5 X 0.5 Left Front Radius Panel ",
    code: "MC1001",
  },
  {
    description: " Weld  /  Resecure Threshold Plate ",
    code: "MF1001",
  },
  {
    description: "   Refasten Threshold Plate ",
    code: "MF1002",
  },
  {
    description: " Patch 1ft X 1 ft  Left  Side Wall Panel ",
    code: "MS4001",
  },
  {
    description: " Patch 1ft X 1 ft  Right Side Wall Panel ",
    code: "MS4001",
  },
  {
    description: " Patch 1ft X 0.5 ft Left   Side Wall Panel ",
    code: "MS4002",
  },
  {
    description: " Patch 1ft X 0.5 ft Right  Side Wall Panel ",
    code: "MS4002",
  },
  {
    description: " Straighten Cross Member ",
    code: "MU6001",
  },
  {
    description: " Weld Stop Light Housing Left  Side ",
    code: "MU6002",
  },
  {
    description: " Weld Stop Light Housing Right Side ",
    code: "MU6002",
  },
  {
    description: " Weld ICC Bumper Horizontal ",
    code: "MU6003",
  },
  {
    description: " Resecure ICC Bumper ",
    code: "MU6004",
  },
  {
    description: " Lubrication Slider ",
    code: "MU6005",
  },
  {
    description: " Straighten and Weld Main Rear Frame ",
    code: "MU6006",
  },
  {
    description: " Weld ICC Bumper Gusset ",
    code: "MU6007",
  },
  {
    description: " Weld Cross members ",
    code: "MU6008",
  },
  {
    description: " Straighten & Refasten Left Inner Raius Panel  ",
    code: "R4060",
  },
  {
    description: " Straighten & Refasten Right  Inner Raius Panel  ",
    code: "R4060",
  },
  {
    description: " Straighten & Refasten Left Radius Panel\r\n ",
    code: "R4060",
  },
  {
    description: " Straighten & Refasten Right Raius Panel\r\n ",
    code: "R4060",
  },
  {
    description: " Patch 1 ft x 1 ft Left  Radius Panel ",
    code: "R4061",
  },
  {
    description: " Patch 1 ft x 1 ft Right Radius Panel ",
    code: "R4061",
  },
  {
    description: " Replace 1 Left Radius Panel Protector ",
    code: "R4062",
  },
  {
    description: " Patch 0.5 X 0.5 Left Front Radius Panel ",
    code: "R4062",
  },
  {
    description: " Patch 0.5 X 0.5 Right  Radius Panel ",
    code: "R4062",
  },
  {
    description: " Reseal Left Radius Panel ",
    code: "R4063",
  },
  {
    description: " Section 2.5 Left Radius Panel ",
    code: "R4064",
  },
  {
    description: " Replace Radius Panel Complete ",
    code: "R4065",
  },
  {
    description: " Replace Corner Cap ",
    code: "R4066",
  },
  {
    description: "Reseal Left Corner Cap ",
    code: "R4066",
  },
  {
    description: " Section 2 ft Left  Radius Panel ",
    code: "R4067",
  },
  {
    description: " Section 2 ft Right Radius Panel ",
    code: "R4067",
  },
  {
    description: " Patch 0.25 ft X 0.25 ft Left Radius Panel  ",
    code: "R4068",
  },
  {
    description: " Patch 0.25 ft X 0.25 ft Right  Radius Panel  ",
    code: "R4068",
  },
  {
    description: " Section 3 ft Left Radius Panel ",
    code: "R4069",
  },
  {
    description: " Section 3 ft Right Radius Panel ",
    code: "R4069",
  },
  {
    description: " Section 02' X 01' Radius Panel ",
    code: "R4072",
  },
  {
    description: " Straight and Weld Fornt Bolster ",
    code: "SDC3001",
  },
  {
    description: " Replace Slider Handle ",
    code: "SDC3002",
  },
  {
    description: " Straighten Roof Bow ",
    code: "XR401012",
  },
  {
    description: " Patch 1ft X 1 ft  Left  Side Wall Panel ",
    code: "X4001",
  },
  {
    description: " Patch 1ft X 1 ft Right  Side Wall Panel ",
    code: "X4001",
  },
  {
    description: " Section & Reinforce 12 ft  Left Bottom Rail",
    code: "X4002",
  },
  {
    description: " Patch 1ft X 0.5 ft Left   Side Wall Panel ",
    code: "X4002",
  },
  {
    description: " Patch 1ft X 0.5 ft Right  Side Wall Panel ",
    code: "X4002",
  },
  {
    description: " Straighten & Reinforce Left Bottom Rail",
    code: "X4003",
  },
  {
    description: " Straighten & Weld Header ",
    code: "X40031",
  },
  {
    description: " Patch 0.5 ft X 0.5 ft Left Side Panel ",
    code: "X4003",
  },
  {
    description: " Patch 0.5 ft X 0.5 ft  Right Side Panel ",
    code: "X4003",
  },
  {
    description: " Replace Door Seal - Complete (2.0)",
    code: "X4004",
  },
  {
    description: " Patch 1 ft X 0.5 ft Left Radius Panel ",
    code: "X4004",
  },
  {
    description: " Patch 1 ft X 0.5 ft Right  Radius Panel ",
    code: "X4004",
  },
  {
    description: " Patch 1 ft X 1 ft Front Wall Panel ",
    code: "X4005",
  },
  {
    description: " Replace Left Front Corner  Cap",
    code: "X4007",
  },
  {
    description: " Replace Left Side Door Seal",
    code: "X4008",
  },
  {
    description: " Replace Right side Door Seal",
    code: "X4009",
  },
  {
    description: "Straighten Door  Lock Rod - Bent  ",
    code: "X4010",
  },
  {
    description: " Straighten  Swing Door Hinge Butt  / Bracket  ",
    code: "X40100",
  },
  {
    description: " Lubricate Rollers ",
    code: "X40101",
  },
  {
    description: " Straighten Left  Door Handle Keeper ",
    code: "X40102",
  },
  {
    description: " Straighten Right Door Handle Keeper ",
    code: "X40102",
  },
  {
    description: " Refasten Right Hold Back (Swing Door) 0.5",
    code: "X40105",
  },
  {
    description: " Straighten Door Panel ",
    code: "X40106",
  },
  {
    description: " Replace Complete Door Seal ",
    code: "X40107",
  },
  {
    description: " Straighten Roll Door Bottom Panel ",
    code: "X40108",
  },
  {
    description: " Replace Top Right Door seal ",
    code: "X40109",
  },
  {
    description: " Buff - Bottom Rail (0.25 per feet)",
    code: "X4011",
  },
  {
    description: " Replace 01 Bottom Dorr Lock Bracket and Bushing ",
    code: "x40110",
  },
  {
    description: " Replace Left Lock Rod ",
    code: "X40111",
  },
  {
    description: " Replace Right  Lock Rod ",
    code: "X40111",
  },
  {
    description: " Resecure Swing Door Hinge ",
    code: "X40112",
  },
  {
    description: " Replace Left Radius Panel (Patch)",
    code: "X4012",
  },
  {
    description: " Straight Left Door Panel ",
    code: "X4015",
  },
  {
    description: "  Straight  and Weld Hinge Bracket (Butt) - ",
    code: "X4016",
  },
  {
    description: " Replace Safety Pin",
    code: "X4017",
  },
  {
    description: " Patch 0.5 ft X 0.5 ft  Right Door Panel",
    code: "X4018",
  },
  {
    description: " Refasten Threshold Plate ",
    code: "X4020",
  },
  {
    description: " Replace Lock Rod Bushing ",
    code: "X40200",
  },
  {
    description: " Seal Cut Right Side Panel ",
    code: "X4024",
  },
  {
    description: " Replace Swing Door Hinge ",
    code: "X4027",
  },
  {
    description: "Rehang Left  Swing Door Panel ",
    code: "X4027",
  },
  {
    description: "Rehang Right Swing Door Panel ",
    code: "X4027",
  },
  {
    description: " Straighten & Reinforce Left Top Rail Flange ",
    code: "X4030",
  },
  {
    description: "Straighten & Reinforce Left Top Rail Flange ",
    code: "X4030",
  },
  {
    description: " Refasten Door Seal and Fitting",
    code: "x4031",
  },
  {
    description: " Refasten Left Door Seal ",
    code: "X4031",
  },
  {
    description: " Refasten Right Door Seal ",
    code: "X4031",
  },
  {
    description: " Replace  Left/ Side  Door Seal Inside/Outside  ",
    code: "X4032",
  },
  {
    description: " Replace  Side Right Door Seal  Inside/Outside ",
    code: "X4032",
  },
  {
    description: " Replace - Bottom Left Door Seal ",
    code: "X4033",
  },
  {
    description: " Replace - Bottom Right Door Seal ",
    code: "X4033",
  },
  {
    description: " Straighten Door Lock Rod  -  Left  Side  ",
    code: "X4034",
  },
  {
    description: " Straighten Door  Lock Rod  -  Right Side  ",
    code: "X4034",
  },
  {
    description: " Straighten Swing Door Hinge Bracket Left Side  ",
    code: "X4035",
  },
  {
    description: " Straighten Swing  Door Hinge Bracket Right Side  ",
    code: "X4035",
  },
  {
    description: " Straighten Left Swing Door Hinge ",
    code: "X4036",
  },
  {
    description: " Straighten & Refasten Scuff-Steel ",
    code: "X4040",
  },
  {
    description: " Removed +  Straighte + Reinstall    Roller Door End Hinge  ",
    code: "X4040",
  },
  {
    description: " Straight and Refasten  Left Scuff- Aluminum  ( ft)",
    code: "X4041",
  },
  {
    description: " Straighten Right Door Panel ",
    code: "X4041",
  },
  {
    description: " Straighten Left Side Post - Interior ",
    code: "X4042",
  },
  {
    description: " Straighten Left Door Handle ",
    code: "X4042",
  },
  {
    description: " Straighten Right Door Handle  ",
    code: "X4042",
  },
  {
    description: " Refasten Linning (s) - Plywood  ",
    code: "X4044",
  },
  {
    description: " Replace Section Left Scuff-Aluminium  each ft)",
    code: "X4045",
  },
  {
    description: " Replace Section Right Scuff-Aluminium ( each ft)",
    code: "X4045",
  },
  {
    description: " Remove Retaining Holder (for unit)",
    code: "X4046",
  },
  {
    description: " Remove Left  Temp Load Restraint Holder ",
    code: "X4047",
  },
  {
    description: " Remove Right Temp Load Restraint Holder ",
    code: "X4047",
  },
  {
    description: " Refasten Scuff-Hard Wood ",
    code: "X4048",
  },
  {
    description: " Section Left Scuff-Aluminum ft' ( by ft )",
    code: "X4049",
  },
  {
    description: " Section 0.5ft Right Side Panel Closure Strip ",
    code: "x4070",
  },
  {
    description: " Seal Cut  Left  Side Door  Panel - ",
    code: "X4071",
  },
  {
    description: " Seal Cut  Right Side Door  Panel - ",
    code: "X4071",
  },
  {
    description: " Removed +Straighten + Reinstall Threshold ",
    code: "X4088",
  },
  {
    description: " Refasten Threshold Plate ",
    code: "X4089",
  },
  {
    description: " Replace Door Plate Anti-Theft ST ",
    code: "X4092",
  },
  {
    description: " Straighte Anti Theft Door Plate ",
    code: "X4092",
  },
  {
    description: " Refasten Anti Theft Plate ",
    code: "X4092",
  },
  {
    description: " Replace Pin Swing Door Hinge ",
    code: "X4093",
  },
  {
    description: " Refasten Roller Door Seal ",
    code: "X4094",
  },
  {
    description: " Patch Left Inner Door Skin ",
    code: "X4094",
  },
  {
    description: " Patch Right  Inner Door Skin ",
    code: "X4094",
  },
  {
    description: " Replace Right Swing Door Panel  - Double Lock Rod     ",
    code: "X4095",
  },
  {
    description: " Replace Left  Swing Door Panel  - Single Lock Rod     ",
    code: "X4096",
  },
  {
    description: " Replace Right Swing Door Panel  - Single Lock Rod     ",
    code: "X4096",
  },
  {
    description:
      " Replace Door Blank Composite \n              1/2X49X110.5\n Replace Door Seal \n Replace Corner Tabs",
    code: "X4097",
  },
  {
    description: " Section Corner ( w/Seals) Left  Door Panel ",
    code: "X4097",
  },
  {
    description: " Section Corner ( w/Seals) Right Door Panel ",
    code: "X4097",
  },
  {
    description: " Lubricate Lock Rod (s)  .",
    code: "x4098",
  },
  {
    description: " Replace Hinge Pin ",
    code: "X4099",
  },
  {
    description: " Patch 2 ft X 1 ft Left Side Panel ",
    code: "X8001",
  },
  {
    description: " Refasten Left Side Panel ",
    code: "X8002",
  },
  {
    description: " Refasten Left Side Panel ",
    code: "X8002",
  },
  {
    description: " Seal Cut 4 Left Side Panel ",
    code: "X8003",
  },
  {
    description: " Section 1 ft Side Panel ",
    code: "X8004",
  },
  {
    description: " R & R 4' X 8' / Nose  ",
    code: "X8006",
  },
  {
    description: " Patch 0.5 ft X 1 ft Left Trailer Skirts ",
    code: "X8050",
  },
  {
    description: " Patch 0.5 ft X 1 ft Right  Trailer Skirts ",
    code: "X8050",
  },
  {
    description: " Replace Left  AeroFlex Support Rod 68-50132-00 ",
    code: "XA80001",
  },
  {
    description: " Replace Right AeroFlex Support Rod 68-50132-00 ",
    code: "XA80001",
  },
  {
    description: " Replace  Swing Door Hinge Butt  / Bracket  ",
    code: "XD40100",
  },
  {
    description: " Replace Door Holdback Chain ",
    code: "XD40113",
  },
  {
    description: "Removed + Straighten and Reinstalled Door Holdback Chain ",
    code: "XD40114",
  },
  {
    description:
      " Replace Door Hold Back or Retainer Pigtail Style - 022-00577 ",
    code: "XD40117",
  },
  {
    description: " Straighten Door Cam Keeper ",
    code: "XD4030",
  },
  {
    description: " Straighten Right  Swing Door Hinge ",
    code: "XD4036",
  },
  {
    description: " Replaced Additional  Ft Laminate Flooring ",
    code: "XFL002",
  },
  {
    description: " Refill Laminated Flooring",
    code: "XFL1006",
  },
  {
    description: " Sweep Out Interior (0.3 )",
    code: "XFL1009",
  },
  {
    description: " Fill Gouge Hard Wood Floor (0.25  by ft )",
    code: "XFL9001",
  },
  {
    description: " Refasten Threshold Plate ",
    code: "XFL9002",
  },
  {
    description: " Remove Nails Apitong Floor ",
    code: "XFL9003",
  },
  {
    description: " Replace Laminated Flooring ",
    code: "XFL9004",
  },
  {
    description: " Replace Laminated Flooring Additional by feet ",
    code: "XFL9005",
  },
  {
    description: " Replace Side Post ",
    code: "XI001",
  },
  {
    description: " Straighten Side Posts ",
    code: "XI002",
  },
  {
    description: " Replace Thredhold Plate",
    code: "XL9003",
  },
  {
    description: " Patch 3.0 ft X 1.0 ft  Aluminium Roof ",
    code: "XR4001",
  },
  {
    description: "  Patch Aluminium Roof 0.5 ft X 0.5 ft  ",
    code: "XR4003",
  },
  {
    description: "  Patch 1.0 ft X 0.5 ft Roof Aluminium ",
    code: "XR401010",
  },
  {
    description: " Patch 0.5 ft X 0.5 ft Roof Aluminium  ",
    code: "XR401011",
  },
  {
    description: " Refasten Roof ",
    code: "XR401013",
  },
  {
    description: "Patch 1.5 ft X 0.5 ft Roof Sheet Aluminum  ",
    code: "xr401014",
  },
  {
    description: "Patch 2.0 ft X  1.0 ft Roof Sheet Aluminum  ",
    code: "XR401018",
  },
  {
    description:
      " Reseal 1.0 ft X 1.0 ft  Aluminium Roof with Sealer xtreme Rubberized ",
    code: "XR401020",
  },
  {
    description: " Heat and Removed Old Seal  2 ft  + additional ft 0.10  ",
    code: "XR401021",
  },
  {
    description:
      " Reseal Aluminium Roof with Sealer 1.0 ft   Additional ft 0.10",
    code: "XR401022",
  },
  {
    description: " Patch 3.5 ft X 1.0 ft Aluminium Roof ",
    code: "XR401023",
  },
  {
    description: " Reseal aluminium Roof Patch  ",
    code: "XR401024",
  },
  {
    description: " Patch 1.0 ft X 1.0 ft Aluminium Roof ",
    code: "XR40109",
  },
  {
    description: " Reseal Nose Panel ",
    code: "XR4021",
  },
  {
    description: " Patch Nose Panel ",
    code: "XR4021",
  },
  {
    description: " Replace Roof Bow (per unit )",
    code: "XR4025",
  },
  {
    description: " Refasten Roof Bow ",
    code: "XR4025",
  },
  {
    description: " 0.5 ft X 0.5 ft Roof Sheet ETR Translucent ",
    code: "XR4029",
  },
  {
    description: " Reseal Nose Rail ",
    code: "XR4055",
  },
  {
    description: " Patch Radius Corner with Metal   Repair Tape  ",
    code: "XR4071",
  },
  {
    description: " Heat + Removed Old Aluminium Tape and Sealer ",
    code: "XR4073",
  },
  {
    description:
      " Patch Aluminium Roof with  self adhesive waterproof aluminum tape and Heat with Torch ",
    code: "XR4074",
  },
  {
    description: " Repair Aluminium Roof with   Waterproof Roof Sealer",
    code: "XR4",
  },
  {
    description: " Reseal Left  Roof Sheet-Aluminum ",
    code: "XR4080",
  },
  {
    description: " Reseal Right Roof Sheet-Aluminum ",
    code: "XR4080",
  },
  {
    description: " Replace 08 FT Section Rear Roof Sheet ETR Translucent .  ",
    code: "XR4081",
  },
  {
    description: "Patch  1.0 ft X 1.0 ft Roof Sheet ETR Translucent .  ",
    code: "XR4082",
  },
  {
    description: "Patch  0.5  ft X 0.5 ft Roof Sheet ETR Translucent .  ",
    code: "XR4083",
  },
  {
    description: " Straighten Nose Rail Flange ",
    code: "XR4084",
  },
  {
    description: " Reseal Roof Patch  4 ft 1.0   (additional 0.15 for ft)",
    code: "XR4085",
  },
  {
    description: " Reseal Section Front, rear Roof Sheet - Translucent ",
    code: "XR4086",
  },
  {
    description: " Patch 0.5 ft X 0.5 ft Roof Sheet-Aluminum ",
    code: "XR4087",
  },
  {
    description: "Patch 1.0 ft X 1.5 ft Roof Sheet Aluminum  ",
    code: "XR4088",
  },
  {
    description: " Straighten Roof Bow (0.5 )",
    code: "XR4089",
  },
  {
    description: " Patch 1 ft X 1.5 ft Roof Sheet- Translucent ",
    code: "XR4090",
  },
  {
    description: " 0.5 ft X 1.0 ft Roof Sheet ETR Translucent .  ",
    code: "XR4091",
  },
  {
    description: " 1.5 ft X 2.5 ft Roof Sheet ETR Translucent .  ",
    code: "XR4092",
  },
  {
    description: " Reseal Front Roof  Sheet-Aluminum ",
    code: "XR4093",
  },
  {
    description: " Patch 0.25 FT X 0.25 FT Roof Sheet ETR Translucent  ",
    code: "XR4094",
  },
  {
    description: " Patch 0.8 ft X 0.8 ft Roof Sheet Aluminum ",
    code: "XR4095",
  },
  {
    description: " Patch 1.5 ft X 1.5 ft Roof Sheet ETR Translucent. ",
    code: "XR4096",
  },
  {
    description: " Patch 2 ft X 2 ft Roof Sheet ETR Translucent. ",
    code: "XR4097",
  },
  {
    description: " Replace Nose Panel Rivet (s)   ",
    code: "XR4098",
  },
  {
    description: " Patch 2.0 X 2.0 Aluminum Roof ",
    code: "XR4099",
  },
  {
    description: " Reseal Left Corner Panel",
    code: "XRA4070",
  },
  {
    description: " Reseal Right Corner Panel ",
    code: "XRA4070",
  },
  {
    description: " Patch Front Nose Panel 1.0 ft X 1.0 ft  ",
    code: "XS8005",
  },
  {
    description: " R&R Nose Scuff ",
    code: "Labor",
  },
  {
    description:
      " PM Maintenance Service \n              Complete Lubrication and Grease \n               Check and Air Up Tires",
    code: 1002,
  },
  {
    description: "Labor - Inspection (Grease /Lubrication)",
    code: 100,
  },
  {
    description: " Truck Repair",
    code: "TR8900",
  },
  {
    description: " Replace Battery ( Each )",
    code: "XPO1008",
  },
  {
    description: " Replace Push  Pin  with Handle",
    code: 6020,
  },
  {
    description: " STRAIGHT AND WELD PIN HANDLE",
    code: 6021,
  },
  {
    description: " REPLACE PUSH  PIN HANDLE (Weld)",
    code: 6022,
  },
  {
    description: " STRAIGHT LATSH",
    code: 6023,
  },
  {
    description: " Replace Latch + Bolt + Nut ",
    code: 6024,
  },
  {
    description: " Weld Latch Mount",
    code: "6024BB",
  },
  {
    description: " FABRICATE AND INSTALL HANDLE KEEPER MOUNT",
    code: 6026,
  },
  {
    description: " REPLACE TWIST LOCK PIN",
    code: 6027,
  },
  {
    description: " STRAIGHT AND WELD TWIST LOCK HANDLE",
    code: 6028,
  },
  {
    description: " REPLACE TWIST LOCK HANDLE",
    code: 6029,
  },
  {
    description: " Heat + Str TwistLock Handle Bent",
    code: 6030,
  },
  {
    description: " Replace Twislock + Handle + Bolt and Nut",
    code: 6032,
  },
  {
    description: " Weld latch mount - Broken",
    code: 6033,
  },
  {
    description: " Weld Pin Latch - Missing",
    code: 6034,
  },
  {
    description:
      " Replace Twislock Kit  (Twislock + Handle + Space  + Pin Latch + Riser Block Housing + Shear Block + Detent Spring for Saftel )",
    code: 6035,
  },
  {
    description: " Replace Push Pin Handle Stop",
    code: 6036,
  },
  {
    description:
      " Removed Push Pin Housing (Broken  and Install (Weld) new Push Pin + Housing + Latch - Right Front",
    code: 6037,
  },
  {
    description: " Weld twistlock riser",
    code: 6041,
  },
  {
    description: " Realign Twislock out of position",
    code: 6043,
  },
  {
    description: "Replace:  Hook Latch Kit  ",
    code: "mc1001",
  },
  {
    description: " Straighten Twistlock Handle ",
    code: "MDE1001",
  },
  {
    description: " Replace Twistlock + Handle  + Bolt + Nut ",
    code: "MDE1002",
  },
  {
    description: " Straight Twistlock Handle ",
    code: "MF1004",
  },
  {
    description: " Replace Snapper Pin \n              66053",
    code: 66053,
  },
  {
    description: " Replace Mudflap DCLI  ",
    code: "SDC60010",
  },
  {
    description: " Replace Twistlock Pin - Bolt on ",
    code: "SDC60011",
  },
  {
    description: " Replace Safety  Latch  ",
    code: "SDC6002",
  },
  {
    description: " Replace Twistlock Handle Bolt On ",
    code: "SDC6003",
  },
  {
    description: " Straight Mudflap Bracket ",
    code: "SDC6004",
  },
  {
    description: " Replace Complete Twistlock Assembly ",
    code: "SDC6007",
  },
  {
    description: " Replace Safety  Latch Retainer ",
    code: "SDC6008",
  },
  {
    description: ' Replace Conspicuity Tape per 18" Piece ',
    code: "SDC6009",
  },
  {
    description: " Replace Tire Air Valve - Bad ",
    code: 7002,
  },
  {
    description: " Remove Tires and Reinstall  ( SWAP )",
    code: 7004,
  },
  {
    description: " Replace Tire",
    code: 7005,
  },
  {
    description: " Repair Flat Tire",
    code: 7006,
  },
  {
    description: " Straight Rim  ( Bent )",
    code: 7007,
  },
  {
    description: " Replace  Spacer Wheel ",
    code: 7009,
  },
  {
    description: " REMOVE + REPLACE + REMOUNT TIRE",
    code: 7013,
  },
  {
    description: " REMOVE + REPAIR + REMOUNT 1 TIRE",
    code: 7014,
  },
  {
    description: " Replace Tire Rim",
    code: 7016,
  },
  {
    description: " Check and Air up all Tires ",
    code: 7018,
  },
  {
    description: " Check Tires Tread Depth ",
    code: 7020,
  },
  {
    description: " Removed and Reinstalled Tire (Improperty Installed)",
    code: 7023,
  },
  {
    description:
      " Check Tires and Check automatic system to fill the tires with air. ",
    code: 7024,
  },
  {
    description: " Switch Tire (s) - ",
    code: 7025,
  },
  {
    description: " Clean Up Hub Cap  ",
    code: "MB1003",
  },
  {
    description: " Wheel Inspection ",
    code: "MA10015",
  },
  {
    description: " Replace 5th wheel Pull Handle   KIT-PUL-6000L   ",
    code: "MC9003",
  },
  {
    description: " Replace stud Wheel + Wedge + Nuts ",
    code: "MT7012",
  },
  {
    description: " Replace Wedge Clamp ",
    code: "MT7015",
  },
  {
    description:
      " Replace Oil Hubcap + Hubcap Gasket and Refill Oil \n340-4009  STEMCO - Hub Cap 3404009  \n Clean Oil of Rim Wheel",
    code: "MB1002",
  },
  {
    description: " Replace Wheel Seal Oil ",
    code: "MB2001",
  },
  {
    description: " Repair Flat Tire ",
    code: "SDC8001",
  },
  {
    description: " Check and Air Up tires ",
    code: "SDC8002",
  },
  {
    description: " Replace Tire ",
    code: "SDC8003",
  },
  {
    description: " Replace Mounted Tire  ",
    code: "SDC8004",
  },
  {
    description: ' Replace Wheel Valve Stem Tubeless 4 3/8" ',
    code: "SDC8005",
  },
  {
    description: " Replace Wheel Clamp - Wedge \n              Wheel Clamp",
    code: "SDC8006",
  },
  {
    description: " Replace Wheel Stud  - One Pc for Every 3 Studs ",
    code: "SDC8007",
  },
  {
    description: " Replace Wheel Nut ",
    code: "SDC8008",
  },
  {
    description: " Replace tire (without tire repair)",
    code: "X3001",
  },
  {
    description:
      " Remove Tires + Remove Brake Drum + Remove Brakes Shoes + Free Up Inner Scam Bushing - Frozen Left Front ",
    code: "x3010",
  },
  {
    description:
      " Remove Tires + Remove Brake Drum + Remove Brakes Shoes + Free Up Inner Scam Bushing - Frozen Left Rear ",
    code: "X3010",
  },
  {
    description:
      " Remove Tires + Remove Brake Drum + Remove Brakes Shoes + Free Up Inner Scam Bushing - Frozen Right  Rear ",
    code: "X3010",
  },
  {
    description:
      " Remove Tires + Remove Brake Drum + Remove Brakes Shoes + Free Up Inner Scam Bushing - Frozen Right  Rear ",
    code: "X3010",
  },
  {
    description: " Wheel End Inspection  ",
    code: "X3012",
  },
  {
    description: " Wheel End Inspection ",
    code: "X3018",
  },
  {
    description: " Removed Hubcap + Repack Outer Bearing with new Grease ",
    code: "X3019",
  },
  {
    description: " Check Wheel Bearing / Jack Up ",
    code: "X3035",
  },
  {
    description: "Swap Tires ",
    code: "X7004",
  },
  {
    description: " Replace  Tires  ",
    code: "X7005",
  },
  {
    description: " Repair Flat Tire",
    code: "X7006",
  },
  {
    description: " Replace Wheel Tire Valve Stems ",
    code: "X7006",
  },
  {
    description: " Repair Tire 02 Patchs ",
    code: "X7006",
  },
  {
    description: " Dismount Tire + Straight Rim + Remount Tire",
    code: "X7007",
  },
  {
    description: " Replace Tire (Dismount and Remount)",
    code: "X7010",
  },
  {
    description: " Replace Dual Stem Valve Caps ",
    code: "X7015",
  },
  {
    description: " Replace Tire  Stem Valve ",
    code: "X7016",
  },
  {
    description: " Replace with Refurbished Wheel ",
    code: "X7021",
  },
  {
    description: " Replace Wheel Stud  and Nut ",
    code: "X7022",
  },
  {
    description: " Installed Snow Chain Kit .\n             QG2143",
    code: "X7023",
  },
  {
    description: " Replace Hubcap Gasket ",
    code: "XA3039",
  },
  {
    description:
      " Replace Wheel Seal \n              Repack Bearings \n              Repack Hub and Hubcap\n              Replace Hubcap Gasket",
    code: "XA3042",
  },
  {
    description: " Replace Oil Wheel Seal",
    code: "XA3043",
  },
  {
    description: " Clean wheel Rim ",
    code: "XA3045",
  },
  {
    description:
      " Replace Oil Hubcap 6 Holes + Hubcap Gasket and Refill Oil  \n340-4009  STEMCO - Hub Cap",
    code: "XA3047",
  },
  {
    description: " Replace Hubcap and Gasket ",
    code: "XA3048",
  },
  {
    description: " Reposition Tire ",
    code: "XT7021",
  },
  {
    description: " Resecure Push Rod Nut - Loose  ",
    code: 1001,
  },
  {
    description: " Replace Bulk Head Fitting ",
    code: 1002,
  },
  {
    description: "  Replace Gladhand Seal",
    code: 1003,
  },
  {
    description: "  Re-Secure Gladhand",
    code: 1004,
  },
  {
    description: " Replace GladHand",
    code: 1005,
  },
  {
    description: "Bulkhead Resecure Bulkhead Fitting Loose",
    code: 1006,
  },
  {
    description: "Replace Air Replace Air Line 3/8",
    code: 1009,
  },
  {
    description: " Replace Air Line 1/2",
    code: 1010,
  },
  {
    description: "  Replace Bulkhead Fitting and Gladhand",
    code: 1013,
  },
  {
    description: " Replace 1 Brake Hose 4' With Swivels",
    code: 1014,
  },
  {
    description: " Replace Air hose and fitting",
    code: "1014AA",
  },
  {
    description: " Replace Air Fitting",
    code: "1014B",
  },
  {
    description: " Replace Relay Air Valve",
    code: 1015,
  },
  {
    description: " Replace Air Tank W/ Brackets",
    code: 1016,
  },
  {
    description: " Weld Air Tank Brackets",
    code: 1017,
  },
  {
    description: "  Replace Relay Valve 2 Ports",
    code: 1018,
  },
  {
    description: "  Replace Relay Valve 4 Ports.",
    code: 1019,
  },
  {
    description: " Replace Air Valve 4 Ports ",
    code: 1021,
  },
  {
    description: " Refasten Air Line",
    code: 1022,
  },
  {
    description: " Tighten Air / Electrical Lines up to 5 per Jam Nuts.",
    code: 1023,
  },
  {
    description: "  Remove + Clean Air Valve + Reinstall.",
    code: 1024,
  },
  {
    description: " Adjust ABS Sensor (01 Axle).",
    code: 1026,
  },
  {
    description: " Adjust ABS Sensor (02 Axle).",
    code: 1027,
  },
  {
    description: " Straighten Push Rod",
    code: 1030,
  },
  {
    description: "  Replace Slack Adjuster Manual ",
    code: 1031,
  },
  {
    description: "  Replace Slack Adjuster Automatic. ",
    code: 1032,
  },
  {
    description: " Free Up Slack Adjuster.",
    code: 1033,
  },
  {
    description: " Free Up Slack Adjuster Additional.",
    code: 1034,
  },
  {
    description: " Replace Brake Drum w/o Wheel Work.",
    code: 1035,
  },
  {
    description: " Replace Brake Drum with Wheel Work.",
    code: 1036,
  },
  {
    description:
      " Replace Brakes Shoes (2.0 Each Wheel). Replace Hardware Kit\n             Replace Seal-Stemco. Repack Bearing and Hub",
    code: 1037,
  },
  {
    description: " Replace Brake Shoe with Hardware kit.",
    code: "1037D",
  },
  {
    description: " Replace Brake Chamber bracket ",
    code: 1040,
  },
  {
    description:
      " Removed Wheel + Replace Hardware Kit (Missing ) and Reinstall.",
    code: 1041,
  },
  {
    description: " Replace Wheel Seal",
    code: 1042,
  },
  {
    description:
      " Replace wheel seal\n Convert hub wheel from oil to grease\n Repack bearings \n Refill hub with grease",
    code: "1042C",
  },
  {
    description:
      " Replace  Brakes Shoes Hardware Kit - Missing\r\n Replace Wheel Seal \r\n Repack Bearings ,Hub and Hubnap",
    code: "1042D",
  },
  {
    description: " REPLACE BEARING AND RACES ",
    code: 1043,
  },
  {
    description: " REPLACE BEARING AND RACES W/ WHEEL WORK",
    code: 1044,
  },
  {
    description:
      " Replace Hub Wheel 5 Spoke + Brake Drum +  Seal + Repack Bearings + Hubcap Gasket \r\nRepack with new Grease",
    code: 1045,
  },
  {
    description:
      " Replace  Hub Wheel (5 Spoke) +\r\n             Repack Bearings\r\n             Repack Hub Wheel with Grease \r\n             Replace Hubcap Gasket \r\n             Replace Seal",
    code: 1046,
  },
  {
    description: " FILL ALL NEW HUBS W/ NEW OIL",
    code: 1047,
  },
  {
    description: " FREE UP BRAKE SHOES (01) AXLE",
    code: 1049,
  },
  {
    description: " Repair  Air Hose - Leaking",
    code: 1052,
  },
  {
    description: " RESECURE AIR LINES AND HARNESS WIRE WITH ZIPTIE",
    code: 1054,
  },
  {
    description: " Replace air Hoses Clamps - Broken/Missing (0.10 each clamp)",
    code: 1056,
  },
  {
    description: " Resecure Air Lines and Electrical Harness",
    code: 1058,
  },
  {
    description: " Replace ABS sensor + Replace Seal + Repack Bearings",
    code: 1062,
  },
  {
    description: " Replace Scam Bushing ",
    code: 1064,
  },
  {
    description: " Trace + Repair Air system - Leaking",
    code: 1065,
  },
  {
    description: " Replace Abs sensor\r\n Resecure Abs Sensor with ziptie",
    code: 1066,
  },
  {
    description: " Replace Air Hoses Plastic Spacer",
    code: 1068,
  },
  {
    description: " Jack Up Wheel   and Check Play Bearing",
    code: 1069,
  },
  {
    description: " Replace Scam Bushing ",
    code: 1071,
  },
  {
    description:
      " Trace + Repair Abs Problem \r\n             Replace ABS Computer \r\n            Replace 02 ABS Sensors",
    code: 1074,
  },
  {
    description: " Replace  Drain Cock Valve   Tank ",
    code: 1080,
  },
  {
    description:
      " Removed Air Valve + Replace Union Fitting + Reinstall Air Valve",
    code: 1082,
  },
  {
    description: " Resecure Air Valve - Leaking",
    code: 1083,
  },
  {
    description: " Resecure Hub cap - Leaking",
    code: 1087,
  },
  {
    description: " Replace  Suspension spring + U-Bolt  Kit",
    code: 1632,
  },
  {
    description: " Replace Hubcap +  Gasket and Refill Oil   340-4009 Stemco ",
    code: 2016,
  },
  {
    description:
      " Replace Abs Cable extension (Computer to Sensor) and Resecure with Ziptie.",
    code: 2019,
  },
  {
    description: " Resecure Hubcap + Clean",
    code: "2025ab",
  },
  {
    description: " Replace Hub Cap Gasket and Refill with Oil",
    code: 2037,
  },
  {
    description: " Trace + Repair ABS problem",
    code: 2051,
  },
  {
    description: " Replace ICC Bumper Horizontal (Channel)",
    code: 2066,
  },
  {
    description: " Replace Brake Drum ",
    code: 2084,
  },
  {
    description: " Replace Spindle Nuts Large /Small and Lock Ring",
    code: 2087,
  },
  {
    description: "Check and  Adjust Brakes",
    code: 3000,
  },
  {
    description: " Resecure Bulk head and Fitting.",
    code: 3002,
  },
  {
    description: " Replace Brake Chamber",
    code: 3004,
  },
  {
    description: " Replace Brake Chamber Clevis",
    code: 3008,
  },
  {
    description: " Trace and Repair Air Leak.",
    code: 3009,
  },
  {
    description: " Tighten Bolt (s) Left , Right ICC Upright (s)",
    code: 4040,
  },
  {
    description: " Free up Scam Bushing - Frozen and Slack Adjuster ",
    code: "SDC10015",
  },
  {
    description: " Replace GladHand Bracket Mount ",
    code: "20PH12136",
  },
  {
    description: " Replace Hubcap + Gasket and Refill with Gear Oil ",
    code: "AB2038",
  },
  {
    description: " Replace GladHand Seal ",
    code: "MA1001",
  },
  {
    description: " Free Up Scam Bushing and Slack Adjuster by Wheel",
    code: "MA1010",
  },
  {
    description: " Replace Slack Adjuster Automatic ",
    code: "MA1011",
  },
  {
    description: " Resecure  / Refasten  Air Hoses with plastic Ziptie",
    code: "MA1012",
  },
  {
    description:
      " Resecure / Refasten  Air Hoses with Plastic Spacer   451037  3/8X3/8 ",
    code: "MA1013",
  },
  {
    description: "Replace Brake Drum + Replace Brakes Shoes +Hardware Kit ",
    code: "MA1014",
  },
  {
    description: " Refasten Air Tank ",
    code: "MA1016",
  },
  {
    description: " Refasten Air Bag Valve Bracket  ",
    code: "MA1017",
  },
  {
    description: " Replace Relay Air Valve SL110360 ",
    code: "MA1018",
  },
  {
    description: " Refasten Air Fitting ",
    code: "MA1019",
  },
  {
    description: " Check and Adjust Brakes ",
    code: "MA1002",
  },
  {
    description: " Reinstall Bulk Head Fitting and GladHand  ",
    code: "MA1020",
  },
  {
    description:
      " Replace Air Hoses Support Spring  - Spring Slider  \n              Haldex Spring airline support - 11603",
    code: "MA1021",
  },
  {
    description: " Resecure / Refasten GladHand Holder Plate ",
    code: "MA1022",
  },
  {
    description: " Replace Brake Chamber Dust Plug ",
    code: "MA1023",
  },
  {
    description: " Replace Valve Drain Cock - Air Tank ",
    code: "MA1024",
  },
  {
    description: " Refasten / Resecure GladHand  ",
    code: "MA1025",
  },
  {
    description: " Replace Air Line Fitting  ",
    code: "MA1026",
  },
  {
    description: " Replace Air Hose Fitting ",
    code: "MA1027",
  },
  {
    description: "  Replace Brakes Shoes and Hardware Kit ",
    code: "MA1028",
  },
  {
    description: " Replace Absorber Shock ",
    code: "MA1029",
  },
  {
    description: " Trace and Repair Air Leak ",
    code: "MA10034",
  },
  {
    description: " Jack Up and Check Wheel Bearing ",
    code: "MA1030",
  },
  {
    description: " Replace Air Valve  Release Kit ",
    code: "MA1031",
  },
  {
    description: " Removed and Reinstall GladHand ",
    code: "MA1032",
  },
  {
    description: " Resecure Push Rod Nut  ",
    code: "MA1033",
  },
  {
    description: " Free up GladHand Swing Away ",
    code: "MA1035",
  },
  {
    description: " Replace Slack Adjuster Manual ",
    code: "MA1036",
  },
  {
    description: "Replace  Sloan Gladhand Shut-Off  -  ",
    code: "MA1037",
  },
  {
    description: " Removed and Reinstalled GladHand Mounting Plate ",
    code: "MA1038",
  },
  {
    description: " Replace Air Hose with 02 Fittings ",
    code: "MA1039",
  },
  {
    description: " Resecure  / Refasten GladHand + Bulk Head Fitting  ",
    code: "MA1004",
  },
  {
    description: " Replace 1/2 Female Ball Valve  2 way ",
    code: "MA1040",
  },
  {
    description: " Replace Air Valve Pressure Protection 90554107  ",
    code: "MA1041",
  },
  {
    description: " Replace Air Bag ",
    code: "MA1042",
  },
  {
    description: " FREE UP BRAKE SHOES  AXLE",
    code: "MA1044",
  },
  {
    description: " Resecure Air Tank ",
    code: "MA1045",
  },
  {
    description: " Replace Gladhand Holder Bracket ",
    code: "MA1048",
  },
  {
    description: " Replace   GladHand Quick Release Angle 12-236   12236   ",
    code: "MA1049",
  },
  {
    description: " Reline with wheel End Inspection ",
    code: "MA1005",
  },
  {
    description: " Resecure / Refasten Brake Chamber ",
    code: "MA10050",
  },
  {
    description: " Replace Relay Air Valve RSL110500  ",
    code: "MA10051",
  },
  {
    description: " Replace Brake Chamber 30/30  ",
    code: "MA1006",
  },
  {
    description: " Replace Swing Away GladHand SLN441063  SLN441062   ",
    code: "MA1007",
  },
  {
    description: " Replace  Bracket Mount GladHand ",
    code: "MA1008",
  },
  {
    description: " Replace GladHand ",
    code: "MA1009",
  },
  {
    description:
      " Replace 12-326   12326   Gladhand - Composite, Service / Blue, Shut-Off Valve, Bulkhead Mount, 3/8Ó Port   ",
    code: "MA1010",
  },
  {
    description: " REPLACE AIR  VALVE - FULL FUNCTION (  FF2  KN28601  ) ",
    code: "MA1011",
  },
  {
    description: " Replace Clavis Pins + Clavis + Cutter Pin  ",
    code: "MA3061",
  },
  {
    description:
      " Replace Shut Off Valve    \n               441014  -  441004   -",
    code: "MA4001",
  },
  {
    description: " Straighten ABS Bracket ",
    code: "MABS1001",
  },
  {
    description: " Replace ABS Light   ",
    code: "MABS1002",
  },
  {
    description: " Resecure / Refasten ABS Harness Wire ",
    code: "MABS1004",
  },
  {
    description: " Replace RSL17600B  release air valve push buton ",
    code: "MC9007",
  },
  {
    description: "  Replace Shut Off Valve   441004  or 441014",
    code: "ML10041",
  },
  {
    description: "Parts : MIscellaneous ( acet,Oxy. WD40 ,Etc)",
    code: "PDC10029",
  },
  {
    description: "Repack Removed Hubcap, Repack Nuts axle.",
    code: "AB1069a",
  },
  {
    description: " Replace   GladHand Seals",
    code: "AB1005",
  },
  {
    description: " Replace 01 Air Valve ",
    code: "SDC10013",
  },
  {
    description: " Replace Air Fitting ",
    code: "SDC10018",
  },
  {
    description: " Replace Brake Chamber ",
    code: "SDC10014",
  },
  {
    description: " Replace Brake Hose ",
    code: "SDC10017",
  },
  {
    description: " Replace Brakes Shoes per wheel ",
    code: "SDC10020",
  },
  {
    description: " Replace Bulkhead Fitting ",
    code: "SDC10012",
  },
  {
    description: " Replace Gladhand ",
    code: "MB10010",
  },
  {
    description: " Replace GladHand Bracket Mount 81000138B 81000138R  ",
    code: "MA10034",
  },
  {
    description: " Replace Gladhand seal ",
    code: "MB1001",
  },
  {
    description: " Replace Slack Adjuster incl Brake Adjustment ",
    code: "SDC10016",
  },
  {
    description: " Replace Wheel Seal ",
    code: "SDC10019",
  },
  {
    description: " Resecure Air Hose ",
    code: "SDC10011",
  },
  {
    description: " Resecure Bulkhead Fitting ",
    code: "SDC1002",
  },
  {
    description: " Replace Air Tank ",
    code: "SDC10021",
  },
  {
    description: " Replace Hubcap ",
    code: "SDC10022",
  },
  {
    description: " Replace Petcock ",
    code: "SDC10023",
  },
  {
    description: " Free Up Slack Adjuster and/or Cam Shaft (each 0.20)",
    code: "SDC10024",
  },
  {
    description: " Replace Brakes Shoes Complete (All Wheels) ",
    code: "SDC10025",
  },
  {
    description: " Replace Brake Drum ",
    code: "SDC10026",
  },
  {
    description: " Repair Air Line (0.10 -10)",
    code: "SDC10027",
  },
  {
    description: " Heat + Free up Clavis and Pins - Frozen",
    code: "SDC10029",
  },
  {
    description: " Trace and Repair Air System",
    code: "SDC1003",
  },
  {
    description: " Replace Push Rod Clavis + Pins ",
    code: "SDC10030",
  },
  {
    description: " Replace Plug Fitting ",
    code: "SDC10031",
  },
  {
    description: " Replace Swinger Gladhand ",
    code: "SDC10032",
  },
  {
    description: " Install hose separator -  Spacer hoses (1-4 per piece ) ",
    code: "SDC1005",
  },
  {
    description: " Free up Brakes Shoes - Frozen",
    code: "SDC1006",
  },
  {
    description:
      " Resecure Push Rod Nut  \n              Refasten Brake Chamber Jam Nut",
    code: "SDC1007",
  },
  {
    description: " Replace Bulk Head Fitting ",
    code: "SDC1008",
  },
  {
    description: " Check and Adjust Brakes Front Axle / Rear Axle ",
    code: "SDC1009",
  },
  {
    description: " Reconect  Marker Lights ",
    code: "SDC4008",
  },
  {
    description: " Replace   GladHand Seals  ",
    code: "X1005",
  },
  {
    description: " Check and Adjust Brakes ",
    code: "X3000",
  },
  {
    description: " Trace and Repair Air Leak",
    code: "X3001",
  },
  {
    description: " Resecure GladHand + Bulk Head Fitting - Loose",
    code: "X3002",
  },
  {
    description: " Resecure/Refasten  GladHand - Loose ",
    code: "X3002R",
  },
  {
    description: " Replace Brakes Shoes and Hardware Kit   ",
    code: "X3003",
  },
  {
    description: " Replace Brake Chamber LF ",
    code: "X3004LF",
  },
  {
    description: " Replace Brake Chamber LR ",
    code: "X3004LR",
  },
  {
    description: " Replace Brake Chamber RF ",
    code: "X3004RF",
  },
  {
    description: " Replace Brake Chamber RR ",
    code: "X3004RR",
  },
  {
    description: " Replace Swing Away GladHand     SLN441063  SLN441062  ",
    code: "X3005 ",
  },
  {
    description:
      " Replace 01 Gladhand Mounting Bracket with Quick release12-236 ",
    code: "X3005ABC",
  },
  {
    description: " Replace 37-1/2 Bracket Mount GladHand",
    code: "X3005F",
  },
  {
    description: " Replace GladHand ",
    code: "X3005G",
  },
  {
    description: " Free up LF Scam Bushings/Slack Adjuster - Frozen ",
    code: "X3006LF",
  },
  {
    description: " Free up LR  Scam Bushings/Slack Adjuster - Frozen ",
    code: "X3006LR",
  },
  {
    description: " Free up RF Scam Bushings/Slack Adjuster - Frozen ",
    code: "X3006RF",
  },
  {
    description: " Free up RR Scam Bushings/Slack Adjuster - Frozen ",
    code: "X3006RR",
  },
  {
    description: " Replace Slack Adjuster Automatic LF ",
    code: "X3007LF",
  },
  {
    description: " Replace Slack Adjuster Automatic LR ",
    code: "X3007LR",
  },
  {
    description: " Replace Slack Adjuster Automatic RF ",
    code: "X3007RF",
  },
  {
    description: " Replace Slack Adjuster Automatic RR ",
    code: "X3007RR",
  },
  {
    description: " Check and Resecure Air System",
    code: "X3008",
  },
  {
    description: " Resecure Air Hoses ",
    code: "X3009",
  },
  {
    description: " Resecure Air Hoses with plastics spacers  451037  ",
    code: "X3010",
  },
  {
    description: " Replace Brake Drum + Brakes Shoes + Hardware Kit ",
    code: "X3011",
  },
  {
    description: " Refasten Air Tank ",
    code: "X3013",
  },
  {
    description: " Refasten Air Bag Valve Bracket ",
    code: "X3014",
  },
  {
    description: " Refasten Air Hoses ",
    code: "X3015",
  },
  {
    description: " Refasten/Resecure ABS Harnes Wire ",
    code: "X3016",
  },
  {
    description: " Refasten Air Fitting ",
    code: "X3016AA",
  },
  {
    description: " Replace Valve Drain Cock  Valve -  Leaking ",
    code: "X3020",
  },
  {
    description: " Replace Air Hoses Support Spring ( Slider Spring ) ",
    code: "X3021",
  },
  {
    description: " Resecure Air Line with Slider Spring ",
    code: "X3022",
  },
  {
    description: " Refasten/Straighten  GladHand Holder Plate ",
    code: "X3023",
  },
  {
    description: " Refasten GladHand Swivel  ",
    code: "X3025",
  },
  {
    description: " Replace Air Line Fitting ",
    code: "X3026",
  },
  {
    description: " Replace Air Brass Fitting ",
    code: "X3027",
  },
  {
    description:
      "Replace 01 Air Valve  VS25223  or VS-25223   HENDRICKSON 3-WAY AUTO RESET VALVE   ",
    code: "X3028",
  },
  {
    description: " Replace 01 Air Valve Release Kit  ",
    code: "X3036",
  },
  {
    description: " Removed and Reinstall Service GladHand ",
    code: "X3037",
  },
  {
    description: " Replace  Relay Air Valve",
    code: "X3038",
  },
  {
    description:
      " Replace Swinger Gladhand or Swivel glandhand 90 Degree Service - 12-4906   124906 ",
    code: "X3039",
  },
  {
    description: " Replace Brakes Shoes and Hardware Kit ",
    code: "XA3028",
  },
  {
    description: " Free up Brakes Shoes and  Slack Adjusters/Lubricate  ",
    code: "XA3040",
  },
  {
    description: " Replace Dummy GladHand ",
    code: "XA3041",
  },
  {
    description: " Replace Relay Air Valve  ",
    code: "XA3044",
  },
];

export default services;
