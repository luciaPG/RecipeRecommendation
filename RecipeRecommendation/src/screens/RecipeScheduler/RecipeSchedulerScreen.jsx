/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */

import { useState, useEffect } from 'react';
import { Card, CardBody, Box, Text } from '@chakra-ui/react';

import { IoMdArrowRoundBack } from "react-icons/io";
import cardTheme from '../Styling/CardStyling.jsx';
import { useLocation, useNavigate } from 'react-router-dom';
import './RecipeScheduler.css';
import axios from 'axios';
const apiKey = 'GkhP0QwCUZjNSCT2qq4pAQSqodp6iVGB';

const RecipeSchedulerScreen = () => {
    const [recipes, setRecipes] = useState()
    const location = useLocation()
    const navigate = useNavigate()
    const doshatype = location.state.doshaType




    useEffect(() => {
        fetchRecipes(doshatype);
        console.log(recipes);
    }, []);

    
    function choose7healthiestRecipes() {
        let healthiestRecipes = [];
        const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

        if (!recipes) return healthiestRecipes;
        const filteredAndSortedRecipes = recipes
            .sort((a, b) => a.score - b.score)
        healthiestRecipes = filteredAndSortedRecipes.slice(0, 7);

        return (
            <div className='Home'>
                <Box display="flex" flexWrap="wrap" justifyContent="flex-end" flexDirection='row-reversed' gap="4" overflowY='auto'>

                    <Box style={{ width: '100%' }}>
                        <Box mt={4} className="iconContainer" onClick={() => navigate(-1)}>
                            <IoMdArrowRoundBack className='icon' />
                            <Text className='iconText'>Back</Text>
                        </Box>



                        <Text fontSize="xxx-large" textAlign={'center'} className='title' color={'white'} fontWeight="bold">
                                <span className='bordered-title'>Weekly Food Planning</span>
                            </Text>


                    </Box>
                    <Box display='flex' flexDirection={'row'} justifyContent={'center'} flexWrap={'wrap'}>
                        {daysWeek.map((day, index) => (
                            <Card key={index} {...cardTheme.miniCard}>
                                <CardBody {...cardTheme.cardBody}>
                                    <Text className='dayWeek'>{day}</Text>
                                    {healthiestRecipes.length > index && (
                                        <Box className='recipeDiv'>

                                            <Text fontSize="md" fontWeight="bold" className='recipeScheduled' onClick={() => navigate('/recipe', { state: { recipe: healthiestRecipes[index] } })}>
                                                {healthiestRecipes[index].recipe_name}
                                            </Text>
                                            <img src={healthiestRecipes[index].image_url && healthiestRecipes[index].image_url.trim() !== "" ? healthiestRecipes[index].image_url : "/src/assets/noImage.jpg"} alt="Recipe" className="recipeImage" />
                                        </Box>
                                    )}


                                </CardBody>
                            </Card>
                        ))}
                    </Box>

                </Box>
            </div>
        )
    }


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

        }
    };



    return (
        <div className="Home">

            <div>{choose7healthiestRecipes()}</div>

        </div>
    );
};

export default RecipeSchedulerScreen;
