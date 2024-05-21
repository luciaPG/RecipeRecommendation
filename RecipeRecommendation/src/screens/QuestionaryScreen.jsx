/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './QuestionaryScreen.css';
import Video from '/src/assets/mainScreenVideo.mp4'
import { Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Radio,
    HStack,
    RadioGroup,
    FormErrorMessage,
    FormHelperText,
    Input
} from '@chakra-ui/react'
import { PiPlantFill } from "react-icons/pi";
const QuestionaryScreen = () => {
    return (
        <div className="Home">
            <div className='topBar'>
                <div className='barContent'>
                    <PiPlantFill className='icon' />
                    <div className='textDiv'>
                        <h1 className='brandName'>GREEN</h1>
                        <h1 className='brandName'>GOURMET</h1>
                    </div>
                </div>

            </div>
            <div className='form'>
                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md'>
                    <FormLabel as='legend' color='black'>Favorite Naruto Character</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <HStack spacing='24px'>
                            <Radio className='radio' value='Sasuke'>Sasuke</Radio>
                            <Radio className='radio' value='Nagato'>Nagato</Radio>
                            <Radio className='radio' value='Sasuke'>Sasuke</Radio>
                            <Radio className='radio' value='Nagato'>Nagato</Radio>
                        </HStack>
                    </RadioGroup>
                    <FormHelperText color='black'>Select only if youre a fan.</FormHelperText>
                </FormControl>
            </div>

        </div>
    );
};

export default QuestionaryScreen;
