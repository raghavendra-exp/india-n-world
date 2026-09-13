import { Organisation } from "./types";
import { LAST_VERIFIED } from "./sources";

export const ORGANISATIONS: Organisation[] = [
  {
    id: "quad", name: "QUAD (Quadrilateral Security Dialogue)", established: "2007 (revived 2017)",
    headquarters: "No permanent secretariat (rotating summits)", members: ["India", "United States", "Japan", "Australia"],
    indiaStatus: "Founding member; current rotating chair (2025-26)", purpose: "Informal strategic forum for a free, open and inclusive Indo-Pacific; cooperation on maritime security, critical technology, supply chains, health and climate.",
    initiatives: ["QUAD Vaccine Partnership", "Indo-Pacific Maritime Domain Awareness (IPMDA)", "Quad Critical Minerals Initiative (signed May 2026)"],
    indiaRole: "India frames QUAD as non-military/non-alliance, consistent with strategic autonomy, distinct from a NATO-like collective-defence pact.",
    currentIssues: "India's planned 2025 QUAD Leaders' Summit did not take place, reportedly amid India-US trade tensions; a Foreign Ministers' meeting was instead held in New Delhi in May 2026. A future leaders' summit may shift to Australia as host.",
    prelims: [
      "QUAD was first proposed in 2007, lapsed, and was revived at official level in 2017; leader-level summits began in 2021.",
      "QUAD has no members outside India, US, Japan and Australia — it is not a defence alliance/treaty.",
      "India's 2025 QUAD Leaders' Summit hosting stalled; a Foreign Ministers' meeting was held in New Delhi in May 2026 instead.",
    ],
    sourceKey: "mea", lastVerified: LAST_VERIFIED,
  },
  {
    id: "brics", name: "BRICS", established: "2009 (as BRIC; 'S' for South Africa added 2010)",
    headquarters: "No fixed HQ; New Development Bank HQ in Shanghai",
    members: ["Brazil", "Russia", "India", "China", "South Africa", "Egypt", "Ethiopia", "Iran", "Saudi Arabia", "United Arab Emirates", "Indonesia"],
    indiaStatus: "Founding member; holding the 2026 chairship (hosting the 18th Summit in New Delhi, 12-13 Sept 2026)",
    purpose: "Platform for emerging economies to coordinate on global economic governance, reform of international financial institutions, and South-South cooperation.",
    initiatives: ["New Development Bank (NDB)", "Contingent Reserve Arrangement (CRA)", "Local-currency cross-border payment system discussions (explicitly not a single 'BRICS currency')"],
    indiaRole: "India uses its 2026 chairship to push UNSC/IMF/World Bank reform while balancing the bloc's China-Russia tilt against its own US/West-facing partnerships — sharpened by the 2025-26 US tariff dispute.",
    currentIssues: "BRICS expanded to 11 full members (Egypt, Ethiopia, Iran, Saudi Arabia, UAE from Jan 2024; Indonesia from Jan 2025) plus a new 'partner country' tier (~10 states including Belarus, Kazakhstan, Malaysia, Nigeria, Thailand, Vietnam).",
    prelims: [
      "The New Development Bank (formerly BRICS Bank) is headquartered in Shanghai.",
      "BRICS now has 11 full members: the original five plus Egypt, Ethiopia, Iran, Saudi Arabia, UAE (from 2024) and Indonesia (from 2025).",
      "India is chairing BRICS in 2026 for the fourth time (after 2012, 2016, 2021), hosting the 18th Summit in New Delhi.",
    ],
    sourceKey: "brics", lastVerified: LAST_VERIFIED,
  },
  {
    id: "sco", name: "Shanghai Cooperation Organisation (SCO)", established: "2001",
    headquarters: "Beijing (Secretariat); Tashkent (Regional Anti-Terrorist Structure)",
    members: ["China", "Russia", "India", "Pakistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Uzbekistan", "Iran", "Belarus"],
    indiaStatus: "Full member since 2017", purpose: "Regional security, counter-terrorism and economic cooperation across Eurasia/Central Asia.",
    initiatives: ["Regional Anti-Terrorist Structure (RATS)", "SCO-RATS joint counter-terror exercises"],
    indiaRole: "India uses SCO for Central Asia connectivity and counter-terrorism dialogue. PM Modi's August-September 2025 attendance at the Tianjin Summit doubled as the venue for the broader India-China diplomatic reset.",
    currentIssues: "China-Pakistan dominance of the platform; the 2025 Tianjin Summit was notable for hosting Modi's first China visit since Galwan (2020).",
    prelims: ["India and Pakistan both became full SCO members in 2017.", "The 2025 SCO Summit was held in Tianjin, China, and was PM Modi's first visit to China since the 2020 Galwan clash."],
    sourceKey: "mea", lastVerified: LAST_VERIFIED,
  },
  {
    id: "saarc", name: "SAARC (South Asian Association for Regional Cooperation)", established: "1985",
    headquarters: "Kathmandu, Nepal",
    members: ["India", "Pakistan", "Bangladesh", "Nepal", "Bhutan", "Sri Lanka", "Maldives", "Afghanistan"],
    indiaStatus: "Founding member", purpose: "Promote regional cooperation in South Asia across economic, social and cultural spheres.",
    initiatives: ["SAARC Food Bank", "South Asian University"],
    indiaRole: "India has effectively deprioritised SAARC (the 19th summit due in Pakistan was postponed after the 2016 Uri attack and has not resumed) in favour of BIMSTEC, which excludes Pakistan.",
    currentIssues: "Largely dormant as a summit-level process due to India-Pakistan tensions, reinforced by the May 2025 Operation Sindoor conflict; BIMSTEC remains the preferred alternative regional vehicle.",
    prelims: ["SAARC's permanent secretariat is in Kathmandu, Nepal.", "The last SAARC summit was held in Kathmandu in 2014; the subsequent summit process stalled after 2016."],
    sourceKey: "mea", lastVerified: LAST_VERIFIED,
  },
  {
    id: "bimstec", name: "BIMSTEC (Bay of Bengal Initiative)", established: "1997",
    headquarters: "Dhaka, Bangladesh",
    members: ["India", "Bangladesh", "Bhutan", "Myanmar", "Nepal", "Sri Lanka", "Thailand"],
    indiaStatus: "Founding member", purpose: "Sub-regional cooperation bridging South and Southeast Asia across trade, connectivity, security and technology.",
    initiatives: ["BIMSTEC Free Trade Area (under negotiation)", "BIMSTEC Master Plan for Transport Connectivity"],
    indiaRole: "India promotes BIMSTEC as a Pakistan-free alternative regional platform connecting South Asia with its Act East neighbourhood.",
    currentIssues: "Slow institutionalisation; connectivity projects face implementation delays across member States, and Bangladesh/Myanmar political instability complicates coordination.",
    prelims: ["BIMSTEC uniquely bridges South Asia (5 members) and Southeast Asia (2 members: Myanmar, Thailand).", "BIMSTEC's Secretariat is located in Dhaka, Bangladesh."],
    sourceKey: "mea", lastVerified: LAST_VERIFIED,
  },
  {
    id: "g20", name: "G20", established: "1999 (finance track); leaders' summit since 2008",
    headquarters: "No permanent secretariat (rotating presidency)",
    members: ["Argentina", "Australia", "Brazil", "Canada", "China", "France", "Germany", "India", "Indonesia", "Italy", "Japan", "Mexico", "Russia", "Saudi Arabia", "South Africa", "South Korea", "Turkey", "UK", "US", "European Union", "African Union"],
    indiaStatus: "Member; held the G20 Presidency in 2023", purpose: "Premier forum for international economic cooperation among major economies.",
    initiatives: ["Global Partnership for Financial Inclusion", "India's 2023 push for the African Union's permanent inclusion", "India-Middle East-Europe Economic Corridor (IMEC), announced at the 2023 New Delhi Summit"],
    indiaRole: "India's 2023 presidency prioritised Global South concerns, debt distress, DPI (Digital Public Infrastructure) and got the African Union admitted as a permanent member.",
    currentIssues: "The presidency passed from South Africa (2025, Johannesburg) to the United States (2026, Miami Summit) on 1 December 2025 — the 2026 US-set agenda is narrower, focused on growth/energy/technology rather than Global South themes; South Africa was notably not invited to the 2026 summit.",
    prelims: [
      "India held the G20 Presidency in 2023, culminating in the New Delhi Summit.",
      "The African Union was admitted as a permanent G20 member during India's 2023 presidency.",
      "The G20 presidency for 2026 is held by the United States, hosting the Leaders' Summit in Miami.",
    ],
    sourceKey: "g20", lastVerified: LAST_VERIFIED,
  },
  {
    id: "asean", name: "ASEAN", established: "1967",
    headquarters: "Jakarta, Indonesia",
    members: ["Brunei", "Cambodia", "Indonesia", "Laos", "Malaysia", "Myanmar", "Philippines", "Singapore", "Thailand", "Vietnam"],
    indiaStatus: "Dialogue Partner (since 1992); Strategic Partner (since 2012)",
    purpose: "Regional grouping promoting political-security, economic and socio-cultural cooperation in Southeast Asia.",
    initiatives: ["ASEAN-India Free Trade Area (under review)", "India-ASEAN Plan of Action under the Act East Policy"],
    indiaRole: "ASEAN centrality is the core of India's Act East Policy and its Indo-Pacific outlook.",
    currentIssues: "India seeks review of the ASEAN-India FTA to address trade-deficit concerns; South China Sea disputes complicate ASEAN unity, and Myanmar's internal conflict complicates ASEAN cohesion.",
    prelims: ["ASEAN's Secretariat is in Jakarta, Indonesia.", "India upgraded ties from Dialogue Partner (1992) to Strategic Partner (2012)."],
    sourceKey: "asean", lastVerified: LAST_VERIFIED,
  },
  {
    id: "un", name: "United Nations (UN)", established: "1945",
    headquarters: "New York, USA",
    members: ["193 member states — India is a founding member"],
    indiaStatus: "Founding member (1945)", purpose: "Maintain international peace and security, develop friendly relations among nations, and promote social progress, human rights and development.",
    initiatives: ["Sustainable Development Goals (SDGs, 2015-2030)", "UN Peacekeeping (India is historically among the largest troop contributors)", "International Solar Alliance (India-France initiative, UN-recognised)"],
    indiaRole: "India is a leading voice for UNSC and broader UN institutional reform, a top historical troop contributor to peacekeeping, and co-founder of the International Solar Alliance.",
    currentIssues: "Longstanding push for UNSC expansion (India's permanent-seat bid) has seen little structural movement despite broad rhetorical support from several P5 members (US, UK, France, Russia).",
    prelims: ["The UN was established in 1945, replacing the League of Nations; India is a founding member.", "India has historically been among the top troop-contributing countries to UN Peacekeeping Operations."],
    sourceKey: "un", lastVerified: LAST_VERIFIED,
  },
  {
    id: "unsc", name: "UN Security Council (UNSC)", established: "1945",
    headquarters: "New York, USA (within the UN)",
    members: ["5 permanent members (P5): China, France, Russia, UK, US", "10 non-permanent members elected for 2-year terms"],
    indiaStatus: "Elected non-permanent member 8 times historically (most recently 2021-22); not currently a non-permanent member; seeks permanent membership",
    purpose: "Primary UN organ responsible for international peace and security; the only UN body whose resolutions are binding on all member states.",
    initiatives: ["G4 grouping (India, Brazil, Germany, Japan) — mutual support for each other's permanent-seat bids", "L.69 Group — developing-country coalition pushing for UNSC reform"],
    indiaRole: "India's core UNSC ask is a permanent seat with veto power, arguing the current P5 composition (fixed since 1945) no longer reflects global demographic and economic realities.",
    currentIssues: "UNSC reform remains gridlocked — any change requires a UN Charter amendment ratified by two-thirds of the General Assembly including all P5 members, several of whom have competing reform preferences (e.g., opposing veto expansion).",
    prelims: [
      "The UNSC has 5 permanent (veto-holding) members and 10 non-permanent members elected for 2-year terms by the UN General Assembly.",
      "India is part of the G4 grouping (with Brazil, Germany, Japan) advocating mutual support for permanent UNSC seats.",
    ],
    sourceKey: "unsc", lastVerified: LAST_VERIFIED,
  },
  {
    id: "wto", name: "World Trade Organization (WTO)", established: "1995 (successor to GATT, 1947)",
    headquarters: "Geneva, Switzerland",
    members: ["164 member states, including India (founding member in 1995)"],
    indiaStatus: "Founding member", purpose: "Regulate international trade, administer trade agreements, resolve trade disputes and provide a negotiating forum for trade liberalisation.",
    initiatives: ["Doha Development Round (ongoing since 2001, largely stalled)", "Agreement on Fisheries Subsidies", "Trade Facilitation Agreement"],
    indiaRole: "India is a vocal advocate for developing-country interests, particularly on agricultural subsidies and public food-stockholding (a recurring India-vs-developed-world flashpoint), and has repeatedly used WTO's Dispute Settlement Mechanism.",
    currentIssues: "The WTO's Appellate Body has been non-functional since 2019 due to the US blocking judge appointments, weakening the binding dispute-resolution mechanism; India continues pushing for a permanent solution on public stockholding for food security.",
    prelims: ["The WTO succeeded GATT in 1995 following the Uruguay Round.", "The WTO Appellate Body has been non-functional since 2019 due to the US blocking new appointments, undermining binding dispute settlement."],
    sourceKey: "wto", lastVerified: LAST_VERIFIED,
  },
  {
    id: "imf", name: "International Monetary Fund (IMF)", established: "1944 (Bretton Woods Conference)",
    headquarters: "Washington, D.C., USA",
    members: ["190 member countries, including India"],
    indiaStatus: "Founding member", purpose: "Promote international monetary cooperation, exchange-rate stability, and provide financial assistance/policy advice to member states facing balance-of-payments difficulties.",
    initiatives: ["Special Drawing Rights (SDR) — an international reserve asset", "Quota and voting-share reform discussions (India has pushed for a greater voice for emerging economies)"],
    indiaRole: "India has consistently pushed for IMF quota reform to better reflect the weight of emerging economies, and has supported IMF assistance packages for neighbours (e.g., backing Sri Lanka's 2022-23 IMF bailout).",
    currentIssues: "Quota-share reform for emerging economies remains slow; the IMF continues playing a central role in crisis lending (e.g., Sri Lanka, Pakistan).",
    prelims: ["The IMF was established at the 1944 Bretton Woods Conference, alongside the World Bank.", "IMF voting power is based on member country 'quotas', a recurring point of reform contention for emerging economies like India."],
    sourceKey: "imf", lastVerified: LAST_VERIFIED,
  },
  {
    id: "worldbank", name: "World Bank Group", established: "1944 (Bretton Woods Conference)",
    headquarters: "Washington, D.C., USA",
    members: ["189 member countries, including India"],
    indiaStatus: "Founding member; among the largest borrowers historically", purpose: "Provide financing, policy advice and technical assistance to developing countries for development and poverty-reduction projects.",
    initiatives: ["International Bank for Reconstruction and Development (IBRD)", "International Development Association (IDA) — concessional financing for the poorest countries"],
    indiaRole: "India is both a major historical borrower (infrastructure, health, education projects) and, given its growing economy, increasingly a donor/co-financier voice within the Bank.",
    currentIssues: "Reform debates around expanding World Bank lending capacity for climate finance, and the balance between graduating India out of concessional IDA lending given its middle-income status.",
    prelims: ["The World Bank and IMF were both created at the 1944 Bretton Woods Conference, distinct in mandate (development financing vs. monetary/BoP stability).", "The IBRD and IDA are two of the five institutions comprising the World Bank Group."],
    sourceKey: "worldbank", lastVerified: LAST_VERIFIED,
  },
  {
    id: "who", name: "World Health Organization (WHO)", established: "1948",
    headquarters: "Geneva, Switzerland",
    members: ["194 member states, including India"],
    indiaStatus: "Founding member", purpose: "Direct and coordinate international health within the UN system, setting health norms and standards and responding to global health emergencies.",
    initiatives: ["Global Traditional Medicine Centre — established in Jamnagar, Gujarat (India), the WHO's first and only global centre for traditional medicine", "International Health Regulations (governing pandemic preparedness/response)"],
    indiaRole: "India hosts the WHO Global Traditional Medicine Centre and was a key 'vaccine diplomacy' actor during COVID-19 (Vaccine Maitri initiative).",
    currentIssues: "Ongoing debate over a global Pandemic Treaty/Accord to strengthen future pandemic preparedness, on which India has pushed for equitable access provisions for developing countries.",
    prelims: ["The WHO Global Traditional Medicine Centre is located in Jamnagar, Gujarat — the WHO's only such global centre.", "India's 'Vaccine Maitri' initiative supplied COVID-19 vaccines to numerous countries as an instrument of health/vaccine diplomacy."],
    sourceKey: "who", lastVerified: LAST_VERIFIED,
  },
  {
    id: "g7", name: "G7 (Group of Seven)", established: "1975 (as G6; Canada joined 1976)",
    headquarters: "No permanent secretariat (rotating presidency)",
    members: ["Canada", "France", "Germany", "Italy", "Japan", "UK", "US", "+ European Union"],
    indiaStatus: "Not a member; regularly invited as a 'partner/outreach' country to summits", purpose: "Informal forum of major advanced economies coordinating on global economic, security and governance issues.",
    initiatives: ["Partnership for Global Infrastructure and Investment (PGII) — a G7 counter to China's Belt and Road Initiative, in which India participates as a partner"],
    indiaRole: "India has been a regular outreach/guest invitee at G7 summits for years, reflecting its economic weight despite non-membership; India engages selectively with PGII-linked connectivity projects.",
    currentIssues: "Russia was suspended from what was then the 'G8' in 2014 following its annexation of Crimea, reverting the grouping to the G7.",
    prelims: ["Russia's suspension in 2014 (over Crimea) reverted the 'G8' back to the G7 — India was never a G7/G8 member.", "India regularly attends G7 summits as an invited outreach/partner country, not as a member."],
    sourceKey: "g7", lastVerified: LAST_VERIFIED,
  },
  {
    id: "iora", name: "Indian Ocean Rim Association (IORA)", established: "1997",
    headquarters: "Ebène, Mauritius",
    members: ["23 member states including India, Australia, South Africa, UAE, Indonesia, Sri Lanka, Bangladesh, Iran, Singapore, Thailand and others bordering or near the Indian Ocean"],
    indiaStatus: "Founding member", purpose: "Regional cooperation among Indian Ocean rim states on maritime safety/security, trade facilitation, fisheries management, disaster risk management and blue economy development.",
    initiatives: ["Blue Economy cooperation framework", "Indian Ocean Rim disaster-risk-management cooperation"],
    indiaRole: "India uses IORA as a key vehicle for its SAGAR (Security and Growth for All in the Region) doctrine and Indo-Pacific maritime outreach.",
    currentIssues: "Institutional capacity remains limited relative to the scale of the Indian Ocean region's strategic importance; competing Chinese outreach to Indian Ocean littoral states is a background concern.",
    prelims: ["IORA's Secretariat is located in Ebène, Mauritius.", "IORA is a key institutional vehicle for India's SAGAR (Security and Growth for All in the Region) doctrine."],
    sourceKey: "iora", lastVerified: LAST_VERIFIED,
  },
  {
    id: "eu", name: "European Union (EU)", established: "1993 (Maastricht Treaty; preceded by the European Economic Community, 1957)",
    headquarters: "Brussels, Belgium (main institutions)",
    members: ["27 member states, including France, Germany, Italy, Spain, Poland and others (post-Brexit; UK is no longer a member)"],
    indiaStatus: "Strategic Partner (since 2004); not a member (India is not a European state)",
    purpose: "Political and economic union enabling free movement of goods, services, capital and people among member states, with a common trade policy and, for most members, a common currency (the Euro).",
    initiatives: ["India-EU Free Trade Agreement (concluded 27 January 2026, entry into force expected 2027)", "India-EU Trade and Technology Council (TTC)", "Global Gateway — EU's connectivity initiative, an implicit counter to China's Belt and Road"],
    indiaRole: "The EU is collectively one of India's largest trading partners; the 2026 FTA conclusion — after nearly two decades of on-and-off talks — marks the most significant recent shift in the relationship.",
    currentIssues: "The concluded FTA is not yet in force — it requires legal review, EU Council approval, European Parliament consent and Indian ratification, expected to complete only in early 2027. Parallel Investment Protection and Geographical Indications agreements are being negotiated alongside it.",
    prelims: [
      "The EU has 27 member states following the UK's exit (Brexit, effective 2020).",
      "The India-EU FTA was politically concluded on 27 January 2026 but will not enter into force until its ratification process (Council, European Parliament, Indian side) completes, expected in early 2027.",
    ],
    sourceKey: "mea", lastVerified: LAST_VERIFIED,
  },
  {
    id: "i2u2",
    name: "I2U2 Grouping ('West Asian Quad')",
    established: "2021 (Virtual Summit July 2022)",
    headquarters: "No permanent secretariat (ad-hoc summit mechanism)",
    members: ["India", "Israel", "United Arab Emirates", "United States"],
    indiaStatus: "Founding Member",
    purpose:
      "A mini-lateral economic partnership aimed at mobilising private sector capital and expertise to modernise infrastructure, advance clean energy, improve public health, and address food and water insecurity across South Asia and the Middle East.",
    initiatives: [
      "$2 billion integrated hybrid food parks project in Gujarat (funded by UAE, with US/Israeli technology and Indian land/farmers).",
      "300 MW hybrid renewable energy project (wind and solar complemented by battery storage) in Dwarka, Gujarat.",
      "Support for India's bid to join the Agriculture Innovation Mission for Climate (AIM for Climate)."
    ],
    indiaRole:
      "Brings massive agricultural demand, fertile landmass, skilled engineering talent, and consumer market scale, marrying UAE sovereign capital with American/Israeli breakthrough technologies.",
    currentIssues:
      "Pace of joint investment initiatives impacted by heightened regional security instability in the Middle East following the October 2023 Israel-Gaza conflict.",
    prelims: [
      "I2U2 stands for India, Israel, UAE, and the USA (originally termed the 'International Forum for Economic Cooperation').",
      "The grouping focuses on six mutually identified sectors: water, energy, transportation, space, health, and food security.",
      "The first leaders' summit was held virtually in July 2022."
    ],
    sourceKey: "mea",
    lastVerified: "2026-09"
  },
  {
    id: "imec",
    name: "India-Middle East-Europe Economic Corridor (IMEC)",
    established: "September 2023 (New Delhi G20 Summit)",
    headquarters: "Coordinated through a multi-nation ministerial steering committee",
    members: [
      "India",
      "United States",
      "United Arab Emirates",
      "Saudi Arabia",
      "European Union",
      "France",
      "Germany",
      "Italy"
    ],
    indiaStatus: "Lead Co-Sponsor & Origin Anchor",
    purpose:
      "A historic multi-modal ship-to-rail transit network designed to connect India's western ports (Kandla, JNPT) to Europe via the Arabian Gulf (UAE, Saudi Arabia, Jordan, Israel) and the Mediterranean Sea, fostering seamless economic integration, clean hydrogen pipelines, and high-speed digital cables.",
    initiatives: [
      "Eastern Corridor connecting Indian ports with the Arabian Gulf.",
      "Northern Corridor connecting the Gulf to European ports via rail networks and Mediterranean shipping.",
      "Laying of electricity grids, clean hydrogen export pipelines, and submarine high-speed digital telecommunication cables alongside railway tracks."
    ],
    indiaRole:
      "Origin anchor and primary goods producer; India and the UAE signed the first bilateral intergovernmental framework agreement on IMEC in February 2024 during PM Modi's visit to Abu Dhabi.",
    currentIssues:
      "Ground execution of the rail link through Jordan and Israel has faced acute delays due to ongoing conflicts in the Levant, though maritime and Gulf railway linkages continue advance planning.",
    prelims: [
      "IMEC was officially unveiled on September 9, 2023 on the sidelines of the G20 New Delhi Leaders' Summit.",
      "Projected to reduce shipping transit time between India and Europe by 40% and logistics transport costs by 30%.",
      "Regarded internationally as a transparent, high-standard alternative to China's Belt and Road Initiative (BRI)."
    ],
    sourceKey: "mea",
    lastVerified: "2026-09"
  },
  {
    id: "instc",
    name: "International North-South Transport Corridor (INSTC)",
    established: "September 2000 (St. Petersburg)",
    headquarters: "Tehran, Iran (Secretariat)",
    members: [
      "India",
      "Iran",
      "Russia",
      "Azerbaijan",
      "Armenia",
      "Kazakhstan",
      "Belarus",
      "Oman",
      "Tajikistan",
      "Kyrgyzstan",
      "Turkey",
      "Ukraine",
      "Syria"
    ],
    indiaStatus: "Founding Member & Chief Promoter",
    purpose:
      "A 7,200-kilometre-long multi-modal freight transport network combining sea, rail, and road routes for moving cargo between India, Iran, Azerbaijan, Russia, Central Asia, and Europe, bypassing Pakistan and maritime chokepoints like the Suez Canal.",
    initiatives: [
      "Western route: Mumbai → Bandar Abbas (Iran) → Rasht-Astara (rail) → Baku (Azerbaijan) → Moscow (Russia).",
      "Eastern route: Mumbai → Bandar Abbas/Chabahar → Turkmenistan/Uzbekistan/Kazakhstan → Russia.",
      "Synergies with the Ashgabat Agreement (multimodal transit framework joined by India in 2018)."
    ],
    indiaRole:
      "Core driver seeking overland access to landlocked Central Asia and Russia. India has successfully advocated the inclusion of the Iranian port of Chabahar within the INSTC transit framework.",
    currentIssues:
      "Western financial sanctions on Russia and Iran restrict international banking integration and insurance; missing 162-km Rasht-Astara rail section in Iran being completed with Russian financing.",
    prelims: [
      "Originally founded by India, Iran, and Russia in September 2000 in St. Petersburg.",
      "Reduces transit duration from 40-45 days via Suez Canal to roughly 20-22 days, cutting shipping freight charges by 30%.",
      "Integrates with the Ashgabat Agreement and Chabahar Port."
    ],
    sourceKey: "mea",
    lastVerified: "2026-09"
  },
  {
    id: "fatf",
    name: "Financial Action Task Force (FATF)",
    established: "1989 (G7 Summit, Paris)",
    headquarters: "Paris, France (at OECD headquarters)",
    members: [
      "39 members (37 jurisdictions including India, plus 2 regional organisations: European Commission & GCC)"
    ],
    indiaStatus: "Full Member (joined 2010)",
    purpose:
      "The global money laundering and terrorist financing watchdog. Sets international standards (the 40 Recommendations) to prevent organised crime, corruption, illicit arms trade, and the financing of weapons of mass destruction (WMD).",
    initiatives: [
      "Publication of the 'Grey List' (Jurisdictions under Increased Monitoring) and 'Black List' (High-Risk Jurisdictions Call for Action).",
      "Periodic Mutual Evaluation Reports (MER) assessing member jurisdictions' technical compliance and effectiveness.",
      "Evaluation of virtual digital assets (cryptocurrencies) and proliferation financing."
    ],
    indiaRole:
      "In June 2024, FATF adopted India's landmark Mutual Evaluation Report, placing India in the highest 'regular follow-up' compliance category — an achievement shared by only four other G20 economies. India plays a key leadership role in APG (Asia/Pacific Group on Money Laundering).",
    currentIssues:
      "Preventing abuse of non-profit organisations (NPOs) while ensuring legitimate humanitarian aid; addressing terror financing through new payment technologies and digital hawala.",
    prelims: [
      "FATF was established by the G7 Summit in Paris in 1989.",
      "India became an observer in 2006 and a full member in 2010.",
      "FATF maintains two compliance lists: the Grey List (increased monitoring) and the Black List (currently Iran, North Korea, and Myanmar)."
    ],
    sourceKey: "fatf",
    lastVerified: "2026-09"
  },
  {
    id: "iaea",
    name: "International Atomic Energy Agency (IAEA)",
    established: "1957 ('Atoms for Peace')",
    headquarters: "Vienna, Austria",
    members: ["178 Member States"],
    indiaStatus: "Founding Member & Designated Board of Governors Member",
    purpose:
      "The world's central intergovernmental forum for scientific and technical cooperation in the peaceful uses of nuclear energy, promoting nuclear safety standards and verifying that nuclear material is not diverted to military purposes (Safeguards System).",
    initiatives: [
      "Application of comprehensive and item-specific nuclear safeguards agreements.",
      "Rays of Hope: initiative expanding cancer diagnosis and radiation therapy access in low- and middle-income countries.",
      "Nuclear safety and waste management standards; monitoring of civil nuclear facilities worldwide."
    ],
    indiaRole:
      "Designated member of the IAEA Board of Governors since inception as a state with the most advanced nuclear technology in South Asia. In 2009, following the Indo-US Civil Nuclear Deal, India signed the India-Specific Safeguards Agreement (INFCIRC/731) and an Additional Protocol in 2014, placing civilian reactors under IAEA verification.",
    currentIssues:
      "Monitoring the Zaporizhzhia nuclear power plant in Ukraine; oversight of Iran's nuclear enrichment levels under the JCPOA impasse; deployment of Small Modular Reactors (SMRs).",
    prelims: [
      "Created in 1957 as an autonomous organisation within the United Nations family ('Atoms for Peace').",
      "Reports to both the UN General Assembly and the UN Security Council.",
      "India's civil nuclear facilities are safeguarded under IAEA document INFCIRC/731."
    ],
    sourceKey: "iaea",
    lastVerified: "2026-09"
  },
  {
    id: "rcep-cptpp",
    name: "Regional Mega-FTAs: RCEP & CPTPP",
    established: "RCEP: 2020 (entered force 2022); CPTPP: 2018",
    headquarters: "RCEP: Jakarta (ASEAN Secretariat); CPTPP: Rotating commission",
    members: [
      "RCEP (15): 10 ASEAN members + China, Japan, South Korea, Australia, New Zealand.",
      "CPTPP (12): Australia, Brunei, Canada, Chile, Japan, Malaysia, Mexico, New Zealand, Peru, Singapore, Vietnam, UK (joined 2023)."
    ],
    indiaStatus: "Non-Member (Exited RCEP negotiations in Nov 2019)",
    purpose:
      "Mega-regional plurilateral free trade agreements setting tariff reduction schedules, cross-border services rules, intellectual property protections, e-commerce norms, and supply-chain integration across the Asia-Pacific region.",
    initiatives: [
      "RCEP: World's largest free trade bloc by GDP and population, unifying trade rules among Asian economies.",
      "CPTPP: High-standard trade pact including stringent disciplines on state-owned enterprises (SOEs), labour standards, and environmental commitments."
    ],
    indiaRole:
      "India was an original negotiating partner in RCEP from 2012 to 2019. In November 2019 at the Bangkok Summit, India opted out to protect vulnerable domestic stakeholders (dairy, MSMEs, steel, textiles) from potential surges of cheap Chinese imports, inadequate rules of origin, and unreciprocated services access.",
    currentIssues:
      "India's strategic shift toward targeted, high-standard bilateral free trade pacts (e.g. UAE CEPA, Australia ECTA, EFTA TEPA, UK FTA) instead of multilateral mega-blocs dominated by Chinese manufacturing dominance.",
    prelims: [
      "India walked out of RCEP negotiations in November 2019 at the Bangkok East Asia Summit.",
      "RCEP accounts for roughly 30% of global gross domestic product and nearly one-third of the global population.",
      "CPTPP originated from the Trans-Pacific Partnership (TPP) after the United States withdrew in 2017."
    ],
    sourceKey: "wto",
    lastVerified: "2026-09"
  }
];
