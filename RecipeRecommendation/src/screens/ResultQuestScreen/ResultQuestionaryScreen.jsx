/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */

import React, { useState, useEffect } from 'react';
import { Card, CardBody, Text, Box, CloseButton, useDisclosure } from '@chakra-ui/react';
import { PiPlantFill } from "react-icons/pi";
import { useNavigate } from 'react-router-dom';
import { MdOutlineError } from "react-icons/md";

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

const ResultRecipe = () => {
    const [doshaType, setDoshaType] = useState('');
    const [recipes, setRecipes] = useState([]);
    const location = useLocation();
    const user = location.state;

    const { isOpen, onClose, onOpen } = useDisclosure({ defaultIsOpen: false });

    useEffect(() => {
        fetchDoshaType();
        console.log(user)
    }, []);

    const fetchDoshaType = async () => {
        try {
            const response = await axios.put('http://44.192.102.82/users/' + user + '/calculate-dosha', {}, {
                headers: {
                    'X-API-Key': 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB'
                }
            });
            if (response.status === 200) { // 检查响应状态码是否为200
                const data = response.data; // 直接从响应中获取数据
                console.log('Dosha Type:', data); // 调试信息
               
                JSON.stringify(response)
                console.log('___________________________')
                setDoshaType(data.dosha_type);
                fetchRecipes(data.dosha_type);
            } else {
                throw new Error('Failed to fetch dosha type');
            }
        } catch (error) {
            console.error('Error fetching dosha type:', error); // 调试信息
            onOpen();
        }
    };

    const fetchRecipes = async (doshaType) => {
        try {
            const response = await axios.get(`http://44.192.102.82/recipes?doshaType=${doshaType}`, {
                headers: {
                    'X-API-Key': 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB'
                }
            });
            if (response.status === 200) {
                const data = response.data;
                console.log('Recipes:', data); // 调试信息
                setRecipes(data); // 直接从响应数据中获取食谱数组
            } else {
                throw new Error('Failed to fetch recipes');
            }
        } catch (error) {
            console.error('Error fetching recipes:', error); // 调试信息
            onOpen();
        }
    };

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
            <Box overflowY="auto">
                <Card {...cardTheme.card}>
                    <CardBody {...cardTheme.cardBody}>
                        <Box textAlign="center">
                            <Text fontSize="2xl" fontWeight="bold">Your Dosha Type</Text>
                            <Text fontSize="4xl" fontWeight="extrabold" mt={4}>{doshaType || 'Loading...'}</Text>
                        </Box>
                    </CardBody>
                </Card>
                <Text fontSize="2xl" fontWeight="bold">Recommended Recipes</Text>
                {recipes.map((recipe, index) => (
                    <Card key={index} {...cardTheme.card} mt={6}>
                        <CardBody {...cardTheme.cardBody}>
                            <Box textAlign="center">
                               {console.log(recipes)}
                                {recipes.length > 0 ? (
                                    <Box mt={4}>
                                        <Box p={4} borderWidth={1} borderRadius="lg" overflow="hidden" mt={2}>
                                            <Text fontSize="xl" fontWeight="bold">{recipe.name}</Text>
                                            <Text fontSize="md">Category: {recipe.recipe_category}</Text>
                                            <Text fontSize="md">Calories: {recipe.calories}</Text>
                                            <Text fontSize="md">Rating: {recipe.recipe_rating
                                            }</Text>
                                            <Text fontSize="md">Prep Time: {recipe.preptime_min}</Text>
                                            <Text fontSize="md">Total Time: {recipe.totaltime_min}</Text>
                                        </Box>
                                    </Box>
                                ) : null}
                            </Box>
                        </CardBody>
                    </Card>
                ))}
            </Box>
            {isOpen && (
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
            )}
        </div>
    );
};

export default ResultRecipe;