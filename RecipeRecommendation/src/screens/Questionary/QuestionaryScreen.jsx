/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './QuestionaryScreen.css';
import questionary from '/src/assets/questionary.json'
import  { useState, useEffect } from 'react';
import { Card, CardBody, Text, Box, CloseButton, Button, useDisclosure } from '@chakra-ui/react';
import { PiPlantFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { MdOutlineError } from "react-icons/md";
import Video from '/src/assets/mainScreenVideo.mp4'
import ProgressBar from 'react-bootstrap/ProgressBar'
import { Spinner } from '@chakra-ui/react'
import {
    Alert,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react'
import cardTheme from '../Styling/CardStyling.jsx'
import AlertStyling from '../Styling/AlertStyling.jsx';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
const apiKey = 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB';


const QuestionaryScreen = () => {
    const [answers, setAnswers] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();
    const [percentageP, setPercentageP] = useState(1);
    const location = useLocation();
    const [isLoading, setIsLoading] = useState(false);
    const user = location.state;
    JSON.stringify(location.state) // returns the user 

    const {
        isOpen,
        onClose,
        onOpen,
    } = useDisclosure({ defaultIsOpen: false })

    useEffect(() => {
        setProgressBar(currentQuestion);
    }, [currentQuestion]);

    const handleOptionChange = (option, questionIndex) => {
        let newAnswers = [...answers];
        newAnswers[questionIndex] = option.answer_id;
        setAnswers(newAnswers);
    };

    const handlePreviousQuestion = () => {
        if (currentQuestion <= 1) {
            navigate('/')

        }
        else if (currentQuestion !== 15) {
            onClose()

        }
        setCurrentQuestion(prevQuestion => Math.max(prevQuestion - 1, 0));


    };

    const handleNextQuestion = () => {
        setCurrentQuestion(prevQuestion => Math.min(prevQuestion + 1, questionary.questions.length - 1));
        console.log(user + 'yaaaaa')
    };

    function finishFunction() {
        setIsLoading(true);
        const transformedAnswers = answers.map((answer, index) => {
            return {
                questionId: index + 1,
                answerId: answer
            };
        });

        const jsonAnswers = JSON.stringify(transformedAnswers);
        postData(jsonAnswers)




        if (Object.keys(answers).length !== 15) {
            onOpen()
            console.log('alert')
        }


    }
    const postData = async (answers) => {
        try {
            const response = await axios({
                method: 'post',
                url: 'http://44.192.102.82/users/' + user + '/save-answers',
                headers: {
                    'Content-Type': 'application/json',
                    'X-API-Key': apiKey
                },
                data: answers
            });
            console.log(response)
            navigate('/result', { state: user })

        } catch (error) {
            console.error(error);
        }
    };


    function setProgressBar(currentQuestion) {

        const percentage = currentQuestion * 100 / 15
        const integerPercentage = Math.floor(percentage);

        setPercentageP(integerPercentage)

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
            <div className="videoBg">
                <video src={Video} autoPlay loop muted max-width="100%" height="auto"></video>
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

                    <div className='progressDiv'>
                        <Text className='percentage'>{percentageP}%</Text>
                        <ProgressBar
                            now={percentageP}
                            striped variant="success"
                            className='progress-bar'
                            style={{
                                width: `${percentageP * 0.9}%`
                            }}
                        />


                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', marginTop: '2rem', marginLeft: '2rem' }}>
                        <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={() => handlePreviousQuestion()}>
                            Return
                        </Button>
                        {currentQuestion < questionary.questions.length - 1 ? (
                            <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={handleNextQuestion}>
                                Continue
                            </Button>
                        ) : (
                            <Button {...cardTheme.btn} colorScheme='teal' size='md' mt={4} onClick={finishFunction} disabled={isLoading}>
                                {isLoading ? <Spinner style={{width:'1rem',height:'1rem'}} /> : 'Finish'}
                            </Button>
                        )}
                    </div>

                </CardBody>
            </Card>

            {isOpen ? (
                <Alert {...AlertStyling.alert} status='success'>
                    <MdOutlineError {...AlertStyling.icon} />
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
