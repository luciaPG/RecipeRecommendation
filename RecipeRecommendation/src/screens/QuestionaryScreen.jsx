/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './QuestionaryScreen.css';
import questionary from '/src/assets/questionary.json'
import React, { useState } from 'react';
import { Card, CardBody, Text, FormControl, Box, CloseButton, FormLabel, RadioGroup, Stack, Radio, Button, useDisclosure } from '@chakra-ui/react';
import { PiPlantFill } from "react-icons/pi";
import { MdOutlineError } from "react-icons/md";
import {
    Alert,
    AlertIcon,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import cardTheme from './CardStyling.jsx'
import AlertStyling from './AlertStyling';

const QuestionaryScreen = () => {
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const {
        isOpen,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })


    const handleOptionChange = (option, questionIndex) => {
        let newAnswers = [...answers];
        newAnswers[questionIndex] = option.answer_id;
        setAnswers(newAnswers);
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.max(prevQuestion - 1, 0));
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.min(prevQuestion + 1, questionary.questions.length - 1));
    };

    function finishFunction() {
        console.log(answers)
        if (Object.keys(answers).length !== 15) {
            onOpen()
            console.log('alert')
        }
    }
    return (
        <div className="Home">
            <div className='topBar'>
                <div className='barContent'>
                    <PiPlantFill className='icon' />
                    <div className='textDiv'>
                        <h1 className='brandName'>AYURVEDA BASED</h1>
                        <h1 className='brandName'>RECIPE RECOMMENDATION</h1>
                    </div>
                </div>
            </div>
            <Card {...cardTheme.card}>
                <CardBody {...cardTheme.cardBody}>
                    <Text className='question'>{questionary.questions[currentQuestion].question}</Text>
                    {questionary.questions[currentQuestion].options.map((option) => (
                        <Button
                            key={option.answer_id}
                            padding={'1px'}
                            border={answers[currentQuestion] === option.answer_id ? '0px' : 'none'}
                            bg={answers[currentQuestion] === option.answer_id ? 'lightgray' : 'white'}
                            _hover={{ bg: answers[currentQuestion] === option.answer_id ? 'lightgray' : 'white', border: 'none' }}
                            _focus={{ outline: 'none' }}
                            onClick={() => handleOptionChange(option, currentQuestion)}
                        >
                            <Text style={{ color: 'black' }}>{option.option}</Text>
                        </Button>
                    ))}
                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2rem', marginLeft: '2rem' }}>
                        <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={() => handlePreviousQuestion()}>
                            Return
                        </Button>
                        {currentQuestion < questionary.questions.length - 1 ? (
                            <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={handleNextQuestion}>
                                Continue
                            </Button>
                        ) : (
                            <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={() => finishFunction()}>
                                Finish
                            </Button>
                        )}
                    </div>

                </CardBody>
            </Card>

            {isOpen ? (
                <Alert {...AlertStyling.alert} status='success'>
                    <MdOutlineError {...AlertStyling.icon}/>
                    <Box {...AlertStyling.box}>
                        <AlertTitle {...AlertStyling.title}>ERROR</AlertTitle>
                        <AlertDescription {...AlertStyling.description}>
                           All the questions need to be answered in order to obtain an answer
                        </AlertDescription>
                    </Box>
                    <CloseButton
                        {...AlertStyling.closeButton}
                        alignSelf='flex-start'
                        position='relative'
                        right={-1}
                        top={-1}
                        onClick={onClose}
                        _active={{ bg: 'black' }}
                        _hover={{ border: 'none' }}
                        

                    />
                </Alert>
            ) : null}

        </div>
    );
};

export default QuestionaryScreen;
