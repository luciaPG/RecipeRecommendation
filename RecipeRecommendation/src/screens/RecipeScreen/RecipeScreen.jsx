/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import { Card, CardBody, Text, Box, } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { IoMdArrowRoundBack } from "react-icons/io";
import Rating from '@mui/material/Rating';
import { useLocation } from 'react-router-dom';
import cardTheme from '../Styling/CardStyling.jsx';
import './RecipeScreen.css';


const ResultRecipe = () => {

    const location = useLocation();
    const recipe = location.state.recipe;

    const navigate = useNavigate()

    function convertMinutesToHours(minutes) {
        if (minutes < 60) {
            return `${minutes}min`;
        } else {
            const hours = Math.floor(minutes / 60);
            const remainingMinutes = minutes % 60;
            return `${hours}h  ${remainingMinutes}min`;
        }
    }
    function capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function parseIngredients(recipe) {
        const ingredientsArray = recipe.recipe_ingredient[0].split(',');
        const cleanedIngredients = ingredientsArray.map(ingredient =>
            capitalizeFirstLetter(ingredient.replace(/''|['\[\]]/g, '').trim())
        );
        console.log(cleanedIngredients);
        return (
            <>
                <Text className='subtitle'>Ingredients</Text>
                <ul style={{ textAlign: 'left', marginLeft: '2rem' }}>
                    {cleanedIngredients.map((ingredient, index) => (
                        <li key={index}>{ingredient}</li>
                    ))}
                </ul>
            </>
        );
    }

    function parseIntructions(recipe) {
        const instructionsArray = recipe.recipe_instructions[0].split(',');
        const cleanedInstructions = instructionsArray.map(instruction =>
            instruction.replace(/''|['\[\]]/g, '').trim()
        );

        console.log(cleanedInstructions);
        return (
            <div style={{ display: 'flex', alignContent: 'center', flexDirection: 'column' }}>
                <Text className='subtitle' >Instructions</Text>
                <Text className='mainText'>{cleanedInstructions}</Text>

            </div>
        );
    }
    return (
        <div className="Home">
            <Box overflowY="auto">

                <Card  {...cardTheme.card} mt={6}>
                    <CardBody {...cardTheme.cardBody}>
                        <Box textAlign="center">
                            <Box mt={4}>
                                <Box mt={4} className="icon-container" onClick={() => navigate(-1)}>
                                    <IoMdArrowRoundBack className='icon' />
                                    <Text className='iconText'>Back</Text>
                                </Box>
                                <Text className='title'>{recipe.recipe_name}</Text>
                                <Text className='authorName'>By {recipe.author_name}</Text>
                                <Text className='details'>
                                    Cooking Time: <span style={{ fontWeight: 'normal' }}>{convertMinutesToHours(recipe.cooktime_min)}</span>
                                </Text>
                                <Text className='details'>Preparation Time: <span style={{ fontWeight: 'normal' }}>{convertMinutesToHours(recipe.preptime_min) }</span></Text>
                                <Text className='details'>Servings: <span style={{ fontWeight: 'normal' }}>{recipe.recipe_servings + ' servings'}</span></Text>
                                <Text className='details'>Category: <span style={{ fontWeight: 'normal' }}>{recipe.recipe_category}</span></Text>
                                <div className='stars'>
                                    <Rating name="read-only" value={recipe.recipe_rating} readOnly />
                                </div>
                                {recipe.image_url && recipe.image_url.trim() !== "" && (
                                    <img src={recipe.image_url} alt="Recipe" className="recipe-image card-image" />
                                )}



                                {parseIngredients(recipe)}
                                {parseIntructions(recipe)}
                                <table className="nutritionTable">
                                    <caption>Nutritional Information</caption>
                                    <tr>
                                        <td>Calories</td>
                                        <td>Protein Content</td>
                                        <td>Fiber Content</td>
                                        <td>Fat Content</td>
                                    </tr>
                                    <tr>
                                        <td>{recipe.calories}</td>
                                        <td>{recipe.protein_content}</td>
                                        <td>{recipe.fiber_content}</td>
                                        <td>{recipe.fat_content}</td>
                                    </tr>
                                </table>



                            </Box>

                        </Box>
                    </CardBody>
                </Card>
            </Box>

        </div>
    );
};

export default ResultRecipe;

