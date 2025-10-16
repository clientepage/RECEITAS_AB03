export interface FaqItem {
  id: number;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: 1,
    question: "Essas receitas substituem meus remédios?",
    answer: "Não substituem tratamentos médicos. São complementares e naturais para ajudar seu corpo a se curar. SEMPRE consulte seu médico antes de parar qualquer medicação."
  },
  {
    id: 2,
    question: "Vou precisar comprar ingredientes caros?",
    answer: "NÃO! 90% das receitas usam ingredientes que você JÁ TEM em casa ou que custam menos de R$10 no mercado."
  },
  {
    id: 3,
    question: "Quanto tempo leva para ver resultados?",
    answer: "Depende da condição, mas 78% das pessoas relatam melhorias visíveis em 7-15 dias de uso consistente."
  },
  {
    id: 4,
    question: "E se não funcionar pra mim?",
    answer: "Simples: você tem 7 dias para testar TUDO. Não gostou? 1 e-mail e devolvemos 100% do seu dinheiro."
  },
  {
    id: 5,
    question: "Como recebo o material?",
    answer: "Acesso IMEDIATO após confirmação do pagamento. Você recebe tudo por e-mail em até 2 minutos."
  },
  {
    id: 6,
    question: "O material é em PDF ou físico?",
    answer: "É 100% digital em PDF. Você pode acessar de qualquer dispositivo (celular, tablet, computador) a qualquer hora."
  },
  {
    id: 7,
    question: "Posso usar as receitas se tiver alergias?",
    answer: "Sim! O guia inclui informações sobre alérgenos e sugestões de substituições para que você possa adaptar as receitas às suas necessidades."
  }
];