/* eslint-disable react/prop-types */
/* eslint-disable max-len */
/* eslint-disable react/no-unknown-property */
/* eslint-disable linebreak-style */
import './QuestionaryScreen.css';
import { Button } from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,
    Radio,
    HStack,
    Stack,
    RadioGroup,
    FormHelperText
} from '@chakra-ui/react'
import { PiPlantFill } from "react-icons/pi";

const QuestionaryScreen = () => {
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
            <div className='form'>
                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md'>
                    <FormLabel as='legend' color='black'>1. How would you describe your body frame?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Thin and lanky</Radio>
                            <Radio className='radio' value='b'>b)Medium build</Radio>
                            <Radio className='radio' value='c'>c)Solid and sturdy</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>2. What is your typical appetite like?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                         <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Variable, sometimes strong, sometimes weak</Radio>
                            <Radio className='radio' value='b'>b)Strong and consistent</Radio>
                            <Radio className='radio' value='c'>c)Slow and steady</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>3. How is your digestion?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Irregular, prone to gas and bloating</Radio>
                            <Radio className='radio' value='b'>b)Strong, can eat almost anything</Radio>
                            <Radio className='radio' value='c'>c)Slow, tendency towards heaviness after meals</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>4. How do you generally handle stress?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Become anxious or worried easily</Radio>
                            <Radio className='radio' value='b'>b)Tend to get angry or irritable</Radio>
                            <Radio className='radio' value='c'>c)Prefer to avoid conflict, may become withdrawn</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>5. How do you sleep?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Light sleeper, prone to insomnia</Radio>
                            <Radio className='radio' value='b'>b)Deep sleeper, but may wake up easily</Radio>
                            <Radio className='radio' value='c'>c)Heavy sleeper, difficulty waking up in the morning</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>6. How is your skin?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>
                            <Radio className='radio' value='a'>a)Dry, prone to cracking</Radio>
                            <Radio className='radio' value='b'>b)Warm, sensitive, prone to rashes</Radio>
                            <Radio className='radio' value='c'>c)Oily, prone to acne or congestion</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>7. How is your hair?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Dry, thin, and prone to split ends</Radio>
                            <Radio className='radio' value='b'>b)ine, but prone to premature graying or balding</Radio>
                            <Radio className='radio' value='c'>c)Thick, oily, and lustrous</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>8. How do you handle changes in weather?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Tend to feel cold easily, especially in windy weather</Radio>
                            <Radio className='radio' value='b'>b)Tend to feel hot easily, especially in humid weather</Radio>
                            <Radio className='radio' value='c'>c)Tend to feel sluggish in damp or cold weather</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>9. What is your typical energy level throughout the day?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)High energy in short bursts, followed by fatigue</Radio>
                            <Radio className='radio' value='b'>b)Moderate and steady energy throughout the day</Radio>
                            <Radio className='radio' value='c'>c)Low energy, especially in the mornings</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>10. How do you prefer to spend your free time?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Engaging in stimulating activities or hobbies</Radio>
                            <Radio className='radio' value='b'>b)Exercising or being physically active</Radio>
                            <Radio className='radio' value='c'>c)Relaxing or practicing mindfulness</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>11. How is your memory?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Quick to learn, but also quick to forget</Radio>
                            <Radio className='radio' value='b'>b)Sharp and precise</Radio>
                            <Radio className='radio' value='c'>c)Slow to learn, but once learned, tends to retain information well</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>12. How do you respond to new experiences or changes?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Tend to feel anxious or overwhelmed</Radio>
                            <Radio className='radio' value='b'>b)Tend to feel competitive or ambitious</Radio>
                            <Radio className='radio' value='c'>c)Tend to feel cautious or resistant</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>13. What is your natural body temperature like?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Cold hands and feet, especially in cooler weather</Radio>
                            <Radio className='radio' value='b'>b)Warm hands and feet, especially in warmer weather</Radio>
                            <Radio className='radio' value='c'>c)Generally stable body temperature</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>14. How do you handle conflicts or confrontations?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Avoid them whenever possible</Radio>
                            <Radio className='radio' value='b'>b)Confront them directly and assertively</Radio>
                            <Radio className='radio' value='c'>c)Seek compromise and harmony</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>

                <FormControl as='fieldset' backgroundColor='white' borderColor='grey' borderWidth={1} padding={4} borderRadius='md' mt={4}>
                    <FormLabel as='legend' color='black'>15. How is your general mood?</FormLabel>
                    <RadioGroup colorScheme='blackAlpha'>
                        <Stack direction={'column'}>                            
                            <Radio className='radio' value='a'>a)Easily excited or enthusiastic, but also prone to anxiety</Radio>
                            <Radio className='radio' value='b'>b)Confident and assertive, but also prone to anger</Radio>
                            <Radio className='radio' value='c'>c)Calm and steady, but also prone to melancholy</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
                
                <Button colorScheme='teal' size='md' mt={4}>
                    Submit
                </Button>
            </div>
        </div>
    );
};

export default QuestionaryScreen;
