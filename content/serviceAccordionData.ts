import type { ServiceAccordionItem } from "@/components/services/ServiceAccordionSection";

/**
 * Extra accordion content per service slug, sourced from the client's
 * content sheet. Additive to the existing WP-driven sections -- a slug
 * with no entry here simply renders nothing extra. Images are generic
 * site placeholders; swap with licensed Freepik images per service when
 * available.
 */
export const serviceAccordionData: Record<string, ServiceAccordionItem[]> = {
  "clear-aligners-treatment": [
    {
      "title": "What Is Invisalign Treatment?",
      "body": "Invisalign is a branded clear aligner treatment that straightens teeth using a series of transparent, removable trays made from a patented medical-grade material. Each tray is custom-made using a digital scan of your teeth and worn for a set number of days before you progress to the next tray in the series.\nUnlike fixed braces, invisible dental aligners let you remove the trays for eating, brushing and flossing. You wear them for 20 to 22 hours a day for the treatment to progress as planned.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Invisalign Treatment"
      }
    },
    {
      "title": "What Conditions Can Invisalign Treat?",
      "body": "Invisalign treatment can correct a range of mild to moderate orthodontic concerns. Our orthodontics team recommends it for:\n- Crowded Teeth - Where there is not enough space for teeth to align properly.\n- Gaps Between Teeth - Affecting smile appearance and bite function.\n- Overbite - Where the upper front teeth cover too much of the lower teeth.\n- Underbite - Where the lower teeth sit in front of the upper teeth.\n- Crossbite - Where some upper teeth sit inside the lower teeth.\n- Mild Open Bite - Where the upper and lower teeth do not meet when the mouth is closed.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Invisalign Treatment"
      }
    },
    {
      "title": "How Does Invisalign Treatment Work?",
      "body": "The treatment follows a clear process at Elite Dental Studio:\n- Step 1 — Consultation: Your orthodontist checks your teeth, bite and smile goals to confirm Invisalign is right for you.\n- Step 2 — Digital scan: A 3D digital scan of your teeth replaces traditional impressions for greater comfort and accuracy.\n- Step 3 — Custom aligner fabrication: Your aligners are made to fit your specific teeth and planned movement sequence.\n- Step 4 — Wearing your aligners: You wear each set of aligners for the prescribed number of days before switching to the next.\n- Step 5 — Review appointments: Your orthodontist monitors progress at regular intervals and provides the next set of aligners.\n- Step 6 — Retainers: After your last aligner, retainers are worn to hold your teeth in the corrected position.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Invisalign Treatment"
      }
    },
    {
      "title": "What to Expect During Invisalign Treatment?",
      "body": "Most patients feel mild pressure for the first two to three days after switching to a new aligner set. This is normal and a sign the aligners are working. The pressure fades as your teeth adjust.\nYou can eat and drink normally by removing the aligners at mealtimes. Aligners should be cleaned regularly and stored in their case when not in use. Your treatment duration depends on your case complexity, but most cases complete within 6 to 18 months.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Invisalign Treatment"
      }
    },
    {
      "title": "Benefits of Invisalign Treatment",
      "body": "Clear aligners straighten teeth while fitting naturally into your daily routine.\n- Removable Design: Take them out to eat, brush and floss with ease.\n- Nearly Invisible: Clear trays blend with your smile during the treatment period.\n- Comfortable Fit: Smooth plastic trays feel gentler than traditional metal brackets and wires.\n- Fewer Food Restrictions: Eat most foods without worrying about damaging brackets or wires.\n- Easier Oral Hygiene: Removable trays make brushing and flossing simpler than fixed braces.\n- Predictable Planning: Digital scans help the orthodontics team plan tooth movement clearly.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Invisalign Treatment"
      }
    }
  ],
  "endodontics": [
    {
      "title": "What Is Root Canal Treatment?",
      "body": "Root canal treatment is a dental procedure that removes infected or damaged pulp from inside a tooth, cleans and shapes the root canals, and seals them to prevent reinfection. The pulp is the soft tissue inside the tooth containing nerves and blood vessels. When it becomes infected due to deep decay, a crack or injury, root canal treatment stops the infection and saves the natural tooth.\nWithout treatment, the infection can spread to the jawbone and surrounding teeth. Root canal treatment is a tooth-saving procedure, not just a pain-relief measure.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Root Canal Treatment"
      }
    },
    {
      "title": "Signs You May Need Root Canal Treatment",
      "body": "Book a consultation if you notice any of the following:\n- Severe Toothache - Persistent or is getting worse at night.\n- Prolonged Sensitivity - Sensation that does not settle after the trigger is removed.\n- Swelling or Tenderness - In the gum, near the tooth.\n- Darkened Tooth - A tooth that has darkened or changed colour without obvious cause.\n- Swelling - A recurring pimple-like swelling on the gum near a tooth.\n- Pain - Pain when biting or chewing on one side.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Root Canal Treatment"
      }
    },
    {
      "title": "What to Expect After Root Canal Treatment?",
      "body": "Mild soreness and sensitivity in the treated area for a few days after the procedure is normal. Most patients manage this comfortably with the guidance their dentist provides. Swelling or discomfort that worsens after the first day should be reported to the clinic promptly.\nAvoid biting hard foods on the treated tooth until the crown is placed. Keep the area clean and attend your follow-up visit. The tooth can function normally once the crown is fitted.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Root Canal Treatment"
      }
    },
    {
      "title": "How Root Canal Treatment Is Done?",
      "body": "The procedure at Elite Dental Studio follows a structured process:\n- Step 1 — Diagnosis: X-ray and clinical exam to check the tooth and confirm infection level.\n- Step 2 — Numbing: Local anaesthesia is given so you are comfortable throughout the procedure.\n- Step 3 — Access: The dentist creates a small opening in the tooth to reach the infected pulp.\n- Step 4 — Cleaning: Infected pulp is removed and the root canals are cleaned and shaped.\n- Step 5 — Sealing: The cleaned canals are filled and sealed to prevent future infection.\n- Step 6 — Crown placement: A dental crown is usually placed over the tooth after healing to restore strength and protect it.\nMost root canal treatments are completed in one to two sittings depending on the severity of the infection. Your dentist will confirm the number of appointments after the first assessment.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Root Canal Treatment"
      }
    }
  ],
  "dental-implant": [
    {
      "title": "What are Dental Implants?",
      "body": "A dental implant is a small titanium post that is surgically placed into the jawbone to replace the root of a missing tooth. Once the implant bonds with the bone through a process called osseointegration, a crown, bridge or denture is attached on top to restore the appearance and function of the missing tooth.\nDental implants are the closest fixed replacement to a natural tooth. They do not rely on adjacent teeth for support and help preserve the jawbone at the site of the missing tooth.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Dental Implant"
      }
    },
    {
      "title": "Who Is Suitable for Dental Implants?",
      "body": "Dental implants may be suitable if you are dealing with the following concerns.\n- One or More Missing Teeth: Due to decay, injury or extraction.\n- Loose or Uncomfortable Dentures: Affecting eating and speech.\n- Jawbone Support: Who have sufficient jawbone support at the implant site.\n- Untreated Gum Disease: Healthy gums with no active infection or untreated gum disease.\n- Good General Health: Good general health with no uncontrolled medical conditions affecting healing.\n- Committed to Oral Hygiene: A commitment to oral hygiene and regular dental check-ups after placement.\nPatients with insufficient bone support may need a bone grafting procedure before implant placement. Our team checks bone density using digital X-rays and clinical examination before recommending the right treatment pathway.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Dental Implant"
      }
    },
    {
      "title": "Types of Dental Implants at Elite Dental Studio",
      "body": "Our prosthodontics and implantology team plans treatment based on how many teeth are missing and what the jawbone and gum condition supports:\n- Single tooth implant: One implant post supports one crown to replace an individual missing tooth.\n- Multiple tooth implants: Two or more implants support crowns or bridges for several missing teeth.\n- Full mouth dental implants: A planned implant solution for patients missing most or all teeth on one or both jaws.\n- Immediate implant placement: In selected suitable cases, the implant is placed at the same visit as the extraction.\n- Implant-supported dentures: Implants anchor removable or fixed dentures for greater stability than conventional dentures.\nThe right implant type for your case is confirmed only after your clinical check, X-ray and bone assessment.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Dental Implant"
      }
    },
    {
      "title": "What to Expect After Implant Placement?",
      "body": "Mild swelling and soreness around the implant site for three to five days after surgery is normal and expected. Most patients manage this with the guidance our team provides and return to regular activities within one to two days.\nDuring the osseointegration period of 3 to 6 months, you will be on a soft diet and attend scheduled review appointments. Proper oral hygiene around the implant site is essential throughout this period. Your dentist will confirm healing progress before the final crown or prosthesis is placed.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Dental Implant"
      }
    },
    {
      "title": "How the Dental Implant Procedure Works?",
      "body": "The implant process at Elite Dental Studio follows these stages:\n- Step 1 — Consultation and assessment: X-ray, bone check, gum health review and treatment planning.\n- Step 2 — Bone grafting (if needed): Bone material is added where support is low, followed by a healing period.\n- Step 3 — Implant placement: The titanium post is placed into the jawbone under local anaesthesia.\n- Step 4 — Osseointegration: The implant bonds with the jawbone over 3 to 6 months as bone grows around it.\n- Step 5 — Abutment placement: A connector piece is attached to the implant once healing is confirmed.\n- Step 6 — Crown or prosthesis fitting: The final crown, bridge or denture is placed and adjusted for fit and bite.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Dental Implant"
      }
    }
  ],
  "orthodontics": [
    {
      "title": "What Conditions Can Orthodontic Treatment Correct?",
      "body": "Our orthodontics team treats a wide range of alignment and bite concerns, including:\n- Crowded teeth where there is insufficient space for teeth to sit in correct alignment.\n- Gaps between teeth that affect the bite and smile appearance.\n- Overbite where the upper front teeth protrude or cover too much of the lower teeth.\n- Underbite where the lower teeth sit ahead of the upper teeth.\n- Crossbite where some upper teeth sit inside the lower teeth.\n- Open bite where upper and lower teeth do not meet when the mouth is closed.\n- Rotated or tilted teeth that affect cleaning and bite balance.\n- Teeth that have drifted after an extraction or tooth loss.\nYour orthodontist at Elite Dental Studio confirms which concerns apply to your case after a clinical check, dental X-ray and, where needed, a full orthodontic records assessment.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Orthodontic Treatment"
      }
    },
    {
      "title": "Orthodontic Treatment Options at Elite Dental Studio",
      "body": "Our orthodontic dental clinic offers a range of treatment options based on your age, case complexity and preference:\n- Metal braces: Strong and reliable. Suitable for most alignment and bite correction cases. Most cost-effective option.\n- Ceramic braces: Tooth-coloured brackets for a less visible appearance. Treats most of the same conditions as metal braces.\n- Self-ligating braces: Use clips instead of elastic modules. Can make cleaning slightly easier in selected cases.\n- Clear aligners: Removable transparent trays for mild to moderate cases. More discreet and easier to clean around.\n- Invisalign treatment: The branded clear aligner system with custom digital planning and a series of progressive trays.\n- Retainers: Worn after braces or aligners to hold teeth in the corrected position long-term.\nNot every case is suitable for aligners, and not every case needs fixed braces. Your orthodontist recommends the right option after reviewing your bite, tooth position and treatment goals.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Orthodontic Treatment"
      }
    },
    {
      "title": "How Orthodontic Treatment Works?",
      "body": "The treatment process at Elite Dental Studio follows a clear pathway:\n- Step 1 — Orthodontic consultation: Tooth position, bite, gum health and jaw relationship are checked thoroughly.\n- Step 2 — Records and planning: X-rays, digital scans and bite analysis are used to build your treatment plan.\n- Step 3 — Treatment start: Braces are fitted or aligners are delivered and wearing instructions are given.\n- Step 4 — Regular review appointments: Your orthodontist adjusts braces or provides new aligner sets at scheduled visits.\n- Step 5 — Debond and retainers: Braces are removed once teeth have moved to the planned positions. Retainers begin.\nTreatment duration depends on case complexity. Most cases take between 12 and 36 months. Simpler aligner cases may finish faster. Your orthodontist gives a realistic timeline after reviewing your full case.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Orthodontic Treatment"
      }
    }
  ],
  "gum-treatement": [
    {
      "title": "Signs You May Need Gum Treatment",
      "body": "Book a consultation if you notice any of the following:\n- Gums that bleed while brushing or flossing.\n- Gums that look red, swollen or tender.\n- Persistent bad breath that does not improve with brushing.\n- Gums that appear to be pulling away from your teeth.\n- Teeth that feel loose or have shifted position.\n- Pain or sensitivity when chewing on certain teeth.\n- A gum line that has moved visibly compared to before.\nThese signs can point to gingivitis, an early stage of gum disease, or to periodontitis, a more advanced condition where gum pockets have deepened and the bone supporting the teeth may be affected. Early treatment reduces the risk of further damage.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Gum Treatment"
      }
    },
    {
      "title": "Gum Treatment Options at Elite Dental Studio",
      "body": "Our orthodontic dental clinic offers a range of treatment options based on your age, case complexity and preference:\n- Scaling and Polishing: Professional removal of plaque and tartar from teeth and gum line.\n- Root Planing: Deep cleaning below the gum line to remove bacteria from tooth roots.\n- Gum Surgery: Gums are separated from teeth to clean deeper pockets and infected tissue.\n- Gum Grafting and Crown Lengthening: Gum or bone reshaped to cover roots or expose tooth structure.\n- Laser-Assisted Gum Care: Laser support used for precise gum treatment and cosmetic depigmentation.\n- Periodontal Maintenance: Regular gum review and cleaning after treatment to prevent recurrence.\nThe right treatment for your gums depends on the depth of your gum pockets, the extent of bone involvement and your overall oral health. Your dentist confirms the plan after a thorough clinical check and X-ray.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Gum Treatment"
      }
    },
    {
      "title": "Gum Disease Stages and What They Mean",
      "body": "Early gum disease is manageable. Severe periodontitis is harder to treat and may affect how many teeth can be saved. Your periodontist confirms the stage and the right treatment path after assessment.\n- Gingivitis - Gum inflammation with bleeding and redness. Reversible with professional cleaning and improved hygiene.\n- Mild Periodontitis - Gum pockets have deepened. Some bone loss may have started. Treatable with scaling, root planing and hygiene.\n- Moderate Periodontitis - Deeper pockets and more bone loss. May need surgical treatment alongside deep cleaning.\n- Severe Periodontitis - Significant bone loss. Teeth may be loose. Surgical care is usually needed. Some teeth may not be saveable.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Gum Treatment"
      }
    }
  ],
  "restorative-dentistry": [
    {
      "title": "Restorative Dentistry | Repairing and Replacing Teeth",
      "body": "Restorative dentistry covers all dental treatments that repair damaged teeth or replace missing ones to restore normal chewing, bite function and appearance. If a tooth is cracked, decayed, broken or missing, restorative treatment is what rebuilds it to functional health.\nAt Elite Dental Studio, our restorative dentistry team offers a full range of tooth repair and replacement treatments at our clinics in Calicut, Kochi and Kannur. Treatment planning starts with a proper clinical check and dental X-ray to confirm what each tooth needs.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Restorative Dentistry"
      }
    },
    {
      "title": "Who Needs Restorative Dental Treatment?",
      "body": "You may benefit from restorative dentistry if you have:\n- A cavity or tooth decay that needs cleaning and filling.\n- A cracked, chipped or fractured tooth affecting function or comfort.\n- A tooth that has been weakened after root canal treatment.\n- One or more missing teeth that are affecting your bite or eating.\n- Old fillings, crowns or bridges that are worn, broken or leaking.\n- Multiple damaged or missing teeth requiring full mouth rehabilitation.\nYour dentist checks your teeth, gums, bite and existing restorations before recommending the right type and sequence of treatment.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Restorative Dentistry"
      }
    },
    {
      "title": "Restorative Dental Treatments at Elite Dental Studio",
      "body": "Our team offers the following restorative treatments based on clinical need:\n- Tooth-coloured fillings: Composite resin used to fill cavities, matching the natural colour of the tooth.\n- Dental crowns: A cap placed over a damaged, weakened or root canal treated tooth to restore its shape and strength.\n- Dental bridges: A fixed replacement for one or more missing teeth, supported by the teeth on either side of the gap.\n- Inlays and onlays: Custom-made restorations for moderate tooth damage that is larger than a filling but does not need a full crown.\n- Post and core build-up: A support structure placed inside a badly broken root canal treated tooth before crown placement.\n- Tooth-coloured restorations: Natural-looking material used to repair tooth shape in visible areas.\n- Full mouth rehabilitation: A comprehensive treatment plan to repair several teeth, improve bite function and restore chewing ability.\nThe materials and approach for each restoration depend on the tooth's position, how much natural tooth structure remains, your bite and your oral hygiene habits. Your dentist explains the options clearly before treatment begins.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Restorative Dentistry"
      }
    },
    {
      "title": "Dental Crowns vs. Fillings vs. Bridges",
      "body": "Filling → Cavity or minor tooth damage where enough natural tooth structure remains.\nCrown → Significantly damaged, weakened or root canal treated tooth needing full coverage.\nBridge → One or more missing teeth where adjacent teeth can support a fixed restoration.\nInlay or Onlay → Moderate damage larger than a filling but not requiring a full crown.\nFull mouth rehab → Multiple damaged or missing teeth needing a coordinated treatment plan.\nYour dentist recommends the right option after reviewing your X-rays, gum health and bite. The goal is always to preserve as much of the natural tooth as possible.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Restorative Dentistry"
      }
    },
    {
      "title": "What to Expect After Restorative Treatment?",
      "body": "Mild sensitivity around a freshly filled or crowned tooth for a few days is normal. Bite adjustment may be needed if the restoration feels high when chewing. Your dentist checks the fit at a follow-up visit and makes adjustments if needed.\nRestorations are designed to last for many years with proper care. Regular check-ups, good oral hygiene and avoiding very hard foods help extend the life of crowns, bridges and fillings. Your dentist reviews the condition of your restorations at every routine visit.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Restorative Dentistry"
      }
    }
  ],
  "cosmetic-treatments": [
    {
      "title": "Smile Designing: What It Involves?",
      "body": "Smile designing is a planned approach to improving the overall appearance of your smile using a combination of the right treatments for your specific case. It is not a single procedure.\nYour dentist reviews your tooth colour, shape, size, symmetry and gum line before designing a treatment plan. Depending on what is needed, smile designing may involve teeth whitening, veneers, gum contouring, composite bonding or orthodontic treatment as part of the same plan.\nThe goal is a result that looks natural, matches your facial structure and is clinically stable long-term. No treatment begins without first explaining what is involved and what results are realistic for your case.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Cosmetic Treatment"
      }
    },
    {
      "title": "Cosmetic Treatments Available at Elite Dental Studio",
      "body": "Our cosmetic dentistry team offers the following treatments:\n- Professional teeth whitening: Dentist-guided bleaching to lighten natural tooth colour and reduce staining from food, drinks and ageing.\n- Dental veneers: Thin covers placed on the front of teeth to correct colour, shape, chips or minor spacing concerns.\n- Composite bonding: Tooth-coloured material bonded to repair chips, small gaps or surface irregularities.\n- Smile designing: A planned combination of treatments to improve tooth colour, shape, size and gum line balance.\n- Gum contouring: Gum line reshaping to correct an uneven or overgrown gum line that affects the smile.\n- Tooth contouring: Minor reshaping of tooth edges to improve symmetry or correct small irregularities.\nSome cosmetic treatments can be completed in a single visit. Others such as veneers or smile designing involve multiple appointments. Your dentist explains the sequence, timeline and cost at your first consultation.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Cosmetic Treatment"
      }
    },
    {
      "title": "Who Is Cosmetic Dental Treatment Suitable For?",
      "body": "Cosmetic dental treatment may be appropriate if you have:\n- Teeth that are stained or discoloured from food, drinks, smoking or ageing.\n- Chipped, cracked or unevenly shaped teeth.\n- Small gaps between teeth that affect your smile appearance.\n- An uneven or excessive gum line that shows too much gum when you smile.\n- Teeth that are slightly crowded or rotated but not suitable for braces.\n- Old restorations that look unnatural or do not match surrounding teeth.\nAll cosmetic treatment at Elite Dental Studio is planned after confirming that your teeth and gums are clinically healthy. Any active gum disease, decay or bite problems are addressed before cosmetic treatment begins.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Cosmetic Treatment"
      }
    },
    {
      "title": "What to Expect After Cosmetic Treatment?",
      "body": "Recovery time varies by treatment. Teeth whitening may cause temporary sensitivity for a few days. Veneers require a short adjustment period as you get used to the feel of the new surfaces. Gum contouring heals within one to two weeks.\nCosmetic results are not permanent for all treatments. Teeth whitening results fade over time depending on diet and habits. Veneers last many years but may need replacement. Your dentist advises on realistic timelines and maintenance at your consultation.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Cosmetic Treatment"
      }
    }
  ],
  "prosthodontics": [
    {
      "title": "What Is a Dental Crown?",
      "body": "A dental crown is a cap cemented over your natural tooth to cover the entire visible part above the gum line. Patients often call it a tooth cap, and both terms mean the same restoration.\nCrowns are made from zirconia, porcelain fused to metal, or all-ceramic material. The right material depends on which tooth is being treated and how much biting force it needs to handle.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Dental Crown"
      }
    },
    {
      "title": "Who Needs a Dental Crown?",
      "body": "A crown may be the right option if you have:\n- A tooth that just finished root canal treatment\n- A large filling that has cracked or come loose more than once\n- A tooth fracture that still has enough structure left to build on\n- Heavy wear from years of teeth grinding\n- A tooth that looks discoloured or oddly shaped compared to the rest\n- A dental implant that needs a visible tooth fitted on top\nNot every damaged tooth qualifies. If too little natural structure remains, extraction and replacement may be a better route than a crown. That call needs a clinical check, not a guess.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Dental Crown"
      }
    },
    {
      "title": "Benefits of Dental Crowns",
      "body": "- Protects a weakened tooth from further cracking\n- Restores normal chewing on the treated tooth\n- Improves the shape and colour of a damaged tooth\n- Completes an implant restoration or supports a bridge\n- Blends naturally with surrounding teeth when made from ceramic or zirconia\nSuitability is confirmed after a clinical examination and dental X-ray at our clinic.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Dental Crown"
      }
    },
    {
      "title": "What to Expect During and After Treatment?",
      "body": "Your tooth is numbed before preparation, so most patients feel pressure rather than pain during the procedure. A crown visit usually takes 45 minutes to an hour.\nMild sensitivity to hot or cold is common for a few days after the crown is fitted and usually settles on its own. Avoid biting down on very hard foods until your dentist confirms the crown has settled well.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Dental Crown"
      }
    },
    {
      "title": "What Does a Dental Crown Cost?",
      "body": "Crown cost depends on the material chosen, the tooth being treated and whether root canal treatment is needed first. Zirconia and all-ceramic crowns generally cost more than metal-based options because of the material and lab work involved.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Dental Crown"
      }
    },
    {
      "title": "How Is Dental Crown Treatment Done?",
      "body": "Dental crown treatment at Elite Dental Studio follows a clear, six-step planning process.\n- The dentist checks the tooth to see how much structure remains.\n- The damaged tooth is reshaped so the crown can fit securely.\n- Crown shade is picked to blend with your surrounding teeth.\n- Tooth scan is sent to the lab for crown fabrication.\n- A temporary cap protects the tooth while the permanent one is made.\n- Crown is cemented, checked for fit, then reviewed at follow-up.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Dental Crown"
      }
    }
  ],
  "oral-medicine-radiology": [
    {
      "title": "What Is an OPG X-Ray?",
      "body": "An OPG (orthopantomogram) is a panoramic dental X-ray that shows all your teeth, both jaws, the jaw joint and surrounding bone in one image. It is used to check wisdom teeth position, plan implants, assess gum bone levels, plan orthodontic treatment and screen for conditions that affect the whole jaw.\nElite Dental Studio offers a free OPG X-ray for new patients as part of the first consultation. This gives your dentist a full view of your dental condition before recommending treatment.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Oral Medicine and Radiology"
      }
    },
    {
      "title": "Services Provided Under Oral Medicine and Radiology",
      "body": "Our oral medicine and radiology team provides:\n- Oral medicine consultation: Clinical check for mouth sores, ulcers, white patches, burning mouth, jaw pain or facial pain.\n- Dental radiology: Digital X-rays, OPG (panoramic X-ray) and CBCT (3D cone beam) scans for treatment planning and diagnosis.\n- TMJ and jaw pain evaluation: Assessment of jaw joint pain, clicking, locking or chewing discomfort.\n- Oral lesion evaluation: Clinical check for sores, patches, lumps or wounds inside the mouth with referral for biopsy where indicated.\n- Oral biopsy: A small tissue sample taken or referred for laboratory testing when a lesion needs further investigation.\n- Oral cancer screening: Systematic check for early signs of oral tissue changes that may need further evaluation.\nDental imaging at Elite Dental Studio uses digital radiology technology, which delivers lower radiation exposure compared to older X-ray systems and produces clearer images for more accurate diagnosis. Pregnancy details must be shared before any X-ray is taken.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Oral Medicine and Radiology"
      }
    },
    {
      "title": "When Should You See an Oral Medicine Specialist?",
      "body": "Book a consultation if you have:\n- Mouth ulcers or sores that have not healed in more than two weeks.\n- White or red patches inside your mouth that appeared without an obvious cause.\n- A burning sensation in your mouth or on your tongue that keeps returning.\n- Jaw pain, clicking, locking or difficulty opening your mouth fully.\n- Swelling, lumps or unusual changes in the gum, tongue or cheek tissue.\n- Facial pain that does not have a clear dental cause.\n- A need for OPG, CBCT or dental X-ray before implant, orthodontic or surgical treatment.\nSome oral medicine conditions resolve with treatment. Others require referral for specialist investigation. Your oral medicine specialist reviews your findings and explains your options clearly after examination.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Oral Medicine and Radiology"
      }
    },
    {
      "title": "TMJ and Jaw Pain: What Can Be Done",
      "body": "TMJ stands for the temporomandibular joint, the joint that connects your jaw to your skull. Problems with this joint can cause jaw pain, clicking when opening or closing the mouth, difficulty chewing and headaches.\nOur oral medicine team checks the joint movement, bite relationship and facial muscles before recommending treatment. Management options include bite splints, jaw exercises, anti-inflammatory support and in some cases referral for specialist care. Severe structural jaw problems may require input from our maxillofacial surgery team.",
      "image": {
        "url": "/service/services-inner-3.png",
        "alt": "Oral Medicine and Radiology"
      }
    }
  ],
  "maxillofacial-orthognathic-surgery": [
    {
      "title": "Surgical Procedures Offered",
      "body": "Our maxillofacial surgery team provides:\n- Wisdom tooth removal: Removal of third molar teeth that are impacted, infected, causing pain or creating crowding.\n- Surgical extraction: Tooth removal through a minor surgical approach when a simple extraction is not possible.\n- Dental cyst removal: Removal of a fluid-filled cyst or lesion near the tooth root or in the jaw.\n- Jaw fracture management: Surgical care for jaw injuries or fractures resulting from trauma.\n- Frenectomy: Surgical release of a tight frenum for tongue tie, lip tie or spacing concerns in selected cases.\n- Pre-implant surgery: Bone grafting, sinus lift or other preparatory surgical procedures before implant placement.\nAll surgical procedures are planned after a clinical examination, dental X-ray and, where needed, a CBCT scan to assess the position of the tooth, surrounding bone and nearby nerves.",
      "image": {
        "url": "/service/services-inner-4.png",
        "alt": "Oral and Maxillofacial Surgery"
      }
    },
    {
      "title": "Wisdom Tooth Removal: What You Should Know?",
      "body": "Wisdom teeth are the third molars that erupt last, usually between the ages of 17 and 25. Not all wisdom teeth need removal. Removal is recommended when:\n- The tooth is impacted and cannot erupt fully due to insufficient space.\n- The partially erupted tooth is causing recurrent infection in the gum around it.\n- There is decay in the wisdom tooth or the adjacent tooth that cannot be treated.\n- The wisdom tooth is damaging the tooth in front of it.\n- The tooth position is contributing to crowding in the front teeth.\nA dental X-ray confirms the exact position of the wisdom tooth and its proximity to nearby nerves before the dentist recommends removal. Simple cases are completed in one visit. Impacted cases may require a minor surgical approach with local anaesthesia.",
      "image": {
        "url": "/service/services-inner-5.png",
        "alt": "Oral and Maxillofacial Surgery"
      }
    },
    {
      "title": "Orthognathic Surgery: Correcting Jaw Position",
      "body": "Orthognathic surgery, also called corrective jaw surgery, is a planned procedure to reposition the upper jaw, lower jaw or both to correct severe bite problems that cannot be resolved with braces alone.\nConditions managed with orthognathic surgery include severe underbite, overbite, open bite, facial asymmetry and jaw pain caused by a significantly misaligned jaw. Treatment is always planned in coordination with our orthodontics team, as braces are typically part of the overall plan both before and after surgery.",
      "image": {
        "url": "/service/services-inner-6.png",
        "alt": "Oral and Maxillofacial Surgery"
      }
    },
    {
      "title": "What to Expect After Oral Surgery?",
      "body": "Post-surgical recovery varies by procedure. Most simple extractions and wisdom tooth removals heal within five to seven days for initial recovery. Swelling, mild pain and restricted mouth opening for a few days after surgery is normal and expected.\nSurgical extractions and jaw procedures involve a longer recovery period. You will be given specific instructions on diet, pain management, rinsing and follow-up visits. Attending your post-operative check is important to confirm healing is progressing normally.",
      "image": {
        "url": "/service/services-inner-1.png",
        "alt": "Oral and Maxillofacial Surgery"
      }
    },
    {
      "title": "When Should You Consider Oral and Maxillofacial Surgery?",
      "body": "Certain dental and jaw problems need surgical evaluation rather than routine treatment alone.\n- Wisdom tooth pain, swelling or recurring infection near the back of your jaw.\n- A tooth too damaged or positioned for a simple, non-surgical extraction.\n- A cyst or lesion found near a tooth root or inside the jaw.\n- A jaw injury, fracture or facial trauma needing surgical assessment and care.\n- A tight frenum causing tongue tie, lip tie or noticeable tooth spacing.\n- A severe bite problem or jaw misalignment that braces alone cannot correct.\nIf you notice any of these signs, a clinical examination and dental X-ray or CBCT scan can confirm whether surgery is the right next step.",
      "image": {
        "url": "/service/services-inner-2.png",
        "alt": "Oral and Maxillofacial Surgery"
      }
    }
  ]
};
