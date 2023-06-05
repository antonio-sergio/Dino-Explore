import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import TIRANOSSAURO from '../assets/questions/tiranossauro.jpg';
import VELOCIRAPTOR from '../assets/questions/Velociraptor_fruita_2.jpg';
import GALIMIMUS from '../assets/questions/gallimimus.jpg';
import GIGANOTOSSAURO from '../assets/questions/giganotosaurus.jpg';
import CARNOTAURO from '../assets/questions/carnotauro.jpg';
import BRAQUIOSSAURO from '../assets/questions/brachiossaur.jpg';
import TRICERATOPO from '../assets/questions/triceratops.jpg';
import THERIZINOSSAURO from '../assets/questions/therizinossauro.jpg';
import PARASSAUROLOFO from '../assets/questions/parassaurolofo.jpg';
import ESTEGOSSAURO from '../assets/questions/stegosaurus.jpg';

const Quiz = () => {
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [pontuacao, setPontuacao] = useState(0);
    const [opcaoSelecionada, setOpcaoSelecionada] = useState(null);
    const [respostaSubmetida, setRespostaSubmetida] = useState(false);
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const perguntas = [
        {
            pergunta: 'Qual dinossauro possui as garras das mãos bem grandes?',
            opcoes: ['THERIZINOSSAURO', 'VELOCIRAPTOR', 'PYRORAPTOR', 'GIGANOTOSSAURO'],
            respostaCorreta: 'THERIZINOSSAURO',
            imagem: THERIZINOSSAURO,
        },
        {
            pergunta: 'Qual dinossauro usava a crista como chifre?',
            opcoes: ['PARASSAUROLOFO', 'ESTEGOSSAURO', 'TRICERÁTOPO', 'DILOFOSSAURO'],
            respostaCorreta: 'PARASSAUROLOFO',
            imagem: PARASSAUROLOFO,
        },
        {
            pergunta: 'Qual dinossauro tinha placas ósseas ao longo de suas costas?',
            opcoes: ['ANQUILOSSAURO', 'ESTEGOSSAURO', 'CARNOTAURUS', 'SPINOSSAURO'],
            respostaCorreta: 'ESTEGOSSAURO',
            imagem: ESTEGOSSAURO,
        },
        {
            pergunta: 'Qual dinossauro se parece com avestruz?',
            opcoes: ['GALIMIMUS', 'DILOFOSSAURO', 'TRICERÁTOPO', 'CERATOSSAURO'],
            respostaCorreta: 'GALIMIMUS',
            imagem: GALIMIMUS,
        },
        {
            pergunta: 'Qual dinossauro era um dos maiores carnívoros terrestres de todos os tempos?',
            opcoes: ['TIRANOSSAURO', 'CARNOTAURUS', 'GIGANOTOSSAURO', 'SPINOSSAURO'],
            respostaCorreta: 'GIGANOTOSSAURO',
            imagem: GIGANOTOSSAURO,
        },
        {
            pergunta: 'Qual dinossauro tem dois chifres e o focinho curto?',
            opcoes: ['DILOFOSSAURO', 'TRICERÁTOPO', 'CARNOTAURO', 'CERATOSSAURO'],
            respostaCorreta: 'CARNOTAURO',
            imagem: CARNOTAURO,
        },
        {
            pergunta: 'Qual dinossauro tinha um pescoço extremamente longo?',
            opcoes: ['BRAQUIOSSAURO', 'VELOCIRAPTOR', 'TRICERÁTOPO', 'SPINOSSAURO'],
            respostaCorreta: 'BRAQUIOSSAURO',
            imagem: BRAQUIOSSAURO,
        },
        {
            pergunta: 'Qual dinossauro caçava em bando e corria até 50km por hora?',
            opcoes: ['TIRANOSSAURO', 'VELOCIRAPTOR', 'PYRORAPTOR', 'GIGANOTOSSAURO'],
            respostaCorreta: 'VELOCIRAPTOR',
            imagem: VELOCIRAPTOR,
        },
        {
            pergunta: 'Qual dinossauro tinha a mordida mais forte entre os carnívoros?',
            opcoes: ['GIGANOTOSSAURO', 'TIRANOSSAURO', 'CARNOTAURUS', 'VELOCIRAPTOR'],
            respostaCorreta: 'TIRANOSSAURO',
            imagem: TIRANOSSAURO,
        },
        {
            pergunta: 'Qual dinossauro possui chifres grande para se defender?',
            opcoes: ['VELOCIRAPTOR', 'TIRANOSSAURO', 'TRICERÁTOPO', 'DILOFOSSAURO'],
            respostaCorreta: 'TRICERÁTOPO',
            imagem: TRICERATOPO,
        },
    ];

    const reiniciarQuiz = () => {
        setPerguntaAtual(0);
        setPontuacao(0);
        setOpcaoSelecionada(null);
        setRespostaSubmetida(false);
        setMostrarResultado(false);
    };

    const responder = (opcao) => {
        if (opcao === perguntas[perguntaAtual].respostaCorreta) {
            setPontuacao(pontuacao + 1);
        }
        setOpcaoSelecionada(opcao);
        setRespostaSubmetida(true);
    };

    const proximaPergunta = () => {
        if (perguntaAtual === perguntas.length - 1) {
            setMostrarResultado(true);
        } else {
            setPerguntaAtual(perguntaAtual + 1);
            setOpcaoSelecionada(null);
            setRespostaSubmetida(false);
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.container}>
                {mostrarResultado ? (
                    <View style={styles.resultadoContainer}>
                        <Text style={styles.resultadoText}>Pontuação Final: {pontuacao}</Text>
                        <TouchableOpacity onPress={reiniciarQuiz}>
                            <Text style={styles.verificarButtonText}>Tentar Novamente</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View>
                        <View style={styles.containerQuestion}>
                            <Text style={styles.numberQuestion}>Pergunta {perguntaAtual + 1}</Text>
                            <Text style={styles.question}>{perguntas[perguntaAtual].pergunta}</Text>
                        </View>
                        <View style={styles.imageContainer}>
                            <Image style={styles.img} source={perguntas[perguntaAtual].imagem} resizeMode="contain" />
                        </View>
                        <View style={styles.containerOptions}>
                            {perguntas[perguntaAtual].opcoes.map((opcao) => (
                                <View key={opcao} style={styles.option}>
                                    <TouchableOpacity
                                        onPress={() => responder(opcao)}
                                        style={[
                                            styles.optionButton,
                                            respostaSubmetida &&
                                            (opcao === perguntas[perguntaAtual].respostaCorreta
                                                ? styles.optionButtonCorreta
                                                : opcaoSelecionada === opcao
                                                    ? styles.optionButtonErrada
                                                    : null),
                                        ]}
                                        disabled={respostaSubmetida}
                                    >
                                        <Text style={styles.optionText}>{opcao}</Text>
                                    </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                        {respostaSubmetida && perguntaAtual !== perguntas.length - 1 && (
                            <TouchableOpacity style={styles.nextButton} onPress={proximaPergunta}>
                                <Text style={styles.nextButtonText}>Próxima Pergunta</Text>
                            </TouchableOpacity>
                        )}
                        {respostaSubmetida && perguntaAtual === perguntas.length - 1 && (
                            <TouchableOpacity onPress={() => setMostrarResultado(true)}>
                                <Text style={styles.verificarButtonText}>Verificar Resultado</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                )}
            </ScrollView>
        </SafeAreaView>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: Constants.statusBarHeight,
        backgroundColor: '#ecf0f1',
    },
    containerQuestion: {
        height: 100,
    },
    imageContainer: {
        width: width * 0.5,
        height: width,
        aspectRatio: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        height: 300
    },
    img: {
        flex: 1,
        width: width,
        height: width * 0.5,
        alignSelf: 'center',
    },
    numberQuestion: {
        height: 30,
        fontWeight: 'bold',
        fontSize: 16,
        marginHorizontal: 8,
        backgroundColor: '#84DE8F',
        borderRadius: 10,
        paddingHorizontal: 5,
        verticalAlign: 'middle',
    },
    question: {
        height: 60,
        marginHorizontal: 8,
        fontSize: 20,
    },
    containerOptions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        height: 150,
        alignContent: 'center',
    },
    option: {
        width: '50%',
        height: 30,
        aspectRatio: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    optionText: {
        width: 150,
        textAlign: 'center',
        borderRadius: 10,
        padding: 5,
        color: 'white'
    },
    optionButton: {
        width: 150,
        textAlign: 'center',
        borderRadius: 10,
        padding: 5,
        backgroundColor: '#E61E8F',
    },
    optionButtonCorreta: {
        backgroundColor: '#3CCF6F',
    },
    optionButtonErrada: {
        backgroundColor: '#CC5A08',
    },
    nextButton: {
        backgroundColor: '#2B9CFF',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        alignSelf: 'center',
        marginVertical: 20,
    },
    nextButtonText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
    },
    verificarButtonText: {
        backgroundColor: '#2B9CFF',
        width: 150,
        alignSelf: 'center',
        marginTop: 10,
        padding: 10,
        borderRadius: 10,
        color: 'white'
    },
    resultadoText: {
        width: width * 0.9,
        alignSelf: 'center',
        borderRadius: 10,
        padding: 5,
        color: '#E61E8F',
        fontSize: 20
    }
});

export default Quiz;