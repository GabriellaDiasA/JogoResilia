var nomeJogador;
var caminho = '0';

function startUp(){
    alert("Recomendamos que jogue em modo tela-cheia (F11). Boa sorte.");
}

function receberDados(){
    nomeJogador = prompt("Qual é seu nome?");;
    alert("Designação " + nomeJogador.toUpperCase() + ", Setor 34");
}

startUp();
receberDados();

var enredo = [

            ['0', nomeJogador + ", você se encontra em uma sala fria e escura. Há uma porta e um console em seu campo de visão. " + 
            "Infelizmente, não há muitas opções disponíveis no momento.\n\n" +
            "1 - Tento abrir a porta\n"],

            ['01', "A porta se abre com um ruído estridente. Ela, assim como o chão, é feita de ferro. Você percebe que seus dedos, sua mão " + 
            "e seu braço estão cobertos por algum tipo de resíduo fibroso. O lado de fora da sala é um corredor. Ainda é escuro.\n\n" + 
            "1 - Sigo à direita, de onde sinto uma leve onda de calor\n" +
            "2 - Vou para a esquerda, onde vejo uma leve luz vermelha piscando no final de um longo corredor"],

            ['011', "Na medida em que você anda, menos você enxerga, mais você sua. Pouco a pouco um ruído cresce em volume. " +
            "Logo em seguida, você se encontra numa escuridão completa, o ruído e o calor são as únicas coisas que você consegue sentir. " +
            "De repente, luz. Cerca de 8 metros de onde você está, atrás de você, uma porta é escancarada por uma explosão.\n\n" +
            "O fogo ilumina o ambiente. Corpos de cientistas cobertos por sangue, gosma e teias grossas cobrem o chão. " + 
            "Já não é possível voltar, o fogo bloqueia seu caminho. Em frente, há duas opções.\n\n" +
            "1 - Vou à esquerda, onde o ruído é ensurdecedor e o rastro de destruição continua\n" +
            "2 - Viro à direita, onde o calor é quase insuportável mas não há sinal de destruição"],

            ['012', "Depois de uma longa caminhada, você se encontra numa sala estreita, com inúmeras portas de titânio redonas e fechadas. Você percebe que a última " +
            "porta, a cerca de 50 metros de distância, está aberta. Você reconhece esse lugar, é a saída emergencial, e as portas " +
            "fechadas significam que as cápsulas de fuga foram usadas. Resta uma.\n\n" +
            "1 - Fujo na última cápsula de fuga\n" +
            "2 - Exploro a sala"],

            ['0111', "Poucos passos depois de virar à esquerda, você se depara com um monstro alienígena. " +
            "Em questão de segundos, você vai de ser humano a lanche.", 'final ruim'],

            ['0112', "No final do corredor há uma sala imensa, com um casulo de 2 metros de altura no meio, suspenso num tubo anti-gravidade. " +
            "Já é difícil respirar. O casulo parece ser a fonte do calor, e o quanto mais você se aproxima, mais quente fica. " +
            "Perto do casulo há um cientista deitado no chão, provavelmente morto, vestido com um traje hazmat isolante térmico. " +
            "Você percebe um botão vermelho, grande, ao seu lado. Logo acima do botão há uma pequena placa escrita \"EMERGENCY ABORT\". " +
            "Há, também, um console na parede do seu outro lado.\n\n" +
            "1 - Aperto o botão\n" +
            "2 - Tento tocar no casulo\n" +
            "3 - Uso o console"],

            ['0121', "Você entra na última cápsula de fuga, seus olhos levam alguns segundos para se ajustar à forte luz branca. " +
            "O interior da cápsula é pequeno e há uma única janela. Uma voz robótica fala:\n" +
            " - Um passageiro detectado. Nenhum outro sinal de vida próximo. Saída emergencial automática autorizada.\n" +
            "Então, as portas de titânio se fecham, o campo anti-inércia e os propulsores FTL se acionam. Em poucos segundos " +
            "você está fora da atmosfera. A voz robótica volta a falar:\n" +
            " - Velocidade de escape. Destino: Estação Espacial Balkan22C. Tempo de viagem: 2 dias e três horas.\n" +
            "Você se encosta no banco. Sem saber o que houve, você espera encontrar respostas na estação espacial.", 'final bom'],

            ['0122', "Você percebe, num canto escuro próximo, uma cientista no chão. Ela parece estar respirando levemente. " +
            "Ao se aproximar dela, você a reconhece. Ela é Ágatha, e veio com você um dia atrás ao setor 34 quando seus instrumentos " +
            "detectaram fortes emissões eletromagnéticas vindo daqui. Você se abaixa para acordá-la.\n" +
            " - Ágatha, temos que sair daqui. Algo terrível aconteceu.\n" +
            "O som da sua voz parece ter sido o suficiente para que Ágatha acordasse. Lentamente ela se vira e te vê. Com um " +
            "leve sorriso ela diz:\n" +
            " - Que bom que não estou sozinha. Vamos embora.\n" +
            "Vocês entram na última cápsula de fuga, seus olhos levam alguns segundos para se ajustar à forte luz branca. " +
            "O interior da cápsula é pequeno e há uma única janela. Uma voz robótica fala:\n" +
            " - Dois passageiros detectados. Nenhum outro sinal de vida próximo. Saída emergencial automática autorizada.\n" +
            "Então, as portas de titânio se fecham, o campo anti-inércia e os propulsores FTL se acionam. Em poucos segundos " +
            "vocês estão fora da atmosfera. A voz robótica volta a falar:\n" +
            " - Velocidade de escape. Destino: Estação Espacial Balkan22C. Tempo de viagem: 2 dias e três horas.\n" +
            "Você se encosta no banco e discute detalhes do que houve com Ágatha. De acordo com ela, houve uma invasão de uma " +
            "espécie nativa hostil ao setor, que veio à procura de algo que os cientistas da área haviam ilegalmente roubado. " +
            "Vocês esperam encontrar respostas na estação espacial.", 'final bom'],

            ['01121', "Assim que você aperta o botão, o tubo anti-gravitacional emite uma luz azul. O casulo parece escurecer e morrer. " +
            "Imediatamente você percebe a temperatura normalizando e o ruído se silenciando. Você sente como se tivesse prevenido uma " +
            "catastrofe, mas muitas perguntas permanecem em sua mente.", 'final bom'],

            ['01122', "Você não resiste a tentação e a curiosidade e se aproxima do casulo apesar do calor. Porém, você logo entende " +
            "o porquê do cientista estar usando o traje isolante térmico. O calor é tanto que em poucos segundos você cai, desmaia, e morre.",
            'final ruim'],

            ['01123', "Apesar do calor, você tira alguns segundos para examinar os conteúdos do console. Ele parece estar quase quebrado. " +
            "De acordo com as informações que estão na tela, o casulo parece emitir uma quantidade muito alta de ondas eletromagnéticas " +
            "e estudos de mapeamento quântico revelaram uma rede neural de complexidade nunca vista do lado de dentro. " +
            "De acordo com o console, o botão ao seu lado tem o propósito de matar o casulo com raios gamma.\n\n" +
            "Você percebe que o ruído voltou a crescer enquanto você lia o console. Vindo em alta velocidade do corredor de onde você veio, há um " +
            "monstro alienígena.\n\n" +
            "1 - Tento enfrentar o monstro, que tem 2 metros de altura e garras extremamente afiadas\n" +
            "2 - Aperto o botão que está do meu lado"],

            ['011231', "Sua coragem é louvável, porém inútil. O monstro te mata e usa seus ossos para limpar os dentes.", 'final ruim'],

            ['011232', "Imediatamente após você apertar o botão, o monstro cai no chão, paralizado e provavelmente morto. " +
            "Atrás de você, o tubo anti-gravitacional emite uma luz azul, matando o casulo silenciosamente. " +
            "Em seguida você percebe a temperatura normalizando. Você sente como se tivesse prevenido uma " +
            "catastrofe, mas muitas perguntas permanecem em sua mente.", 'final real'],
       
            ];

function proximaMensagem(){
    var escolha;
    for (var i = 0; i < enredo.length; i++){
        if(enredo[i][0] == caminho){
            if(enredo[i][2] == 'final bom'){
                alert(enredo[i][1]);
                return -1;
            }
            if(enredo[i][2] == 'final ruim'){
                alert(enredo[i][1]);
                return -2;
            }
            if(enredo[i][2] == 'final real'){
                alert(enredo[i][1]);
                return -3;
            }
            else{
                escolha = prompt(enredo[i][1]);
                escolha.toString();
                if(escolha == '1' || escolha == '2' || escolha == '3' || escolha == '4'){
                    caminho += escolha;
                    return 1;
                }
                else{
                    alert("Opção inválida.");
                    proximaMensagem();
                }
            }
        }
    }
    return -420;
}

function jogo(){
    caminho = '0';
    if(nomeJogador == undefined){
        receberDados();
    }
    var i = 0;
    while(i >= 0){
        i = proximaMensagem();
        if(i == -1){
            alert("Parabéns, " + nomeJogador +", você ganhou, mas o mistério continua...");
        }
        if(i == -2){
            alert("Derrota!");
        }
        if(i == -3){
            alert("Parabéns, " + nomeJogador + ", você encontrou o final verdadeiro do jogo, mas o mistério continua...");
        }
        if(i == -420){
            alert("Ops! Ou houve algum erro durante a execução do programa, ou você fez algo que não devia!");
        }
    }
    alert("Fim de jogo.");
}