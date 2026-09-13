import { MapNode } from "./types";

export const MAP_NODES: MapNode[] = [
  // ==================== STRATEGIC OVERSEAS PORTS & BASES ====================
  {
    id: "chabahar",
    name: "Chabahar Port (Shahid Beheshti Terminal)",
    category: "port",
    region: "West Asia / Gulf of Oman",
    countryOrBody: "Iran (Sistan-Baluchestan)",
    coords: { x: 448, y: 242 },
    latLon: { lat: 25.29, lon: 60.64 },
    strategicSignificance:
      "Located on the Makran coast of Iran outside the narrow Strait of Hormuz. Provides direct maritime access to Afghanistan and Central Asia, bypassing Pakistan.",
    indiaRelevance:
      "India's premier strategic connectivity hub in the region. Operated by India Ports Global Limited (IPGL). In May 2024, India and Iran signed a historic 10-year long-term contract for the operation of the Shahid Beheshti terminal, guaranteeing sustained investment and operations.",
    latestStatus:
      "10-year long-term bilateral contract signed May 2024. India has supplied heavy mobile harbour cranes and handled over 90,000 TEUs and 8.4 million tonnes of bulk cargo.",
    prelimsFacts: [
      "Operated by India Ports Global Chabahar Free Zone (IPGCFZ) / IPGL.",
      "Consists of two separate terminals: Shahid Beheshti and Shahid Kalantari (India operates Shahid Beheshti).",
      "Connects directly with the International North-South Transport Corridor (INSTC) and the Chabahar-Zahedan railway link.",
    ],
    linkId: "iran",
    sourceKey: "mea",
  },
  {
    id: "duqm",
    name: "Port of Duqm & Naval Access",
    category: "port",
    region: "Western Arabian Sea / Gulf of Oman",
    countryOrBody: "Oman (Al Wusta)",
    coords: { x: 418, y: 288 },
    latLon: { lat: 19.67, lon: 57.70 },
    strategicSignificance:
      "Deep-water port overlooking critical shipping lanes in the Arabian Sea, Gulf of Aden, and Red Sea. Offers world-class dry dock and ship repair facilities.",
    indiaRelevance:
      "In 2018, India signed a landmark military access agreement allowing the Indian Navy to use Duqm Port for logistics, refuelling, operational turnarounds, and dry-dock repairs for Indian naval warships deployed on anti-piracy and Gulf maritime security missions.",
    latestStatus:
      "Regularly used by the Indian Navy for operational turnarounds during Western Fleet deployments and Gulf of Aden anti-piracy patrols under Operation Sankalp.",
    prelimsFacts: [
      "Located in the Special Economic Zone at Duqm (SEZAD), Oman.",
      "Overlooks the International Shipping Lane (ISL) linking the Persian Gulf with the Indian Ocean.",
      "Duqm dry docks can accommodate aircraft carriers and supertankers up to 600,000 DWT.",
    ],
    linkId: "oman",
    sourceKey: "mea",
  },
  {
    id: "sittwe",
    name: "Sittwe Port & Kaladan Project",
    category: "port",
    region: "Bay of Bengal",
    countryOrBody: "Myanmar (Rakhine State)",
    coords: { x: 672, y: 268 },
    latLon: { lat: 20.14, lon: 92.89 },
    strategicSignificance:
      "Deep-water port on the Bay of Bengal at the mouth of the Kaladan River. Developed with Indian grant assistance as the maritime gateway of the Kaladan Multi-Modal Transit Transport Project (KMMTTP).",
    indiaRelevance:
      "Creates an alternative maritime and riverine supply corridor connecting Kolkata port to the landlocked northeastern state of Mizoram (Zorinpui), bypassing the congested Siliguri Corridor ('Chicken's Neck'). Inaugurated for commercial cargo in May 2023.",
    latestStatus:
      "Operationalised in May 2023. Road component inside Rakhine and Chin states facing construction challenges due to civil unrest and conflict between the Myanmar junta and the Arakan Army.",
    prelimsFacts: [
      "Financed and constructed entirely under Indian grant-in-aid (~$480 million).",
      "Route: Kolkata Port to Sittwe Port (sea: 539 km) → Sittwe to Paletwa (Kaladan river: 158 km) → Paletwa to Zorinpui (road: 110 km to Mizoram).",
      "Operated by India Ports Global Limited (IPGL).",
    ],
    linkId: "myanmar",
    sourceKey: "mea",
  },
  {
    id: "sabang",
    name: "Sabang Port (Pulau Weh)",
    category: "port",
    region: "Andaman Sea / Malacca Gateway",
    countryOrBody: "Indonesia (Aceh Province)",
    coords: { x: 692, y: 388 },
    latLon: { lat: 5.89, lon: 95.32 },
    strategicSignificance:
      "Strategic deep-water port at the northern tip of Sumatra at the western entrance of the vital Strait of Malacca. Situated merely ~90 nautical miles (~165 km) from India's southernmost point, Indira Point (Great Nicobar).",
    indiaRelevance:
      "India and Indonesia concluded a joint vision on maritime cooperation in 2018 to explore joint development of Sabang Port, enabling Indian civilian trade and naval replenishment near the chokepoint of the Malacca Strait.",
    latestStatus:
      "Joint port infrastructure feasibility studies underway between India and Indonesia; Indian naval ships make periodic goodwill and replenishment visits.",
    prelimsFacts: [
      "Natural deep-water port with 40-metre depth, capable of berthing submarines and large naval frigates.",
      "Complements the planned Great Nicobar International Container Transhipment Port (ICTP) at Galathea Bay.",
    ],
    linkId: "indonesia",
    sourceKey: "mea",
  },
  {
    id: "agalega",
    name: "Agalega Island Strategic Airstrip & Jetty",
    category: "port",
    region: "South-Western Indian Ocean",
    countryOrBody: "Mauritius",
    coords: { x: 420, y: 468 },
    latLon: { lat: -10.40, lon: 56.61 },
    strategicSignificance:
      "Strategic island outpost located ~1,100 km north of Mauritius main island. Sits right in the center of the western Indian Ocean maritime route between southern Africa, the Mozambique Channel, and Asia.",
    indiaRelevance:
      "In February 2024, Prime Minister Narendra Modi and Mauritian PM Pravind Jugnauth jointly inaugurated the 3,000-metre airstrip and St. James Jetty built with Indian assistance. Allows Indian Navy Boeing P-8I maritime patrol aircraft and warships to conduct long-range maritime domain awareness across the western Indian Ocean.",
    latestStatus:
      "Fully operationalised in February 2024. Significantly upgrades Mauritian Coast Guard capabilities and cements India's role as the 'Preferred Security Partner' under SAGAR.",
    prelimsFacts: [
      "Jointly inaugurated virtually by PM Modi and PM Pravind Jugnauth on February 29, 2024.",
      "Features a 3,000-metre runway capable of handling P-8I Neptune maritime patrol aircraft.",
      "Complemented by the Coastal Surveillance Radar System (CSRS) network in the Indian Ocean.",
    ],
    linkId: "mauritius",
    sourceKey: "mea",
  },
  {
    id: "assumption",
    name: "Assumption Island Maritime Station",
    category: "port",
    region: "South-Western Indian Ocean / Mozambique Channel",
    countryOrBody: "Seychelles",
    coords: { x: 382, y: 440 },
    latLon: { lat: -9.75, lon: 46.51 },
    strategicSignificance:
      "Small island located ~1,140 km southwest of Victoria (Mahé). Overlooks the northern exit of the Mozambique Channel, a vital alternate oil route.",
    indiaRelevance:
      "India and Seychelles signed a bilateral agreement in 2015 (revised 2018) for joint development of military facilities on Assumption Island to help the Seychelles Coast Guard monitor its vast 1.3 million sq km Exclusive Economic Zone (EEZ) and counter piracy.",
    latestStatus:
      "Bilateral cooperation remains focused on coast guard training, gifting patrol vessels (PS Zoroaster in 2021), and radar surveillance sharing, while parliamentary ratification of the island lease remains delicate.",
    prelimsFacts: [
      "Seychelles EEZ spans ~1.37 million sq km in the western Indian Ocean.",
      "India gifted naval patrol vessel PS Zoroaster (built by GRSE Kolkata) to Seychelles in 2021.",
    ],
    linkId: "seychelles",
    sourceKey: "mea",
  },
  {
    id: "colombo-west",
    name: "Colombo Port West Container Terminal (CWIT)",
    category: "port",
    region: "South Asia / Indian Ocean",
    countryOrBody: "Sri Lanka",
    coords: { x: 565, y: 385 },
    latLon: { lat: 6.95, lon: 79.84 },
    strategicSignificance:
      "Major transhipment hub in South Asia sitting directly on the primary East-West shipping trunk route across the northern Indian Ocean.",
    indiaRelevance:
      "Developed by India's Adani Ports (51% stake) with John Keells Holdings and Sri Lanka Ports Authority with financing from the US International Development Finance Corporation (DFC - $553 million). Directly balances the Chinese-operated Colombo International Container Terminal (CICT).",
    latestStatus:
      "Phase 1 construction nearing completion; scheduled for commercial operational launch in 2025.",
    prelimsFacts: [
      "Over 60% of Colombo port's total container traffic originates from or is destined for Indian ports (transhipment).",
      "Financed by the US DFC ($553m), showcasing QUAD private-sector infrastructure counter-balancing.",
    ],
    linkId: "srilanka",
    sourceKey: "mea",
  },
  {
    id: "mongla-chattogram",
    name: "Chattogram & Mongla Ports Access",
    category: "port",
    region: "Bay of Bengal",
    countryOrBody: "Bangladesh",
    coords: { x: 654, y: 252 },
    latLon: { lat: 22.33, lon: 91.83 },
    strategicSignificance:
      "Principal sea gateways of Bangladesh on the Bay of Bengal, providing the closest maritime access points to India's landlocked North-Eastern Region (NER).",
    indiaRelevance:
      "Under the 2018 bilateral agreement, Bangladesh granted India permanent transit access to use Chattogram and Mongla ports for movement of goods to and from Assam, Tripura, and Meghalaya, cutting transit distances by up to 1,000 km.",
    latestStatus:
      "Regular transit cargo operations commenced in 2023; operational continuity is under review following Bangladesh's 2024 political transition.",
    prelimsFacts: [
      "Agreed transit routes link Chattogram/Mongla to Agartala (Tripura), Dawki (Meghalaya), and Sutarkandi (Assam).",
      "Complemented by the Maitri Setu (Friendship Bridge) over the Feni River connecting Sabroom (Tripura) with Ramgarh (Bangladesh).",
    ],
    linkId: "bangladesh",
    sourceKey: "mea",
  },

  // ==================== MARITIME CHOKEPOINTS & CANALS ====================
  {
    id: "malacca-strait",
    name: "Strait of Malacca",
    category: "chokepoint",
    region: "Southeast Asia / Indo-Pacific",
    countryOrBody: "Indonesia · Malaysia · Singapore",
    coords: { x: 720, y: 395 },
    latLon: { lat: 2.50, lon: 101.50 },
    strategicSignificance:
      "World's busiest maritime bottleneck connecting the Indian Ocean and the South China Sea. Over 90,000 vessels traverse annually, carrying ~25% of global traded goods and ~80% of China's total petroleum imports ('Malacca Dilemma').",
    indiaRelevance:
      "India's Tri-Service Andaman & Nicobar Command (ANC) sits directly at the western entrance of the strait (Six Degree Channel / Great Channel), providing India with immense natural surveillance and chokehold capabilities.",
    latestStatus:
      "High shipping congestion; India is developing the Galathea Bay Mega Transhipment Port in Great Nicobar to capture transhipment cargo bypassing Singapore and Port Klang.",
    prelimsFacts: [
      "Width at its narrowest point (Phillips Channel in Singapore Strait) is just 2.8 km (1.5 nautical miles).",
      "The 'Six Degree Channel' separates Great Nicobar Island from Indonesia's Rondo Island.",
    ],
    sourceKey: "mea",
  },
  {
    id: "hormuz-strait",
    name: "Strait of Hormuz",
    category: "chokepoint",
    region: "Persian Gulf / Gulf of Oman",
    countryOrBody: "Iran · Oman · UAE",
    coords: { x: 422, y: 226 },
    latLon: { lat: 26.56, lon: 56.25 },
    strategicSignificance:
      "The world's foremost energy chokepoint. Approximately 20-21 million barrels of crude oil per day (~20% of global petroleum consumption and over 80% of Persian Gulf crude exports) pass through this 39-km narrow strait.",
    indiaRelevance:
      "Vital to India's national energy security: roughly 60% of India's crude oil imports and over 70% of LNG supplies (primarily from Qatar and UAE) transit the Strait of Hormuz. The Indian Navy conducts Operation Sankalp to escort Indian-flagged tankers through the strait.",
    latestStatus:
      "High geopolitical sensitivity; frequent tensions involving Iran, Western tankers, and regional naval standoffs.",
    prelimsFacts: [
      "Separates Iran (north) from Oman's Musandam Peninsula (south).",
      "Navigable shipping lanes are only 3.2 km wide in each direction, separated by a 3.2 km buffer zone.",
    ],
    sourceKey: "mea",
  },
  {
    id: "bab-el-mandeb",
    name: "Bab-el-Mandeb & Red Sea",
    category: "chokepoint",
    region: "Horn of Africa / Red Sea",
    countryOrBody: "Yemen · Djibouti · Eritrea",
    coords: { x: 345, y: 318 },
    latLon: { lat: 12.58, lon: 43.33 },
    strategicSignificance:
      "The 'Gate of Tears'. Connects the Gulf of Aden and the Indian Ocean to the Red Sea and the Suez Canal. Bounded by Yemen on the Arabian Peninsula and Djibouti/Eritrea in the Horn of Africa.",
    indiaRelevance:
      "Crucial conduit for India's trade with Europe and the Americas (~$200 billion annually). Following Houthi missile and drone attacks in 2023-2024, the Indian Navy deployed 10-12 major frontline guided-missile destroyers/frigates in the Arabian Sea under Operation Sankalp, rescuing dozens of international merchant vessels and conducting anti-piracy strikes (e.g. MV Ruen).",
    latestStatus:
      "Heavily disrupted since late 2023 by regional conflict, causing global shipping lines to reroute around Africa via the Cape of Good Hope, adding 10-14 days transit time and 40% fuel surcharges.",
    prelimsFacts: [
      "Island of Perim (Mayyun) splits the strait into two channels: Bab Iskender (eastern) and Dact-el-Mayyun (western).",
      "Djibouti hosts foreign military bases of the US, France, Japan, Italy, and China's first overseas military base (opened 2017).",
    ],
    sourceKey: "mea",
  },
  {
    id: "suez-canal",
    name: "Suez Canal",
    category: "chokepoint",
    region: "North Africa / Mediterranean",
    countryOrBody: "Egypt",
    coords: { x: 312, y: 195 },
    latLon: { lat: 30.58, lon: 32.26 },
    strategicSignificance:
      "193 km artificial sea-level waterway in Egypt connecting the Mediterranean Sea to the Red Sea. Eliminates the ~7,000 km journey around Africa, handling ~12% of total global trade and ~30% of global container traffic.",
    indiaRelevance:
      "Principal shipping artery for Indian agricultural exports, petroleum refined products, and manufactured goods bound for Europe and the US East Coast. Egypt has offered India a dedicated land parcel in the Suez Canal Economic Zone (SCZONE).",
    latestStatus:
      "Canal revenues dropped by over 50% in 2024 due to Red Sea diversions around the Cape of Good Hope.",
    prelimsFacts: [
      "Nationalised by Egyptian President Gamal Abdel Nasser in 1956 (Suez Crisis).",
      "Runs through the Isthmus of Suez; does not use locks because terrain is at sea level.",
    ],
    linkId: "egypt",
    sourceKey: "mea",
  },
  {
    id: "mozambique-channel",
    name: "Mozambique Channel",
    category: "chokepoint",
    region: "South-Western Indian Ocean",
    countryOrBody: "Madagascar · Mozambique",
    coords: { x: 360, y: 495 },
    latLon: { lat: -18.00, lon: 41.00 },
    strategicSignificance:
      "1,600 km wide marine passage between Madagascar and Mozambique in southeastern Africa. Major alternate transit route for ultra-large crude carriers (ULCCs) that cannot navigate the Red Sea or Suez Canal.",
    indiaRelevance:
      "Core to India's SAGAR doctrine and Indian Ocean littoral outreach in East Africa. The Indian Navy conducts regular joint surveillance and humanitarian HADR missions with Mozambique, Madagascar, and Tanzania.",
    latestStatus:
      "Increased shipping volume due to commercial vessels avoiding the Red Sea.",
    prelimsFacts: [
      "Hosts major offshore natural gas discoveries (Rovuma Basin in Mozambique, where Indian PSUs ONGC Videsh and BPCL hold 30% combined equity).",
      "Contains French-administered Eparses Islands (Glorioso, Juan de Nova, Europa, Bassas da India).",
    ],
    sourceKey: "mea",
  },
  {
    id: "sunda-lombok",
    name: "Sunda & Lombok Straits",
    category: "chokepoint",
    region: "Maritime Southeast Asia",
    countryOrBody: "Indonesia",
    coords: { x: 745, y: 428 },
    latLon: { lat: -8.30, lon: 115.70 },
    strategicSignificance:
      "Key Indonesian archipelagic deep-water channels connecting the Indian Ocean to the Java Sea / Pacific Ocean. Lombok Strait in particular is deep (>250 m) and wide, allowing passage of Capesize bulk carriers and nuclear submarines running submerged that are too large or deep for the shallow Malacca Strait.",
    indiaRelevance:
      "Vital for Indian naval tracking of foreign submarine movements transitioning from the Pacific into the Indian Ocean; monitored from the Andaman & Nicobar Command.",
    latestStatus:
      "Designated Indonesian Archipelagic Sea Lanes (ASL / ALKI) under UNCLOS.",
    prelimsFacts: [
      "Sunda Strait lies between Java and Sumatra; famous for Krakatoa volcano.",
      "Lombok Strait lies between Bali and Lombok; marks the biological 'Wallace Line' dividing Asian and Australasian fauna.",
    ],
    linkId: "indonesia",
    sourceKey: "mea",
  },
  {
    id: "cape-good-hope",
    name: "Cape of Good Hope",
    category: "chokepoint",
    region: "Southern Africa / Atlantic-Indian Ocean",
    countryOrBody: "South Africa",
    coords: { x: 260, y: 535 },
    latLon: { lat: -34.35, lon: 18.47 },
    strategicSignificance:
      "Historical maritime passage around the southern tip of the African continent connecting the Atlantic and Indian Oceans. Used as the principal alternative to the Suez Canal during geopolitical crises.",
    indiaRelevance:
      "Historical trading route linking India with Western Europe. Re-emerged as a vital commercial conduit in 2024 for Indian merchandise and container trade avoiding Red Sea threats.",
    latestStatus:
      "Heavy global maritime traffic surge; South African ports (Durban, Cape Town) facing container congestion and bunker refuelling constraints.",
    prelimsFacts: [
      "First rounded by Portuguese explorer Bartolomeu Dias in 1488.",
      "Cape Agulhas (not Good Hope) is the true geographical southernmost point of Africa and official dividing line between Atlantic and Indian Oceans.",
    ],
    linkId: "southafrica",
    sourceKey: "mea",
  },
  {
    id: "bosphorus",
    name: "Bosphorus & Turkish Straits",
    category: "chokepoint",
    region: "Eurasia / Black Sea",
    countryOrBody: "Turkey",
    coords: { x: 308, y: 132 },
    latLon: { lat: 41.11, lon: 29.07 },
    strategicSignificance:
      "World's narrowest strait used for international navigation, connecting the Black Sea to the Sea of Marmara and the Mediterranean. Divides the European and Asian halves of Istanbul.",
    indiaRelevance:
      "Strategic transit route for Russian energy and Ukrainian sunflower oil / grain supplies to India and the Global South. Governed by the 1936 Montreux Convention.",
    latestStatus:
      "Regulated strictly by Turkey under the Montreux Convention, restricting warship passage during the Russia-Ukraine conflict.",
    prelimsFacts: [
      "Governed by the Montreux Convention Regarding the Regime of the Straits (1936).",
      "During wartime (with Turkey non-belligerent), warships of warring states are barred from passing.",
    ],
    sourceKey: "mea",
  },

  // ==================== STRATEGIC CONNECTIVITY CORRIDORS ====================
  {
    id: "imec-corridor",
    name: "India-Middle East-Europe Economic Corridor (IMEC)",
    category: "corridor",
    region: "South Asia · Gulf · Levant · Europe",
    countryOrBody: "India · UAE · Saudi Arabia · Jordan · Israel · EU · USA",
    coords: { x: 380, y: 220 },
    latLon: { lat: 25.0, lon: 50.0 },
    strategicSignificance:
      "Landmark multi-modal rail and maritime economic corridor announced at the New Delhi G20 Summit in September 2023. Connects Indian western ports to European ports via rail networks in the UAE, Saudi Arabia, Jordan, and Israel.",
    indiaRelevance:
      "Envisioned as a faster, cheaper, and resilient alternative to China's Belt and Road Initiative (BRI). Comprises an Eastern Corridor (India to Arabian Gulf by sea) and a Northern Corridor (Gulf to Europe by rail and sea). Includes clean hydrogen pipelines and high-speed data cables.",
    latestStatus:
      "Intergovernmental framework agreement signed between India and UAE in February 2024; broader ground implementation is navigating regional Middle East security challenges.",
    prelimsFacts: [
      "Announced on September 9, 2023 on the sidelines of the G20 New Delhi Summit.",
      "Founding signatories: India, US, UAE, Saudi Arabia, France, Germany, Italy, and the European Union.",
      "Estimated to cut shipping transit times between India and Europe by 40% and logistics costs by 30%.",
    ],
    linkId: "imec",
    sourceKey: "mea",
  },
  {
    id: "instc-corridor",
    name: "International North-South Transport Corridor (INSTC)",
    category: "corridor",
    region: "South Asia · Central Asia · Caucasus · Russia",
    countryOrBody: "India · Iran · Russia · Azerbaijan · Central Asian Republics",
    coords: { x: 440, y: 175 },
    latLon: { lat: 35.0, lon: 53.0 },
    strategicSignificance:
      "7,200 km multi-modal freight network (ship, rail, and road) linking Mumbai in India to Moscow and Saint Petersburg in Russia via Bandar Abbas, Chabahar, the Caspian Sea, and Azerbaijan.",
    indiaRelevance:
      "Dramatically reduces transit time from ~40 days (via Suez Canal) to ~20-22 days, while slashing freight transportation costs by ~30%. Vital for Indian trade with Russia and landlocked Central Asian Republics without passing through Pakistan or China.",
    latestStatus:
      "Western and Eastern branches operational; work ongoing on the missing Rasht-Astara railway link in northern Iran (financed via Russian loan) to provide seamless rail continuity.",
    prelimsFacts: [
      "Original intergovernmental agreement signed in September 2000 by India, Iran, and Russia in St. Petersburg.",
      "Now expanded to 13 member states including Kazakhstan, Belarus, Oman, Armenia, Azerbaijan, and Turkey.",
      "Integrates with the Ashgabat Agreement (which India joined in 2018) for Central Asian connectivity.",
    ],
    linkId: "instc",
    sourceKey: "mea",
  },
  {
    id: "kaladan-corridor",
    name: "Kaladan Multi-Modal Transit Transport Corridor",
    category: "corridor",
    region: "Bay of Bengal · Myanmar · Northeast India",
    countryOrBody: "India · Myanmar",
    coords: { x: 672, y: 255 },
    latLon: { lat: 21.5, lon: 93.0 },
    strategicSignificance:
      "Strategic transport corridor conceived to bypass the vulnerable 22-km wide Siliguri Corridor ('Chicken's Neck') to connect mainland India with the landlocked North Eastern states.",
    indiaRelevance:
      "Connects Haldia/Kolkata port to Sittwe deep-water port in Myanmar by sea (539 km), then by Kaladan river boat to Paletwa (158 km), and by highway to Zorinpui on the India-Myanmar border in Mizoram (110 km).",
    latestStatus:
      "Sittwe Port inaugurated May 2023; remaining road infrastructure in Chin State affected by Myanmar civil unrest.",
    prelimsFacts: [
      "100% funded by the Government of India through Ministry of External Affairs grant assistance.",
      "Key transit points: Kolkata → Sittwe Port → Kaladan River waterway → Paletwa inland terminal → Zorinpui border crossing → Lawngtlai (Mizoram, NH-54).",
    ],
    linkId: "myanmar",
    sourceKey: "mea",
  },
  {
    id: "imt-highway",
    name: "India-Myanmar-Thailand (IMT) Trilateral Highway",
    category: "corridor",
    region: "Southeast Asia / Indo-Pacific",
    countryOrBody: "India · Myanmar · Thailand",
    coords: { x: 710, y: 275 },
    latLon: { lat: 17.5, lon: 98.0 },
    strategicSignificance:
      "Flagship land connectivity initiative under India's Act East Policy. A 1,360 km cross-border highway connecting Moreh in Manipur (India) with Mae Sot in Thailand via Bagan and Mandalay in Myanmar.",
    indiaRelevance:
      "Enables direct overland freight and passenger vehicular transit between India and ASEAN. Proposed to be extended further eastward to Laos, Cambodia, and Vietnam.",
    latestStatus:
      "Most Indian and Thai sections complete; ~120 km of highway and bridge reconstruction in Myanmar delayed by internal political conflicts.",
    prelimsFacts: [
      "First proposed at a trilateral ministerial meeting in Yangon in 2002.",
      "Connects Moreh (Manipur, India) → Tamu → Kalewa → Yagyi → Monywa → Mandalay → Naypyidaw → Bago → Myawaddy (Myanmar) → Mae Sot (Tak province, Thailand).",
    ],
    linkId: "myanmar",
    sourceKey: "mea",
  },
];
