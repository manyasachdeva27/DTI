export interface ChatbotTopics {
  greeting: string[];
  [key: string]: any;
}

export const topics: ChatbotTopics = {
  greeting: [
    "Hello! I'm your Women's Health Assistant. How can I help you today? You can ask about irregular periods, menopause, PCOS, PCOD, menstrual cycle, vaginal odor, or other women's health topics.",
    "Hi there! I'm here to provide information about women's health. Feel free to ask about topics like irregular periods, menopause, PCOS, and more.",
    "Welcome! I'm your women's health information assistant. What would you like to know about today?"
  ],
  
  "irregular periods": {
    general: [
      "Irregular periods are menstrual cycles that vary in length, flow, or frequency outside the typical range. Would you like to know more about the symptoms or potential causes of irregular periods?",
      "Many women experience irregular periods at some point in their lives. This means your cycle length, flow amount, or days between periods aren't consistent. Would you like information about symptoms or causes of irregular periods?",
      "Irregular periods refer to menstrual cycles that don't follow a predictable pattern. This could mean cycles shorter than 21 days, longer than 35 days, or unpredictable timing. Would you like to learn about the symptoms or causes of irregular periods?"
    ],
    symptoms: [
      "Symptoms of irregular periods include: unpredictable timing (early or late periods), varying cycle lengths, changes in blood flow (heavier or lighter than usual), missed periods, spotting between periods, and changes in period duration. If you experience severe pain, very heavy bleeding, or periods lasting more than 7 days, consider consulting a healthcare provider.",
      "Irregular period symptoms can include: cycles shorter than 21 days or longer than 35 days, unpredictable timing, significant changes in flow volume, periods lasting longer than 7 days, spotting between periods, and severe menstrual pain. These may indicate underlying conditions that should be evaluated by a healthcare professional."
    ],
    causes: [
      "Common causes of irregular periods include: hormonal imbalances, stress, significant weight changes, excessive exercise, thyroid disorders, PCOS, endometriosis, uterine fibroids or polyps, perimenopause, certain medications, and birth control methods. Lifestyle factors like poor nutrition, lack of sleep, and high stress can also affect your cycle.",
      "Irregular periods can be caused by: hormonal fluctuations, stress, rapid weight loss or gain, over-exercising, poor nutrition, PCOS, thyroid problems, endometriosis, perimenopause, certain medications (including hormonal contraceptives), and structural issues like fibroids. If irregularity persists for more than three months, consult with a healthcare provider."
    ]
  },
  
  "menopause": {
    general: [
      "Menopause marks the end of a woman's reproductive years and is confirmed after 12 consecutive months without a period. The transition typically occurs between ages 45-55. Would you like to know more about the symptoms or causes of menopause?",
      "Menopause is a natural biological process that signals the end of menstrual cycles, typically occurring in the late 40s or early 50s. The transition period leading up to menopause is called perimenopause. Would you like information about symptoms or causes of menopause?",
      "Menopause represents the permanent end of menstruation and fertility. It's a normal part of aging and typically occurs between ages 45-55, with the average age being 51 in the US. Would you like to learn about the symptoms or causes associated with menopause?"
    ],
    symptoms: [
      "Common menopause symptoms include: hot flashes (sudden feelings of warmth), night sweats, sleep disturbances, mood changes (irritability or depression), vaginal dryness and discomfort, decreased libido, urinary issues, joint and muscle aches, changes in cholesterol levels, bone density loss, and changes in body fat distribution. Symptoms can last for several years.",
      "Menopausal symptoms vary widely but often include: irregular periods during perimenopause, hot flashes and night sweats, sleep problems, mood fluctuations, vaginal and urinary symptoms (dryness, infections, urgency), changes in sexual function, fatigue, memory and concentration issues, weight gain (particularly around the abdomen), and thinning hair or dry skin."
    ],
    causes: [
      "Menopause is primarily caused by natural decline in reproductive hormones. As you approach your late 30s, ovaries produce less estrogen and progesterone, and fertility declines. Eventually, ovulation ceases and menstruation stops. Other causes include surgical removal of ovaries (surgical menopause), chemotherapy/radiation, and primary ovarian insufficiency (premature menopause before age 40).",
      "The main cause of natural menopause is the gradual depletion of ovarian follicles and declining hormone production as women age. This is a normal biological process. However, menopause can also be triggered by medical interventions such as removal of ovaries, certain cancer treatments, or conditions that damage the ovaries. Genetics plays a role in determining when natural menopause occurs."
    ]
  },
  
  "pcos": {
    general: [
      "Polycystic Ovary Syndrome (PCOS) is a common hormonal disorder affecting women of reproductive age. It involves issues with hormones that regulate the menstrual cycle and can affect fertility and metabolism. Would you like to know more about the symptoms or causes of PCOS?",
      "PCOS (Polycystic Ovary Syndrome) affects approximately 1 in 10 women of childbearing age. It's characterized by hormonal imbalances that can lead to various reproductive and metabolic issues. Would you like information about symptoms or causes of PCOS?",
      "Polycystic Ovary Syndrome (PCOS) is an endocrine disorder that can affect a woman's hormone levels, menstrual cycle, and ability to have children. It's one of the most common causes of infertility. Would you like to learn about the symptoms or causes of PCOS?"
    ],
    symptoms: [
      "Common PCOS symptoms include: irregular or missed periods, heavy bleeding during periods, excess facial and body hair (hirsutism), acne, oily skin, thinning hair or male-pattern baldness, weight gain (especially around the abdomen), difficulty getting pregnant, darkened skin patches, and multiple small cysts on the ovaries visible on ultrasound.",
      "PCOS symptoms can vary widely but often include: infrequent, irregular, or prolonged menstrual cycles, elevated androgen (male hormone) levels causing excess facial/body hair and acne, polycystic ovaries (enlarged ovaries with follicles surrounding the eggs), weight issues, fatigue, mood changes, sleep problems, headaches, and pelvic pain."
    ],
    causes: [
      "The exact cause of PCOS is unknown, but factors that play a role include: excess insulin (which can increase androgen production), low-grade inflammation, heredity, and excess androgen production. Risk factors include obesity, family history of PCOS, and type 2 diabetes.",
      "While the precise cause of PCOS isn't fully understood, several factors contribute: genetic predisposition, hormonal imbalances (particularly elevated androgens), insulin resistance, chronic inflammation, and environmental factors. Being overweight can worsen PCOS symptoms, creating a challenging cycle."
    ]
  }
};

export function getRandomResponse(responses: string[]): string {
  return responses[Math.floor(Math.random() * responses.length)];
}

export function generateResponse(input: string): string {
  const lowercaseInput = input.toLowerCase();
  
  // Check for greetings
  if (lowercaseInput.includes('hello') || lowercaseInput.includes('hi') || lowercaseInput === '') {
    return getRandomResponse(topics.greeting);
  }
  
  // Check for specific topics
  for (const [topic, content] of Object.entries(topics)) {
    if (lowercaseInput.includes(topic)) {
      if (lowercaseInput.includes('symptom')) {
        return content.symptoms[0];
      } else if (lowercaseInput.includes('cause')) {
        return content.causes[0];
      } else {
        return content.general[0];
      }
    }
  }
  
  // Default response
  return "I understand you're asking about " + input + ". Could you please be more specific about what you'd like to know? You can ask about topics like irregular periods, menopause, PCOS, and their symptoms or causes.";
} 