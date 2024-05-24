import picture1 from "@/assets/img/Picture 1.png";
import picture2 from "@/assets/img/Picture2.png";
import picture3 from "@/assets/img/Picture3.png";
import { StaticImageData } from "next/image";

interface DataType {
  id: number;
  title: string;
  info: {
    title: string;
    des: string;
  }[];
  title_2: string;
  des_1: string;
  features: string[];
  des_2: string;
  qute: string;
  writer: string;
  des_3: string;
  image: StaticImageData;
}

const blog_details_content: DataType[] = [
  {
    id: 1,
    title: `New Clinical Outcome Assessments Could Improve Treatment for Parkinson's`,
    info: [
      { title: `Posted By`, des: `Health Team` },
      { title: `Published Date`, des: `24 - May - 2024` },
      { title: `Viewes`, des: `3 Min Read` },
    ],
    title_2: `Enhancing Parkinson's Treatment: The Need for Innovative Clinical Assessments`,
    des_1: `The prevalence of Parkinson's disease has doubled over the last 25 years, and over 8.5 million people are living with the disease worldwide, but treatment options are limited. The development of new clinical outcome assessments could lead to new treatments for the disease.`,
    features: [
      `Current limitations in Parkinson's treatment`,
      `Need for new clinical outcome assessments`,
      `Incorporating digital health technologies`,
      `Harmonizing methods and sharing data`,
    ],
    des_2: `The inability to distinguish effective treatments from ineffective ones is a complex problem. One major issue is that the biology of the disease is not well understood— the syndrome known as Parkinson's disease may actually be a cluster of disorders with similar symptoms but different causes. This makes it difficult to use biological measures, also known as biomarkers, to measure whether or not a treatment is effective. It also makes it difficult to diagnose patients at the very earliest stages of the disease, so defining a patient population that would be most appropriate for testing a disease-modifying treatment may not be easy.
A second key challenge is how symptoms and functions in people with Parkinson's are measured. There are several well-known clinical assessments for the disease, but they have critical limitations in people with early Parkinson's, mostly because early changes in symptoms or function may not be big enough to be detected by these assessments.
Many organizations are working together to address these challenges. A newly-released RAND report, Clinical Outcome Assessments and Digital Health Technologies Supporting Clinical Trial Endpoints in Early Parkinson's Disease: Roundtable Proceedings and Roadmap for Research, summarizes an event held last fall to discuss these issues and how the field can work together to address them, especially through harmonizing methods, sharing data, and synthesizing work that has already been done to build consensus and alignment on patient experiences in early Parkinson's.
This gathering also underscored the need for new clinical outcome assessments for early Parkinson's. One novel approach incorporates the perspectives and observations of the family or close friends of people with Parkinson's disease. Many of the earliest changes in people with Parkinson's, such as voice changes, facial masking, and other movements may be most noticeable to people other than the patient. Outcomes reported by such “knowledgeable informants” could be appropriately sensitive to changes in patients in the early stages of the disease. Participants at the gathering also emphasized how important it is for new clinical outcome assessments to obtain and incorporate input from a diverse groups of people affected by Parkinson's.
`,
    qute: `“Existing clinical assessments rely on patients and their doctors to report on their motor symptoms, but they only capture a snapshot of how people with the disease function.”`,
    writer: `Health Team`,
    des_3: `Digital health technologies may also play a major role in creating new clinical assessments. Existing clinical assessments rely on patients and their doctors to report on their motor symptoms, but they only capture a snapshot of how people with the disease function. Digital health technologies allow data collection and monitoring of functional changes in patients' home environments. This may allow the capture of changes that may not show up on periodic assessments. That level of detail could be a game-changer not just for Parkinson's, but for any condition that impacts people's movement and abilities.
Better clinical outcome assessments for early Parkinson's could enable drug developers and regulators to distinguish effective treatments from ineffective ones. While this would be just one piece of a complicated puzzle, it could be a critical step that leverages input and expertise from people affected by Parkinson's disease, clinicians, researchers, regulators, and pharmaceutical and medical technology industries. Getting it right could give new treatments a chance to change the lives of Parkinson's patients.
`,
    image: picture1,
  },
  {
    id: 2,
    title: `6 Holistic Sanitation Solutions for Cleaning and Disinfecting Vivariums`,
    info: [
      { title: `Posted By`, des: `Research Lab` },
      { title: `Published Date`, des: `24 - May - 2024` },
      { title: `Viewes`, des: `4 Min Read` },
    ],
    title_2: `Comprehensive Vivarium Sanitation: Ensuring Health and Research Integrity`,
    des_1: `With the health and safety of the animals and caretakers on the line, cleaning vivariums and ensuring they are disinfected is of the utmost importance. Vivarium managers and their teams need a reliable chemical sanitation partner who will ensure that equipment and animal quarters are properly cleaned and disinfected.`,
    features: [
      `Chemical verification`,
      `Washer operation inspection`,
      `Chemical dispensing equipment verification`,
      `Inventory management`,
      `Records retention`,
      `Ongoing training`,
    ],
    des_2: `<section>
    <h4>1. Chemical Verification</h4>
    <p>Chemical verification is important to not only the success of a biomedical research program but also the health and safety of the animals and their caretakers.</p>
    <p>A holistic chemical verification service should include:</p>
    <ul>
        <li>Performing chemical titration of alkaline and acid rack, tunnel, cabinet, and bottle wash detergents and descalers</li>
        <li>Checking the neutralization of pH levels prior to wash discharge to drain</li>
        <li>Checking the final rinse pH</li>
        <li>Checking the concentration of every disinfectant proportioner</li>
    </ul>
    <p>These checks ensure that the chemical component of the sanitation process is operating as it should. Without it, the husbandry team does not know if this part of the sanitation process is working properly.</p>
    <p>This lack of knowledge can cause big issues. Operating below the target range can create an environment where pathogens can flourish, whereas overusing may result in exceeding the chemical budget while reducing the effectiveness of the lab cleaning and disinfecting program. Both ends of the spectrum can be problematic and lead to compromises in the integrity of the research and the welfare of the animals. More specifically, pH excursions up or down the scale post wash can lead to serious consequences for animal health and well-being.</p>
</section>

<section>
    <h4>2. Rack, Tunnel, and Glassware Washer Operations</h4>
    <p>It is critical to work with a partner who takes a proactive approach to inspecting washer operations.</p>
    <p>A holistic approach peels the onion beyond making sure that the chemical program is sound. Problems in washer operations can lead to:</p>
    <ul>
        <li>Unsatisfactory ATP results</li>
        <li>A compromise in the integrity of the research</li>
        <li>Potential animal health issues</li>
        <li>Mechanical failures that lead to washer downtime</li>
    </ul>
    <p>While a chemical sanitation partner is not your mechanical contractor, they work in, on, and around mechanical washers every day. They conduct a thorough review of your washers, looking for any mechanical problems that could pose a problem. Even if the chemistry is being delivered at the proper concentration, this will not matter if the washer isn’t operating properly. Inspecting your washers for proper operation is another pillar in providing holistic sanitation solutions for research success.</p>
    <p>A chemical sanitation partner who takes a holistic approach works to ensure that washer operations are not creating problems in cage wash. A proactive partner spots possible failure points before they become problematic.</p>
</section>

<section>
    <h4>3. Chemical Dispensing Equipment Verification</h4>
    <p>Laboratory animal facility managers should find a chemical sanitation partner who will provide all of the necessary equipment to deliver a state-of-the-art program.</p>
    <p>Chemical Dispensing Equipment Verification:</p>
    <ul>
        <li>Eliminates or reduces potential costly downtime</li>
        <li>Reduces the need for emergency service visits</li>
        <li>Ensures chemistry is being delivered within the specified range</li>
    </ul>
    <p>A reliable chemical sanitation partner takes a proactive approach to ensure that the chemical application and dispensing equipment is proactively and properly maintained. Regularly scheduled maintenance ensures the integrity of your research and promotes the welfare of animals while eliminating cost exposures associated with poor performance and equipment failure.</p>
</section>

<section>
    <h4>4. Records Retention</h4>
    <p>Record-keeping is an important part of the integrity of research, the welfare of animals, and the readiness for inspection and accreditation.</p>
    <p>Keeping records also helps rule out possible causes of a pathogen outbreak. Service records show Inspectors, Accreditors, and Investigators that your facility has done its due diligence to ensure the integrity of the research being conducted while maintaining the welfare of the animals.</p>
    <p>A lack of detailed records also opens a facility up to being blamed for problems it didn’t cause.</p>
</section>

<section>
    <h4>5. Inventory Management</h4>
    <p>One of the worst things that can happen to a chemical sanitation program is running out of cage wash and animal room cleaning and disinfecting products.</p>
    <p>To avoid this, biomedical research facilities should partner with a chemical sanitation vendor that provides the chemicals needed when they’re needed.</p>
</section>

<section>
    <h4>6. Ongoing Training</h4>
    <p>With the health and welfare of animals and employees being vitally important, ongoing training is crucial to a research facility’s success.</p>
    <p>A partner dedicated to holistic sanitation solutions for research success will provide a full suite of training.</p>
    <p>Providing proactively scheduled training closes the loop on all potential pitfalls.</p>
</section>
`,
    qute: `“A reliable chemical sanitation partner provides holistic sanitation solutions for research success, including chemical verification and washer operation inspection.”`,
    writer: `Research Lab`,
    des_3: `A partner dedicated to holistic sanitation solutions for research success will provide a full suite of training to include chemical safety, sanitation, equipment maintenance, and hygiene.`,
    image: picture2,
  },
  {
    id: 3,
    title: `What Could Liquid Biopsy Do for Oncology in the UK and What Is Needed to Realise Its Potential?`,
    info: [
      { title: `Posted By`, des: `Mark L Cabling & Sonja Marjanovic` },
      { title: `Published Date`, des: `24 - May - 2024` },
      { title: `Viewes`, des: `5 Min Read` },
    ],
    title_2: `Revolutionizing Cancer Diagnosis: Implementing Liquid Biopsy in the UK NHS`,
    des_1: `Cancer is a major global health burden causing 10 million deaths in 2020. In the UK, there are nearly 375,000 new cancer cases per year, almost half caught only at later stages, and only a 50 percent 10-year survival rate. The ability to detect and diagnose cancer earlier and better is a central part of policy efforts to tackle this disease and to improve patient prognosis and outcomes.`,
    features: [
      `Improving early cancer detection`,
      `Challenges in test accuracy`,
      `Infrastructure requirements`,
      `Skill and training needs`,
      `Cost effectiveness`,
    ],
    des_2: `<h1>Diagnosing Cancer Through Liquid Biopsy</h1>
  <p>Diagnosing cancer through blood samples in this way could improve access to cancer testing in primary care settings and aid earlier cancer detection and diagnosis, including potentially in asymptomatic and at-risk groups. That could enable quicker referrals for staging and grading cancers and thus timely access to treatments. Blood samples could also potentially be collected more often than tumour biopsies can be carried out, and could also be more acceptable for patients and improve their experience.</p>

  <p>In theory, blood-based tests could thus help with tackling bottlenecks for hospital scans. However, if more people are diagnosed through liquid biopsy and if these tests do not replace imaging but help triage or complement it, there could be an increase in demand for imaging to follow up.</p>

  <p>“Blood-based tests may enable pan-cancer diagnostics, which can potentially detect multiple cancers based on a single blood sample.”</p>

  <p>Blood-based tests may also enable pan-cancer diagnostics, which can potentially detect multiple cancers based on a single blood sample. These have had some promising clinical trial results, and prompted growing interest in testing wider-scale adoption in health systems. Other technologies in development can capture live circulating tumour cells (CTCs). CTCs allow additional analysis of cancers because replication of cells is used to understand mutations and metastasis mechanisms, new and novel therapy design, and therapy testing. Liquid biopsy is also being considered for ongoing follow-up monitoring, such as testing for the presence of cancer after chemotherapy or surgery.</p>

  <h4>Challenges for Routine Use of Liquid Biopsy</h4>
  <p>What needs to be done to prepare health systems for routine use of liquid biopsy? The possibilities are exciting, but for liquid biopsy to be routinely used in the UK National Health System (NHS), four key challenges will need to be addressed.</p>

  <ol>
    <li>
      <strong>Test Accuracy and Appropriate Use:</strong>
      <p>First, there are still issues to overcome related to test accuracy and when testing is appropriate, balancing test utility versus risk of errors or overtreatment. There are trade-offs to contend with between diagnostic sensitivity (how likely it is that a test will produce a positive result in the case of a cancer) and diagnostic specificity (likelihood of wrongly identifying a cancer when it is not present). Even a small percentage of false positives or false negatives can put pressure on services.</p>
    </li>
    <li>
      <strong>Infrastructure:</strong>
      <p>Second, routine use of these tests requires appropriate infrastructure to be in place, from testing laboratories to wider health systems capacity for liquid biopsy. The United Kingdom has genomic testing laboratories, but these facilities can be located far away from services where samples are taken from patients. As ctDNA has a short shelf-life, timely sample processing is key. Transport times and storage logistics can create challenges in their own right.</p>
    </li>
    <li>
      <strong>Skilled Workforce:</strong>
      <p>Third, the NHS and diagnostic labs must have enough appropriately trained and skilled staff, supported with clear guidance and quality control processes. A skilled workforce will be needed to collect, prepare, store, and process blood samples, as well as to analyse results, especially lab scientists and bioinformaticians.</p>
    </li>
    <li>
      <strong>Evidence of Cost Effectiveness:</strong>
      <p>Fourth, decisionmakers need to see evidence of real-world cost effectiveness. Although there are some promising insights from clinical trials, real-world evidence on the cost effectiveness of liquid biopsy tests for use in oncology is still limited.</p>
    </li>
  </ol>

  <h4>Conclusion</h4>
  <p>Based on trial data, some tests demonstrate promising results for the identification of early-stage cancers. They range in sensitivity at stage 1 cancer at 16.8–99 percent, at stage 2 at 40.4–97 percent, at stage 3 at 62–99 percent, and at stage 4 at 57–98 percent. Trial data also show tests range in specificity at 58–&gt;99 percent. In addition, a recent systematic literature review on the health economic evidence for liquid biopsy assays in cancer found that liquid biopsy was found to be cost-effective in 75 percent of studies.</p>
`,
    qute: `“Blood-based tests may enable pan-cancer diagnostics, which can potentially detect multiple cancers based on a single blood sample.”`,
    writer: `Mark L Cabling & Sonja Marjanovic`,
    des_3: `Addressing the four key issues of appropriateness, infrastructure, skills, and cost effectiveness will lay the foundations for making best use of these tests to address the challenge of cancer overall.`,
    image: picture3,
  },
];

export default blog_details_content;
