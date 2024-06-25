/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */

import { useState, useEffect } from 'react';
import { Card, CardBody, Text, Box, CloseButton, Button, useDisclosure } from '@chakra-ui/react';
import { PiPlantFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { MdOutlineError } from "react-icons/md";
import { Image } from "@chakra-ui/react";
import { Spinner } from '@chakra-ui/react'
import { useLocation } from 'react-router-dom';
import {
    Alert,
    AlertTitle,
    AlertDescription,
} from '@chakra-ui/react';
import cardTheme from '../Styling/CardStyling.jsx';
import AlertStyling from '../Styling/AlertStyling.jsx';
import './ResultQuestionary.css';
import axios from 'axios';
const apiKey = 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB';

const ResultRecipe = () => {
    const [doshaType, setDoshaType] = useState('');
    const [recipes, setRecipes] = useState([]);
    const navigate = useNavigate()
    const [similarRecipes, setSimilarRecipes] = useState({});
    const [showSimilarRecipes, setShowSimilarRecipes] = useState({});
    const location = useLocation();
    const user = location.state;

    const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

    useEffect(() => {
        fetchDoshaType();
        console.log(user);
    }, []);

    const fetchDoshaType = async () => {
        try {
            const response = await axios.put('http://44.192.102.82/users/' + user + '/calculate-dosha', {}, {
                headers: {
                    'X-API-Key': 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB'
                }
            });
            if (response.status === 200) { 
                const data = response.data; 
                console.log('Dosha Type:', data); 
                setDoshaType(data.dosha_type);
                fetchRecipes(data.dosha_type);
            } else {
                throw new Error('Failed to fetch dosha type');
            }
        } catch (error) {
            console.error('Error fetching dosha type:', error); 
            onOpen();
        }
    };

    const fetchRecipes = async (doshaType) => {
        try {
            const dosha_Type = doshaType.charAt(0).toLowerCase() + doshaType.slice(1);
            const response = await axios.get(`http://44.192.102.82/recipes/${dosha_Type}`, {
                headers: {
                    'X-API-Key': apiKey
                }
            });
            if (response.status === 200) {
                const data = response.data;
                console.log('Recipes:', data); 
                setRecipes(data); 
            } else {
                throw new Error('Failed to fetch recipes');
            }
        } catch (error) {
            console.log(doshaType)
            console.error('Error fetching recipes:', error); 
            onOpen();
        }
    };

    const toggleSimilarRecipes = (recipeId) => {
        setShowSimilarRecipes(prevState => ({
            ...prevState,
            [recipeId]: !prevState[recipeId]
        }));
        if (!showSimilarRecipes[recipeId]) {
            fetchSimilarRecipes(recipeId);
        }
    };

    const fetchSimilarRecipes = async (recipeId) => {
        try {
            const response = await axios.get(`http://44.192.102.82/recipes/knn/${recipeId}`, {
                headers: {
                    'X-API-Key': apiKey
                }
            });
            if (response.status === 200) {
                const data = response.data;
                console.log('Similar Recipes:', data); 
                setSimilarRecipes(prevState => ({
                    ...prevState,
                    [recipeId]: data
                })); 
            } else {
                throw new Error('Failed to fetch similar recipes');
            }
        } catch (error) {
            console.error('Error fetching similar recipes:', error); 
            onOpen();
        }
    };

    function convertMinutesToHours(minutes) {
        if (minutes < 60) {
            return `${minutes}min`;
        } else {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return `${hours}h  ${remainingMinutes}min`;
        }
    }

    async function goSimilarRecipe(recipeId) {

        try {
            const response = await axios.get(`http://44.192.102.82/recipes/${recipeId}`, {
                headers: {
                    'X-API-Key': apiKey
                }
            });
            if (response.status === 200) {
                const recipe = response.data;

                console.log(recipe + 'heeellloooo')
                navigate('/recipe', { state: { recipe } })
            } else {
                throw new Error('Failed to fetch recipe');
            }
        } catch (error) {
            console.log(doshaType)
            console.error('Error fetching recipes:', error); 
            onOpen();
        }

    }
    return (
        <div className="Home">

            <Box overflowY="auto" >
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
                        <Box className='doshaDiv' textAlign="center">
                            <Text fontSize="50" marginTop={'-1rem'} fontWeight="bold">YOUR DOSHA TYPE</Text>
                            {doshaType ? (
                                <Image
                                    boxSize="10rem"
                                    objectFit="fill"
                                    src={`/src/assets/${doshaType}.jpg`}
                                />
                            ) : (
                                <Spinner />
                            )}

                            <Button onClick={() => navigate('/recipeScheduler', {state:{doshaType}})} style={{ marginTop: '1.5rem' }}>See Your Weekly Planning</Button>
                    </Box>
                </CardBody>
            </Card>
            <Text fontSize="xxx-large" textAlign={'center'} className='title' fontWeight="bold">
                <span className='bordered-title'>Recommended Recipes</span>
            </Text>
            {recipes.map((recipe, index) => (
                <Card key={index} {...cardTheme.card} mt={6}>
                    <CardBody {...cardTheme.cardBody}>
                        <Box textAlign="center">
                            {console.log(recipes)}
                            {recipes.length > 0 ? (
                                <Box mt={4}>
                                    <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mt={2}>
                                        <div className='information'>
                                            <div className='mainInfo'>
                                                <Text
                                                    className='name'
                                                    onClick={() => navigate('/recipe', {
                                                        state: { recipe }
                                                    })}
                                                    cursor="pointer"
                                                >
                                                    {recipe.recipe_name}
                                                </Text>
                                                <div className='infoPhoto'>

                                                    <img src={recipe.image_url && recipe.image_url.trim() !== "" ? recipe.image_url : "/src/assets/noImage.jpg"} alt="Recipe" className="recipe-image card-image" />
                                                    <div className='extraInfo'>


                                                        <div className='flexContainer'>
                                                            <Text className='boldName'>Category:</Text>
                                                            <Text fontSize="md">{recipe.recipe_category}</Text>
                                                        </div>
                                                        <div className='flexContainer'>
                                                            <Text className='boldName'>Calories:</Text>
                                                            <Text fontSize="md">{recipe.calories}</Text>
                                                        </div>
                                                        <div className='flexContainer'>
                                                            <Text className='boldName'>Protein Content:</Text>
                                                            <Text fontSize="md">{recipe.protein_content}</Text>
                                                        </div>
                                                        <div className='flexContainer'>
                                                            <Text className='boldName'>Fiber Content:</Text>
                                                            <Text fontSize="md">{recipe.fiber_content}</Text>
                                                        </div>
                                                        <div className='flexContainer'>
                                                            <Text className='boldName'>Fat Content:</Text>
                                                            <Text fontSize="md">{recipe.fat_content}</Text>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                            <Text className='cookTime' fontSize="md">{convertMinutesToHours(recipe.cooktime_min)}</Text>
                                        </div>
                                        <Button mt={2} onClick={() => toggleSimilarRecipes(recipe.recipe_id)}>
                                            {showSimilarRecipes[recipe.recipe_id] ? 'Hide' : 'See More'}
                                        </Button>
                                        {showSimilarRecipes[recipe.recipe_id] && similarRecipes[recipe.recipe_id] && (
                                            <Box mt={4}>
                                                <Text fontSize="xx-large" color={'rgb(61, 102, 37)'} marginTop={'3rem'} fontWeight="bolder">Similar Recipes:</Text>
                                                {similarRecipes[recipe.recipe_id].map((similarRecipe, idx) => (
                                                    <Box key={idx} p={2} borderWidth={1} borderRadius="md" mt={2} className="boxHover">
                                                        <Text fontSize="md" fontWeight={'bold'} onClick={() => goSimilarRecipe(similarRecipe.recipe_id)}>{similarRecipe.recipe_name}</Text>
                                                    </Box>
                                                ))}
                                            </Box>
                                        )}

                                    </Box>
                                </Box>
                            ) : null}
                        </Box>
                    </CardBody>
                </Card>
            ))}
        </Box>
            {
        isOpen && (
            <Alert {...AlertStyling.alert} status='error'>
                <MdOutlineError {...AlertStyling.icon} />
                <Box {...AlertStyling.box}>
                    <AlertTitle {...AlertStyling.title}>ERROR</AlertTitle>
                    <AlertDescription {...AlertStyling.description}>
                        Failed to fetch Dosha type or recipes. Please try again later.
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
        )
    }
        </div>
    );
};

export default ResultRecipe;
