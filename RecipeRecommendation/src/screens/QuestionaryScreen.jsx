/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './QuestionaryScreen.css';
import questionary from '/src/assets/questionary.json'
import React, { useState } from 'react';
import { Card, CardBody, Text, FormControl, FormLabel, RadioGroup, Stack, Radio, Button } from '@chakra-ui/react';
import { PiPlantFill } from "react-icons/pi";
import cardTheme from './CardStyling.jsx'

const QuestionaryScreen = () => {
    const [answers, setAnswers] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState(0);
    

    const handleOptionChange = (option, questionIndex) => {
        setAnswers(prevAnswers => ({
            ...prevAnswers,
            [questionIndex]: option
        }));
    };

    const handlePreviousQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.max(prevQuestion - 1, 0));
    };

    const handleNextQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.min(prevQuestion + 1, questionary.questions.length - 1));
    };

    function finishFunction(){
        console.log(answers)
        if( Object.keys(answers).length!==15){
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
                    {questionary.questions[currentQuestion].options.map((option, index) => (
                        <Button
                            key={index}
                            padding={'1px'}
                            border={answers[currentQuestion] === option ? '0px' : 'none'}
                            bg={answers[currentQuestion] === option ? 'lightgray' : 'white'}
                            _hover={{ bg: answers[currentQuestion] === option ? 'lightgray' : 'white', border: 'none' }}
                            _focus={{ outline: 'none' }}
                            onClick={() => handleOptionChange(option, currentQuestion)}
                        >
                            <Text style={{ color: 'black' }}>{option}</Text>
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
                            <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={()=>finishFunction()}>
                                Finish
                            </Button>
                        )}
                    </div>

                </CardBody>
            </Card>

        </div>
    );
};

export default QuestionaryScreen;
