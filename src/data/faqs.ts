export interface FAQItem {
  id: number;
  title: string;
  body: string[] | string;
  type: "ol" | "ul" | "text";
}

export const faqs: FAQItem[] = [
  {
    id: 1,
    title:
      "Why is El Gameya better than any traditional offline money circle? ",
    body: [
      " Ensuring your privacy: nobody knows when you are getting your payout.",
      "Ensuring your security: all user customers sign a legally binding contract.",
      "Payout values that reach 100K EGP.",
      "Installments start from 500 EGP/month",
      "Gameya is available in Egypt from Cairo to Aswan ",
      "Various Pay-in and Payout methods.",
      "Available at a click of a button.",
    ],
    type: "ol",
  },
  {
    id: 2,
    title: "What are the money circles you offer?",
    body: [
      "Money Circles values start from 2,500 EGP and could reach up to 100,000 EGP.",
      "Installments start from 500 EGP per month and up to 10,000 EGP per month.",
      "You can choose between 3 different durations: 5 Months, 7 Months, and 10 Months.",
    ],
    type: "ol",
  },
  {
    id: 3,
    title: "Is this legal?",
    type: "text",
    body: "El Gameya is registered in the General Authority for Investment, its commercial registration number is 131569, and its tax card number is 578-350-723",
  },
  {
    id: 4,
    type: "text",
    title: "Why should I trust that other people are going to pay ?",
    body: " Each user has to sign a legally binding contract after undergoing credit assessment from our side to ensure that all users can pay their installments. In case other users fail to pay their due amounts, El Gameya  covers their share to make sure you get your full payout.",
  },
  {
    id: 5,
    type: "ul",
    title: "What are the pay-in methods?",
    body: [
      "Debit/Credit cards",
      "Direct Debit",
      "Fawry/Fawry plus",
      "Smart Wallets",
    ],
  },
  {
    id: 6,
    type: "ul",
    title: "What are the pay-out methods?",
    body: ["Bank Transfer", "Fawry plus", "Smart Wallets"],
  },
];
