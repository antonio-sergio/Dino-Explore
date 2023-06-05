import TIRANOSSAURO from '../assets/imagens_dinos/T-Rex-Transparent-Background.png';
import VELOCIRAPTOR from '../assets/imagens_dinos/velociraptor.png';
import PYRORAPTOR from '../assets/imagens_dinos/pyroraptor.png';
import GIGANOTOSSAURO from '../assets/imagens_dinos/giganotosaurus.png';
import THERIZINOSSAURO from '../assets/imagens_dinos/therizinossauro.png';
import TRICERATOPO from '../assets/imagens_dinos/triceratops.png';
import ESTEGOSSAURO from '../assets/imagens_dinos/estego.png';
import GORGOSSAURO from '../assets/imagens_dinos/gorgo.png';
import GALIMIMUS from '../assets/imagens_dinos/galimimus.png';
import MONOLOFOSSAURO from '../assets/imagens_dinos/monolofo.png';
import TARBOSSAURO from '../assets/imagens_dinos/tarbosaurus.png';
import BRAQUIOSSAURO from '../assets/imagens_dinos/braquio.png';
import APATOSSAURO from '../assets/imagens_dinos/apatosaurus.png';
import DIPLODOCO from '../assets/imagens_dinos/diplodocus.png';
import PARASSAUROLOFO from '../assets/imagens_dinos/parasaurolophus.png';
import CARNOTAURO from '../assets/imagens_dinos/carnotaurus.png';

import americaSul from '../assets/regioes/america-sul.jpg';
import americaNorte from '../assets/regioes/america-norte.jpg';
import asia from '../assets/regioes/asia.jpg';
import europa from '../assets/regioes/europa.jpg';

import new1 from '../assets/news/news-1.png';
import new2 from '../assets/news/news-2.png';
import new3 from '../assets/news/news-3.png';
import new4 from '../assets/news/news-4.png';

import meme1 from '../assets/memes/meme1.png';
import meme2 from '../assets/memes/meme2.png';
import meme3 from '../assets/memes/meme3.png';
import meme4 from '../assets/memes/meme4.png';

const dinossauros = [
    {
        id: 5,
        nome: 'THERIZINOSSAURO',
        cientifico: 'Therizinossaurus',
        alimentacao: 'Herbívoro',
        local: 'Ásia',
        regiao: [asia],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'de 7 a 12 mts',
            altura: 'de 4 a 5 mts',
        },
        curiosidade:
            'Extremamente terrotorialista e possuía as garras das mãos bem grandes.',
        cobertura_corporal: 'penas',
        predador: 'Não',
        peso: 'até 4 toneladas',
        imagem:
            THERIZINOSSAURO,
    },
    {
        id: 6,
        nome: 'TRICERÁTOPO',
        cientifico: 'Triceratops',
        alimentacao: 'Herbívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Cretáceo',
        andar: 'Quadrúpede',
        tamanho: {
            comprimento: 'de 7,9 a 9 mts',
            altura: 'de 2, 9 a 3 mts',
        },
        curiosidade: 'Possui chifres grande para se defender.',
        cobertura_corporal: 'escamas',
        predador: 'Não',
        peso: 'de 6 a 12 toneladas',
        imagem:
            TRICERATOPO,
    },
    {
        id: 7,
        nome: 'ESTEGOSSAURO',
        cientifico: 'Stegosaurus',
        alimentacao: 'Herbívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Jurássico',
        andar: 'Quadrúpede',
        tamanho: {
            comprimento: 'até 9 mts',
            altura: 'até 4 mts',
        },
        curiosidade: 'Possui placas nas costas e espinhos na cauda.',
        cobertura_corporal: ' escamas',
        predador: 'Não.',
        peso: 'de 5.3 a 7 toneladas',
        imagem:
            ESTEGOSSAURO,
    },
    {
        id: 9,
        nome: 'GALIMIMUS',
        cientifico: 'Gallimimus',
        alimentacao: 'Herbívoro',
        local: 'Ásia',
        regiao: [asia],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 6 mts',
            altura: 'até 3 mts',
        },
        curiosidade:
            'Se parece com avestruz, muito rápido ele corria até até 70km / h',
        cobertura_corporal: 'penas',
        predador: 'Não',
        peso: 'até 200 kg',
        imagem:
            GALIMIMUS,
    },
    {
        id: 12,
        nome: 'BRAQUIOSSAURO',
        cientifico: 'Brachiosaurus',
        alimentacao: 'Herbívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Jurássico',
        andar: 'Quadrúpede',
        tamanho: {
            comprimento: 'de 26 mts',
            altura: 'de 12 a 16 mts',
        },
        curiosidade:
            'Estima-se que ele necessitava comer cerca de 227 kg de alimento por dia.',
        cobertura_corporal: 'escamas',
        predador: 'Não',
        peso: 'até 50 toneladas',
        imagem:
            BRAQUIOSSAURO,
    },
    {
        id: 13,
        nome: 'APATOSSAURO',
        cientifico: 'Apatosaurus',
        alimentacao: 'Herbívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Jurássico',
        andar: 'Quadrúpede',
        tamanho: {
            comprimento: 'de 21 a 27 mts',
            altura: 'de 8 a 10 mts',
        },
        curiosidade: 'As patas traseiras eram menores do que as dianteiras.',
        cobertura_corporal: 'escamas',
        predador: 'Não',
        peso: 'de 35 a 40 toneladas',
        imagem:
            APATOSSAURO,
    },
    {
        id: 14,
        nome: 'DIPLODOCO',
        cientifico: 'Diplodocus',
        alimentacao: 'Herbívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Jurássico',
        andar: 'Quadrúpede',
        tamanho: {
            comprimento: 'de 27 a 32 mts',
            altura: 'de 4 a 9 mts',
        },
        curiosidade:
            'Sua cauda possivelmente era usada para defesa, funcionando como um chicote.',
        cobertura_corporal: 'escamas',
        predador: 'Não',
        peso: 'até 15 toneladas',
        imagem:
            DIPLODOCO,
    },
    {
        id: 15,
        nome: 'PARASSAUROLOFO',
        cientifico: 'Parasaurolophus',
        alimentacao: 'Herbívoro',
        local: 'América do Norte / Ásia',
        regiao: [americaNorte, asia],
        periodo: 'Cretáceo',
        andar: 'Quadrúpede / Bípede',
        tamanho: {
            comprimento: 'de 10 a 11 mts',
            altura: 'até 4.9 mts',
        },
        curiosidade:
            'Os cientistas acreditam que ele usava a crista como chifre.',
        cobertura_corporal: 'escamas',
        predador: 'Não',
        peso: 'de 2.7 a 3.6 toneladas',
        imagem:
            PARASSAUROLOFO,
    },
    {
        id: 1,
        nome: 'TIRANOSSAURO',
        cientifico: 'Tyrannosaurus rex',
        alimentacao: 'Carnívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 12 mts',
            altura: 'de 3,7 à 6,10 mts',
        },
        curiosidade:
            "O nome significa 'lagarto tirano rei'. A mordida dele é a mais forte de todos os carnívoros.",
        cobertura_corporal: 'escamas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'até 8 toneladas',
        imagem:
            TIRANOSSAURO,
    },
    {
        id: 2,
        nome: 'VELOCIRAPTOR',
        cientifico: 'Velociraptor',
        alimentacao: 'Carnívoro',
        local: 'Ásia',
        regiao: [asia],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 2 mts',
            altura: 'até 50 cm',
        },
        curiosidade: 'Caçava em bando e corria até 50km por hora.',
        cobertura_corporal: 'penas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'até 7 kg',
        imagem:
            VELOCIRAPTOR,
    },
    {
        id: 3,
        nome: 'PYRORAPTOR',
        cientifico: 'Pyroraptor',
        alimentacao: 'Carnívoro',
        local: 'Europa',
        regiao: [europa],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 2,2 mts',
            altura: 'até 52 cm',
        },
        curiosidade:
            "Caçava em bando, tinha uma 'garra terrível' e usava para escalar. O nome significa 'ladrão de fogo'",
        cobertura_corporal: 'penas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'até 7.5 kg',
        imagem:
            PYRORAPTOR,
    },
    {
        id: 16,
        nome: 'CARNOTAURO',
        cientifico: 'Carnotaurus',
        alimentacao: 'Carnívoro',
        local: 'América do Sul',
        regiao: [americaSul],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 8 mts',
            altura: 'até 3 mts',
        },
        curiosidade: 'Tem dois chifres e focinho curto',
        cobertura_corporal: 'escamas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'de 1,3 a 2,1 toneladas',
        imagem:
            CARNOTAURO,
    },
    {
        id: 4,
        nome: 'GIGANOTOSSAURO',
        cientifico: 'Giganotosaurus',
        alimentacao: 'Carnívoro',
        local: 'América do Sul',
        regiao: [americaSul],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'de 12 a 13 mts',
            altura: 'até 4 mts',
        },
        curiosidade:
            'Tinha a cabeça maior do que  a maioria dos humanos adultos, o que significa que ele seria capaz de comer um ser humano com apenas uma mordida.',
        cobertura_corporal: 'escamas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'de 4 a 14 toneladas',
        imagem:
            GIGANOTOSSAURO,
    },
    {
        id: 8,
        nome: 'GORGOSSAURO',
        cientifico: 'Gorgosaurus',
        alimentacao: 'Carnívoro',
        local: 'América do Norte',
        regiao: [americaNorte],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'de 8 a 9 mts',
            altura: 'até 2,7 mts',
        },
        curiosidade:
            'Era um predador solitário, porém em épocas de procriação poderiam viver em grupos familiares.',
        cobertura_corporal: 'penas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'de 2 a 3 toneladas',
        imagem:
            GORGOSSAURO,
    },
    {
        id: 10,
        nome: 'MONOLOFOSSAURO',
        cientifico: 'Monolophosaurus',
        alimentacao: 'Carnívoro',
        local: 'Ásia',
        regiao: [asia],
        periodo: 'Jurássico',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 5 mts',
            altura: 'até 3 mts',
        },
        curiosidade:
            'Acredita que sua crista na cabeça era usada como método para atrair fêmeas, nas épocas de acasalamento.',
        cobertura_corporal: 'escamas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'até 2,4 toneladas',
        imagem:
            MONOLOFOSSAURO,
    },
    {
        id: 11,
        nome: 'TARBOSSAURO',
        cientifico: 'Tarbosaurus bataar',
        alimentacao: 'Carnívoro',
        local: 'Ásia',
        regiao: [asia],
        periodo: 'Cretáceo',
        andar: 'Bípede',
        tamanho: {
            comprimento: 'até 10 mts',
            altura: 'até 3 mts ',
        },
        curiosidade:
            'Para o seu tamanho, o Tarbossauro tinha os menores braços entre os dinossauros carnívoros, eles nem sequer podiam alcançar sua boca.',
        cobertura_corporal: 'escamas',
        predador: 'Sim, caçava e se alimentava de outros animais.',
        peso: 'até 5 toneladas',
        imagem:
            TARBOSSAURO,
    },
];

const news = [
    {
        id: 1,
        title: 'Fóssil do dinossauro Ubirajara deixa a Alemanha e volta ao Brasil',
        subtitle: 'O artefato foi contrabandeado na década de 1990 e sua devolução vinha sendo discutida desde 2020',
        article: 'O fóssil do dinossauro Ubirajara jubatus retorna ao Brasil neste domingo (4), após uma polêmica negociação com a Alemanha. O artefato foi contrabandeado nos anos 1990 e sua repatriação estava sendo discutida desde 2020. O fóssil vai ser entregue ao Museu de Paleontologia Plácido Cidade Nuvens, no Ceará. A instituição fica na região do Araripe, onde o Ubirajara viveu há 110 milhões de anos. Esse é o primeiro fóssil de dinossauro com estrutura similar a penas já encontrado na América do Sul./Em maio, o Instituto Guimarães Rosa, órgão do Ministério das Relações Exteriores, informou que a volta do fóssil ao Brasil ocorreria nesta data. Ele encontrava-se no Museu de História Natural de Karlsruhe.',
        source: 'Revista Galileu',
        image: new1
    },
    {
        id: 2,
        title: 'Exposição que reúne fósseis de dinossauros no Museu Histórico de Lins termina neste sábado',
        subtitle: 'Exposição fica aberta ao público das 9h às 17h e expõe fragmentos de criaturas que viveram na região entre 65 e 145 milhões e anos atrás. Centro-oeste paulista é conhecido por grandes descobertas paleontológicas.',
        article: 'O Museu Histórico de Lins (SP) exibe, até este sábado (3), das 9h às 17h, uma exposição gratuita de fósseis de dinossauros encontrados no interior de São Paulo./Os fragmentos são de criaturas que viveram no período Cretáceo, entre 65 e 145 milhões e anos atrás. Alguns deles fazem parte dos achados localizados nas obras de duplicação da Rodovia Transbrasiliana (BR-153), em Mirassol (SP)./A exposição, que começou na quarta-feira (31), é realizada por uma concessionária de rodovias em parceria com a prefeitura em alusão ao Dia Mundial do Meio Ambiente, celebrado na próxima segunda-feira (5)./O centro-oeste paulista tem ganhado destaque como um dos principais potenciais fossilíferos da América do Sul. Ao todo, mais de dois mil fragmentos de ossos foram descobertos na região nos últimos 30 anos./ A maioria deles pertencia a um dinossauro específico, chamado de Titanossauro, uma espécie quadrúpede, de pescoço bastante alongado e que só se alimentava de vegetais./A maior descoberta na região ocorreu em Marília, em abril de 2009. Na ocasião, o paleontólogo William Nava encontrou ossos do mais completo titanossauro já localizado no Brasil. As escavações do achado repercutiram tanto que serviram de inspiração para a novela "Morde e Assopra", lançada em 2011 pela TV Globo. A produção conta a história de uma paleontóloga que viaja ao interior de São Paulo em busca dos animais primitivos./O Museu Histórico de Lins fica na Rua Dr. Aureliano Resende de Andrade, 100. Maiores informações sobre a exposição podem ser obtidas junto à Secretaria de Cultura de Lins, por meio do telefone (14) 3522-3032.',
        source: 'G1',
        image: new2
    },
    {
        id: 3,
        title: 'Fóssil de dinossauro encontrado por argentinos é um dos maiores da história',
        subtitle: 'Com 50 toneladas e 30 metros de comprimento, o Chucarosaurus é o maior dinossauro já descoberto na montanhosa província do Rio Negro',
        article: 'Paleontólogos argentinos descobriram os restos de uma nova espécie gigantesca de dinossauro herbívoro de pescoço longo na região da Patagônia, afirmando que o animal é um dos maiores já encontrados./A descoberta na Reserva Natural Pueblo Blanco, apresentada nesta quinta-feira, foi realizada por cientistas pela primeira vez em 2018. Os ossos do dinossauro eram tão grandes que fizeram com que a van que os levava a um laboratório de Buenos Aires tombasse, mas ninguém ficou ferido e os restos mortais ficaram intactos./O paleontólogo Nicolás Chimento disse que os cientistas decidiram batizar o dinossauro de “Chucarosaurus Diripienda”, que significa cozido e mexido, porque rolou e sobreviveu ao acidente./Com 50 toneladas e 30 metros de comprimento, o Chucarosaurus é o maior dinossauro já descoberto na montanhosa província do Rio Negro. O animal teria vivido no período Cretáceo Superior ao lado de predadores, peixes e tartarugas marinhas./O osso do fêmur do Chucarosaurus, que mede 1,90 metro, foi dividido em três partes, cada uma pesando mais de 100 quilos e exigindo pelo menos três pessoas para levantá-lo, disseram os cientistas./A Patagônia foi lar dos maiores dinossauros herbívoros do mundo, como o colossal Patagotitan mayorum, o maior dinossauro já descoberto, embora os cientistas ainda não saibam por que as espécies cresceram tão rápido e, em alguns casos, nunca pararam de crescer ao longo de suas vidas.',
        source: 'CNN Brasil',
        image: new3
    },
    {
        id: 4,
        title: 'Ovos de 80 milhões de anos, que podem ser de dinossauro, são achados em obra de rodovia em MG',
        subtitle: 'Eles se assemelham a ovos de galinha, com 6 cm de comprimento e cor rosa-avermelhada',
        article: 'Um ninho com cinco ovos fossilizados que têm aproximadamente 80 milhões de anos foi encontrado durante obras de duplicação de uma rodovia no município mineiro de Monte Alegre de Minas. São dois ovos inteiros e três fragmentados, semelhantes a ovos de galinha (embora mais alongados), com seis centímetros de comprimento e cor rosa-avermelhada, e podem ser de crocodiliformes (antepassados dos crocodilos e jacarés) - o que é considerado mais provável -, dinossauros carnívoros de pequeno porte ou mesmo de aves./Exames vão tentar identificar com precisão a partir de elementos como a porosidade. O ninho foi encontrado em outubro do ano passado pelo pesquisador em paleontologia Paulo Macedo, da empresa Geopac Consultoria Ambiental, enquanto monitorava obras na estrada, e só foi divulgado nesta segunda-feira, 22, quando passou a integrar o acervo do laboratório de paleontologia da Universidade do Estado de Minas Gerais (UEMG), em Ituiutaba./O ninho estava imerso em rochas sedimentares da formação Adamantina, com idade estimada em 80 milhões de anos, daí a idade suposta dos ovos. Segundo as primeiras análises, possivelmente eles foram depositados às margens de um rio que drenava a região naquela época, quando o ambiente era totalmente distinto do cerrado existente hoje./Os ovos apresentam bom estado de conservação, apesar de serem bastante delicados, com cascas de apenas 1 milímetro de espessura. As cascas têm manchas escuras. Como dois dos exemplares estão inteiros, será possível pesquisar se há embriões fossilizados em seus interiores. Essa tarefa ficará a cargo da UEMG, que passou a ser fiel depositária deles e vai realizar os exames./A descoberta ocorreu durante obra realizada pela concessionária Ecovias do Cerrado, responsável por administrar 437 quilômetros das rodovias BR-364 e BR-365, entre Jataí-GO e Uberlândia-MG. No entroncamento da BR-365 com a BR-153 a concessionária está construindo o chamado "Trevão" de Monte Alegre de Minas, e foi durante escavações para essa obra que a descoberta ocorreu.',
        source: 'Terra',
        image: new4
    }
];

const memes = [
    {
        id: 1,
        image: meme1
    },
    {
        id: 2,
        image: meme2
    },
    {
        id: 3,
        image: meme3
    },
    {
        id: 4,
        image: meme4
    },
]
export default {
    dinossauros, news, memes
};
