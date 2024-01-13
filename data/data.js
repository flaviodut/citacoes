const whosaid = {
  jose: { name: 'José', avatar: 'person-0.jpg' },
  paula: { name: 'Paula', avatar: 'person-1.jpg' },
  zezinho: { name: 'Zezinho', avatar: 'person-2.jpg' },
  henrique: { name: 'Henrique', avatar: 'person-3.jpg' },
  lucas: { name: 'Lucas', avatar: '' },
  edson: { name: 'Edson', avatar: 'person-5.jpg' },
  flavio: { name: 'Flávio', avatar: 'person-6.jpg' },
  gilberto: { name: 'Gilberto', avatar: '' },
  cris: { name: 'Cris', avatar: 'person-8.jpg' },
  jamal: { name: 'Jamal', avatar: 'person-9.jpg' },
  ana: { name: 'Ana', avatar: '' },
  rodrigo: { name: 'Rodrigo', avatar: 'person-11.jpg' },
  julia: { name: 'Júlia', avatar: 'person-12.jpg' },
  lorena: { name: 'Lorena', avatar: 'person-13.jpg' },
  leandro: { name: 'Leandro', avatar: '' },
};

const quotes = [
  {
    'phrase': 'O portal implodiu, está todo cagado.',
    'date': 'meados de 11/2016',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Quando viramos para o Maestro PHP, os dados/perguntas não estavam combinados e os valores apresentados no portal estavam todos... cagados.'
  },
  {
    'phrase': 'Tem que saber exatamente o que aconteceu. Isso é muito grave.',
    'date': '18/01/2016 às 15h55',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Quando soube que foram enviados seis vezes o mesmo e-mail para cada paciente.'
  },
  {
    'phrase': 'É uma pergunta simples, sim ou não (risos).',
    'date': '19/01/2016 às 11h30',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Quando pediu para o Henrique perguntar pro Leandro, que \'estava\' no hospital, se ele salvou o trabalho no repositório.'
  },
  {
    'phrase': 'O básico que a gente se propõe a fazer pro cliente, a gente não consegue.',
    'date': '20/01/2016 às 18h31',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Ao ser informado que o N continua dando divergência.'
  },
  {
    'phrase': 'Me deixa apavorado, a gente aperta um botão e não sabe o que vai acontecer.',
    'date': '21/01/2016 às 17h15',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Ao receber \'não sei\' como resposta pra uma pergunta a respeito da divergência de Ns.'
  },
  {
    'phrase': 'Bem picareta, coisa de bandido. O cara recebe o salário e vai embora.',
    'date': '16/02/2016 às 11h16',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Ao relembrar do Leandro.'
  },
  {
    'phrase': 'Isso é o que me preocupa mais, vocês me dão certeza, mas o cara abriu na minha frente e o N não bateu.',
    'date': '25/02/2016 às 16h06',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'No meio de uma discussão à respeito de um problema novo encontrado no SEG 2 de DASA.'
  },
  {
    'phrase': 'Estamos corrigindo essa mega explosão atômica!',
    'date': '29/02/2016 às 20h07',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Sobre um problema que deu com relação à algumas marcas de DASA.'
  },
  {
    'phrase': 'Desculpa, não confio mais no trabalho de vocês!',
    'date': '03/03/2016 às 21h15',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Quando notou-se que o alerta diário pra Delboni não trazia informações do Club DA.'
  },
  {
    'phrase': 'Estou tendo um surto psicótico...',
    'date': '08/04/2016 às 15h15',
    'whosaid': whosaid.paula.name,
    'avatar': whosaid.paula.avatar,
    'context': 'Quando ela fez o dump do portal ainda em processamento e os dados não batiam.'
  },
  {
    'phrase': 'A gente precisa entender porque essa diferença. Isso é preocupante.',
    'date': '02/05/2016 às 20h19',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Tranquilamente falando sobre uma diferença de N.'
  },
  {
    'phrase': 'Se continuar desse jeito eu vou sair no máximo as sete e meia.',
    'date': '13/06/2016 às 18h52',
    'whosaid': whosaid.zezinho.name,
    'avatar': whosaid.zezinho.avatar,
    'context': 'Esperançoso.'
  },
  {
    'phrase': 'Eu não sabia disso, eu preciso saber disso quando o negócio é sério assim.',
    'date': '14/06/2016',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Ao saber que não estão sendo enviados pesquisas de Club DA a mais de 2 semanas.'
  },
  {
    'phrase': 'Vou perguntar se é sim de verdade ou sim de mentirinha.',
    'date': '14/06/2016',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'À respeito da validade das implementações ao saber que o parser que foi feito recentemente está com problemas.'
  },
  {
    'phrase': 'Nossasenhora, tá foda.',
    'date': '27/06/2016 às 11h42',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Ao saber, na segunda, que ainda não havia sido feito o reenvio das pesquisas que era pra ter sido feito na quarta.'
  },
  {
    'phrase': 'Quero saber como que isso acontece, significa que qualquer script do portal pode sumir do nada?!',
    'date': '06/07/2016 às 16h08',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Depois de saber que um script de processos magicamente voltou pra uma versão anterior.'
  },
  {
    'phrase': 'Não dá pra ser tão amador assim, cara. Na boa.',
    'date': '06/07/2016 às 16h14',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Depois de saber que alguns arquivos não estavam sendo versionados no Git.'
  },
  {
    'phrase': 'Semana que vem eu já entro no projeto.',
    'date': 'Meados de 08/2016',
    'whosaid': whosaid.zezinho.name,
    'avatar': whosaid.zezinho.avatar,
    'context': 'Esperançoso em conseguir um tempo na lista de tarefas e começar a dedicar algumas horas no projeto do portal 2.'
  },
  {
    'phrase': 'São duas estradas pro mesmo destino.',
    'date': '11/08/2016 às 17h40',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Explicando alguma coisa da API pro José.'
  },
  {
    'phrase': 'Eu vi aquilo acontecer na minha frente. Eu estava no mineirão.',
    'date': '01/09/2016 às 9h13',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Com terror em seus olhos, relembrando o 7 a 1 da Alemanha em cima do Brasil.'
  },
  {
    'phrase': 'Não Zé, eu não vou fazer, não dá! Eu tenho que fazer minha mudança amanhã. Não dá! Zé, não dá! Eu não vou fazer isso pra você amanhã!',
    'date': '16/09/2016 às 20h17',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Henrique gritando com o Zé no telefone tentando explicar que não ia ter tempo ábil pra fazer uma tarefa.'
  },
  {
    'phrase': 'Isso tá muito solto. Por isso que eu pedi pra ligar, pra saber exatamente o que está acontecendo.',
    'date': '23/09/2016 às 15h11',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Sobre uma dúvida da cliente que recebe as bases e não sabe calcular os dados.'
  },
  {
    'phrase': 'Posso até te oferecer mágica agora, mas como você sabe, mágica é só ilusão.',
    'date': '10/10/2016 às 17h07',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Enquanto rolava uma discussão sobre o portal novo.'
  },
  {
    'phrase': 'Vamo testa essa porra pra caralho.',
    'date': '10/10/2016 às 17h37',
    'whosaid': whosaid.jose.name,
    'avatar': whosaid.jose.avatar,
    'context': 'Falando pra testar incansavelmente.'
  },
  {
    'phrase': 'Cara, esse fermento é bom.',
    'date': '14/10/2016 às 17h08',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Vislumbrando o caos quando o José começou a falar que a Rede D\'Or gostaria de ver os dados diários.'
  },
  {
    'phrase': 'Em chuva de pica, pega a menor e senta. É o melhor que eu posso te dizer agora.',
    'date': '05/12/2016 às 11h38',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Tentando animar o Lucas por causa do layout express do totem.'
  },
  {
    'phrase': 'Senta e rala bit.',
    'date': '09/01/2017 às19h04',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Respondendo uma pergunta do José sobre tarefas do Portal 2.'
  },
  {
    'phrase': 'Enfim, uma mão lava a outra e as duas lavam a bunda.',
    'date': '31/01/2017 às 16h54',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Conversando com o José a respeito de uma ajuda mutua entre ele e o Lucas.'
  },
  {
    'phrase': 'Cada um chora pelo olho que lhe convêm.',
    'date': '29/03/2017 às 15h33',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Dialogando com o Roberto sobre problemas nos Ns que, pra variar, não batem.'
  },
  {
    'phrase': 'Ai! toda vez que entra aqui faz um barulhinho.',
    'date': '22/06/2017 às 18h10',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Em call reclamando do som alto.'
  },
  {
    'phrase': 'Depois que você mata um leão, já tem outro cutucando a sua bunda com a unha, tem que correr mais rápido.',
    'date': '05/07/2017 às 17h40',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Em conversa com o Zezinho.'
  },
  {
    'phrase': 'Quando eu entendo o que ele fala, eu não entendo o que ele quis dizer.',
    'date': '08/11/2017 às 13h47',
    'whosaid': whosaid.flavio.name,
    'avatar': whosaid.flavio.avatar,
    'context': 'Reclamando sobre a dicção do Jamal.'
  },
  {
    'phrase': 'Vem flutuando então.',
    'date': '09/11/2017 às 13h27',
    'whosaid': whosaid.flavio.name,
    'avatar': whosaid.flavio.avatar,
    'context': 'Depois que a Cris falou que perdeu a pontinha do sapato enquanto andava.'
  },
  {
    'phrase': 'Na hora que chove pica, todo mundo quer tirar o seu da reta.',
    'date': '22/11/2017 às 11h58',
    'whosaid': whosaid.henrique.name,
    'avatar': whosaid.henrique.avatar,
    'context': 'Conversando com o José a respeito de uma consulta errada que o cliente estava fazendo no colector.'
  },
  {
    'phrase': 'Se eu fizer no Zezinho, ele vai ficar durinho.',
    'date': '29/11/2017 às 17h17',
    'whosaid': whosaid.cris.name,
    'avatar': whosaid.cris.avatar,
    'context': 'Depois de retrucar alguma brincadeira que o Henrique fez.'
  },
  {
    'phrase': 'Então, é que eu apaguei julho, e agora que eu estou voltando, o N não está batendo.',
    'date': '01/02/2018 às 18h55',
    'whosaid': whosaid.zezinho.name,
    'avatar': whosaid.zezinho.avatar,
    'context': 'Em conversa com o Henrique sobre o penúltimo pepino que ele está resolvendo.'
  }
];

export {
  quotes,
}